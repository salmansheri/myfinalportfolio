"use client";

import { useState } from "react";
import { Awaiting } from "./Awaiting";

type CopyState = "idle" | "copied" | "failed";

const actionType = "font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-none font-extrabold tracking-[0.02em] uppercase";

function ArrowIcon() {
  return (
    <svg
      className="size-[1.1em] flex-none transition-transform duration-[220ms] ease-out-expo group-hover:translate-x-1"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M3 12h16M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="size-4 flex-none" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8h12v12H8zM4 16V4h12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function EmailAction({ email, tone = "form" }: { email: string | null; tone?: "form" | "steel" }) {
  const [copy, setCopy] = useState<CopyState>("idle");
  const steel = tone === "steel";

  if (!email) {
    return (
      <div className="grid gap-3.5">
        {/* An open line on the form until the address is filled in */}
        <a role="link" aria-disabled="true" className={`grid cursor-default gap-2 ${steel ? "text-ink" : "text-carbon"}`}>
          <span className={actionType}>Contact</span>
          <span className="flex items-end gap-3 border-b-[1.5px] border-current pb-1.5">
            <span className="text-xs font-semibold tracking-[0.08em] uppercase">address</span>
            <Awaiting what="Email address" tilt={-2} />
          </span>
        </a>
      </div>
    );
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(email!);
      setCopy("copied");
    } catch {
      setCopy("failed");
    }
    window.setTimeout(() => setCopy("idle"), 2400);
  }

  return (
    <div className="grid gap-3.5">
      <a
        className={`group flex items-center justify-between gap-4 px-5 pt-4 pb-[0.9rem] no-underline shadow-[0_10px_22px_-12px_rgb(21_23_26/0.6)] transition-[background-color,translate] duration-[180ms] ease-out-expo hover:-translate-y-px active:translate-y-px ${actionType} ${
          steel ? "bg-form text-ink hover:bg-ink hover:text-form" : "bg-ink text-form hover:bg-carbon"
        }`}
        href={`mailto:${email}`}
      >
        Contact
        <ArrowIcon />
      </a>
      <p className={`flex flex-wrap items-center gap-x-3.5 gap-y-2 text-[0.9375rem] ${steel ? "text-ink" : "text-ink-soft"}`}>
        <span className="font-semibold text-ink select-all">{email}</span>
        <button
          type="button"
          className={`inline-flex cursor-pointer items-center gap-1.5 border bg-transparent px-2.5 py-1 font-semibold ${
            steel ? "border-ink text-ink" : "border-carbon-rule text-carbon hover:border-carbon"
          }`}
          onClick={copyAddress}
        >
          <CopyIcon />
          <span key={copy} className={copy === "idle" ? undefined : "inline-block animate-stamp-in motion-reduce:animate-none"}>
            {copy === "copied" ? "Copied" : copy === "failed" ? "Copy failed, select the address" : "Copy address"}
          </span>
        </button>
        <span className="sr-only" aria-live="polite">
          {copy === "copied" ? "Address copied to clipboard" : ""}
        </span>
      </p>
    </div>
  );
}
