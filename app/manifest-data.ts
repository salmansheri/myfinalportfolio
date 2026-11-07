// Everything the homepage says about its owner lives here.
// `null` renders as an AWAITING stamp on the page: fill these in, never invent them.

export type CargoLine = {
  company: string | null;
  role: string | null;
  period: string | null;
  shipped: string | null;
};

export const shipper = {
  name: null as string | null,
  email: null as string | null,
  location: null as string | null,
  links: [] as { label: string; href: string }[],
};

// One line per role, newest first. The open line below is the form's blank, not a role.
export const cargo: CargoLine[] = [{ company: null, role: null, period: null, shipped: null }];

export const declaredLines = cargo.filter((line) => line.company && line.role).length;
