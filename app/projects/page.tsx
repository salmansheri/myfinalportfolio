import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { containerNumber, declaredProjects, layers, projects, type Project } from "@/data/projects";
import { shipper } from "@/data/manifest";
import { Awaiting, Field, StatusStamp } from "../components/Awaiting";
import { ConsignSection } from "../components/ConsignSection";
import { Shipment } from "../components/Shipment";
import { bigValue, ContainerCode, display, FormField, formLabel, SheetHead, SiteFooter, SiteHeader } from "../components/site";

export const metadata: Metadata = {
  title: "Packing list · Manifest",
  description: "Projects built end to end, listed one container at a time.",
};

function ExternalIcon() {
  return (
    <svg className="size-4 flex-none" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 5h10v10M19 5 6 18" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square" />
    </svg>
  );
}

function SealLink({ href, label, what }: { href: string | null; label: string; what: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className={`${formLabel} min-w-[6.5rem]`}>{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-0 items-center gap-1.5 font-semibold break-all text-carbon underline decoration-carbon-rule underline-offset-4 transition-colors duration-[160ms] hover:decoration-carbon"
        >
          {href.replace(/^https?:\/\//, "")}
          <ExternalIcon />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : (
        <Awaiting what={what} tilt={-2} />
      )}
    </li>
  );
}

// The screenshot, framed and captioned like an inspection photo pinned to the list
function InspectionPhoto({ project, figure }: { project: Project; figure: string }) {
  return (
    <figure className="m-0 border border-carbon-rule bg-form-shade p-2">
      <div className="relative aspect-[16/10] overflow-hidden bg-form">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 67.5rem) 34rem, (min-width: 45rem) 45vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="grid h-full place-items-center border border-dashed border-carbon-rule">
            <Awaiting what="Screenshot" tilt={-4} />
          </div>
        )}
      </div>
      <figcaption className={`${formLabel} flex flex-wrap items-center gap-x-2 gap-y-1 px-1 pt-2.5 pb-0.5`}>
        <span>Fig. {figure}</span>
        <span aria-hidden="true">·</span>
        <span className="font-sans normal-case tracking-normal text-ink-soft">
          {project.name ? `${project.name}, as shipped` : "Contents photograph awaiting"}
        </span>
      </figcaption>
    </figure>
  );
}

function Container({ project, index }: { project: Project; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  const titleId = `${project.slug}-title`;

  return (
    <section
      id={project.slug}
      data-print-line
      aria-labelledby={titleId}
      className="relative grid scroll-mt-8 gap-6 border-b border-carbon-rule py-[clamp(1.5rem,3vw,2.25rem)] sheet:grid-cols-24"
    >
      <span
        data-print-head
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-6 -left-1.5 w-1.5 bg-carbon opacity-0"
      />

      <div className="sheet:col-[1/13] wide:col-[1/12]">
        <InspectionPhoto project={project} figure={n} />
      </div>

      <dl className="m-0 grid grid-cols-1 self-start border-t border-l border-carbon-rule sheet:col-[13/25] sheet:grid-cols-2 wide:col-[12/25]">
        <FormField n="01" label="Container no." className="sheet:col-span-2">
          <ContainerCode code={containerNumber(index)} className="text-[clamp(1.625rem,2.4vw,2.125rem)] text-carbon" />
        </FormField>

        <FormField n="02" label="Contents" className="sheet:col-span-2">
          <h2 id={titleId} className={`${bigValue} m-0 mb-2`}>
            <Field value={project.name} what="Project name" tilt={-3} />
          </h2>
          <p className="m-0 max-w-[60ch] text-ink-soft">
            <Field value={project.summary} what="Summary" tilt={2} />
          </p>
        </FormField>

        <FormField n="03" label="Handled by the shipper">
          {project.built ? (
            <ul className="m-0 grid list-none gap-1.5 p-0">
              {layers.map((layer) => {
                const done = project.built!.includes(layer);
                return (
                  <li key={layer} className={done ? "check-box font-semibold" : "check-box-empty text-ink-soft"}>
                    {layer}
                    <span className="sr-only">{done ? " (built)" : " (not built)"}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Awaiting what="Layers built" tilt={-2} />
          )}
        </FormField>

        <FormField n="04" label="Status" valueClassName="pt-1">
          <StatusStamp status={project.status} tilt={-4} />
        </FormField>

        <FormField n="05" label="Marks & numbers" className="sheet:col-span-2">
          {project.stack ? <span className="font-semibold">{project.stack.join(" · ")}</span> : <Awaiting what="Stack" tilt={1} />}
        </FormField>

        <FormField n="06" label="Seal" className="sheet:col-span-2">
          <ul className="m-0 grid list-none gap-2 p-0">
            <SealLink href={project.live} label="Live site" what="Live site link" />
            <SealLink href={project.repo} label="Repository" what="Repository link" />
          </ul>
        </FormField>
      </dl>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />

      <Shipment>
        <div className="mx-auto max-w-sheet px-(--gutter)">
          <h1
            className={`${display} mt-[clamp(1.25rem,3vh,2rem)] mb-[clamp(0.75rem,2vh,1.25rem)] text-[clamp(2.75rem,10vw,8.5rem)] leading-[0.8] font-black tracking-[-0.01em] text-ink [font-variation-settings:'opsz'_72]`}
          >
            Packing list
          </h1>
          <p className="ink-steel mt-0 mb-[clamp(1rem,2.5vh,1.5rem)] max-w-[52ch] text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-[1.45] font-medium text-ink">
            One container per project. The ticked boxes under Handled show which layers{" "}
            {shipper.name ?? "the shipper"} built.
          </p>

          <article
            data-sheet
            className="tractor-feed bg-form px-[calc(var(--feed)+0.625rem)] pb-[clamp(2rem,4vw,3rem)] sheet:px-[calc(var(--feed)+clamp(0.75rem,2.5vw,2.25rem))]"
            aria-label="Particulars of containers"
          >
            <SheetHead id="containers-title" title="Particulars of containers">
              <p className="m-0 flex items-center gap-2.5 text-xs font-semibold tracking-[0.06em] text-carbon uppercase sheet:text-sm">
                Containers declared{" "}
                {declaredProjects > 0 ? <strong>{declaredProjects}</strong> : <Awaiting what="Container count" tilt={2} />}
              </p>
            </SheetHead>

            {projects.map((project, i) => (
              <Container key={project.slug} project={project} index={i} />
            ))}

            <p className="mt-5 mb-0 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 text-[0.9375rem] text-ink-soft">
              <span className="max-w-[60ch]">
                Further containers awaiting. Every container is declared by the shipper; nothing on this list is estimated.
              </span>
              <Link
                href="/"
                className="font-semibold text-carbon underline decoration-carbon-rule underline-offset-4 transition-colors duration-[160ms] hover:decoration-carbon"
              >
                Back to the bill of lading
              </Link>
            </p>
          </article>
        </div>

        <ConsignSection />
      </Shipment>

      <SiteFooter />
    </>
  );
}
