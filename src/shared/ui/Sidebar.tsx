"use client";

import React from "react";
import { Package, ViewType } from "@/types";

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  packages: Package[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Modern SVG Icons
const Icons = {
  grid: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  alert: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  calendar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  trending: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  checkCircle: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  star: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  fileCheck: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  ),
  activity: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  pause: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  ),
  timer: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  fileText: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  barChart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  target: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export function Sidebar({ currentView, setCurrentView, packages, isOpen, setIsOpen }: SidebarProps) {
  // Compute badges dynamically where needed
  const urgentCount = packages.filter((p) => p.urgent || p.priority === "Critical").length;
  const overdueCount = packages.filter((p) => p.overdue || new Date(p.dueDate) < new Date()).length;
  const readyAwardCount = packages.filter((p) => p.status === "Ready to Award").length;

  const NavItem = ({ 
    id, 
    label, 
    icon, 
    badge, 
    badgeColor = "red"
  }: { 
    id: ViewType; 
    label: string; 
    icon: React.ReactNode; 
    badge?: number; 
    badgeColor?: "red" | "amber" | "green" | "blue";
  }) => {
    const isActive = currentView === id;
    
    return (
      <button 
        className={`sb-nav-item ${isActive ? "sb-active" : ""}`}
        onClick={() => setCurrentView(id)}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="sb-nav-icon">{icon}</span>
        <span className="sb-nav-label">{label}</span>
        {badge ? (
          <span className={`sb-nav-badge sb-badge-${badgeColor}`}>{badge}</span>
        ) : null}
        {isActive && <span className="sb-active-indicator" />}
      </button>
    );
  };

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="sb-section-label">{children}</div>
  );

  const Divider = () => <div className="sb-divider" />;

  return (
    <>
      <aside className={`sb-sidebar ${isOpen ? "sb-open" : ""}`} id="sidebar">
        <div className="sb-content">
          {/* Dashboard Section */}
          <div className="sb-section">
            <SectionLabel>Dashboard</SectionLabel>
            <NavItem id="all" label="All Buyouts" icon={Icons.grid} />
            <NavItem 
              id="urgent" 
              label="Urgent / Focus" 
              icon={Icons.alert}
              badge={urgentCount}
              badgeColor="red"
            />
            <NavItem 
              id="overdue" 
              label="Overdue" 
              icon={Icons.clock}
              badge={overdueCount}
              badgeColor="red"
            />
            <NavItem id="this-week" label="Due This Week" icon={Icons.calendar} />
            <NavItem id="upcoming" label="Upcoming" icon={Icons.trending} />
          </div>
          
          <Divider />
          
          {/* By Status Section */}
          <div className="sb-section">
            <SectionLabel>By Status</SectionLabel>
            <NavItem 
              id="ready-award" 
              label="Ready to Award"
              icon={Icons.checkCircle}
              badge={readyAwardCount}
              badgeColor="amber"
            />
            <NavItem id="awarded" label="Awarded" icon={Icons.star} />
            <NavItem id="executed" label="Executed" icon={Icons.fileCheck} />
            <NavItem id="bidding" label="Bidding" icon={Icons.activity} />
            <NavItem id="on-hold" label="On Hold" icon={Icons.pause} />
          </div>

          <Divider />
          
          {/* Analysis Section */}
          <div className="sb-section">
            <SectionLabel>Analysis</SectionLabel>
            <NavItem id="long-lead" label="Long Lead" icon={Icons.timer} />
            <NavItem id="missing-coverage" label="Missing Coverage" icon={Icons.warning} />
            <NavItem id="high-risk" label="High Risk" icon={Icons.shield} />
            <NavItem id="contract-pending" label="Contract Pending" icon={Icons.fileText} />
          </div>

          <Divider />

          {/* Group By Section */}
          <div className="sb-section">
            <SectionLabel>Group By</SectionLabel>
            <NavItem id="by-project" label="By Project" icon={Icons.barChart} />
            <NavItem id="by-pm" label="By PM" icon={Icons.users} />
            <NavItem id="by-trade" label="By Trade" icon={Icons.target} />
          </div>

        </div>
        
        {/* Sidebar Footer */}
        <div className="sb-footer">
          <div className="sb-footer-text">
            <span className="sb-footer-version">v2.0</span>
            <span className="sb-footer-dot">·</span>
            <span className="sb-footer-status">Online</span>
          </div>
        </div>
      </aside>
      
      {/* Mobile Overlay */}
      <div 
        className={`sb-overlay ${isOpen ? "sb-overlay-visible" : ""}`} 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
