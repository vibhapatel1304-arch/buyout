"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Package, User, ViewType } from "@/types";
import { Header } from "@/shared/ui/Header";
import { Sidebar } from "@/shared/ui/Sidebar";
import { KPICards } from "@/features/buyouts/components/KPICards";
import { Toolbar } from "@/features/buyouts/components/Toolbar";
import { PackageTable } from "@/features/buyouts/components/PackageTable";
import { DetailPanel } from "@/features/buyouts/components/DetailPanel";
import { NewPackageModal } from "@/shared/ui/modals/NewPackageModal";
import { ExportModal } from "@/shared/ui/modals/ExportModal";
import { AuthModal } from "@/shared/ui/modals/AuthModal";
import { useBuyouts } from "@/features/buyouts/hooks/useBuyouts";
import { filterPackages } from "@/features/buyouts/utils/filterEngine";

function LoadingSkeleton() {
  return (
    <div className="main-area fade-in">
      {/* KPI Skeletons */}
      <div className="kpi-section">
        <div className="kpi-grid">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton skeleton-card" />
          ))}
        </div>
      </div>
      {/* Toolbar Skeleton */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
        <div className="skeleton skeleton-text" style={{ width: '120px', marginBottom: '8px' }} />
        <div style={{ display: 'flex', gap: '8px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="skeleton" style={{ width: '80px', height: '30px', borderRadius: '20px' }} />
          ))}
        </div>
      </div>
      {/* Table Skeletons */}
      <div style={{ padding: '0', flex: 1 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="skeleton skeleton-row" />
        ))}
      </div>
    </div>
  );
}

export default function BuyoutDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const {
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
  } = useBuyouts();
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterPM, setFilterPM] = useState("");
  const [filterRisk, setFilterRisk] = useState("");
  const [projectFilter, setProjectFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [newPackageModalOpen, setNewPackageModalOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [activeKPI, setActiveKPI] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem("bc_user");
    if (stored) {
      setCurrentUser(JSON.parse(stored));
    } else {
      setAuthModalOpen(true);
    }
  }, []);

  const filteredPackages = useMemo(
    () =>
      filterPackages({
        packages,
        bidsByPackageId,
        currentView,
        searchQuery,
        filterStatus,
        filterPriority,
        filterPM,
        filterRisk,
        projectFilter,
        activeKPI,
      }),
    [
      packages,
      bidsByPackageId,
      currentView,
      searchQuery,
      filterStatus,
      filterPriority,
      filterPM,
      filterRisk,
      projectFilter,
      activeKPI,
    ]
  );

  useEffect(() => {
    if (!selectedPackage) return;
    const nextSelected = packages.find((pkg) => pkg.id === selectedPackage.id) || null;
    setSelectedPackage(nextSelected);
  }, [packages, selectedPackage]);

  const resetFilters = () => {
    setFilterStatus("");
    setFilterPriority("");
    setFilterPM("");
    setFilterRisk("");
    setProjectFilter("all");
    setSearchQuery("");
    setActiveKPI(null);
  };

  // Handlers
  const handleStatusChange = (pkgId: number, newStatus: string) => {
    changeStatus(pkgId, newStatus);
  };

  const handleCreatePackage = (newPkg: Omit<Package, "id" | "order">) => {
    createPackage(newPkg);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    sessionStorage.setItem("bc_user", JSON.stringify(user));
    setAuthModalOpen(false);
  };

  const handleSignup = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("bc_user");
    setAuthModalOpen(true);
  };

  return (
    <div className="app">
      {/* Header */}
      <Header
        currentUser={currentUser}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
        projectOptions={projectOptions}
        onNewPackage={() => setNewPackageModalOpen(true)}
        onExport={() => setExportModalOpen(true)}
        onSignOut={handleSignOut}
        onPasswordChange={(currentPassword, nextPassword) => {
          if (!currentUser) return "No active user.";
          if (currentUser.password !== currentPassword) return "Current password is incorrect.";
          updateUserPassword(currentUser.email, nextPassword);
          const updatedUser = { ...currentUser, password: nextPassword };
          setCurrentUser(updatedUser);
          sessionStorage.setItem("bc_user", JSON.stringify(updatedUser));
          return null;
        }}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="app-body">
        <Sidebar
          currentView={currentView}
          setCurrentView={setCurrentView}
          packages={packages}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="main-area fade-in">
            <KPICards
              packages={packages}
              activeKPI={activeKPI}
              setActiveKPI={setActiveKPI}
            />

            <Toolbar
              currentView={currentView}
              filteredCount={filteredPackages.length}
              totalCount={packages.length}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filterPriority={filterPriority}
              setFilterPriority={setFilterPriority}
              filterPM={filterPM}
              setFilterPM={setFilterPM}
              pmOptions={pmOptions}
              filterRisk={filterRisk}
              setFilterRisk={setFilterRisk}
              onResetFilters={resetFilters}
            />

            <div className="content-area">
              <PackageTable
                packages={filteredPackages}
                selectedPackage={selectedPackage}
                onSelectPackage={setSelectedPackage}
              />

              {selectedPackage && (
                <DetailPanel
                  pkg={selectedPackage}
                  bids={bidsByPackageId[selectedPackage.id] || []}
                  notes={notesByPackageId[selectedPackage.id] || []}
                  currentUser={currentUser}
                  onClose={() => setSelectedPackage(null)}
                  onStatusChange={handleStatusChange}
                  onMarkUrgent={markUrgent}
                  onRecommendBid={recommendBid}
                  onExcludeBid={excludeBid}
                  onAddNote={addNote}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {}}
        onLogin={handleLogin}
        onSignup={handleSignup}
        existingUsers={users}
      />

      <NewPackageModal
        isOpen={newPackageModalOpen}
        onClose={() => setNewPackageModalOpen(false)}
        onCreate={handleCreatePackage}
        nextId={Math.max(...packages.map((p) => p.id), 0) + 1}
      />

      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        packages={packages}
        filteredPackages={filteredPackages}
      />
    </div>
  );
}
