"use client";

import React, { useState } from "react";
import { User } from "@/types";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onSignOut?: () => void;
  onPasswordChange?: (current: string, next: string) => string | null;
}

// Modern, consistent icons
const Icons = {
  close: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <polyline points="2 5 12 14 22 5" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
  logout: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  bell: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  edit: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  dollar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

function getInitials(name: string): string {
  if (!name) return "??";
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function ProfileModal({ isOpen, onClose, user, onSignOut, onPasswordChange }: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "preferences">("profile");
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);

  if (!isOpen || !user) return null;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    const result = onPasswordChange?.(currentPassword, newPassword);
    if (result) {
      setPasswordError(result);
    } else {
      setPasswordSuccess("Password updated successfully");
      setTimeout(() => {
        setShowPasswordForm(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }, 1500);
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: Icons.user },
    { id: "security", label: "Security", icon: Icons.shield },
    { id: "preferences", label: "Preferences", icon: Icons.bell },
  ] as const;

  return (
    <div 
      style={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        paddingTop: '80px'
      }}
    >
      <div 
        style={{ 
          width: '480px', 
          maxHeight: 'calc(100vh - 120px)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.1)',
          backgroundColor: 'white',
          overflow: 'hidden',
          animation: 'modalSlideIn 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-4"
          style={{ 
            borderBottom: '1px solid #f3f4f6',
            background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)'
          }}
        >
          <div className="flex items-center gap-3">
            <div 
              style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(249,115,22,0.3)'
              }}
            >
              {getInitials(user.name)}
            </div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: 0 }}>My Profile</h2>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: '2px 0 0 0' }}>Manage your account settings</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ 
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: '#9ca3af',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; e.currentTarget.style.color = '#4b5563'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9ca3af'; }}
          >
            {Icons.close}
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #f3f4f6', padding: '0 24px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 16px',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #f97316' : '2px solid transparent',
                background: 'transparent',
                color: activeTab === tab.id ? '#ea580c' : '#6b7280',
                cursor: 'pointer',
                marginBottom: '-1px',
                transition: 'all 0.2s'
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animation Keyframes */}
        <style>{`
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        {/* Content */}
        <div style={{ padding: '24px', overflowY: 'auto', maxHeight: 'calc(100vh - 320px)' }}>
          
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Avatar Section */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  padding: '20px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #f3f4f6'
                }}
              >
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '24px',
                    boxShadow: '0 8px 16px rgba(249,115,22,0.25)'
                  }}
                >
                  {getInitials(user.name)}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: '700', color: '#111827', fontSize: '18px', margin: '0 0 4px 0' }}>{user.name}</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 4px 0' }}>{user.role || "Project Manager"}</p>
                  <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>Member since {user.joined || "2024"}</p>
                </div>
              </div>

              {/* Info Grid - Perfectly Aligned */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Field label="Full Name" icon={Icons.user} value={user.name} />
                <Field label="Email Address" icon={Icons.mail} value={user.email} />
                <Field label="Role" icon={Icons.shield} value={user.role || "Project Manager"} />
                <Field label="Joined" icon={Icons.calendar} value={user.joined || "January 2024"} />
              </div>

              {/* Stats Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <StatCard value="12" label="Packages" color="#f97316" bgColor="#fff7ed" />
                <StatCard value="8" label="Awarded" color="#22c55e" bgColor="#f0fdf4" />
                <StatCard value="$2.4M" label="Value" color="#3b82f6" bgColor="#eff6ff" />
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {!showPasswordForm ? (
                <>
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      backgroundColor: '#f9fafb',
                      borderRadius: '12px',
                      border: '1px solid #f3f4f6'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '10px',
                          backgroundColor: '#dcfce7',
                          color: '#16a34a',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {Icons.lock}
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: '#111827', fontSize: '15px', margin: '0 0 2px 0' }}>Password</p>
                        <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Last changed 30 days ago</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowPasswordForm(true)}
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: '#374151',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      {Icons.edit}
                      Change
                    </button>
                  </div>

                  <div 
                    style={{ 
                      padding: '16px 20px',
                      backgroundColor: '#fefce8',
                      border: '1px solid #fef08a',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '18px', marginTop: '-2px' }}>⚠️</span>
                      <div>
                        <p style={{ fontWeight: '600', color: '#854d0e', fontSize: '14px', margin: '0 0 4px 0' }}>Security Tip</p>
                        <p style={{ fontSize: '13px', color: '#a16207', margin: 0, lineHeight: '1.5' }}>
                          Use a strong password with at least 8 characters, including numbers and special characters.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontWeight: '600', color: '#111827', fontSize: '16px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {Icons.lock}
                    Change Password
                  </h3>
                  
                  {passwordError && (
                    <div style={{ padding: '12px 16px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', fontSize: '13px', color: '#dc2626' }}>
                      {passwordError}
                    </div>
                  )}
                  {passwordSuccess && (
                    <div style={{ padding: '12px 16px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', fontSize: '13px', color: '#16a34a' }}>
                      {passwordSuccess}
                    </div>
                  )}

                  <PasswordField label="Current Password" value={currentPassword} onChange={setCurrentPassword} placeholder="Enter current password" />
                  <PasswordField label="New Password" value={newPassword} onChange={setNewPassword} placeholder="Enter new password" />
                  <PasswordField label="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} placeholder="Confirm new password" />

                  <div style={{ display: 'flex', gap: '12px', paddingTop: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setShowPasswordForm(false)}
                      style={{ 
                        flex: 1,
                        padding: '10px 16px',
                        backgroundColor: '#f3f4f6',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#374151',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{ 
                        flex: 1,
                        padding: '10px 16px',
                        backgroundColor: '#f97316',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '18px 20px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  border: '1px solid #f3f4f6'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px',
                      backgroundColor: '#dbeafe',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {Icons.bell}
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#111827', fontSize: '15px', margin: '0 0 2px 0' }}>Email Notifications</p>
                    <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Receive updates about your packages</p>
                  </div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  style={{ 
                    position: 'relative',
                    width: '48px',
                    height: '26px',
                    borderRadius: '13px',
                    border: 'none',
                    backgroundColor: emailNotifications ? '#f97316' : '#d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <span 
                    style={{
                      position: 'absolute',
                      top: '3px',
                      left: emailNotifications ? '25px' : '3px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      transition: 'all 0.2s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                  />
                </button>
              </div>

              <div 
                style={{ 
                  padding: '16px 20px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '12px'
                }}
              >
                <p style={{ fontSize: '13px', color: '#1e40af', margin: 0 }}>
                  <span style={{ fontWeight: '600' }}>💡 Tip:</span> Enable notifications to stay updated on bid deadlines, status changes, and team activity.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderTop: '1px solid #f3f4f6',
            backgroundColor: '#f9fafb'
          }}
        >
          <button
            onClick={() => {
              onSignOut?.();
              onClose();
            }}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#dc2626',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {Icons.logout}
            Sign Out
          </button>
          <button
            onClick={onClose}
            style={{ 
              padding: '10px 20px',
              backgroundColor: '#111827',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function Field({ label, icon, value }: { label: string; icon: React.ReactNode; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label 
        style={{ 
          fontSize: '11px', 
          fontWeight: '600', 
          color: '#9ca3af', 
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        {icon}
        {label}
      </label>
      <div 
        style={{ 
          padding: '10px 12px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#111827'
        }}
      >
        {value}
      </div>
    </div>
  );
}

function StatCard({ value, label, color, bgColor }: { value: string; label: string; color: string; bgColor: string }) {
  return (
    <div 
      style={{ 
        textAlign: 'center',
        padding: '16px 12px',
        backgroundColor: bgColor,
        borderRadius: '10px',
        border: `1px solid ${color}20`
      }}
    >
      <p style={{ fontSize: '22px', fontWeight: '700', color, margin: '0 0 4px 0' }}>{value}</p>
      <p style={{ fontSize: '12px', fontWeight: '500', color: `${color}99`, margin: 0 }}>{label}</p>
    </div>
  );
}

function PasswordField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>{label}</label>
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ 
          padding: '10px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          outline: 'none',
          transition: 'all 0.2s'
        }}
        onFocus={(e) => { e.target.style.borderColor = '#f97316'; e.target.style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; }}
        onBlur={(e) => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
}
