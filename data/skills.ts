import { layers, projects, type Layer } from "./projects";

// Skills, grouped by which layer of the stack they belong to.
// `null` renders as an AWAITING stamp: fill these in, never invent them.
// No levels or percentages; a skill earns proof by appearing in a project's stack.
export const skills: Record<Layer, string[] | null> = {
  Data: ["PostgreSQL"],
  "API & services": ["Dotnet core", "Node.js", "Express", "Spring Boot"],
  Interface: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  Infrastructure: ["Docker", "Kubernetes", "AWS"],
};

export const declaredSkills = layers.reduce((count, layer) => count + (skills[layer]?.length ?? 0), 0);

// Projects whose stack names this skill, so each skill links to its proof.
// Matching ignores case, spaces and punctuation: "Nextjs", "Next.js" and "next js" are the same skill.
const normalise = (name: string) => name.toLowerCase().replace(/[^a-z0-9+#]/g, "");

export function provenOn(skill: string) {
  const name = normalise(skill);
  return projects.flatMap((project) =>
    project.name && project.stack?.some((item) => normalise(item) === name)
      ? [{ slug: project.slug, name: project.name }]
      : [],
  );
}
