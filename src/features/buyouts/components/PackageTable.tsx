"use client";

import React, { useMemo, useState } from "react";
import { Package } from "@/types";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/shared/ui/StatusBadge";

interface PackageTableProps {
  packages: Package[];
  selectedPackage: Package | null;
  onSelectPackage: (pkg: Package) => void;
}

const TODAY = new Date("2025-04-15");

function daysFromTodayLocal(dateStr: string) {
  return Math.round(
    (new Date(dateStr).getTime() - TODAY.getTime()) / 86400000
  );
}

function formatCurrency(amount: number | null): string {
  if (!amount) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function calculateVariance(budget: number, lowBid: number | null): { value: string; color: string; arrow: string } {
  if (!lowBid || !budget) return { value: "—", color: "gray", arrow: "" };
  const variance = ((lowBid - budget) / budget) * 100;
  const formatted = variance > 0 ? `+${variance.toFixed(1)}%` : `${variance.toFixed(1)}%`;
  const color = variance <= 0 ? "green" : variance > 10 ? "red" : "yellow";
  const arrow = variance < 0 ? "↓" : variance > 0 ? "↑" : "→";
  return { value: formatted, color, arrow };
}

function formatDueDate(days: number): { text: string; color: string } {
  if (days < 0) return { text: `${Math.abs(days)}d overdue`, color: "red" };
  if (days === 0) return { text: "Due today", color: "red" };
  if (days <= 3) return { text: `${days}d left`, color: "orange" };
  if (days <= 7) return { text: `${days}d left`, color: "orange" };
  return { text: `${days}d left`, color: "gray" };
}

export function PackageTable({
  packages,
  selectedPackage,
  onSelectPackage,
}: PackageTableProps) {
  const [sortKey, setSortKey] = useState<keyof Package>("order");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const sortedData = useMemo(() => {
    const data = [...packages];
    data.sort((a: any, b: any) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      return sortOrder === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
    return data;
  }, [packages, sortKey, sortOrder]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (key: keyof Package) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setPage(1);
  };

  const SortIndicator = ({ column }: { column: keyof Package }) => {
    if (sortKey !== column) return <span style={{ opacity: 0.3, marginLeft: 4 }}>↕</span>;
    return <span style={{ color: 'var(--primary)', marginLeft: 4 }}>{sortOrder === "asc" ? "↑" : "↓"}</span>;
  };

  if (packages.length === 0) {
    return (
      <div className="buyout-list-wrap">
        <div className="buyout-table-container">
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <p>No packages match current filters</p>
            <small>Try adjusting your filter chips or search query</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="buyout-list-wrap">
      <div className="buyout-table-container">
        <table id="buyoutTable">
          <thead>
            <tr>
              <th onClick={() => handleSort("order")} style={{ width: '48px' }}>
                #<SortIndicator column="order" />
              </th>
              <th onClick={() => handleSort("name")}>
                PACKAGE<SortIndicator column="name" />
              </th>
              <th onClick={() => handleSort("budget")} style={{ width: '100px', textAlign: 'right' }}>
                BUDGET<SortIndicator column="budget" />
              </th>
              <th onClick={() => handleSort("lowBid")} style={{ width: '100px', textAlign: 'right' }}>
                LOW BID<SortIndicator column="lowBid" />
              </th>
              <th style={{ width: '80px', textAlign: 'center' }}>
                VARIANCE
              </th>
              <th onClick={() => handleSort("bidsReceived")} style={{ width: '60px', textAlign: 'center' }}>
                BIDS<SortIndicator column="bidsReceived" />
              </th>
              <th onClick={() => handleSort("dueDate")} style={{ width: '110px' }}>
                DUE<SortIndicator column="dueDate" />
              </th>
              <th onClick={() => handleSort("status")} style={{ width: '140px' }}>
                STATUS<SortIndicator column="status" />
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((pkg) => {
              const isSelected = selectedPackage?.id === pkg.id;
              const days = daysFromTodayLocal(pkg.dueDate);
              const isOverdue = pkg.overdue || days < 0;
              const variance = calculateVariance(pkg.budget || 0, pkg.lowBid);
              const dueDateInfo = formatDueDate(days);

              return (
                <tr
                  key={pkg.id}
                  className={cn(
                    "table-row",
                    isSelected && "selected",
                    isOverdue && "overdue-row"
                  )}
                  onClick={() => onSelectPackage(pkg)}
                >
                  {/* # */}
                  <td>
                    <span className="order-num">{pkg.order}</span>
                  </td>

                  {/* Package — Information Layered */}
                  <td>
                    <div className="pkg-name">
                      {pkg.longLead && <span className="pkg-longalert">LL</span>}
                      {pkg.urgent && <span className="pkg-urgent">!</span>}
                      <span>{pkg.name}</span>
                    </div>
                    <div className="pkg-meta">
                      {pkg.project} · {pkg.pm} · {pkg.trade}
                    </div>
                  </td>

                  {/* Budget */}
                  <td className="text-right">
                    <span className="amount budget">{formatCurrency(pkg.budget)}</span>
                  </td>

                  {/* Low Bid */}
                  <td className="text-right">
                    <span className={cn("amount", pkg.lowBid ? "low-bid" : "no-bid")}>
                      {formatCurrency(pkg.lowBid)}
                    </span>
                  </td>

                  {/* Variance */}
                  <td className="text-center">
                    <span className={`variance-badge variance-${variance.color}`}>
                      {variance.arrow} {variance.value}
                    </span>
                  </td>

                  {/* Bids */}
                  <td className="text-center">
                    {pkg.bidsReceived > 0 ? (
                      <span className="bids-count-badge">{pkg.bidsReceived}</span>
                    ) : (
                      <span className="no-bids-tag">—</span>
                    )}
                  </td>

                  {/* Due Date */}
                  <td>
                    <div className="due-date">
                      <span className="date-text">{pkg.dueDate}</span>
                      <span className={`due-badge due-${dueDateInfo.color}`}>
                        {dueDateInfo.text}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td>
                    <StatusBadge status={pkg.status} size="sm" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          borderTop: '1px solid var(--border)',
          background: 'var(--card)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            style={{
              padding: '6px 14px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--card)',
              color: 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              opacity: page === 1 ? 0.4 : 1,
              fontFamily: 'var(--font)',
            }}
          >
            ← Previous
          </button>

          <span style={{ fontFamily: 'var(--mono)', fontWeight: 600 }}>
            Page {page} of {totalPages || 1}
          </span>

          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage(page + 1)}
            style={{
              padding: '6px 14px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--card)',
              color: 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: page === totalPages ? 'not-allowed' : 'pointer',
              opacity: page === totalPages || totalPages === 0 ? 0.4 : 1,
              fontFamily: 'var(--font)',
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
