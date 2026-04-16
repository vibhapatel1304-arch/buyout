"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type PackageStatus =
  | "Draft"
  | "Invited"
  | "Bidding"
  | "Reviewing"
  | "Ready to Award"
  | "Awarded"
  | "Executed";

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md" | "lg";
  showDot?: boolean;
}

const statusConfig: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Draft: {
    color: "color: #64748B",
    bg: "background: rgba(100,116,139,0.08)",
    border: "border-color: rgba(100,116,139,0.15)",
    dot: "background: #64748B",
  },
  Invited: {
    color: "color: #2563EB",
    bg: "background: rgba(37,99,235,0.08)",
    border: "border-color: rgba(37,99,235,0.15)",
    dot: "background: #2563EB",
  },
  Bidding: {
    color: "color: #2563EB",
    bg: "background: rgba(37,99,235,0.08)",
    border: "border-color: rgba(37,99,235,0.15)",
    dot: "background: #2563EB",
  },
  "Reviewing Bids": {
    color: "color: #B45309",
    bg: "background: rgba(245,158,11,0.08)",
    border: "border-color: rgba(245,158,11,0.15)",
    dot: "background: #F59E0B",
  },
  Reviewing: {
    color: "color: #B45309",
    bg: "background: rgba(245,158,11,0.08)",
    border: "border-color: rgba(245,158,11,0.15)",
    dot: "background: #F59E0B",
  },
  "Scope Leveling": {
    color: "color: #1D4ED8",
    bg: "background: rgba(37,99,235,0.06)",
    border: "border-color: rgba(37,99,235,0.12)",
    dot: "background: #3B82F6",
  },
  Negotiating: {
    color: "color: #7C3AED",
    bg: "background: rgba(124,58,237,0.06)",
    border: "border-color: rgba(124,58,237,0.12)",
    dot: "background: #7C3AED",
  },
  "Pending Decision": {
    color: "color: #C2410C",
    bg: "background: rgba(249,115,22,0.06)",
    border: "border-color: rgba(249,115,22,0.12)",
    dot: "background: #F97316",
  },
  "Ready to Award": {
    color: "color: #15803D",
    bg: "background: rgba(22,163,74,0.08)",
    border: "border-color: rgba(22,163,74,0.15)",
    dot: "background: #16A34A",
  },
  Awarded: {
    color: "color: #FFFFFF",
    bg: "background: #16A34A",
    border: "border-color: #16A34A",
    dot: "background: #FFFFFF",
  },
  "Contract Out": {
    color: "color: #1D4ED8",
    bg: "background: rgba(37,99,235,0.08)",
    border: "border-color: rgba(37,99,235,0.15)",
    dot: "background: #2563EB",
  },
  Executed: {
    color: "color: #FFFFFF",
    bg: "background: #059669",
    border: "border-color: #059669",
    dot: "background: #FFFFFF",
  },
  "Not Started": {
    color: "color: #64748B",
    bg: "background: rgba(100,116,139,0.06)",
    border: "border-color: rgba(100,116,139,0.12)",
    dot: "background: #94A3B8",
  },
  "On Hold": {
    color: "color: #64748B",
    bg: "background: rgba(100,116,139,0.06)",
    border: "border-color: rgba(100,116,139,0.12)",
    dot: "background: #94A3B8",
  },
  Overdue: {
    color: "color: #DC2626",
    bg: "background: rgba(220,38,38,0.08)",
    border: "border-color: rgba(220,38,38,0.15)",
    dot: "background: #DC2626",
  },
};

const fallbackConfig = {
  color: "color: #64748B",
  bg: "background: rgba(100,116,139,0.06)",
  border: "border-color: rgba(100,116,139,0.12)",
  dot: "background: #94A3B8",
};

const sizeStyles = {
  sm: { padding: "3px 10px", fontSize: "11px" },
  md: { padding: "4px 12px", fontSize: "12px" },
  lg: { padding: "6px 14px", fontSize: "13px" },
};

export function StatusBadge({
  status,
  size = "md",
  showDot = true,
}: StatusBadgeProps) {
  const config = statusConfig[status] || fallbackConfig;
  const sizeStyle = sizeStyles[size];

  // Parse inline style strings to objects
  const parseStyle = (styleStr: string) => {
    const [prop, val] = styleStr.split(": ");
    const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return { [camelProp]: val };
  };

  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontWeight: 700,
    borderRadius: "5px",
    border: "1px solid",
    whiteSpace: "nowrap" as const,
    letterSpacing: "0.02em",
    ...sizeStyle,
    ...parseStyle(config.color),
    ...parseStyle(config.bg),
    ...parseStyle(config.border),
  };

  const dotStyle = {
    width: size === "sm" ? "5px" : "6px",
    height: size === "sm" ? "5px" : "6px",
    borderRadius: "50%",
    flexShrink: 0,
    ...parseStyle(config.dot),
  };

  return (
    <span style={style}>
      {showDot && <span style={dotStyle} aria-hidden="true" />}
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
