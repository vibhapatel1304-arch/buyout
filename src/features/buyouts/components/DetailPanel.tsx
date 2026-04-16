"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Bid, Note, Package, User } from "@/types";
import { getRecommendation } from "@/features/buyouts/utils/scoring";

interface DetailPanelProps {
  pkg: Package;
  bids: Bid[];
  notes: Note[];
  currentUser: User | null;
  onClose: () => void;
  onStatusChange: (pkgId: number, newStatus: string) => void;
  onMarkUrgent: (pkgId: number) => void;
  onRecommendBid: (pkgId: number, bidIndex: number) => void;
  onExcludeBid: (pkgId: number, bidIndex: number) => void;
  onAddNote: (pkgId: number, text: string, author: string) => void;
}

const ALL_STATUSES = [
  "Not Started", "Invited", "Bidding", "Reviewing Bids",
  "Scope Leveling", "Negotiating", "Pending Decision",
  "Ready to Award", "Awarded", "Contract Out", "Executed", "On Hold",
];

function fmt(n: number | null | undefined) {
  if (n === null || n === undefined) return "—";
  if (n === 0) return "$0";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

const TODAY = new Date("2025-04-15");
function daysLocal(dateStr: string) {
  return Math.round((new Date(dateStr).getTime() - TODAY.getTime()) / 86400000);
}

// ── Icons ────────────────────────────────────────────────────────
const Icons = {
  close: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  chevron: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  externalLink: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  star: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  check: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

// ── Detail Panel ─────────────────────────────────────────────────
export function DetailPanel({
  pkg,
  bids,
  notes,
  currentUser,
  onClose,
  onStatusChange,
  onMarkUrgent,
  onRecommendBid,
  onExcludeBid,
  onAddNote,
}: DetailPanelProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "bids" | "contract" | "notes">("overview");
  const [expandedBid, setExpandedBid] = useState<number | null>(null);
  const [currentStatus, setCurrentStatus] = useState(pkg.status);
  const [noteText, setNoteText] = useState("");
  const recommendation = getRecommendation(bids, pkg);
  const days = daysLocal(pkg.dueDate);
  const isOverdue = pkg.overdue || days < 0;

  // Variance calculation
  const variance = pkg.budget && pkg.lowBid && pkg.budget > 0
    ? ((pkg.lowBid - pkg.budget) / pkg.budget * 100)
    : null;

  const varStr = variance !== null
    ? `${variance > 0 ? "+" : ""}${variance.toFixed(1)}%`
    : "—";

  const varColor = variance === null ? "rgba(255,255,255,0.4)"
    : variance < 0 ? "#4ECB84"
    : variance > 10 ? "#FF8070"
    : "#FDBA74";

  useEffect(() => {
    setCurrentStatus(pkg.status);
    setActiveTab(bids.length ? "bids" : "overview");
    setExpandedBid(null);
    setNoteText("");
  }, [pkg.id, bids.length]);

  const handleStatusChange = (newStatus: string) => {
    setCurrentStatus(newStatus);
    onStatusChange(pkg.id, newStatus);
  };

  const kpiStrip = [
    { label: "Budget",   value: fmt(pkg.budget),  color: "rgba(255,255,255,0.9)" },
    { label: "Low Bid",  value: fmt(pkg.lowBid),   color: pkg.lowBid ? "#4ECB84" : "rgba(255,255,255,0.4)" },
    { label: "Variance", value: varStr,             color: varColor },
    { label: "Bids",     value: String(bids.length), color: "rgba(255,255,255,0.9)" },
  ];

  const tabs: Array<{ id: "overview" | "bids" | "contract" | "notes"; label: string }> = [
    { id: "overview",  label: "Overview" },
    { id: "bids",      label: `Bids (${bids.length})` },
    { id: "contract",  label: "Contract" },
    { id: "notes",     label: `Notes (${notes.length})` },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(2px)",
          zIndex: 500,
          animation: "fadeIn 0.2s ease",
        }}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div style={{
        position: "fixed",
        right: 0, top: 0, bottom: 0,
        width: "var(--panel-w)",
        maxWidth: "100vw",
        background: "var(--card)",
        zIndex: 510,
        display: "flex",
        flexDirection: "column",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.18)",
        animation: "slideInRight 0.3s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
      }}>

        {/* ── Package Header ── */}
        <div style={{ background: "var(--navy)", padding: "18px 20px 14px", flexShrink: 0 }}>
          {/* Top row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "10px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                {pkg.longLead && (
                  <span style={{ fontSize: "10px", fontWeight: 700, background: "rgba(37,99,235,0.2)", color: "#93C5FD", padding: "2px 6px", borderRadius: "3px" }}>LL</span>
                )}
                {pkg.urgent && (
                  <span style={{ fontSize: "10px", fontWeight: 700, background: "rgba(220,38,38,0.2)", color: "#FCA5A5", padding: "2px 6px", borderRadius: "3px" }}>URGENT</span>
                )}
                {isOverdue && (
                  <span style={{ fontSize: "10px", fontWeight: 700, background: "rgba(220,38,38,0.2)", color: "#FCA5A5", padding: "2px 6px", borderRadius: "3px" }}>OVERDUE</span>
                )}
              </div>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.3 }}>{pkg.name}</h2>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "4px 0 0", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--mono)", fontWeight: 600 }}>{pkg.csi}</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>{pkg.trade}</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>{pkg.project}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)", width: "30px", height: "30px",
                borderRadius: "7px", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              {Icons.close}
            </button>
          </div>

          {/* Status selector row */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
            <select
              value={currentStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
              style={{
                fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",
                border: "none", cursor: "pointer", fontFamily: "var(--font)",
                background: "rgba(255,255,255,0.1)", color: "white", appearance: "none",
              }}
            >
              {ALL_STATUSES.map((s) => (
                <option key={s} value={s} style={{ background: "var(--navy)", color: "white" }}>{s}</option>
              ))}
            </select>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", padding: "3px 8px", background: "rgba(255,255,255,0.05)", borderRadius: "4px" }}>
              {pkg.pm} · {pkg.priority} Priority
            </span>
            {pkg.risk === "High" && (
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#FCA5A5", background: "rgba(220,38,38,0.15)", padding: "3px 8px", borderRadius: "4px" }}>
                High Risk
              </span>
            )}
          </div>

          {/* KPI strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
            {kpiStrip.map((k) => (
              <div key={k.label} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.06)", padding: "8px 10px", textAlign: "center",
              }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: k.color, fontFamily: "var(--mono)" }}>{k.value}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{k.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tabs ── */}
        <div style={{
          display: "flex", borderBottom: "2px solid var(--border)",
          background: "var(--card)", flexShrink: 0, padding: "0 4px",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1, padding: "11px 8px", fontSize: "12px", fontWeight: 600,
                color: activeTab === tab.id ? "var(--primary)" : "var(--text-muted)",
                background: "none", border: "none",
                borderBottom: `2px solid ${activeTab === tab.id ? "var(--primary)" : "transparent"}`,
                marginBottom: "-2px", cursor: "pointer", fontFamily: "var(--font)",
                transition: "all 0.15s", whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div style={{ flex: 1, overflowY: "auto", background: "var(--bg)", padding: "16px 20px" }}>

          {/* ── OVERVIEW TAB ── */}
          {activeTab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Info cards */}
              {[
                {
                  title: "Package Details",
                  fields: [
                    { label: "Trade",     value: pkg.trade },
                    { label: "CSI",       value: pkg.csi },
                    { label: "Project",   value: pkg.project },
                    { label: "PM",        value: pkg.pm },
                    { label: "Priority",  value: pkg.priority },
                    { label: "Risk",      value: pkg.risk },
                  ],
                },
                {
                  title: "Schedule & Financials",
                  fields: [
                    { label: "Award Date",    value: pkg.dueDate },
                    { label: "On-Site Date",  value: pkg.onSiteDate || "—" },
                    { label: "Budget",        value: fmt(pkg.budget),  mono: true },
                    { label: "Low Bid",       value: fmt(pkg.lowBid),  mono: true },
                    { label: "Contract",      value: pkg.contractStatus },
                    { label: "Long Lead",     value: pkg.longLead ? "Yes" : "No" },
                  ],
                },
              ].map((section) => (
                <div key={section.title} style={{
                  background: "var(--card)", borderRadius: "10px",
                  border: "1px solid var(--border)", overflow: "hidden",
                }}>
                  <div style={{
                    fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)",
                    padding: "10px 14px", background: "var(--bg)",
                    borderBottom: "1px solid var(--border)",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>
                    {section.title}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                    {section.fields.map((f, i) => (
                      <div key={f.label} style={{
                        padding: "10px 14px",
                        borderBottom: i < section.fields.length - 2 ? "1px solid var(--border)" : "none",
                        borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                      }}>
                        <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>
                          {f.label}
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)", fontFamily: (f as any).mono ? "var(--mono)" : "var(--font)" }}>
                          {f.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Risks */}
              {pkg.risks && pkg.risks.length > 0 && (
                <div style={{ background: "rgba(220,38,38,0.04)", borderRadius: "10px", border: "1px solid rgba(220,38,38,0.12)", padding: "14px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--status-overdue)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
                    ⚠ Risks
                  </div>
                  {pkg.risks.map((r, i) => (
                    <div key={i} style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: i < pkg.risks.length - 1 ? "8px" : 0, paddingBottom: i < pkg.risks.length - 1 ? "8px" : 0, borderBottom: i < pkg.risks.length - 1 ? "1px solid rgba(220,38,38,0.1)" : "none" }}>
                      <strong style={{ color: "var(--status-overdue)" }}>{r.label}:</strong> {r.desc}
                    </div>
                  ))}
                </div>
              )}

              {/* Notes */}
              {pkg.notes && (
                <div style={{ background: "var(--card)", borderRadius: "10px", border: "1px solid var(--border)", padding: "14px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>Notes</div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>{pkg.notes}</p>
                </div>
              )}

              {/* Open Full Page CTA */}
              <button
                onClick={() => router.push(`/buyouts/${pkg.id}`)}
                style={{
                  width: "100%", padding: "11px", border: "1px solid var(--primary-border)",
                  borderRadius: "8px", background: "var(--primary-light)",
                  color: "var(--primary)", fontSize: "13px", fontWeight: 700,
                  cursor: "pointer", fontFamily: "var(--font)",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--primary-light)"; e.currentTarget.style.color = "var(--primary)"; }}
              >
                {Icons.externalLink}
                Open Full Decision Page
              </button>
            </div>
          )}

          {/* ── BIDS TAB ── */}
          {activeTab === "bids" && (
            <div>
              {/* Summary */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text)", margin: "0 0 2px" }}>
                    {bids.length} Bid{bids.length !== 1 ? "s" : ""} Received
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0, fontFamily: "var(--mono)" }}>
                    Budget: {fmt(pkg.budget)}
                  </p>
                </div>
                <span style={{
                  fontSize: "11px", fontWeight: 700, padding: "5px 10px", borderRadius: "6px",
                  background: pkg.coverageCount >= 2 ? "rgba(22,163,74,0.08)" : "rgba(245,158,11,0.08)",
                  color: pkg.coverageCount >= 2 ? "var(--status-awarded)" : "#B45309",
                }}>
                  {pkg.coverageCount >= 2 ? `✓ ${pkg.coverageCount} Coverage` : `⚠ ${pkg.coverageCount} / 2`}
                </span>
              </div>

              {bids.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px 16px", color: "var(--text-muted)" }}>
                  <div style={{ fontSize: "32px", marginBottom: "10px", opacity: 0.5 }}>📭</div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)", margin: "0 0 4px" }}>No bids yet</p>
                  <small>Issue an RFP to begin collecting bids</small>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {recommendation && (
                    <div style={{ background: "rgba(22,163,74,0.05)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(22,163,74,0.2)", display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{ width: "24px", height: "24px", background: "var(--status-awarded-bg)", color: "var(--status-awarded)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>{Icons.star}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--status-awarded)", textTransform: "uppercase" }}>System Recommended</div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)" }}>{recommendation.bid.vendor}</div>
                      </div>
                      <button onClick={() => router.push(`/buyouts/${pkg.id}`)} style={{ padding: "6px 12px", background: "var(--status-awarded)", color: "white", border: "none", borderRadius: "4px", fontSize: "11px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>{Icons.check} Award</button>
                    </div>
                  )}
                  {bids.map((bid, idx) => {
                    const isExpanded = expandedBid === idx;
                    const isRec = recommendation?.bid === bid;
                    const bidVariance = pkg.budget && bid.amount > 0
                      ? ((bid.amount - pkg.budget) / pkg.budget * 100)
                      : null;

                    return (
                      <div key={idx} style={{
                        background: "var(--card)", borderRadius: "10px",
                        border: `1px solid ${isRec ? "rgba(22,163,74,0.2)" : "var(--border)"}`,
                        overflow: "hidden", boxShadow: "var(--shadow-xs)",
                        transition: "border-color 0.15s",
                      }}>
                        {/* Card header */}
                        <div
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "12px 14px", cursor: "pointer",
                            transition: "background 0.12s",
                          }}
                          onClick={() => setExpandedBid(isExpanded ? null : idx)}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--bg)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                        >
                          {/* Rank badge */}
                          <div style={{
                            width: "28px", height: "28px", borderRadius: "7px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "11px", fontWeight: 800, fontFamily: "var(--mono)", flexShrink: 0,
                            background: isRec ? "rgba(22,163,74,0.1)" : bid.status === "backup" ? "rgba(37,99,235,0.08)" : "var(--bg)",
                            color: isRec ? "var(--status-awarded)" : bid.status === "backup" ? "var(--status-bidding)" : "var(--text-muted)",
                          }}>
                            #{idx + 1}
                          </div>

                          {/* Vendor name */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>{bid.vendor}</div>
                            <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "1px" }}>
                              Received {bid.received}
                            </div>
                          </div>

                          {/* Amount */}
                          <div style={{ textAlign: "right", flexShrink: 0 }}>
                            <div style={{ fontSize: "14px", fontWeight: 700, fontFamily: "var(--mono)", color: "var(--text)" }}>
                              {bid.amount > 0 ? fmt(bid.amount) : "TBD"}
                            </div>
                            {bidVariance !== null && (
                              <div style={{
                                fontSize: "11px", fontWeight: 700, fontFamily: "var(--mono)",
                                color: bidVariance <= 0 ? "var(--savings)" : "var(--status-overdue)",
                              }}>
                                {bidVariance > 0 ? "+" : ""}{bidVariance.toFixed(1)}%
                              </div>
                            )}
                          </div>

                          {/* Tags */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "3px", alignItems: "flex-end", flexShrink: 0 }}>
                            {isRec && (
                              <span style={{
                                fontSize: "10px", fontWeight: 700, display: "flex", alignItems: "center", gap: "3px",
                                background: "rgba(22,163,74,0.08)", color: "var(--status-awarded)",
                                padding: "2px 6px", borderRadius: "3px",
                              }}>
                                {Icons.star} Rec
                              </span>
                            )}
                            {bid.status === "backup" && (
                              <span style={{ fontSize: "10px", fontWeight: 700, background: "rgba(37,99,235,0.08)", color: "var(--status-bidding)", padding: "2px 6px", borderRadius: "3px" }}>
                                Backup
                              </span>
                            )}
                          </div>

                          {/* Chevron */}
                          <span style={{
                            color: "var(--text-muted)", fontSize: "10px",
                            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s", display: "flex", alignItems: "center",
                          }}>
                            {Icons.chevron}
                          </span>
                        </div>

                        {/* Expanded body */}
                        {isExpanded && (
                          <div style={{
                            padding: "14px", borderTop: "1px solid var(--border)",
                            background: "var(--bg)", animation: "fadeInUp 0.2s ease",
                          }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                              {[
                                { label: "Scope", value: bid.scopeComplete },
                                { label: "Leveled", value: bid.leveled ? "Yes" : "No" },
                                { label: "Inclusions", value: bid.inclusions },
                                { label: "Exclusions", value: bid.exclusions },
                                { label: "Qualifications", value: bid.qualifications },
                                { label: "Alternates", value: bid.alternates },
                              ].map((f) => (
                                <div key={f.label}>
                                  <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>{f.label}</div>
                                  <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{f.value || "—"}</div>
                                </div>
                              ))}
                              {bid.notes && (
                                <div style={{ gridColumn: "1 / -1" }}>
                                  <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>Notes</div>
                                  <div style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.4 }}>{bid.notes}</div>
                                </div>
                              )}
                            </div>

                            {/* Bid actions */}
                            <div style={{ display: "flex", gap: "8px", marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                              <button style={{
                                flex: 1, padding: "7px", borderRadius: "6px",
                                background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.2)",
                                color: "var(--status-awarded)", fontSize: "12px", fontWeight: 700,
                                cursor: "pointer", fontFamily: "var(--font)",
                                display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                                transition: "all 0.15s",
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--status-awarded)"; e.currentTarget.style.color = "white"; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(22,163,74,0.08)"; e.currentTarget.style.color = "var(--status-awarded)"; }}
                              onClick={() => onRecommendBid(pkg.id, idx)}
                              >
                                {Icons.check} Recommend
                              </button>
                              <button style={{
                                padding: "7px 14px", borderRadius: "6px",
                                background: "var(--card)", border: "1px solid var(--border)",
                                color: "var(--text-muted)", fontSize: "12px", fontWeight: 600,
                                cursor: "pointer", fontFamily: "var(--font)", transition: "all 0.15s",
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(220,38,38,0.06)"; e.currentTarget.style.color = "var(--status-overdue)"; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--card)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                              onClick={() => onExcludeBid(pkg.id, idx)}
                              >
                                Exclude
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Open full comparison page */}
                  <button
                    onClick={() => router.push(`/buyouts/${pkg.id}`)}
                    style={{
                      width: "100%", padding: "10px", borderRadius: "8px",
                      border: "1px dashed var(--border-dark)",
                      background: "transparent", color: "var(--text-muted)",
                      fontSize: "12px", fontWeight: 600, cursor: "pointer",
                      fontFamily: "var(--font)", display: "flex", alignItems: "center",
                      justifyContent: "center", gap: "6px", marginTop: "4px",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-dark)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                  >
                    {Icons.externalLink} Full Bid Comparison + Scoring
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── CONTRACT TAB ── */}
          {activeTab === "contract" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Contract Status Card */}
              <div style={{
                background: "var(--card)", borderRadius: "10px",
                border: "1px solid var(--border)", overflow: "hidden",
              }}>
                <div style={{
                  fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)",
                  padding: "10px 14px", background: "var(--bg)",
                  borderBottom: "1px solid var(--border)",
                  textTransform: "uppercase", letterSpacing: "0.06em",
                }}>
                  Contract Status
                </div>
                <div style={{ padding: "14px" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "8px 14px", borderRadius: "8px",
                    background: pkg.contractStatus === "Executed" ? "rgba(22,163,74,0.08)" : "rgba(245,158,11,0.08)",
                    border: pkg.contractStatus === "Executed" ? "1px solid rgba(22,163,74,0.2)" : "1px solid rgba(245,158,11,0.2)",
                  }}>
                    <span style={{
                      fontSize: "14px",
                      color: pkg.contractStatus === "Executed" ? "var(--status-awarded)" : "#B45309",
                    }}>
                      {pkg.contractStatus === "Executed" ? "✓" : "⏳"}
                    </span>
                    <span style={{
                      fontSize: "14px", fontWeight: 700,
                      color: pkg.contractStatus === "Executed" ? "var(--status-awarded)" : "#B45309",
                    }}>
                      {pkg.contractStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contract Steps Progress */}
              {pkg.contractSteps && pkg.contractSteps.length > 0 && (
                <div style={{
                  background: "var(--card)", borderRadius: "10px",
                  border: "1px solid var(--border)", overflow: "hidden",
                }}>
                  <div style={{
                    fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)",
                    padding: "10px 14px", background: "var(--bg)",
                    borderBottom: "1px solid var(--border)",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>
                    Contract Workflow
                  </div>
                  <div style={{ padding: "14px" }}>
                    <div style={{
                      display: "flex", flexDirection: "column", gap: "8px",
                    }}>
                      {pkg.contractSteps.map((step, idx) => {
                        const isCompleted = idx < pkg.contractProgress;
                        const isCurrent = idx === pkg.contractProgress;
                        return (
                          <div key={step} style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "10px 12px", borderRadius: "6px",
                            background: isCurrent ? "rgba(249,115,22,0.08)" : isCompleted ? "rgba(22,163,74,0.04)" : "var(--bg)",
                            border: isCurrent ? "1px solid rgba(249,115,22,0.2)" : "1px solid var(--border)",
                          }}>
                            <span style={{
                              width: "20px", height: "20px", borderRadius: "50%",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: "11px", fontWeight: 700,
                              background: isCompleted ? "var(--status-awarded)" : isCurrent ? "var(--primary)" : "var(--border-dark)",
                              color: isCompleted || isCurrent ? "white" : "var(--text-muted)",
                            }}>
                              {isCompleted ? "✓" : idx + 1}
                            </span>
                            <span style={{
                              fontSize: "13px", fontWeight: isCurrent ? 700 : 600,
                              color: isCurrent ? "var(--primary)" : isCompleted ? "var(--status-awarded)" : "var(--text-muted)",
                              flex: 1,
                            }}>
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Award Details */}
              {pkg.selectedVendor && (
                <div style={{
                  background: "var(--card)", borderRadius: "10px",
                  border: "1px solid var(--border)", overflow: "hidden",
                }}>
                  <div style={{
                    fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)",
                    padding: "10px 14px", background: "var(--bg)",
                    borderBottom: "1px solid var(--border)",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                  }}>
                    Award Details
                  </div>
                  <div style={{ padding: "14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>
                        Selected Vendor
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>
                        {pkg.selectedVendor}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>
                        Award Amount
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--status-awarded)", fontFamily: "var(--mono)" }}>
                        {fmt(pkg.awardAmount)}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!pkg.selectedVendor && (
                <div style={{ textAlign: "center", padding: "40px 16px", color: "var(--text-muted)" }}>
                  <div style={{ fontSize: "32px", marginBottom: "10px", opacity: 0.5 }}>📄</div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)", margin: "0 0 4px" }}>No contract yet</p>
                  <small>Award a bid to begin contract workflow</small>
                </div>
              )}
            </div>
          )}

          {/* ── NOTES TAB ── */}
          {activeTab === "notes" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Add Note Input */}
              {currentUser && (
                <div style={{
                  background: "var(--card)", borderRadius: "10px",
                  border: "1px solid var(--border)", padding: "14px",
                }}>
                  <div style={{
                    fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                    marginBottom: "10px",
                  }}>
                    Add Note
                  </div>
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Type your note here..."
                    style={{
                      width: "100%", minHeight: "80px", padding: "10px 12px",
                      border: "1px solid var(--border)", borderRadius: "6px",
                      background: "var(--bg)", color: "var(--text)",
                      fontSize: "13px", fontFamily: "var(--font)",
                      resize: "vertical", marginBottom: "10px",
                    }}
                  />
                  <button
                    onClick={() => {
                      if (noteText.trim()) {
                        onAddNote(pkg.id, noteText, currentUser.name);
                        setNoteText("");
                      }
                    }}
                    disabled={!noteText.trim()}
                    style={{
                      width: "100%", padding: "9px", borderRadius: "6px",
                      border: "none", background: noteText.trim() ? "var(--primary)" : "var(--border-dark)",
                      color: "white", fontSize: "13px", fontWeight: 700,
                      cursor: noteText.trim() ? "pointer" : "not-allowed",
                      fontFamily: "var(--font)", transition: "all 0.15s",
                    }}
                  >
                    Add Note
                  </button>
                </div>
              )}

              {/* Notes List */}
              {notes.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {notes.map((note, idx) => (
                    <div key={note.id || idx} style={{
                      background: "var(--card)", borderRadius: "10px",
                      border: "1px solid var(--border)", padding: "14px",
                    }}>
                      <div style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        marginBottom: "8px",
                      }}>
                        <div style={{
                          display: "flex", alignItems: "center", gap: "8px",
                        }}>
                          <span style={{
                            width: "28px", height: "28px", borderRadius: "50%",
                            background: "var(--primary)", color: "white",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "12px", fontWeight: 700,
                          }}>
                            {note.author.charAt(0).toUpperCase()}
                          </span>
                          <div>
                            <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>
                              {note.author}
                            </div>
                            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                              {new Date(note.createdAt || Date.now()).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p style={{
                        fontSize: "13px", color: "var(--text-secondary)",
                        lineHeight: 1.5, margin: 0,
                      }}>
                        {note.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 16px", color: "var(--text-muted)" }}>
                  <div style={{ fontSize: "32px", marginBottom: "10px", opacity: 0.5 }}>📝</div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)", margin: "0 0 4px" }}>No notes yet</p>
                  <small>Add the first note to this package</small>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div style={{
          display: "flex", gap: "10px", padding: "14px 20px",
          borderTop: "1px solid var(--border)", background: "var(--card)", flexShrink: 0,
        }}>
          <button
            onClick={onClose}
            style={{
              flex: 1, padding: "9px", borderRadius: "7px",
              border: "1px solid var(--border)", background: "var(--card)",
              color: "var(--text-secondary)", fontSize: "13px", fontWeight: 600,
              cursor: "pointer", fontFamily: "var(--font)", transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--card)"; }}
          >
            Close
          </button>
          <button
            onClick={() => router.push(`/buyouts/${pkg.id}`)}
            style={{
              flex: 2, padding: "9px", borderRadius: "7px",
              border: "none", background: "var(--primary)",
              color: "white", fontSize: "13px", fontWeight: 700,
              cursor: "pointer", fontFamily: "var(--font)", transition: "all 0.15s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary-hover)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--primary)"; }}
          >
            {Icons.externalLink} Full Decision View
          </button>
        </div>
      </div>
    </>
  );
}
