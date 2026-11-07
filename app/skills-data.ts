import { containerNumber, layers, projects, type Layer } from "./projects-data";

// The stowage plan: which skills sit in which layer of the stack.
// `null` renders as an AWAITING stamp: fill these in, never invent them.
// No levels or percentages; a skill earns proof by appearing in a project's stack.
export const skills: Record<Layer, string[] | null> = {
  Data: null,
  "API & services": null,
  Interface: null,
  Infrastructure: null,
};

export const declaredSkills = layers.reduce((count, layer) => count + (skills[layer]?.length ?? 0), 0);

// Projects whose declared stack names this skill, so each skill links to its proof
export function provenOn(skill: string) {
  const name = skill.trim().toLowerCase();
  return projects.flatMap((project, index) =>
    project.name && project.stack?.some((item) => item.trim().toLowerCase() === name)
      ? [{ slug: project.slug, name: project.name, code: containerNumber(index) }]
      : [],
  );
}
