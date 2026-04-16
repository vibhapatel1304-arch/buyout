"use client";

import React from "react";
import { Package } from "@/types";
import { cn } from "@/lib/utils";
import { daysFromToday } from "@/data/db";

interface KPICardsProps {
  packages: Package[];
  activeKPI: string | null;
  setActiveKPI: (kpi: string | null) => void;
}

// Decision-focused Icons
const Icons = {
  overdue: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  ready: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  activeBidding: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  awarded: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  savings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

export function KPICards({ packages, activeKPI, setActiveKPI }: KPICardsProps) {
  const all = packages;
  const totalPackages = all.length;

  // Decision-focused metrics
  const overdue = all.filter((p) => p.overdue || daysFromToday(p.dueDate) < 0).length;
  const readyToAward = all.filter((p) => p.status === "Ready to Award").length;
  const activeBidding = all.filter((p) => ["Invited", "Bidding", "Reviewing Bids"].includes(p.status)).length;
  const awarded = all.filter((p) => ["Awarded", "Executed"].includes(p.status)).length;

  // Financial metrics
  const packagesWithBids = all.filter((p) => p.lowBid !== null && p.lowBid !== undefined && p.budget > 0);
  let totalSavings = 0;
  let avgVariance = 0;

  packagesWithBids.forEach((pkg) => {
    if (pkg.budget && pkg.lowBid) {
      const variance = ((pkg.lowBid - pkg.budget) / pkg.budget) * 100;
      avgVariance += variance;
      if (pkg.lowBid < pkg.budget) {
        totalSavings += (pkg.budget - pkg.lowBid);
      }
    }
  });

  avgVariance = packagesWithBids.length > 0 ? Math.round(avgVariance / packagesWithBids.length) : 0;

  // Decision-focused order: What needs action? → What needs decision? → What's in progress? → What's done? → Impact
  const kpis = [
    {
      id: "overdue",
      label: "Overdue",
      question: "needs action now",
      val: overdue,
      color: "red",
      icon: Icons.overdue,
      trend: overdue > 0 ? "↑" : "→",
    },
    {
      id: "ready",
      label: "Ready to Award",
      question: "pending decision",
      val: readyToAward,
      color: "yellow",
      icon: Icons.ready,
      trend: readyToAward > 0 ? "!" : "→",
    },
    {
      id: "bidding",
      label: "Active Bidding",
      question: "in progress",
      val: activeBidding,
      color: "blue",
      icon: Icons.activeBidding,
      trend: "→",
    },
    {
      id: "awarded",
      label: "Awarded",
      question: `${totalPackages > 0 ? Math.round((awarded / totalPackages) * 100) : 0}% complete`,
      val: awarded,
      color: "green",
      icon: Icons.awarded,
      trend: "↑",
    },
    {
      id: "savings",
      label: "Savings",
      question: avgVariance < 0 ? `${avgVariance}% avg variance` : "tracking budget",
      val: `$${(totalSavings / 1000).toFixed(0)}K`,
      color: avgVariance <= 0 ? "green" : "red",
      icon: Icons.savings,
      trend: avgVariance <= 0 ? "↓" : "↑",
      isCurrency: true,
    },
  ];

  return (
    <div className="kpi-section" id="kpiSection">
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div
            key={k.id}
            className={cn(
              "kpi-card-modern",
              `kpi-${k.color}`,
              activeKPI === k.id && "kpi-active"
            )}
            onClick={() => setActiveKPI(activeKPI === k.id ? null : k.id)}
          >
            <div className="kpi-card-header">
              <div className={`kpi-icon kpi-icon-${k.color}`}>
                {k.icon}
              </div>
              <span style={{
                fontSize: '14px',
                fontWeight: 700,
                color: k.trend === '↑' && k.color === 'red' ? 'var(--status-overdue)' :
                       k.trend === '↓' ? 'var(--savings)' :
                       k.trend === '!' ? 'var(--status-reviewing)' : 'var(--text-light)',
                fontFamily: 'var(--mono)',
              }}>
                {k.trend}
              </span>
            </div>
            <div className="kpi-card-body">
              <div className="kpi-value-large">{k.val}</div>
              <div className="kpi-label-text">{k.label}</div>
            </div>
            <div className="kpi-card-footer">
              <span className="kpi-subtext">{k.question}</span>
              {activeKPI === k.id && (
                <span className="kpi-active-indicator">●</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
