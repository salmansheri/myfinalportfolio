import { GithubLogo, LinkedinLogo, LinkSimple } from "@phosphor-icons/react/dist/ssr";
import { shipper } from "@/data/manifest";
import { EmailAction } from "./EmailAction";
import { display } from "./site";

// Pick the mark from where the link goes, so the data file only needs a label and an address
function ProfileIcon({ href }: { href: string }) {
  const host = new URL(href).hostname;
  const Icon = host.endsWith("github.com") ? GithubLogo : host.endsWith("linkedin.com") ? LinkedinLogo : LinkSimple;
  return <Icon weight="bold" aria-hidden="true" className="size-6 flex-none" />;
}

// The closing band on bare steel: the invitation to get in touch, and the ways to do it
export function ConsignSection() {
  return (
    <section
      id="contact"
      className="ink-steel mx-auto max-w-sheet scroll-mt-4 px-(--gutter) pt-[clamp(5rem,12vw,9rem)] pb-[clamp(4rem,8vw,6rem)]"
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        data-spray
        className={`${display} mt-0 mb-6 max-w-[10ch] text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] font-black text-ink [font-variation-settings:'opsz'_72]`}
      >
        Let&rsquo;s work together
      </h2>
      <p className="mt-0 mb-10 max-w-[44ch] text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.45] font-medium text-ink">
        Hiring for a role, or need a project built? Send me the details and I&rsquo;ll take it from the database to the interface.
      </p>
      <div className="max-w-120">
        <EmailAction email={shipper.email} tone="steel" />
      </div>
      {shipper.links.length > 0 && (
        <ul className="mt-8 mb-0 flex list-none flex-wrap gap-x-7 gap-y-3 p-0 font-semibold">
          {shipper.links.map((l) => (
            <li key={l.href}>
              <a
                className="inline-flex items-center gap-2 text-ink underline decoration-ink/40 underline-offset-4 transition-colors duration-[160ms] hover:decoration-ink"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                <ProfileIcon href={l.href} />
                {l.label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
