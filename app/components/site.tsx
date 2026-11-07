import Link from "next/link";
import { shipper } from "../manifest-data";
import { Awaiting } from "./Awaiting";

// Shared pieces of the manifest: type voices, the build seal, header, footer and form fields.

export const display = "font-display uppercase";
export const formLabel = "text-xs font-semibold tracking-[0.08em] uppercase text-carbon";
export const bigValue = `${display} text-[clamp(1.75rem,2.6vw,2.5rem)] leading-none font-extrabold`;

const sha = process.env.COMMIT_SHA || null;
const dirty = process.env.COMMIT_DIRTY === "1";
export const commit = sha ? `${sha}${dirty ? "+" : ""}` : null;
export const commitNote = !sha
  ? "Built outside version control"
  : dirty
    ? "Uncommitted changes on top of this commit"
    : "Commit this page shipped from";
const billNumber = commit ? `MNF-${commit}`.toUpperCase() : null;

const navLinks = [
  ["/#cargo", "Experience"],
  ["/projects", "Projects"],
  ["/#consign", "Contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="ink-steel mx-auto flex max-w-sheet flex-wrap items-start justify-between gap-x-4 gap-y-3 px-(--gutter) pt-5 sheet:items-center">
      <p className="m-0 flex flex-col gap-0.5 sheet:flex-row sheet:flex-wrap sheet:items-baseline sheet:gap-x-5 sheet:gap-y-1">
        <Link className={`${display} text-[1.75rem] font-extrabold tracking-[0.04em] text-ink no-underline`} href="/">
          Manifest
        </Link>
        <span className={`${display} text-base font-bold tracking-[0.08em] whitespace-nowrap sheet:text-xl`}>
          <span className="font-sans text-xs font-semibold tracking-[0.08em]">Bill no.</span>{" "}
          {billNumber ?? <Awaiting what="Bill number" tilt={-2} />}
        </span>
      </p>
      <nav aria-label="Primary">
        <ul className="m-0 flex list-none gap-[clamp(1rem,3vw,2.25rem)] p-0">
          {navLinks.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className={`${display} border-b-2 border-transparent text-[1.0625rem] font-extrabold tracking-[0.06em] text-ink no-underline transition-colors duration-[160ms] ease-out hover:border-ink sheet:text-xl`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ink-steel mx-auto flex w-[min(100%-2*var(--gutter),var(--container-sheet)-2*var(--gutter))] flex-wrap justify-between gap-x-8 gap-y-2 border-t-2 border-ink pt-5 pb-8 text-sm font-medium text-ink [&_p]:m-0">
      <p>
        Designed, built and shipped by {shipper.name ?? <Awaiting what="Shipper name" tilt={-2} />}
      </p>
      <p>
        Seal <strong>{commit ?? "unsealed"}</strong> · Next.js
      </p>
    </footer>
  );
}

// The heading row of a printed form: its title, and its particulars on the right
export function SheetHead({
  id,
  title,
  children,
  large = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-[3px] border-ink ${
        large ? "pb-3" : "pt-[clamp(1rem,2vw,1.375rem)] pb-2.5"
      }`}
    >
      <h2
        id={id}
        className={`${display} m-0 font-extrabold ${
          large
            ? "text-[clamp(2.25rem,3.6vw,2.875rem)] leading-[0.95]"
            : "text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[0.02em]"
        }`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

// One numbered box on a printed form
export function FormField({
  n,
  label,
  className = "",
  valueClassName = "",
  children,
}: {
  n: string;
  label: React.ReactNode;
  className?: string;
  valueClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`m-0 min-w-0 border-r border-b border-carbon-rule px-4 pt-3 pb-4 ${className}`}>
      <dt className={`mb-2.5 flex items-center gap-2 ${formLabel}`}>
        <span className="inline-grid min-w-[1.75em] place-items-center border border-carbon px-[0.2em] py-[0.1em] font-bold tracking-normal">
          {n}
        </span>
        {label}
      </dt>
      <dd className={`m-0 text-[1.0625rem] leading-[1.4] ${valueClassName}`}>{children}</dd>
    </div>
  );
}

// An ISO 6346 container number, check digit boxed as it is painted on the doors
export function ContainerCode({
  code,
  className = "",
}: {
  code: { owner: string; serial: string; check: number };
  className?: string;
}) {
  return (
    <span className={`${display} inline-flex items-center gap-[0.3em] font-extrabold tracking-[0.06em] whitespace-nowrap ${className}`}>
      <span>{code.owner}</span>
      <span>{code.serial}</span>
      <span className="inline-grid min-w-[1.1em] place-items-center border-2 border-current px-[0.12em] leading-[1.05]">
        {code.check}
      </span>
    </span>
  );
}
