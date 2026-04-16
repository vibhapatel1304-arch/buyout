"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Strict status workflow for construction bidding
export type PackageStatus =
  | "Draft"
  | "Invited"
  | "Bidding"
  | "Reviewing"
  | "Ready to Award"
  | "Awarded"
  | "Executed";

// Legacy status values from existing data
export type LegacyStatus =
  | "Not Started"
  | "Reviewing Bids"
  | "Scope Leveling"
  | "Negotiating"
  | "Pending Decision"
  | "Contract Out"
  | "On Hold"
  | "Overdue";

export type AnyStatus = PackageStatus | LegacyStatus | string;

interface StatusBadgeProps {
  status: AnyStatus;
  size?: "sm" | "md" | "lg";
  showDot?: boolean;
}

// Map legacy statuses to canonical ones
const statusMapping: Record<string, PackageStatus> = {
  "Not Started": "Draft",
  "Reviewing Bids": "Reviewing",
  "Scope Leveling": "Reviewing",
  "Negotiating": "Reviewing",
  "Pending Decision": "Ready to Award",
  "Contract Out": "Awarded",
  "On Hold": "Draft",
  "Overdue": "Bidding",
};

const statusConfig: Record<
  PackageStatus,
  { color: string; bg: string; border: string; dot: string }
> = {
  Draft: {
    color: "text-gray-700",
    bg: "bg-gray-100",
    border: "border-gray-200",
    dot: "bg-gray-400",
  },
  Invited: {
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
  },
  Bidding: {
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
  },
  Reviewing: {
    color: "text-yellow-700",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    dot: "bg-yellow-500",
  },
  "Ready to Award": {
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
  Awarded: {
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    dot: "bg-green-500",
  },
  Executed: {
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
    dot: "bg-green-600",
  },
};

// Fallback config for unknown statuses
const fallbackConfig = {
  color: "text-gray-700",
  bg: "bg-gray-100",
  border: "border-gray-200",
  dot: "bg-gray-400",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm",
};

export function StatusBadge({
  status,
  size = "md",
  showDot = true,
}: StatusBadgeProps) {
  // Map legacy status to canonical status
  const canonicalStatus = statusMapping[status] || (status as PackageStatus);
  
  // Get config, fallback to gray if unknown
  const config = statusConfig[canonicalStatus] || fallbackConfig;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full border",
        sizeClasses[size],
        config.color,
        config.bg,
        config.border
      )}
    >
      {showDot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full", config.dot)}
          aria-hidden="true"
        />
      )}
      {status}
    </span>
  );
}

// Status workflow progression
export const statusWorkflow: PackageStatus[] = [
  "Draft",
  "Invited",
  "Bidding",
  "Reviewing",
  "Ready to Award",
  "Awarded",
  "Executed",
];

// Get next status in workflow
export function getNextStatus(current: PackageStatus): PackageStatus | null {
  const idx = statusWorkflow.indexOf(current);
  if (idx < statusWorkflow.length - 1) {
    return statusWorkflow[idx + 1];
  }
  return null;
}

// Check if status can move backward
export function canRevertStatus(current: PackageStatus): boolean {
  return ["Reviewing", "Ready to Award"].includes(current);
}
