"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PackageStatus, statusWorkflow } from "@/shared/ui/StatusBadge";

interface StatusTimelineProps {
  currentStatus: PackageStatus;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

const statusLabels: Record<PackageStatus, string> = {
  Draft: "Draft",
  Invited: "Invited",
  Bidding: "Bidding",
  Reviewing: "Reviewing",
  "Ready to Award": "Ready",
  Awarded: "Awarded",
  Executed: "Done",
};

const statusDescriptions: Record<PackageStatus, string> = {
  Draft: "Package created, not yet sent",
  Invited: "Vendors invited to bid",
  Bidding: "Bids being received",
  Reviewing: "Bids under review",
  "Ready to Award": "Decision pending",
  Awarded: "Contract awarded",
  Executed: "Contract complete",
};

export function StatusTimeline({
  currentStatus,
  size = "md",
  showLabels = true,
}: StatusTimelineProps) {
  const currentIndex = statusWorkflow.indexOf(currentStatus);

  const sizeClasses = {
    sm: {
      container: "gap-1",
      dot: "w-2 h-2",
      line: "w-4",
      label: "text-[10px]",
    },
    md: {
      container: "gap-2",
      dot: "w-3 h-3",
      line: "w-8",
      label: "text-xs",
    },
    lg: {
      container: "gap-3",
      dot: "w-4 h-4",
      line: "w-12",
      label: "text-sm",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className="w-full">
      <div className={`flex items-center ${classes.container}`}>
        {statusWorkflow.map((status, index) => {
          const isCompleted = index <= currentIndex;
          const isCurrent = index === currentIndex;
          const isPending = index > currentIndex;

          return (
            <React.Fragment key={status}>
              {/* Status Dot */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    `${classes.dot} rounded-full border-2 transition-all duration-300`,
                    isCompleted && !isCurrent && "bg-green-500 border-green-500",
                    isCurrent && "bg-amber-500 border-amber-500 ring-2 ring-amber-200 ring-offset-2",
                    isPending && "bg-white border-gray-300"
                  )}
                  title={statusDescriptions[status]}
                >
                  {isCompleted && !isCurrent && (
                    <svg
                      className="w-full h-full text-white p-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                {showLabels && (
                  <span
                    className={cn(
                      `${classes.label} font-medium whitespace-nowrap`,
                      isCompleted ? "text-gray-900" : "text-gray-400",
                      isCurrent && "text-amber-600"
                    )}
                  >
                    {statusLabels[status]}
                  </span>
                )}
              </div>

              {/* Connector Line */}
              {index < statusWorkflow.length - 1 && (
                <div
                  className={cn(
                    `${classes.line} h-0.5 rounded-full transition-all duration-300`,
                    index < currentIndex ? "bg-green-500" : "bg-gray-200"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Current Status Description */}
      <div className="mt-3 text-sm text-gray-500">
        <span className="font-medium text-gray-900">{currentStatus}</span>
        <span className="mx-2">·</span>
        <span>{statusDescriptions[currentStatus]}</span>
      </div>
    </div>
  );
}

// Compact vertical timeline for package detail
export function StatusTimelineVertical({
  currentStatus,
  history = [],
}: {
  currentStatus: PackageStatus;
  history?: { status: PackageStatus; date: string; note?: string }[];
}) {
  const currentIndex = statusWorkflow.indexOf(currentStatus);

  return (
    <div className="space-y-0">
      {statusWorkflow.map((status, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isPending = index > currentIndex;
        const historyItem = history.find((h) => h.status === status);

        return (
          <div key={status} className="flex gap-3">
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-3 h-3 rounded-full border-2 z-10",
                  isCompleted && "bg-green-500 border-green-500",
                  isCurrent && "bg-amber-500 border-amber-500",
                  isPending && "bg-white border-gray-300"
                )}
              />
              {index < statusWorkflow.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 flex-1 min-h-[24px]",
                    index < currentIndex ? "bg-green-500" : "bg-gray-200"
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className={cn("pb-4", isPending && "opacity-50")}>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "text-sm font-medium",
                    isCompleted && "text-green-700",
                    isCurrent && "text-amber-700",
                    isPending && "text-gray-400"
                  )}
                >
                  {status}
                </span>
                {historyItem && (
                  <span className="text-xs text-gray-400">
                    {historyItem.date}
                  </span>
                )}
              </div>
              {historyItem?.note && (
                <p className="text-xs text-gray-500 mt-0.5">{historyItem.note}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
