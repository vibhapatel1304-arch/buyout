"use client";

import React, { useState } from "react";

/**
 * PUBLIC VENDOR BID FORM — /bid/[token]
 *
 * This page is accessible without login.
 * The token encodes which package this bid is for.
 *
 * In production:
 *  - Fetch package info from /api/bid/[token] using the token
 *  - POST the completed bid to /api/bid/[token]/submit
 *  - Store the bid in your database and update the package's coverageCount
 *
 * For now, the token is parsed to show the package name, and the form
 * simulates a successful submission.
 */

interface BidFormData {
  vendorName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  bidAmount: string;
  scopeComplete: string;
  inclusions: string;
  exclusions: string;
  alternates: string;
  qualifications: string;
  notes: string;
  acceptedTerms: boolean;
}

function parseTokenLabel(token: string): string {
  // token format: pkg-{id}-{slug}-{rand}
  // e.g. pkg-11-plumbing-abc123  →  "Plumbing"
  const parts = token.split("-");
  if (parts.length >= 3) {
    const slug = parts.slice(2, parts.length - 1).join(" ");
    return slug.replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return "Trade Package";
}

export default function VendorBidPage({ params }: { params: { token: string } }) {
  const { token } = params;
  const packageName = parseTokenLabel(token);

  const [step, setStep] = useState<"form" | "submitted">("form");
  const [errors, setErrors] = useState<Partial<Record<keyof BidFormData, string>>>({});
  const [form, setForm] = useState<BidFormData>({
    vendorName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    bidAmount: "",
    scopeComplete: "",
    inclusions: "",
    exclusions: "",
    alternates: "None",
    qualifications: "",
    notes: "",
    acceptedTerms: false,
  });

  const set = (field: keyof BidFormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof BidFormData, string>> = {};
    if (!form.vendorName.trim()) e.vendorName = "Company name is required.";
    if (!form.contactName.trim()) e.contactName = "Contact name is required.";
    if (!form.contactEmail.trim() || !form.contactEmail.includes("@"))
      e.contactEmail = "A valid email is required.";
    if (!form.bidAmount || isNaN(Number(form.bidAmount)) || Number(form.bidAmount) <= 0)
      e.bidAmount = "Enter a valid bid amount.";
    if (!form.scopeComplete) e.scopeComplete = "Please select scope completeness.";
    if (!form.inclusions.trim()) e.inclusions = "Describe what is included in your bid.";
    if (!form.qualifications.trim()) e.qualifications = "List any qualifications or conditions.";
    if (!form.acceptedTerms) e.acceptedTerms = "You must accept the terms to submit.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    // TODO: replace with real API call
    // await fetch(`/api/bid/${token}/submit`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...form, bidAmount: Number(form.bidAmount) }),
    // });

    setStep("submitted");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "9px 12px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    fontSize: 14,
    color: "#111",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color .15s",
    background: "#fff",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 5,
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 12,
    color: "#ef4444",
    marginTop: 4,
  };

  const sectionStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "20px 24px",
    marginBottom: 20,
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 700,
    color: "#f97316",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    marginBottom: 16,
    paddingBottom: 10,
    borderBottom: "2px solid #fed7aa",
  };

  if (step === "submitted") {
    return (
      <div style={{ minHeight: "100vh", background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px", fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div style={{ maxWidth: 480, width: "100%", background: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", padding: "48px 40px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dcfce7", border: "2px solid #22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 20px" }}>✓</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 8 }}>Bid Submitted!</h1>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 20 }}>
            Thank you, <strong>{form.vendorName}</strong>. Your bid for <strong>{packageName}</strong> has been received.
            The project team will review all submissions and reach out to you directly.
          </p>
          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "14px 18px", textAlign: "left", marginBottom: 24 }}>
            <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 600 }}>Your Submission</div>
            <div style={{ fontSize: 14, color: "#111", fontWeight: 600 }}>{form.vendorName}</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>{form.contactEmail}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#f97316", marginTop: 8 }}>
              ${Number(form.bidAmount).toLocaleString()} — {form.scopeComplete} Scope
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>You can close this page. A confirmation has been logged with reference token: <code style={{ background: "#f3f4f6", padding: "2px 6px", borderRadius: 4, fontSize: 11 }}>{token}</code></p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* HEADER */}
      <div style={{ background: "#0a0a0a", padding: "14px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#000" }}>BC</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Boulder Construction</div>
          <div style={{ fontSize: 10, color: "#6b7280", textTransform: "uppercase", letterSpacing: "1px" }}>Vendor Bid Portal</div>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "32px 16px 60px" }}>

        {/* PACKAGE INFO BANNER */}
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 12, padding: "18px 22px", marginBottom: 28, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ fontSize: 28 }}>📋</div>
          <div>
            <div style={{ fontSize: 12, color: "#f97316", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.7px", marginBottom: 3 }}>Bid Invitation</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 4 }}>{packageName}</div>
            <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>
              You have been invited to submit a bid for this construction package. Fill out all fields carefully — your submission will be reviewed directly by the project team.
            </div>
          </div>
        </div>

        {/* COMPANY INFO */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Your Company</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={labelStyle}>Company / Vendor Name <span style={{ color: "#ef4444" }}>*</span></label>
              <input style={{ ...inputStyle, borderColor: errors.vendorName ? "#ef4444" : "#d1d5db" }}
                placeholder="e.g. Apex Plumbing Inc." value={form.vendorName}
                onChange={(e) => set("vendorName", e.target.value)} />
              {errors.vendorName && <div style={errorStyle}>{errors.vendorName}</div>}
            </div>
            <div>
              <label style={labelStyle}>Contact Name <span style={{ color: "#ef4444" }}>*</span></label>
              <input style={{ ...inputStyle, borderColor: errors.contactName ? "#ef4444" : "#d1d5db" }}
                placeholder="First Last" value={form.contactName}
                onChange={(e) => set("contactName", e.target.value)} />
              {errors.contactName && <div style={errorStyle}>{errors.contactName}</div>}
            </div>
            <div>
              <label style={labelStyle}>Contact Email <span style={{ color: "#ef4444" }}>*</span></label>
              <input style={{ ...inputStyle, borderColor: errors.contactEmail ? "#ef4444" : "#d1d5db" }}
                type="email" placeholder="you@company.com" value={form.contactEmail}
                onChange={(e) => set("contactEmail", e.target.value)} />
              {errors.contactEmail && <div style={errorStyle}>{errors.contactEmail}</div>}
            </div>
            <div>
              <label style={labelStyle}>Phone (optional)</label>
              <input style={inputStyle} type="tel" placeholder="(555) 000-0000"
                value={form.contactPhone} onChange={(e) => set("contactPhone", e.target.value)} />
            </div>
          </div>
        </div>

        {/* BID FINANCIALS */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Bid Amount & Scope</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={labelStyle}>Total Bid Amount <span style={{ color: "#ef4444" }}>*</span></label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#6b7280", fontWeight: 600 }}>$</span>
                <input style={{ ...inputStyle, paddingLeft: 26, borderColor: errors.bidAmount ? "#ef4444" : "#d1d5db" }}
                  type="number" placeholder="125000" value={form.bidAmount}
                  onChange={(e) => set("bidAmount", e.target.value)} />
              </div>
              {errors.bidAmount && <div style={errorStyle}>{errors.bidAmount}</div>}
            </div>
            <div>
              <label style={labelStyle}>Scope Completeness <span style={{ color: "#ef4444" }}>*</span></label>
              <select style={{ ...inputStyle, borderColor: errors.scopeComplete ? "#ef4444" : "#d1d5db", cursor: "pointer" }}
                value={form.scopeComplete} onChange={(e) => set("scopeComplete", e.target.value)}>
                <option value="">— Select —</option>
                <option value="Complete">Complete — all scope included</option>
                <option value="Partial">Partial — some items excluded</option>
                <option value="Incomplete">Incomplete — significant gaps</option>
              </select>
              {errors.scopeComplete && <div style={errorStyle}>{errors.scopeComplete}</div>}
            </div>
          </div>
        </div>

        {/* SCOPE DETAIL */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Scope Detail</div>
          <div style={{ display: "grid", gap: 16 }}>
            <div>
              <label style={labelStyle}>Inclusions <span style={{ color: "#ef4444" }}>*</span></label>
              <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" } as React.CSSProperties}
                placeholder="Describe everything included in your bid scope…"
                value={form.inclusions} onChange={(e) => set("inclusions", e.target.value)} />
              {errors.inclusions && <div style={errorStyle}>{errors.inclusions}</div>}
            </div>
            <div>
              <label style={labelStyle}>Exclusions</label>
              <textarea style={{ ...inputStyle, minHeight: 70, resize: "vertical" } as React.CSSProperties}
                placeholder="List any items explicitly excluded (or write 'None')…"
                value={form.exclusions} onChange={(e) => set("exclusions", e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Alternates / Value Engineering Options</label>
              <textarea style={{ ...inputStyle, minHeight: 60, resize: "vertical" } as React.CSSProperties}
                placeholder="Any alternates or VE suggestions (or write 'None')…"
                value={form.alternates} onChange={(e) => set("alternates", e.target.value)} />
            </div>
          </div>
        </div>

        {/* QUALIFICATIONS */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Qualifications & Conditions</div>
          <div>
            <label style={labelStyle}>Qualifications <span style={{ color: "#ef4444" }}>*</span></label>
            <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" } as React.CSSProperties}
              placeholder="List licenses, certifications, bonding, insurance, past project experience…"
              value={form.qualifications} onChange={(e) => set("qualifications", e.target.value)} />
            {errors.qualifications && <div style={errorStyle}>{errors.qualifications}</div>}
          </div>
          <div style={{ marginTop: 16 }}>
            <label style={labelStyle}>Additional Notes</label>
            <textarea style={{ ...inputStyle, minHeight: 70, resize: "vertical" } as React.CSSProperties}
              placeholder="Any clarifications, assumptions, or questions for the project team…"
              value={form.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
        </div>

        {/* TERMS & SUBMIT */}
        <div style={sectionStyle}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}>
            <input type="checkbox" id="terms" checked={form.acceptedTerms}
              onChange={(e) => set("acceptedTerms", e.target.checked)}
              style={{ marginTop: 2, width: 16, height: 16, accentColor: "#f97316", flexShrink: 0, cursor: "pointer" }} />
            <label htmlFor="terms" style={{ fontSize: 13, color: "#374151", lineHeight: 1.6, cursor: "pointer" }}>
              I confirm that the information provided is accurate and complete. I understand this bid will be reviewed by the project team and may be used in vendor selection. <span style={{ color: "#f97316", fontWeight: 600 }}>*</span>
            </label>
          </div>
          {errors.acceptedTerms && <div style={{ ...errorStyle, marginBottom: 16 }}>{errors.acceptedTerms}</div>}

          <button
            onClick={handleSubmit}
            style={{ width: "100%", padding: "13px 0", borderRadius: 10, border: "none", background: "#f97316", color: "#000", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", transition: "background .15s", letterSpacing: "0.3px" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#ea6a00")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f97316")}
          >
            Submit Bid →
          </button>
          <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 10, lineHeight: 1.5 }}>
            Your bid will be sent directly to the Boulder Construction project team. You will not be able to edit it after submission.
          </p>
        </div>

      </div>
    </div>
  );
}
