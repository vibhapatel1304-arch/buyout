"use client";

import React from "react";
import { Package } from "@/types";

interface Props {
  pkg: Package;
  onClose: () => void;
}

// Modern SVG Icons
const Icons = {
  close: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  edit: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
};

const STATUS_CONFIG: Record<string, { bg: string; color: string; label: string }> = {
  "Not Started": { bg: "#f1f5f9", color: "#64748b", label: "Not Started" },
  "Bidding": { bg: "#dbeafe", color: "#1d4ed8", label: "Bidding" },
  "Reviewing Bids": { bg: "#fef3c7", color: "#b45309", label: "Reviewing Bids" },
  "Scope Leveling": { bg: "#fce7f3", color: "#be185d", label: "Scope Leveling" },
  "Negotiating": { bg: "#e0e7ff", color: "#4338ca", label: "Negotiating" },
  "Pending Decision": { bg: "#ffedd5", color: "#9a3412", label: "Pending Decision" },
  "Ready to Award": { bg: "#d1fae5", color: "#047857", label: "Ready to Award" },
  "Awarded": { bg: "#10b981", color: "#ffffff", label: "Awarded" },
  "Contract Out": { bg: "#0ea5e9", color: "#ffffff", label: "Contract Out" },
  "Executed": { bg: "#1e293b", color: "#ffffff", label: "Executed" },
  "On Hold": { bg: "#f3f4f6", color: "#6b7280", label: "On Hold" },
  "Overdue": { bg: "#fee2e2", color: "#dc2626", label: "Overdue" },
};

const formatDate = (dateStr: string | null | undefined) => {
  if (!dateStr) return "—";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function PackageModal({ pkg, onClose }: Props) {
  const status = STATUS_CONFIG[pkg.status] || STATUS_CONFIG["Not Started"];

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="pm-backdrop"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="pm-container">
        <div className="pm-modal">
          {/* Header Section */}
          <div className="pm-header">
            <div className="pm-header-content">
              <div className="pm-header-icon">
                {Icons.building}
              </div>
              <div className="pm-header-info">
                <h2 className="pm-title">{pkg.name}</h2>
                <div className="pm-subtitle">
                  <span className="pm-csi">{pkg.csi}</span>
                  <span className="pm-separator">·</span>
                  <span className="pm-project">{pkg.project}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="pm-close-btn"
              aria-label="Close modal"
            >
              {Icons.close}
            </button>
          </div>

          {/* Status Badge */}
          <div className="pm-status-bar">
            <span
              className="pm-status-badge"
              style={{
                backgroundColor: status.bg,
                color: status.color,
              }}
            >
              {status.label}
            </span>
            <span className="pm-pm-badge">
              {Icons.user}
              <span>{pkg.pm}</span>
            </span>
          </div>

          {/* Details Grid */}
          <div className="pm-details">
            <div className="pm-detail-item">
              <div className="pm-detail-icon">{Icons.briefcase}</div>
              <div className="pm-detail-content">
                <div className="pm-detail-label">Trade</div>
                <div className="pm-detail-value">{pkg.trade || "—"}</div>
              </div>
            </div>

            <div className="pm-detail-item">
              <div className="pm-detail-icon">{Icons.calendar}</div>
              <div className="pm-detail-content">
                <div className="pm-detail-label">Due Date</div>
                <div className="pm-detail-value">{formatDate(pkg.dueDate)}</div>
              </div>
            </div>

            <div className="pm-detail-item">
              <div className="pm-detail-icon">{Icons.shield}</div>
              <div className="pm-detail-content">
                <div className="pm-detail-label">Warranties</div>
                <div className="pm-detail-value">{pkg.warranties || "—"}</div>
              </div>
            </div>

            <div className="pm-detail-item">
              <div className="pm-detail-icon">{Icons.user}</div>
              <div className="pm-detail-content">
                <div className="pm-detail-label">Priority</div>
                <div className="pm-detail-value">{pkg.priority || "—"}</div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          {(pkg.vendorData || pkg.notes) && (
            <div className="pm-additional">
              {pkg.vendorData && (
                <div className="pm-additional-item">
                  <div className="pm-additional-label">Vendor Information</div>
                  <div className="pm-additional-value">{pkg.vendorData}</div>
                </div>
              )}
              {pkg.notes && (
                <div className="pm-additional-item">
                  <div className="pm-additional-label">Notes</div>
                  <div className="pm-additional-value">{pkg.notes}</div>
                </div>
              )}
            </div>
          )}

          {/* Footer Actions */}
          <div className="pm-footer">
            <button
              onClick={onClose}
              className="pm-btn pm-btn-secondary"
            >
              Close
            </button>
            <button className="pm-btn pm-btn-primary">
              {Icons.edit}
              <span>Edit Package</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
