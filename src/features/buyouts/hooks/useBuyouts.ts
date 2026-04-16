"use client";

import { useEffect, useMemo, useState } from "react";
import { BIDS_DB, PACKAGES, SAMPLE_USERS } from "@/data/db";
import { Bid, Note, Package, User } from "@/types";
import { calculateFinancials } from "@/features/buyouts/utils/financials";

const PACKAGES_KEY = "bc_app_v1_packages";
const BIDS_KEY = "bc_app_v1_bids";
const NOTES_KEY = "bc_app_v1_notes";
const USERS_KEY = "bc_users";

function clonePackages() {
  return PACKAGES.map((pkg) => ({ ...pkg, risks: pkg.risks.map((risk) => ({ ...risk })) }));
}

function cloneBids() {
  return Object.fromEntries(
    Object.entries(BIDS_DB).map(([pkgId, bids]) => [
      Number(pkgId),
      bids.map((bid) => ({
        ...bid,
        vendorDetails: bid.vendorDetails ? { ...bid.vendorDetails } : undefined,
      })),
    ])
  ) as Record<number, Bid[]>;
}

function seedNotes(packages: Package[]) {
  return Object.fromEntries(
    packages.map((pkg) => [
      pkg.id,
      pkg.notes
        ? [
            {
              id: `${pkg.id}-seed-note`,
              author: pkg.pm,
              text: pkg.notes,
              createdAt: "2025-04-15T09:00:00.000Z",
            },
          ]
        : [],
    ])
  ) as Record<number, Note[]>;
}

function syncPackageWithBids(pkg: Package, bids: Bid[]) {
  const financials = calculateFinancials(pkg, bids);
  const selectedBid = bids.find((bid) => bid.status === "recommended");

  return {
    ...pkg,
    lowBid: financials.lowBid,
    selectedVendor: selectedBid?.vendor ?? pkg.selectedVendor ?? null,
    awardAmount:
      pkg.status === "Awarded" || pkg.status === "Contract Out" || pkg.status === "Executed"
        ? selectedBid?.amount ?? pkg.awardAmount
        : pkg.awardAmount,
    bidsReceived: bids.length,
    coverageCount: bids.length,
  };
}

export function useBuyouts() {
  const [packages, setPackages] = useState<Package[]>(() => clonePackages());
  const [bidsByPackageId, setBidsByPackageId] = useState<Record<number, Bid[]>>(() => cloneBids());
  const [notesByPackageId, setNotesByPackageId] = useState<Record<number, Note[]>>(() =>
    seedNotes(clonePackages())
  );
  const [users, setUsers] = useState<User[]>(SAMPLE_USERS);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedPackages = localStorage.getItem(PACKAGES_KEY);
    const storedBids = localStorage.getItem(BIDS_KEY);
    const storedNotes = localStorage.getItem(NOTES_KEY);
    const storedUsers = localStorage.getItem(USERS_KEY);

    const basePackages = storedPackages ? (JSON.parse(storedPackages) as Package[]) : clonePackages();
    const baseBids = storedBids ? (JSON.parse(storedBids) as Record<number, Bid[]>) : cloneBids();
    const baseNotes = storedNotes ? (JSON.parse(storedNotes) as Record<number, Note[]>) : seedNotes(basePackages);

    setPackages(basePackages.map((pkg) => syncPackageWithBids(pkg, baseBids[pkg.id] || [])));
    setBidsByPackageId(baseBids);
    setNotesByPackageId(baseNotes);
    setUsers(storedUsers ? (JSON.parse(storedUsers) as User[]) : SAMPLE_USERS);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(PACKAGES_KEY, JSON.stringify(packages));
    localStorage.setItem(BIDS_KEY, JSON.stringify(bidsByPackageId));
    localStorage.setItem(NOTES_KEY, JSON.stringify(notesByPackageId));
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [isHydrated, packages, bidsByPackageId, notesByPackageId, users]);

  const projectOptions = useMemo(
    () => Array.from(new Set(packages.map((pkg) => pkg.project))).sort(),
    [packages]
  );

  const pmOptions = useMemo(
    () => Array.from(new Set(packages.map((pkg) => pkg.pm))).sort(),
    [packages]
  );

  const createPackage = (newPkg: Omit<Package, "id" | "order">) => {
    const id = Math.max(...packages.map((pkg) => pkg.id), 0) + 1;
    const pkg: Package = {
      ...newPkg,
      id,
      order: id,
      notes: newPkg.notes || "No notes added yet.",
    };

    setPackages((prev) => [...prev, pkg]);
    setBidsByPackageId((prev) => ({ ...prev, [id]: [] }));
    setNotesByPackageId((prev) => ({
      ...prev,
      [id]: pkg.notes
        ? [
            {
              id: `${id}-seed-note`,
              author: pkg.pm,
              text: pkg.notes,
              createdAt: new Date().toISOString(),
            },
          ]
        : [],
    }));

    return id;
  };

  const mutatePackage = (packageId: number, updater: (pkg: Package) => Package) => {
    setPackages((prev) => prev.map((pkg) => (pkg.id === packageId ? updater(pkg) : pkg)));
  };

  const changeStatus = (packageId: number, newStatus: string) => {
    mutatePackage(packageId, (pkg) => {
      let contractStatus = pkg.contractStatus;
      if (newStatus === "Awarded") contractStatus = "Verbal Award";
      if (newStatus === "Contract Out") contractStatus = "Draft";
      if (newStatus === "Executed") contractStatus = "Executed";

      return {
        ...pkg,
        status: newStatus,
        contractStatus,
        awardAmount:
          newStatus === "Awarded" || newStatus === "Contract Out" || newStatus === "Executed"
            ? pkg.awardAmount ?? pkg.lowBid
            : pkg.awardAmount,
      };
    });
  };

  const markUrgent = (packageId: number) => {
    mutatePackage(packageId, (pkg) => ({ ...pkg, urgent: true }));
  };

  const updatePackageWithBids = (packageId: number, bids: Bid[]) => {
    mutatePackage(packageId, (pkg) => syncPackageWithBids(pkg, bids));
  };

  const recommendBid = (packageId: number, bidIndex: number) => {
    setBidsByPackageId((prev) => {
      const nextBids: Bid[] = (prev[packageId] || []).map((bid, idx) => ({
        ...bid,
        status: (idx === bidIndex ? "recommended" : bid.status === "excluded" ? "excluded" : "backup") as Bid['status'],
      }));
      updatePackageWithBids(packageId, nextBids);
      return { ...prev, [packageId]: nextBids };
    });
  };

  const excludeBid = (packageId: number, bidIndex: number) => {
    setBidsByPackageId((prev) => {
      const nextBids: Bid[] = (prev[packageId] || []).map((bid, idx) =>
        idx === bidIndex ? { ...bid, status: "excluded" as Bid['status'] } : bid
      );
      updatePackageWithBids(packageId, nextBids);
      return { ...prev, [packageId]: nextBids };
    });
  };

  const addNote = (packageId: number, text: string, author: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newNote: Note = {
      id: `${packageId}-${Date.now()}`,
      author,
      text: trimmed,
      createdAt: new Date().toISOString(),
    };

    setNotesByPackageId((prev) => ({
      ...prev,
      [packageId]: [...(prev[packageId] || []), newNote],
    }));
  };

  const updateUserPassword = (email: string, newPassword: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.email === email ? { ...user, password: newPassword } : user))
    );
  };

  return {
    packages,
    bidsByPackageId,
    notesByPackageId,
    users,
    setUsers,
    projectOptions,
    pmOptions,
    createPackage,
    changeStatus,
    markUrgent,
    recommendBid,
    excludeBid,
    addNote,
    updateUserPassword,
  };
}
