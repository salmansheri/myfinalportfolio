// Every project on the Projects page lives here.
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

// Listed in this order on the homepage and the Projects page.
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
  {
    slug: "project-2",
    name: "WriteIt A Journal application",
    summary: "A real-time journaling application built with Nextjs allowing users to create and manage their journal entries instantly.",
    built: null,
    stack: ["Nextjs",  "PostgreSQL"],
    status: "Live",
    live: "https://write-it-by-salman.vercel.app/",
    repo: "https://github.com/salmansheri/Journal-app-by-salman",
    image: { src: "/projects/writeit.png", alt: "Screenshot of WriteIt application" },
  },
    {
    slug: "project-3",
    name: "Clinic Manager",
    summary: "A clinic management application built with Nextjs, allowing users to manage patient records, appointments, and billing.",
    built: null,
    stack: ["Nextjs",  "PostgreSQL"],
    status: "Live",
    live: "https://clinic-manager-nu.vercel.app/",
    repo: "https://github.com/salmansheri/clinic_manager",
    image: { src: "/projects/clinic.png", alt: "Screenshot of Clinic Manager application" },
  },
];

export const declaredProjects = projects.filter((p) => p.name).length;
