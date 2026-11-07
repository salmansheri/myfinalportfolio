---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Homepage

## Scope and mode

Persuade. The `/` route of a two-page portfolio; the homepage holds the About, Experience, Skills, Projects and Contact sections (anchored #experience, #skills, #projects, #contact) and links on to `/projects`. Code-led build.

## Audience, job, action

Hiring managers, freelance clients, studios, peers; arriving from a CV, LinkedIn or proposal link and skimming. They must leave believing the owner ships end to end (data layer to interface, no handoffs) and email them. Primary action: email, as a working mailto plus copy-address control.

## Proof and constraints

Work experience is the only proof. Any owner detail left empty in the data renders as a visible AWAITING line, never invented. No skill meters, no invented numbers, no card grids. Next.js 16, Tailwind 4, GSAP; three.js only if it earns its place and the page reads without it. Reduced motion respected.

## Direction contract

THESIS: The career as one shipping manifest, loaded at the database, delivered at the screen, one signature on the whole bill. Refuses the category's big-name hero over a dark screen, neon accent, tech-logo grid and timeline.

OWN-WORLD: Container orange owning whole bands as steel siding; stencil black ink on a cool form white; carbon-copy blue for form rules, field labels and stamps. One stencil display face at monumental scale, a plain form-face for field text. Form boxes with numbered fields, rubber stamps, seal tags. Every role is the same manifest-line module; the repetition is the grid. Missing data is an open line stamped AWAITING.

STORY: Visitor sees a bill-of-lading layout for one person, route schema → screen; reads the experience lines (roles); sees the Contact box and emails.

FIRST VIEWPORT: Top band of orange siding with the owner's name in stencil (links home) and the nav (Experience, Projects, Contact); the route SCHEMA → SCREEN across monumental stencil on the steel; then the About form: name beside its photo (an AWAITING stamp until supplied), Based in, From, Through and To, Handoffs stamped NONE, Open to, and at bottom-right the Contact box holding the Contact action; version tag bearing the live commit hash.

FORM: The Manifest, position 6 of 7 on the ordered list. seed:39e1c7968c0da56f. Raises: orange owns regions (skate deck wall); AWAITING gaps (video store wall); one display face (alphabet storm); one continuous bill, no card grids (floated pigment); one identical line module per role (VU meter bridge).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

The seal tag, labelled Version, carries the deployed commit hash: the page proves it was shipped.

## Later additions

- Projects: one line per project, linking to its entry on /projects.
- Skills: skills by layer in four numbered fields, each skill linked to the projects whose stack uses it; data in data/skills.ts.

## Unresolved

Owner identity, intro copy, roles, contact channels.
