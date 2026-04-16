"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types";
import { Sidebar } from "@/shared/ui/Sidebar";
import { Header } from "@/shared/ui/Header";
import { useBuyouts } from "@/features/buyouts/hooks/useBuyouts";
import { AuthModal } from "@/shared/ui/modals/AuthModal";
import { NewPackageModal } from "@/shared/ui/modals/NewPackageModal";
import { ExportModal } from "@/shared/ui/modals/ExportModal";

// Standardized Icons
const Icons = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <polyline points="2 5 12 14 22 5" />
    </svg>
  ),
  lock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  calendar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
};

function getInitials(name: string): string {
  if (!name) return "??";
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function ProfilePage() {
  const router = useRouter();
  const {
    packages,
    users,
    setUsers,
    projectOptions,
    createPackage,
    updateUserPassword,
  } = useBuyouts();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [newPackageModalOpen, setNewPackageModalOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);

  // States
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [pNext, setPNext] = useState("");
  const [pConfirm, setPConfirm] = useState("");
  const [pError, setPError] = useState("");
  const [pSuccess, setPSuccess] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const stored = sessionStorage.getItem("bc_user");
    if (stored) {
      setCurrentUser(JSON.parse(stored));
    } else {
      setAuthModalOpen(true);
    }
    setLoading(false);
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("bc_user");
    router.push("/");
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    sessionStorage.setItem("bc_user", JSON.stringify(user));
    setAuthModalOpen(false);
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (pNext !== pConfirm) return setPError("Passwords do not match");
    if (pNext.length < 6) return setPError("Minimum 6 characters required");
    
    if (currentUser) {
      updateUserPassword(currentUser.email, pNext);
      setPSuccess("Password updated");
      setTimeout(() => setShowPasswordForm(false), 2000);
    }
  };

  const myCount = useMemo(() => {
    if (!currentUser?.name) return 0;
    return packages.filter(p => p.pm.toLowerCase().includes(currentUser.name.toLowerCase())).length;
  }, [currentUser, packages]);

  if (loading || (!currentUser && !authModalOpen)) return null;

  return (
    <div className="app">
      <Header
        currentUser={currentUser}
        searchQuery=""
        setSearchQuery={() => {}}
        projectFilter="all"
        setProjectFilter={() => {}}
        projectOptions={projectOptions}
        onNewPackage={() => setNewPackageModalOpen(true)}
        onExport={() => setExportModalOpen(true)}
        onSignOut={handleSignOut}
        onPasswordChange={() => null}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="app-body">
        <Sidebar
          currentView="all"
          setCurrentView={() => router.push("/")}
          packages={packages}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        <main className="main-area overflow-auto">
          <div className="w-full max-w-5xl mx-auto px-6 py-10 space-y-12 animate-in fade-in duration-700">
            
            {/* Header Section */}
            <div className="space-y-2 border-l-4 border-navy pl-6 py-1">
              <h1 className="text-4xl font-black text-navy uppercase tracking-tighter">Profile Center</h1>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Enterprise Account Management</p>
            </div>

            {/* Hero Card */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 shadow-sm flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-3xl bg-[#0F172A] text-white flex items-center justify-center text-5xl font-black shadow-2xl border-4 border-white">
                  {getInitials(currentUser?.name || "")}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 border-4 border-white rounded-full shadow-lg"></div>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4 relative z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Active Control</span>
                  <h2 className="text-4xl font-black text-navy tracking-tightest">{currentUser?.name}</h2>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold text-slate-500">
                  <span className="flex items-center gap-2.5">
                    <span className="text-slate-300">{Icons.mail}</span>
                    {currentUser?.email}
                  </span>
                  <span className="flex items-center gap-2.5 px-3 py-1 bg-slate-50 rounded-lg">
                    {currentUser?.role || "Manager"}
                  </span>
                </div>
              </div>

              <div className="px-12 py-8 bg-[#0F172A] rounded-2xl text-center text-white shadow-2xl relative z-10 min-w-[200px]">
                <p className="text-5xl font-black tracking-tighter mb-1">{myCount}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Assigned Packages</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Security */}
              <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-navy">{Icons.lock}</div>
                  <h3 className="text-xl font-bold text-navy uppercase tracking-tight">Security</h3>
                </div>

                {!showPasswordForm ? (
                  <div className="space-y-6">
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      Update your account security parameters and login credentials.
                    </p>
                    <button 
                      onClick={() => setShowPasswordForm(true)}
                      className="w-full py-4 bg-navy text-white text-sm font-black rounded-2xl hover:bg-[#1E293B] transition-all shadow-lg"
                    >
                      Update Password
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePasswordUpdate} className="space-y-5">
                    {pError && <div className="text-xs font-bold text-red-500">{pError}</div>}
                    {pSuccess && <div className="text-xs font-bold text-emerald-500">{pSuccess}</div>}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">New Credential</label>
                      <input 
                        type="password" 
                        value={pNext}
                        onChange={(e) => setPNext(e.target.value)}
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-navy/10 rounded-2xl text-sm font-bold transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">Confirm Credential</label>
                      <input 
                        type="password" 
                        value={pConfirm}
                        onChange={(e) => setPConfirm(e.target.value)}
                        className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent focus:border-navy/10 rounded-2xl text-sm font-bold transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="flex gap-4 pt-2">
                      <button type="button" onClick={() => setShowPasswordForm(false)} className="flex-1 py-4 bg-slate-100 text-slate-500 text-xs font-black rounded-2xl uppercase">Cancel</button>
                      <button type="submit" className="flex-1 py-4 bg-navy text-white text-xs font-black rounded-2xl uppercase shadow-lg">Save</button>
                    </div>
                  </form>
                )}
              </div>

              {/* General Preferences */}
              <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-navy">{Icons.settings}</div>
                  <h3 className="text-xl font-bold text-navy uppercase tracking-tight">Preferences</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-slate-100 transition-all">
                    <div className="space-y-1">
                      <p className="text-sm font-black text-navy">Email Sync</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">System Notifications</p>
                    </div>
                    <button 
                      onClick={() => setEmailNotif(!emailNotif)}
                      className={`w-14 h-7 rounded-full transition-all relative ${emailNotif ? 'bg-emerald-500' : 'bg-slate-300'}`}
                    >
                      <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${emailNotif ? 'left-8' : 'left-1 shadow-sm'}`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border-2 border-transparent hover:border-slate-100 transition-all">
                    <div className="space-y-1">
                      <p className="text-sm font-black text-navy">Interface</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Dark Mode support</p>
                    </div>
                    <div className="flex bg-slate-200 rounded-xl p-1 gap-1">
                      <button 
                        onClick={() => setThemeMode('light')}
                        className={`px-4 py-1.5 text-[10px] font-black rounded-lg transition-all ${themeMode === 'light' ? 'bg-white text-navy shadow-sm' : 'text-slate-500'}`}
                      >
                        LIGHT
                      </button>
                      <button 
                        onClick={() => setThemeMode('dark')}
                        className={`px-4 py-1.5 text-[10px] font-black rounded-lg transition-all ${themeMode === 'dark' ? 'bg-[#0F172A] text-white shadow-sm' : 'text-slate-500'}`}
                      >
                        DARK
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Version Info */}
            <div className="pt-8 flex flex-col items-center gap-6">
              <button 
                onClick={handleSignOut}
                className="px-10 py-4 border-2 border-red-100 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-red-50 transition-all"
              >
                Terminate Session
              </button>
              <p className="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">Boulder Command • v2.4.0</p>
            </div>

          </div>
        </main>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => router.push("/")}
        onLogin={handleLogin}
        onSignup={(u) => setUsers(prev => [...prev, u])}
        existingUsers={users}
      />
      <NewPackageModal
        isOpen={newPackageModalOpen}
        onClose={() => setNewPackageModalOpen(false)}
        onCreate={createPackage}
        nextId={Math.max(...packages.map((p) => p.id), 0) + 1}
      />
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        packages={packages}
        filteredPackages={[]}
      />
    </div>
  );
}
