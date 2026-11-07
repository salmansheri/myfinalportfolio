import { shipper } from "../manifest-data";
import { EmailAction } from "./EmailAction";
import { display } from "./site";

// The closing band on bare steel: the stencilled call to send work, and the way to send it
export function ConsignSection() {
  return (
    <section
      id="consign"
      className="ink-steel mx-auto max-w-sheet scroll-mt-4 px-(--gutter) pt-[clamp(5rem,12vw,9rem)] pb-[clamp(4rem,8vw,6rem)]"
      aria-labelledby="consign-title"
    >
      <h2
        id="consign-title"
        data-spray
        className={`${display} mt-0 mb-6 max-w-[10ch] text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] font-black text-ink [font-variation-settings:'opsz'_72]`}
      >
        Consign the next one
      </h2>
      <p className="mt-0 mb-10 max-w-[44ch] text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.45] font-medium text-ink">
        A role, a project, a studio build. Send the brief and it goes from schema to screen in one pair of hands.
      </p>
      <div className="max-w-120">
        <EmailAction email={shipper.email} tone="steel" />
      </div>
      {shipper.links.length > 0 && (
        <ul className="mt-8 mb-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 font-semibold">
          {shipper.links.map((l) => (
            <li key={l.href}>
              <a className="text-ink" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
