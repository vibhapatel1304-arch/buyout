"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PACKAGES, BIDS_DB } from "@/data/db";
import { StatusBadge } from "@/shared/ui/StatusBadge";

// ── Icons ─────────────────────────────────────────────────────────
const Icons = {
  back: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  award: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  export: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  star: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  calendar: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
};

// ── Currency formatter ──────────────────────────────────────────
function fmt(n: number | null) {
  if (!n) return "—";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

// ── Score bar component ─────────────────────────────────────────
function ScoreBar({ score, max = 100, color }: { score: number; max?: number; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ flex: 1, height: "6px", background: "var(--border)", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{
          width: `${(score / max) * 100}%`,
          height: "100%",
          background: color,
          borderRadius: "3px",
          transition: "width 0.6s ease",
        }} />
      </div>
      <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-secondary)", fontFamily: "var(--mono)", minWidth: "32px" }}>
        {score}
      </span>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────
export default function PackageDetailClient({ params }: { params: { id: string } }) {
  const router = useRouter();
  const pkgId = parseInt(params.id, 10);
  const pkg = PACKAGES.find((p) => p.id === pkgId);
  const bids = BIDS_DB[pkgId] || [];
  const [activeTab, setActiveTab] = useState<"overview" | "bids" | "activity">("bids");
  const [selectedVendorIdx, setSelectedVendorIdx] = useState<number | null>(
    bids.findIndex((b) => b.status === "recommended")
  );
  const [awarded, setAwarded] = useState(false);

  if (!pkg) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "var(--bg)" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>📦</div>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text)", marginBottom: "8px" }}>Package not found</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>The package you&apos;re looking for doesn&apos;t exist.</p>
        <button onClick={() => router.push("/")} style={backBtnStyle}>← Back to Dashboard</button>
      </div>
    );
  }

  const variance = pkg.budget && pkg.lowBid
    ? ((pkg.lowBid - pkg.budget) / pkg.budget * 100).toFixed(1)
    : null;

  const varVal = variance ? parseFloat(variance) : 0;

  // Compute simple scores for bid comparison
  const bidsWithScores = bids.map((bid, i) => {
    const priceScore = pkg.budget && bid.amount > 0
      ? Math.round(Math.max(0, 100 - ((bid.amount - pkg.budget) / pkg.budget) * 100))
      : 50;
    const scopeScore = bid.scopeComplete === "Complete" ? 90 : bid.scopeComplete === "Partial" ? 60 : 30;
    const leveledScore = bid.leveled ? 85 : 40;
    const overall = Math.round((priceScore * 0.5) + (scopeScore * 0.3) + (leveledScore * 0.2));
    return { ...bid, priceScore, scopeScore, leveledScore, overall, originalIdx: i };
  }).sort((a, b) => b.overall - a.overall);

  const tabs = ["overview", "bids", "activity"] as const;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", fontFamily: "var(--font)" }}>

      {/* ── Top Nav Bar ──────────────────────────────────────── */}
      <div style={{
        background: "var(--navy)",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
          <button
            onClick={() => router.push("/")}
            style={{
              display: "flex", alignItems: "center", gap: "4px",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)", borderRadius: "6px", padding: "5px 10px",
              cursor: "pointer", fontFamily: "var(--font)", fontSize: "12px", fontWeight: 600,
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
          >
            {Icons.back} Dashboard
          </button>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "16px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>All Buyouts</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "16px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{pkg.name}</span>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.65)", borderRadius: "6px", padding: "7px 14px",
            cursor: "pointer", fontFamily: "var(--font)", fontSize: "13px", fontWeight: 500,
          }}>
            {Icons.export} Export
          </button>
          {!awarded ? (
            <button
              onClick={() => { setAwarded(true); alert(`Package "${pkg.name}" awarded! 🎉`); }}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "var(--primary)", border: "1px solid var(--primary)",
                color: "white", borderRadius: "6px", padding: "7px 16px",
                cursor: "pointer", fontFamily: "var(--font)", fontSize: "13px", fontWeight: 700,
                transition: "all 0.15s",
              }}
            >
              {Icons.award} Award Package
            </button>
          ) : (
            <div style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "var(--status-awarded-bg)", border: "1px solid rgba(22,163,74,0.3)",
              color: "var(--status-awarded)", borderRadius: "6px", padding: "7px 16px",
              fontSize: "13px", fontWeight: 700,
            }}>
              {Icons.check} Awarded
            </div>
          )}
        </div>
      </div>

      {/* ── Page Content ────────────────────────────────────── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 32px 64px" }}>

        {/* ── Package Header ── */}
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          marginBottom: "28px", gap: "16px",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <h1 style={{ fontSize: "26px", fontWeight: 800, color: "var(--text)", margin: 0 }}>{pkg.name}</h1>
              <StatusBadge status={pkg.status} size="lg" />
              {pkg.urgent && (
                <span style={{
                  background: "rgba(220,38,38,0.08)", color: "var(--status-overdue)",
                  fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px",
                  border: "1px solid rgba(220,38,38,0.15)",
                }}>URGENT</span>
              )}
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>
              {pkg.project} · {pkg.pm} · CSI {pkg.csi} · {pkg.trade}
            </p>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "14px",
          marginBottom: "28px",
        }}>
          {[
            { label: "Budget", value: fmt(pkg.budget), sub: "Target cost", color: "var(--text)" },
            { label: "Low Bid", value: fmt(pkg.lowBid), sub: pkg.lowBid ? "Best received" : "No bids yet", color: pkg.lowBid ? "var(--savings)" : "var(--text-light)" },
            {
              label: "Variance",
              value: variance ? `${varVal > 0 ? "+" : ""}${variance}%` : "—",
              sub: varVal < 0 ? "Under budget" : varVal > 0 ? "Over budget" : "On target",
              color: varVal < 0 ? "var(--savings)" : varVal > 0 ? "var(--status-overdue)" : "var(--text-muted)",
            },
            { label: "Bids", value: String(bids.length), sub: pkg.coverageCount >= 2 ? "Coverage OK ✓" : "Need more bids", color: pkg.coverageCount >= 2 ? "var(--status-awarded)" : "var(--status-reviewing)" },
            { label: "Due Date", value: pkg.dueDate, sub: `${pkg.priority} Priority`, color: "var(--text)", icon: Icons.calendar },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "var(--card)", borderRadius: "10px", padding: "16px 18px",
              border: "1px solid var(--border)", boxShadow: "var(--shadow-xs)",
            }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: stat.color, fontFamily: "var(--mono)", marginBottom: "3px" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div style={{
          display: "flex", gap: "0", borderBottom: "2px solid var(--border)",
          marginBottom: "24px",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 20px",
                fontSize: "14px", fontWeight: 600,
                color: activeTab === tab ? "var(--primary)" : "var(--text-muted)",
                background: "none", border: "none",
                borderBottom: `2px solid ${activeTab === tab ? "var(--primary)" : "transparent"}`,
                marginBottom: "-2px",
                cursor: "pointer", fontFamily: "var(--font)",
                textTransform: "capitalize",
                transition: "all 0.15s",
              }}
            >
              {tab === "bids" ? `Bid Comparison (${bids.length})` : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* ── Tab: Bid Comparison ── */}
        {activeTab === "bids" && (
          <div style={{ animation: "fadeInUp 0.3s ease" }}>
            {bids.length === 0 ? (
              <div style={{
                background: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)",
                padding: "64px 40px", textAlign: "center",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>📭</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text)", marginBottom: "8px" }}>No bids received yet</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Issue an RFP to begin collecting bids from vendors</p>
              </div>
            ) : (
              <>
                {/* Decision Summary */}
                {bidsWithScores.length > 0 && (
                  <div style={{
                    background: "linear-gradient(135deg, rgba(22,163,74,0.05), rgba(22,163,74,0.02))",
                    border: "1px solid rgba(22,163,74,0.2)", borderRadius: "12px",
                    padding: "18px 20px", marginBottom: "20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "8px",
                        background: "var(--status-awarded-bg)", color: "var(--status-awarded)",
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px",
                      }}>
                        {Icons.star}
                      </div>
                      <div>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--status-awarded)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                          System Recommendation
                        </div>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text)" }}>
                          {bidsWithScores[0].vendor}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--text-muted)", flex: 1 }}>
                      Highest overall score ({bidsWithScores[0].overall}/100) based on price, scope completeness & bid leveling
                    </div>
                    <button
                      onClick={() => setSelectedVendorIdx(bidsWithScores[0].originalIdx)}
                      style={{
                        background: "var(--status-awarded)", border: "none", color: "white",
                        borderRadius: "6px", padding: "8px 16px", fontSize: "13px", fontWeight: 700,
                        cursor: "pointer", fontFamily: "var(--font)", display: "flex", alignItems: "center", gap: "6px",
                      }}
                    >
                      {Icons.check} Select Winner
                    </button>
                  </div>
                )}

                {/* Comparison Table */}
                <div style={{
                  background: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)",
                  overflow: "hidden", boxShadow: "var(--shadow-xs)",
                }}>
                  <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
                    <thead>
                      <tr style={{ background: "var(--bg)" }}>
                        {["VENDOR", "BID AMOUNT", "VARIANCE", "SCOPE", "PRCE SCORE", "OVERALL SCORE", "RANK", ""].map((h) => (
                          <th key={h} style={{
                            padding: "12px 16px", fontSize: "11px", fontWeight: 700,
                            color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em",
                            textAlign: "left", whiteSpace: "nowrap", borderBottom: "1px solid var(--border)",
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bidsWithScores.map((bid, rankIdx) => {
                        const isRecommended = rankIdx === 0;
                        const isSelected = selectedVendorIdx === bid.originalIdx;
                        const bidVariance = pkg.budget && bid.amount > 0
                          ? ((bid.amount - pkg.budget) / pkg.budget * 100).toFixed(1)
                          : null;
                        const bidVarVal = bidVariance ? parseFloat(bidVariance) : 0;

                        return (
                          <tr key={bid.originalIdx} style={{
                            background: isSelected
                              ? "rgba(249,115,22,0.03)"
                              : isRecommended
                              ? "rgba(22,163,74,0.02)"
                              : "var(--card)",
                            cursor: "pointer",
                            transition: "background 0.12s",
                            borderLeft: isSelected ? "3px solid var(--primary)" : isRecommended ? "3px solid var(--status-awarded)" : "3px solid transparent",
                          }}
                          onClick={() => setSelectedVendorIdx(bid.originalIdx)}
                          onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = "var(--bg)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = isSelected ? "rgba(249,115,22,0.03)" : isRecommended ? "rgba(22,163,74,0.02)" : "var(--card)"; }}
                          >
                            {/* Vendor */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--text)" }}>{bid.vendor}</div>
                                {isRecommended && (
                                  <span style={{
                                    background: "rgba(22,163,74,0.08)", color: "var(--status-awarded)",
                                    fontSize: "10px", fontWeight: 700, padding: "2px 7px",
                                    borderRadius: "3px", display: "flex", alignItems: "center", gap: "3px",
                                  }}>
                                    {Icons.star} Recommended
                                  </span>
                                )}
                              </div>
                              <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                                Received {bid.received}
                              </div>
                            </td>

                            {/* Amount */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
                              <span style={{ fontSize: "15px", fontWeight: 700, fontFamily: "var(--mono)", color: "var(--text)" }}>
                                {bid.amount > 0 ? fmt(bid.amount) : "TBD"}
                              </span>
                            </td>

                            {/* Variance */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
                              {bidVariance ? (
                                <span style={{
                                  fontSize: "12px", fontWeight: 700, fontFamily: "var(--mono)",
                                  padding: "3px 8px", borderRadius: "4px",
                                  background: bidVarVal <= 0 ? "rgba(5,150,105,0.08)" : "rgba(220,38,38,0.08)",
                                  color: bidVarVal <= 0 ? "var(--savings)" : "var(--status-overdue)",
                                }}>
                                  {bidVarVal > 0 ? "+" : ""}{bidVariance}%
                                </span>
                              ) : "—"}
                            </td>

                            {/* Scope */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
                              <span style={{
                                fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "4px",
                                background: bid.scopeComplete === "Complete" ? "rgba(22,163,74,0.08)" : "rgba(245,158,11,0.08)",
                                color: bid.scopeComplete === "Complete" ? "var(--status-awarded)" : "var(--status-reviewing)",
                              }}>
                                {bid.scopeComplete}
                              </span>
                            </td>

                            {/* Price Score */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)", minWidth: "120px" }}>
                              <ScoreBar score={bid.priceScore} color="var(--savings)" />
                            </td>

                            {/* Overall Score */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)", minWidth: "120px" }}>
                              <ScoreBar
                                score={bid.overall}
                                color={rankIdx === 0 ? "var(--status-awarded)" : rankIdx === 1 ? "var(--status-bidding)" : "var(--border-dark)"}
                              />
                            </td>

                            {/* Rank */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
                              <span style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center",
                                width: "28px", height: "28px", borderRadius: "6px",
                                fontSize: "12px", fontWeight: 800, fontFamily: "var(--mono)",
                                background: rankIdx === 0 ? "rgba(22,163,74,0.1)" : rankIdx === 1 ? "rgba(37,99,235,0.08)" : "var(--bg)",
                                color: rankIdx === 0 ? "var(--status-awarded)" : rankIdx === 1 ? "var(--status-bidding)" : "var(--text-muted)",
                              }}>
                                #{rankIdx + 1}
                              </span>
                            </td>

                            {/* Select */}
                            <td style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
                              {isSelected ? (
                                <span style={{
                                  fontSize: "12px", fontWeight: 700, color: "var(--primary)",
                                  display: "flex", alignItems: "center", gap: "4px",
                                }}>
                                  {Icons.check} Selected
                                </span>
                              ) : (
                                <button
                                  onClick={(e) => { e.stopPropagation(); setSelectedVendorIdx(bid.originalIdx); }}
                                  style={{
                                    fontSize: "12px", fontWeight: 600, color: "var(--primary)",
                                    background: "none", border: "1px solid var(--primary-border)", borderRadius: "5px",
                                    padding: "4px 12px", cursor: "pointer", fontFamily: "var(--font)",
                                    transition: "all 0.15s",
                                  }}
                                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.color = "white"; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--primary)"; }}
                                >
                                  Select
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Tab: Overview ── */}
        {activeTab === "overview" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", animation: "fadeInUp 0.3s ease" }}>
            {/* Package Identity */}
            <div style={{ background: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)", padding: "20px", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)", marginBottom: "16px", paddingBottom: "10px", borderBottom: "1px solid var(--border)" }}>Package Identity</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                {[
                  { label: "Trade", value: pkg.trade },
                  { label: "CSI Division", value: pkg.csi },
                  { label: "Project", value: pkg.project },
                  { label: "Project Manager", value: pkg.pm },
                  { label: "Priority", value: pkg.priority },
                  { label: "Risk Level", value: pkg.risk },
                ].map((f) => (
                  <div key={f.label}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>{f.label}</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)" }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div style={{ background: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)", padding: "20px", boxShadow: "var(--shadow-xs)" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)", marginBottom: "16px", paddingBottom: "10px", borderBottom: "1px solid var(--border)" }}>Schedule & Financials</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                {[
                  { label: "Target Award", value: pkg.dueDate },
                  { label: "On-Site Date", value: pkg.onSiteDate || "—" },
                  { label: "Budget", value: fmt(pkg.budget) },
                  { label: "Low Bid", value: fmt(pkg.lowBid) },
                  { label: "Long Lead", value: pkg.longLead ? "Yes" : "No" },
                  { label: "Contract Status", value: pkg.contractStatus },
                ].map((f) => (
                  <div key={f.label}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>{f.label}</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)", fontFamily: ["Budget", "Low Bid"].includes(f.label) ? "var(--mono)" : "var(--font)" }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {pkg.notes && (
              <div style={{ gridColumn: "1 / -1", background: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)", padding: "20px", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text)", marginBottom: "12px" }}>Notes</div>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{pkg.notes}</p>
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Activity ── */}
        {activeTab === "activity" && (
          <div style={{ animation: "fadeInUp 0.3s ease" }}>
            <div style={{ background: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)", overflow: "hidden" }}>
              {[
                { icon: "📋", title: "Package created", time: "Apr 1, 2025", desc: "Added to buyout log by Jay Patel" },
                { icon: "📤", title: "RFP issued", time: "Apr 5, 2025", desc: `Sent to ${bids.length} vendor${bids.length !== 1 ? "s" : ""}` },
                { icon: "📥", title: "Bids received", time: "Apr 10–12, 2025", desc: `${bids.length} bid${bids.length !== 1 ? "s" : ""} submitted` },
                { icon: "🔍", title: "Scope leveling started", time: "Apr 14, 2025", desc: "Team reviewing inclusions/exclusions" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: "14px", padding: "16px 20px",
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "8px", background: "var(--bg)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{item.desc}</div>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: "12px", color: "var(--text-light)", fontFamily: "var(--mono)", flexShrink: 0 }}>
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

const backBtnStyle: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: "6px",
  background: "var(--primary)", color: "white", border: "none",
  borderRadius: "8px", padding: "10px 20px", fontSize: "14px", fontWeight: 600,
  cursor: "pointer", fontFamily: "var(--font)",
};
