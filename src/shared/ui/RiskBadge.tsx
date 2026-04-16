"use client";

import React from "react";

type Props = {
  risk?: string;
};

export default function RiskBadge({ risk }: Props) {
  const value = risk || "Low";

  const styles: Record<string, string> = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        styles[value] || "bg-gray-100 text-gray-600"
      }`}
    >
      {value}
    </span>
  );
}
