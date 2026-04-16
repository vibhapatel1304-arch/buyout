"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types";
import { NotificationBell, useNotifications, Notification } from "@/shared/ui/NotificationBell";
import ProfileModal from "./ProfileModal";

interface HeaderProps {
  currentUser: User | null;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  projectFilter: string;
  setProjectFilter: (project: string) => void;
  projectOptions: string[];
  onNewPackage: () => void;
  onExport: () => void;
  onSignOut: () => void;
  onPasswordChange: (currentPassword: string, nextPassword: string) => string | null;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

// Modern SVG Icons
const Icons = {
  menu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  plus: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  download: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  logout: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  close: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  chevronDown: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

const getInitials = (name: string) => {
  if (!name) return "??";
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export function Header({
  currentUser,
  searchQuery,
  setSearchQuery,
  projectFilter,
  setProjectFilter,
  projectOptions,
  onNewPackage,
  onExport,
  onSignOut,
  onPasswordChange,
  sidebarOpen,
  setSidebarOpen,
}: HeaderProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { notifications, markAllRead } = useNotifications();

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) {
      window.addEventListener("click", closeMenu);
    }
    return () => window.removeEventListener("click", closeMenu);
  }, [menuOpen]);

  const [passwordOpen, setPasswordOpen] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [nextPassword, setNextPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <>
      <header className="header-modern">
        <div className="header-left">
          <div className="header-brand-vertical">
            <div className="header-logo-icon-large">
              <img 
                src="/boulder%20logo.png" 
                alt="Boulder Construction" 
                className="header-logo-img"
              />
            </div>
            <span className="logo-tagline">Buyout Command Center</span>
          </div>
        </div>

        <div className="header-center">
          <div className="header-project-selector">
            <select className="header-select" value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)}>
              <option value="all">All Projects</option>
              {projectOptions.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
            <span className="header-select-icon">{Icons.chevronDown}</span>
          </div>

          <div className="header-search-box">
            <span className="header-search-icon">{Icons.search}</span>
            <input
              type="text"
              className="header-search-input"
              placeholder="Search packages, vendors, trades…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="header-search-clear"
                onClick={() => setSearchQuery('')}
              >
                {Icons.close}
              </button>
            )}
          </div>
        </div>

        <div className="header-right">
          <button className="header-action-btn header-btn-new" onClick={onNewPackage}>
            {Icons.plus}
            <span>New Package</span>
          </button>

          <button className="header-action-btn header-btn-export" onClick={onExport}>
            {Icons.download}
            <span>Export</span>
          </button>

          <NotificationBell
            notifications={notifications}
            onMarkAllRead={markAllRead}
            onNotificationClick={() => {}}
          />

          <div className="header-user-menu">
            <div
              className="header-avatar"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              role="button"
              tabIndex={0}
            >
              <span className="avatar-initials">
                {currentUser ? getInitials(currentUser.name) : "??"}
              </span>
              <span className="avatar-chevron">{Icons.chevronDown}</span>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`header-dropdown ${menuOpen ? 'header-dropdown-open' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {currentUser ? (
                <>
                  <div className="header-dropdown-header">
                    <div className="header-dropdown-avatar">
                      {getInitials(currentUser.name)}
                    </div>
                    <div className="header-dropdown-user">
                      <div className="dropdown-user-name">{currentUser.name}</div>
                      <div className="dropdown-user-email">{currentUser.email}</div>
                    </div>
                  </div>

                  <div className="header-dropdown-divider"></div>

                  <button
                    className="header-dropdown-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                      setProfileModalOpen(true);
                    }}
                  >
                    <span className="dropdown-item-icon">{Icons.user}</span>
                    <span>My Profile</span>
                  </button>

                  <button
                    className="header-dropdown-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                      setPasswordError("");
                      setPasswordSuccess("");
                      setCurrentPassword("");
                      setNextPassword("");
                      setConfirmPassword("");
                      setTimeout(() => setPasswordOpen(true), 100);
                    }}
                  >
                    <span className="dropdown-item-icon">{Icons.lock}</span>
                    <span>Change Password</span>
                  </button>

                  <div className="header-dropdown-divider"></div>

                  <button
                    className="header-dropdown-item header-dropdown-signout"
                    onClick={() => {
                      setMenuOpen(false);
                      onSignOut();
                    }}
                  >
                    <span className="dropdown-item-icon">{Icons.logout}</span>
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <button
                  className="header-dropdown-item"
                  onClick={() => {
                    setMenuOpen(false);
                    onSignOut();
                  }}
                >
                  <span className="dropdown-item-icon">{Icons.logout}</span>
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Change Password Modal */}
      {passwordOpen && (
        <div className="header-modal-overlay" onClick={() => setPasswordOpen(false)}>
          <div className="header-modal" onClick={(e) => e.stopPropagation()}>
            <div className="header-modal-header">
              <h3>Change Password</h3>
              <button className="header-modal-close" onClick={() => setPasswordOpen(false)}>
                {Icons.close}
              </button>
            </div>
            <div className="header-modal-body">
              {passwordError && <div className="auth-error show">{passwordError}</div>}
              {passwordSuccess && <div className="auth-success show">{passwordSuccess}</div>}
              <div className="header-modal-field">
                <label>Current Password</label>
                <input
                  type="password"
                  className="header-modal-input"
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="header-modal-field">
                <label>New Password</label>
                <input
                  type="password"
                  className="header-modal-input"
                  placeholder="Enter new password"
                  value={nextPassword}
                  onChange={(e) => setNextPassword(e.target.value)}
                />
              </div>
              <div className="header-modal-field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="header-modal-input"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="header-modal-footer">
              <button className="header-modal-btn header-modal-btn-secondary" onClick={() => setPasswordOpen(false)}>
                Cancel
              </button>
              <button
                className="header-modal-btn header-modal-btn-primary"
                onClick={() => {
                  setPasswordError("");
                  setPasswordSuccess("");
                  if (!currentPassword || !nextPassword || !confirmPassword) {
                    setPasswordError("Please fill in all fields.");
                    return;
                  }
                  if (nextPassword.length < 6) {
                    setPasswordError("Password must be at least 6 characters.");
                    return;
                  }
                  if (nextPassword !== confirmPassword) {
                    setPasswordError("Passwords do not match.");
                    return;
                  }
                  const result = onPasswordChange(currentPassword, nextPassword);
                  if (result) {
                    setPasswordError(result);
                    return;
                  }
                  setPasswordSuccess("Password updated successfully.");
                  setTimeout(() => setPasswordOpen(false), 700);
                }}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={currentUser}
        onSignOut={onSignOut}
        onPasswordChange={onPasswordChange}
      />
    </>
  );
}
