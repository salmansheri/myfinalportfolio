import Link from "next/link";
import { layers } from "@/data/projects";
import { declaredSkills, provenOn, skills } from "@/data/skills";
import { Awaiting } from "./Awaiting";
import { ContainerCode, FormField, SheetHead } from "./site";

// The stowage plan: four holds, one per layer of the stack, each listing the skills stowed there.
// A skill's proof is the containers (projects) whose stack names it.
export function StowagePlan() {
  return (
    <section id="skills" className="mt-[clamp(2.5rem,4vw,3.5rem)] scroll-mt-8" aria-labelledby="skills-title">
      <SheetHead id="skills-title" title="Stowage plan" large>
        <p className="m-0 flex items-center gap-2.5 text-sm font-semibold tracking-[0.06em] text-carbon uppercase">
          Skills declared{" "}
          {declaredSkills > 0 ? <strong>{declaredSkills}</strong> : <Awaiting what="Skill count" tilt={-2} />}
        </p>
      </SheetHead>

      <div data-print-line className="relative">
        <span
          data-print-head
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-3 -left-1.5 w-1.5 bg-carbon opacity-0"
        />
        <dl className="m-0 grid grid-cols-1 border-l border-carbon-rule sheet:grid-cols-2 wide:grid-cols-4">
          {layers.map((layer, i) => {
            const stowed = skills[layer];
            return (
              <FormField key={layer} n={`H${i + 1}`} label={layer} className="sheet:min-h-40">
                {stowed && stowed.length > 0 ? (
                  <ul className="m-0 grid list-none gap-3 p-0">
                    {stowed.map((skill) => {
                      const proof = provenOn(skill);
                      return (
                        <li key={skill}>
                          <span className="block font-semibold">{skill}</span>
                          {proof.length > 0 && (
                            <span className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-ink-soft">
                              <span className="sr-only">Used in:</span>
                              {proof.map((p) => (
                                <Link
                                  key={p.slug}
                                  href={`/projects#${p.slug}`}
                                  title={p.name}
                                  className="text-carbon underline decoration-carbon-rule underline-offset-[3px] transition-colors duration-[160ms] hover:decoration-carbon"
                                >
                                  <ContainerCode code={p.code} className="text-xs tracking-[0.04em]" />
                                  <span className="sr-only"> ({p.name})</span>
                                </Link>
                              ))}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <Awaiting what={`${layer} skills`} tilt={i % 2 ? 2 : -2} />
                )}
              </FormField>
            );
          })}
        </dl>
      </div>

      <p className="mt-5 mb-0 max-w-[60ch] text-[0.9375rem] text-ink-soft">
        No levels, no percentages. The container numbers under a skill are the projects on the packing list that use it.
      </p>
    </section>
  );
}
