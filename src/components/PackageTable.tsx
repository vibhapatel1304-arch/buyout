"use client";

import React, { useMemo, useState } from "react";
import { Package } from "@/types";
import { cn } from "@/lib/utils";
import { StatusBadge, AnyStatus } from "./StatusBadge";

interface PackageTableProps {
  packages: Package[];
  selectedPackage: Package | null;
  onSelectPackage: (pkg: Package) => void;
  onDropboxClick?: (pkg: Package) => void;
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

function calculateVariance(budget: number, lowBid: number | null): { value: string; color: string } {
  if (!lowBid || !budget) return { value: "—", color: "gray" };
  const variance = ((lowBid - budget) / budget) * 100;
  const formatted = variance > 0 ? `+${variance.toFixed(1)}%` : `${variance.toFixed(1)}%`;
  const color = variance <= 0 ? "green" : variance > 10 ? "red" : "yellow";
  return { value: formatted, color };
}

function formatDueDate(dateStr: string, days: number): { text: string; color: string } {
  if (days < 0) return { text: `${Math.abs(days)}d overdue`, color: "red" };
  if (days === 0) return { text: "Today", color: "orange" };
  if (days <= 3) return { text: `${days}d left`, color: "orange" };
  return { text: `${days}d left`, color: "gray" };
}

export function PackageTable({
  packages,
  selectedPackage,
  onSelectPackage,
  onDropboxClick,
}: PackageTableProps) {
  // 🔃 Sorting
  const [sortKey, setSortKey] = useState<keyof Package>("order");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // 📄 Pagination
  const [page, setPage] = useState(1);
  const pageSize = 8;

  // 🔃 SORT ONLY (no search here)
  const sortedData = useMemo(() => {
    let data = [...packages];

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

  // 📄 Pagination logic
  const totalPages = Math.ceil(sortedData.length / pageSize);

  const paginatedData = sortedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // 🔃 Sort click handler
  const handleSort = (key: keyof Package) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setPage(1); // reset page on sort
  };

  if (packages.length === 0) {
    return (
      <div className="buyout-list-wrap">
        <div className="buyout-table-container">
          <div className="empty-state">
            <p>No packages match the current filters</p>
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
              <th onClick={() => handleSort("order")} className="cursor-pointer w-12">
                # {sortKey === "order" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("name")} className="cursor-pointer">
                Package Name {sortKey === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("trade")} className="cursor-pointer w-32">
                Trade {sortKey === "trade" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("pm")} className="cursor-pointer w-28">
                PM {sortKey === "pm" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("budget")} className="cursor-pointer w-28 text-right">
                Budget {sortKey === "budget" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("lowBid")} className="cursor-pointer w-28 text-right">
                Low Bid {sortKey === "lowBid" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th className="w-24 text-center">
                Variance
              </th>

              <th onClick={() => handleSort("bidsReceived")} className="cursor-pointer w-20 text-center">
                Bids {sortKey === "bidsReceived" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("dueDate")} className="cursor-pointer w-28">
                Due Date {sortKey === "dueDate" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>

              <th onClick={() => handleSort("status")} className="cursor-pointer w-36">
                Status {sortKey === "status" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((pkg) => {
              const isSelected = selectedPackage?.id === pkg.id;
              const days = daysFromTodayLocal(pkg.dueDate);
              const isOverdue = pkg.overdue || days < 0;
              const variance = calculateVariance(pkg.budget || 0, pkg.lowBid);
              const dueDateInfo = formatDueDate(pkg.dueDate, days);

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

                  {/* Package Name */}
                  <td>
                    <div className="pkg-name">
                      {pkg.longLead && (
                        <span className="pkg-longalert">LL</span>
                      )}
                      {pkg.urgent && (
                        <span className="pkg-urgent">!</span>
                      )}
                      <span>{pkg.name}</span>
                    </div>
                    <div className="pkg-meta">
                      {pkg.csi} · {pkg.project}
                    </div>
                  </td>

                  {/* Trade */}
                  <td>
                    <span className="trade-pill">{pkg.trade}</span>
                  </td>

                  {/* PM */}
                  <td>
                    <span className="pm-name">{pkg.pm}</span>
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
                      {variance.value}
                    </span>
                  </td>

                  {/* Bids Count */}
                  <td className="text-center">
                    {pkg.bidsReceived > 0 ? (
                      <span className="bids-count-badge">
                        {pkg.bidsReceived}
                      </span>
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
                    <StatusBadge status={pkg.status as AnyStatus} size="sm" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* 📄 PAGINATION */}
        <div className="flex justify-between items-center p-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span>
            Page {page} of {totalPages || 1}
          </span>

          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
