// Every project on the packing list lives here.
// `null` renders as an AWAITING stamp: fill these in, never invent them.
// Screenshots go in public/projects/ and are referenced as "/projects/<file>".

export const layers = ["Data", "API & services", "Interface", "Infrastructure"] as const;
export type Layer = (typeof layers)[number];

export type Project = {
  slug: string;
  name: string | null;
  summary: string | null;
  // Which layers you built yourself
  built: Layer[] | null;
  stack: string[] | null;
  status: "Live" | "In progress" | null;
  live: string | null;
  repo: string | null;
  image: { src: string; alt: string } | null;
};

// One open container until the first project is filled in.
export const projects: Project[] = [
  {
    slug: "project-1",
    name: "Rubric A Messenger application",
    summary: "A real-time messaging application built with React, Spring Boot, Websokets, allowing users to send and receive messages instantly.",
    built: null,
    stack: ["Nextjs", "Spring Boot", "Websockets", "PostgreSQL"],
    status: "Live",
    live: null,
    repo: "https://github.com/salmansheri/messenger",
    image: null,
  },
];

export const declaredProjects = projects.filter((p) => p.name).length;

// ISO 6346 container number: owner code, category U, six-digit serial and a check digit.
// It is a numbering scheme for the list, not a claim about the project.
const letterValues: Record<string, number> = Object.fromEntries(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce<[string, number][]>((acc, letter) => {
    let value = acc.length ? acc[acc.length - 1][1] + 1 : 10;
    if (value % 11 === 0) value += 1;
    return [...acc, [letter, value]];
  }, []),
);

export function containerNumber(index: number) {
  const owner = "MNFU";
  const serial = String(index + 1).padStart(6, "0");
  const chars = (owner + serial).split("");
  const sum = chars.reduce((total, ch, i) => total + (letterValues[ch] ?? Number(ch)) * 2 ** i, 0);
  return { owner, serial, check: (sum % 11) % 10 };
}
