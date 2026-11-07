import Link from "next/link";
import { cargo, declaredLines, shipper } from "./manifest-data";
import { containerNumber, declaredProjects, projects } from "./projects-data";
import { Awaiting, Field, StatusStamp } from "./components/Awaiting";
import { EmailAction } from "./components/EmailAction";
import { Shipment } from "./components/Shipment";
import {
  bigValue,
  commit,
  commitNote,
  ContainerCode,
  display,
  FormField,
  formLabel,
  SheetHead,
  SiteFooter,
  SiteHeader,
} from "./components/site";
import { ConsignSection } from "./components/ConsignSection";
import { StowagePlan } from "./components/StowagePlan";

const lineCell =
  "col-start-2 flex items-center gap-3 before:min-w-[5.5rem] before:text-[0.6875rem] before:font-semibold before:tracking-[0.08em] before:text-carbon before:uppercase before:content-[attr(data-label)] sheet:col-start-auto sheet:block sheet:before:hidden";

function RouteHead() {
  return (
    <svg className="-ml-[0.04em] h-[0.36em] w-[0.3em] flex-none fill-ink" viewBox="0 0 40 48" aria-hidden="true" data-route-head>
      <path d="M0 0 40 24 0 48 9 24Z" />
    </svg>
  );
}

function SealTag() {
  return (
    <div className="flex items-start text-carbon" data-seal>
      <svg className="mt-[0.4rem] h-9 w-14 flex-none" viewBox="0 0 64 40" aria-hidden="true">
        <path d="M2 6c18 0 26 30 60 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div data-seal-tab className="grid -rotate-4 gap-0.5 rounded-l-sm rounded-r-xl bg-carbon bg-[radial-gradient(circle_at_0.65rem_50%,var(--color-form-shade)_0.3rem,transparent_0.35rem)] py-2 pr-3.5 pb-2.5 pl-6 text-form shadow-[0_6px_14px_-8px_rgb(21_23_26/0.55)]">
        <span className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase">Seal</span>
        <span className={`${display} text-[1.625rem] leading-none font-extrabold tracking-[0.08em]`}>
          {commit ?? "Unsealed"}
        </span>
        <span className="text-xs">{commitNote}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <Shipment>
        <div className="mx-auto max-w-sheet px-(--gutter)">
          <h1
            className={`${display} mt-[clamp(1.25rem,3vh,2rem)] mb-[clamp(1rem,2.5vh,1.5rem)] flex items-center gap-[clamp(0.5rem,1.5vw,1.5rem)] text-[clamp(2.75rem,10vw,8.5rem)] leading-[0.8] font-black tracking-[-0.01em] text-ink [font-variation-settings:'opsz'_72]`}
          >
            <span className="block flex-none">Schema</span>
            <span className="flex min-w-10 flex-1 items-center" aria-hidden="true">
              <span className="block h-[0.07em] flex-1 bg-ink" data-route-line />
              <RouteHead />
            </span>
            <span className="sr-only"> to </span>
            <span className="block flex-none" data-route-end>
              Screen
            </span>
          </h1>

          <article
            data-sheet
            className="tractor-feed bg-form px-[calc(var(--feed)+0.625rem)] pb-[clamp(2rem,4vw,3rem)] sheet:px-[calc(var(--feed)+clamp(0.75rem,2.5vw,2.25rem))]"
            aria-labelledby="bill-title"
          >
            <SheetHead id="bill-title" title="Bill of lading">
              <p className="m-0 flex gap-4 text-xs tracking-[0.04em] text-carbon uppercase sheet:gap-6 sheet:text-sm">
                <span>Non-negotiable</span>
                <span>Original</span>
              </p>
            </SheetHead>

            <dl className="m-0 grid grid-cols-1 border-l border-carbon-rule sheet:grid-cols-24">
              <FormField n="01" label="Shipper" className="order-0 sheet:col-[1/15] wide:col-[1/11]">
                <span className={`${display} mb-1.5 block text-[2.25rem] leading-none font-extrabold [&>span]:text-[1.375rem]`}>
                  <Field value={shipper.name} what="Name" tilt={-4} />
                </span>
                <span className={`${display} block text-[clamp(1.625rem,2.4vw,2.125rem)] leading-none font-extrabold`}>
                  Full-stack engineer
                </span>
              </FormField>

              <FormField n="02" label="Based in" className="order-2 sheet:order-none sheet:col-[15/25] wide:col-[11/17]">
                <Field value={shipper.location} what="Location" tilt={2} />
              </FormField>

              <FormField n="03" label="Port of loading" className="order-2 sheet:order-none sheet:col-[1/9] wide:col-[1/7]" valueClassName={bigValue}>
                Database
              </FormField>
              <FormField n="04" label="Via" className="order-2 sheet:order-none sheet:col-[9/17] wide:col-[7/12]" valueClassName={bigValue}>
                API &amp; services
              </FormField>
              <FormField n="05" label="Port of discharge" className="order-2 sheet:order-none sheet:col-[17/25] wide:col-[12/17]" valueClassName={bigValue}>
                Interface
              </FormField>

              <FormField
                n="06"
                label="Transshipment"
                className="order-2 sheet:order-none sheet:col-[1/13] wide:col-[1/9]"
                valueClassName="flex flex-wrap items-center gap-5 sheet:flex-nowrap"
              >
                <span
                  className={`${display} stamp-grain flex-none -rotate-5 border-[3px] border-(--stamp) px-[0.35em] pt-[0.05em] text-[2.5rem] leading-none font-black tracking-[0.06em] text-(--stamp)`}
                  data-stamp-none
                >
                  None
                </span>
                <span className="max-w-[34ch] font-medium">One pair of hands from the first table to the last pixel.</span>
              </FormField>

              <FormField n="07" label="Accepting" className="order-2 sheet:order-none sheet:col-[13/25] wide:col-[9/17]">
                <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0 font-semibold">
                  <li className="check-box">Full-time roles</li>
                  <li className="check-box">Freelance projects</li>
                  <li className="check-box">Studio contracts</li>
                </ul>
              </FormField>

              {/* The action follows the shipper's name on phones, not seven fields later */}
              <FormField
                n="08"
                label={<>Shipper&rsquo;s signature</>}
                className="order-1 bg-form-shade sheet:order-none sheet:col-[1/25] sheet:row-2 wide:col-[17/25] wide:row-[1/4]"
                valueClassName="grid gap-5 sheet:grid-cols-[minmax(0,1fr)_auto] sheet:items-end wide:grid-cols-1 wide:items-stretch"
              >
                <span className={`${display} block min-h-14 border-b border-ink pt-3 pb-2 text-[1.75rem] font-bold sheet:col-span-full`}>
                  <Field value={shipper.name} what="Signature name" tilt={-2} />
                </span>
                <EmailAction email={shipper.email} />
                <SealTag />
              </FormField>
            </dl>

            <section id="cargo" className="mt-[clamp(1.5rem,2.5vw,2rem)] scroll-mt-8" aria-labelledby="cargo-title">
              <SheetHead id="cargo-title" title="Description of goods" large>
                <p className="m-0 flex items-center gap-2.5 text-sm font-semibold tracking-[0.06em] text-carbon uppercase">
                  Lines declared{" "}
                  {declaredLines > 0 ? <strong>{declaredLines}</strong> : <Awaiting what="Line count" tilt={-2} />}
                </p>
              </SheetHead>

              <div
                className={`hidden border-b border-carbon-rule py-2.5 sheet:grid sheet:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,2fr)] sheet:gap-4 ${formLabel}`}
                aria-hidden="true"
              >
                <span>Line</span>
                <span>Consignee</span>
                <span>Goods</span>
                <span>Period</span>
                <span>Shipped</span>
              </div>

              <ol className="m-0 list-none p-0">
                {cargo.map((line, i) => (
                  <li
                    key={i}
                    data-print-line
                    className="relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-b border-carbon-rule py-[1.375rem] text-[1.0625rem] sheet:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,2fr)] sheet:items-center sheet:gap-4"
                  >
                    <span
                      data-print-head
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-3 -left-1.5 w-1.5 bg-carbon opacity-0"
                    />
                    <span className={`${display} row-span-4 text-[1.75rem] leading-none font-extrabold text-carbon sheet:row-span-1`}>
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <span className={lineCell} data-label="Consignee">
                      <Field value={line.company} what="Company" tilt={i % 2 ? 2 : -2} />
                    </span>
                    <span className={lineCell} data-label="Goods">
                      <Field value={line.role} what="Role" tilt={i % 2 ? -3 : 3} />
                    </span>
                    <span className={lineCell} data-label="Period">
                      <Field value={line.period} what="Dates" tilt={-1} />
                    </span>
                    <span className={lineCell} data-label="Shipped">
                      <Field value={line.shipped} what="What was shipped" tilt={1} />
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-5 mb-0 max-w-[60ch] text-[0.9375rem] text-ink-soft">
                Further lines awaiting. Every line is filled in by the shipper; nothing on this bill is estimated.
              </p>
            </section>

            <StowagePlan />

            <section id="containers" className="mt-[clamp(2.5rem,4vw,3.5rem)] scroll-mt-8" aria-labelledby="containers-title">
              <SheetHead id="containers-title" title="Containers loaded" large>
                <p className="m-0 flex items-center gap-2.5 text-sm font-semibold tracking-[0.06em] text-carbon uppercase">
                  Containers declared{" "}
                  {declaredProjects > 0 ? <strong>{declaredProjects}</strong> : <Awaiting what="Container count" tilt={2} />}
                </p>
              </SheetHead>

              <div
                className={`hidden border-b border-carbon-rule py-2.5 sheet:grid sheet:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,0.8fr)_auto] sheet:gap-4 ${formLabel}`}
                aria-hidden="true"
              >
                <span>Container no.</span>
                <span>Contents</span>
                <span>Status</span>
                <span className="sr-only">Packing list</span>
              </div>

              <ol className="m-0 list-none p-0">
                {projects.map((project, i) => (
                  <li
                    key={project.slug}
                    data-print-line
                    className="relative grid grid-cols-1 gap-y-2.5 border-b border-carbon-rule py-[1.375rem] text-[1.0625rem] sheet:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,0.8fr)_auto] sheet:items-center sheet:gap-4"
                  >
                    <span
                      data-print-head
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-3 -left-1.5 w-1.5 bg-carbon opacity-0"
                    />
                    <ContainerCode code={containerNumber(i)} className="text-[1.375rem] text-carbon" />
                    <span className="font-semibold">
                      <Field value={project.name} what="Project name" tilt={i % 2 ? 2 : -2} />
                    </span>
                    <span>
                      <StatusStamp status={project.status} tilt={i % 2 ? -2 : 2} />
                    </span>
                    <Link
                      href={`/projects#${project.slug}`}
                      className="group inline-flex items-center gap-2 font-semibold text-carbon underline decoration-carbon-rule underline-offset-4 transition-colors duration-[160ms] hover:decoration-carbon"
                    >
                      Packing list
                      <svg
                        className="size-4 flex-none transition-transform duration-[220ms] ease-out-expo group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M3 12h16M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          </article>
        </div>

        <ConsignSection />
      </Shipment>

      <SiteFooter />
    </>
  );
}
