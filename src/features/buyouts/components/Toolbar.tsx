"use client";

import React from "react";
import { ViewType } from "@/types";

interface ToolbarProps {
  currentView: ViewType;
  filteredCount: number;
  totalCount: number;
  filterStatus: string;
  setFilterStatus: (v: string) => void;
  filterPriority: string;
  setFilterPriority: (v: string) => void;
  filterPM: string;
  setFilterPM: (v: string) => void;
  pmOptions: string[];
  filterRisk: string;
  setFilterRisk: (v: string) => void;
  onResetFilters: () => void;
}

const viewTitles: Record<ViewType, string> = {
  all: "All Buyouts",
  urgent: "Urgent / Focus",
  overdue: "Overdue",
  "this-week": "Due This Week",
  upcoming: "Upcoming",
  "ready-award": "Ready to Award",
  awarded: "Awarded",
  executed: "Executed",
  bidding: "Bidding",
  "on-hold": "On Hold",
  "long-lead": "Long Lead",
  "missing-coverage": "Missing Bid Coverage",
  "high-risk": "High Risk",
  "contract-pending": "Contract Pending",
  "by-project": "By Project",
  "by-pm": "By PM",
  "by-trade": "By Trade",
};

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  dotColor?: string;
  count?: number;
}

function FilterChip({ label, active, onClick, dotColor, count }: FilterChipProps) {
  return (
    <button
      className={`filter-chip ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {dotColor && (
        <span
          className="chip-dot"
          style={{ backgroundColor: active ? "white" : dotColor }}
        />
      )}
      {label}
      {count !== undefined && count > 0 && (
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          fontFamily: 'var(--mono)',
          marginLeft: '2px',
          opacity: 0.8,
        }}>
          {count}
        </span>
      )}
    </button>
  );
}

export function Toolbar({
  currentView,
  filteredCount,
  totalCount,
  filterStatus,
  setFilterStatus,
  filterPriority,
  setFilterPriority,
  filterPM,
  setFilterPM,
  pmOptions,
  filterRisk,
  setFilterRisk,
  onResetFilters,
}: ToolbarProps) {
  const hasActiveFilters = !!filterStatus || !!filterPriority || !!filterPM || !!filterRisk;

  const statusChips = [
    { label: "All", value: "", dotColor: undefined },
    { label: "Bidding", value: "Bidding", dotColor: "#2563EB" },
    { label: "Reviewing", value: "Reviewing Bids", dotColor: "#F59E0B" },
    { label: "Ready to Award", value: "Ready to Award", dotColor: "#16A34A" },
    { label: "Awarded", value: "Awarded", dotColor: "#059669" },
    { label: "Not Started", value: "Not Started", dotColor: "#64748B" },
  ];

  const priorityChips = [
    { label: "Critical", value: "Critical" },
    { label: "High", value: "High" },
  ];

  const riskChips = [
    { label: "High Risk", value: "High" },
    { label: "Medium Risk", value: "Medium" },
  ];

  return (
    <div className="toolbar">
      <span className="toolbar-title" id="viewTitle">
        {viewTitles[currentView]}
      </span>
      <span className="toolbar-count" id="rowCount">
        {filteredCount} / {totalCount}
      </span>
      <div className="toolbar-spacer" />
      <div className="filter-bar">
        {/* Status chips */}
        {statusChips.map((chip) => (
          <FilterChip
            key={chip.value}
            label={chip.label}
            active={filterStatus === chip.value}
            onClick={() => setFilterStatus(filterStatus === chip.value ? "" : chip.value)}
            dotColor={chip.dotColor}
          />
        ))}

        {/* Priority chips */}
        {priorityChips.map((chip) => (
          <FilterChip
            key={chip.value}
            label={chip.label}
            active={filterPriority === chip.value}
            onClick={() => setFilterPriority(filterPriority === chip.value ? "" : chip.value)}
          />
        ))}

        {riskChips.map((chip) => (
          <FilterChip
            key={chip.value}
            label={chip.label}
            active={filterRisk === chip.value}
            onClick={() => setFilterRisk(filterRisk === chip.value ? "" : chip.value)}
          />
        ))}

        {pmOptions.slice(0, 3).map((pm) => (
          <FilterChip
            key={pm}
            label={pm}
            active={filterPM === pm}
            onClick={() => setFilterPM(filterPM === pm ? "" : pm)}
          />
        ))}

        {/* Reset */}
        {hasActiveFilters && (
          <button
            className="filter-chip"
            onClick={onResetFilters}
            style={{ color: 'var(--status-overdue)', borderColor: 'rgba(220,38,38,0.2)' }}
          >
            ✕ Clear
          </button>
        )}
      </div>
    </div>
  );
}
