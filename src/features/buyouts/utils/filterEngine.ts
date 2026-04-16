import { Bid, Package, ViewType } from "@/types";
import { daysFromToday } from "@/data/db";

export interface BuyoutFilterOptions {
  packages: Package[];
  bidsByPackageId: Record<number, Bid[]>;
  currentView: ViewType;
  searchQuery: string;
  filterStatus: string;
  filterPriority: string;
  filterPM: string;
  filterRisk: string;
  projectFilter: string;
  activeKPI: string | null;
}

export function filterPackages({
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
}: BuyoutFilterOptions) {
  let result = [...packages];

  if (projectFilter && projectFilter !== "all") {
    result = result.filter(
      (pkg) => pkg.project === projectFilter || pkg.project.includes(projectFilter)
    );
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    result = result.filter((pkg) => {
      const bids = bidsByPackageId[pkg.id] || [];
      return (
        pkg.name.toLowerCase().includes(query) ||
        pkg.trade.toLowerCase().includes(query) ||
        pkg.project.toLowerCase().includes(query) ||
        pkg.pm.toLowerCase().includes(query) ||
        (pkg.selectedVendor || "").toLowerCase().includes(query) ||
        (pkg.dropboxFolder || "").toLowerCase().includes(query) ||
        (pkg.vendorData || "").toLowerCase().includes(query) ||
        (pkg.warranties || "").toLowerCase().includes(query) ||
        bids.some((bid) => bid.vendor.toLowerCase().includes(query))
      );
    });
  }

  if (filterStatus) result = result.filter((pkg) => pkg.status === filterStatus);
  if (filterPriority) result = result.filter((pkg) => pkg.priority === filterPriority);
  if (filterPM) result = result.filter((pkg) => pkg.pm === filterPM);
  if (filterRisk) result = result.filter((pkg) => pkg.risk === filterRisk);

  switch (currentView) {
    case "urgent":
      result = result.filter((pkg) => pkg.urgent || pkg.priority === "Critical");
      break;
    case "overdue":
      result = result.filter((pkg) => pkg.overdue || daysFromToday(pkg.dueDate) < 0);
      break;
    case "this-week":
      result = result.filter((pkg) => {
        const days = daysFromToday(pkg.dueDate);
        return days >= 0 && days <= 7;
      });
      break;
    case "upcoming":
      result = result.filter((pkg) => {
        const days = daysFromToday(pkg.dueDate);
        return days > 0 && days <= 21;
      });
      break;
    case "ready-award":
      result = result.filter((pkg) => pkg.status === "Ready to Award");
      break;
    case "awarded":
      result = result.filter((pkg) => ["Awarded", "Contract Out"].includes(pkg.status));
      break;
    case "executed":
      result = result.filter((pkg) => pkg.status === "Executed");
      break;
    case "bidding":
      result = result.filter((pkg) => ["Bidding", "Reviewing Bids"].includes(pkg.status));
      break;
    case "on-hold":
      result = result.filter((pkg) => pkg.status === "On Hold");
      break;
    case "long-lead":
      result = result.filter((pkg) => pkg.longLead);
      break;
    case "missing-coverage":
      result = result.filter((pkg) => pkg.coverageCount < 2);
      break;
    case "high-risk":
      result = result.filter((pkg) => pkg.risk === "High");
      break;
    case "contract-pending":
      result = result.filter((pkg) =>
        ["Draft", "Verbal Award"].includes(pkg.contractStatus)
      );
      break;
    case "by-project":
      result.sort((a, b) => a.project.localeCompare(b.project));
      break;
    case "by-pm":
      result.sort((a, b) => a.pm.localeCompare(b.pm));
      break;
    case "by-trade":
      result.sort((a, b) => a.trade.localeCompare(b.trade));
      break;
  }

  if (activeKPI) {
    switch (activeKPI) {
      case "overdue":
        result = result.filter((pkg) => pkg.overdue || daysFromToday(pkg.dueDate) < 0);
        break;
      case "ready":
        result = result.filter((pkg) => pkg.status === "Ready to Award");
        break;
      case "bidding":
        result = result.filter((pkg) => ["Invited", "Bidding", "Reviewing Bids"].includes(pkg.status));
        break;
      case "awarded":
        result = result.filter((pkg) => ["Awarded", "Contract Out", "Executed"].includes(pkg.status));
        break;
      case "savings":
        result = result.filter((pkg) => pkg.lowBid !== null && pkg.lowBid < pkg.budget);
        break;
    }
  }

  return result;
}
