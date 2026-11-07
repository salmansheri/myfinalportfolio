// Everything the homepage says about its owner lives here.
// `null` renders as an AWAITING stamp on the page: fill these in, never invent them.

export type CargoLine = {
  company: string | null;
  role: string | null;
  period: string | null;
  shipped: string | null;
};

export const shipper = {
  name: "Salman Sheriff" as string | null,
  email: "sheriffsalman00@gmail.com" as string | null,
  location: "Coimbatore, Tamil Nadu" as string | null,
  links: [
    {label: "Github", href: "https://github.com/salmansheri"}
  ] as { label: string; href: string }[],
  // Stapled to the shipper field like a passport photo; null leaves it off
  photo: { src: "/myphoto.jpg", alt: "Portrait of Salman Sheriff" } as { src: string; alt: string } | null,
};

// One line per role, newest first. The open line below is the form's blank, not a role.
export const cargo: CargoLine[] = [{ company: "Agile Labs", role: "Software Engineer", period: "Present", shipped: "2025-02-03" }];

export const declaredLines = cargo.filter((line) => line.company && line.role).length;
