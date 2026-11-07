# Manifest

The portfolio of Salman Sheriff, full-stack engineer, presented as a shipping manifest: a bill of lading on tractor-feed paper, laid over corrugated container steel. The route reads _schema → screen_, because the site's one claim is that the same pair of hands ships the whole stack, with no handoffs.

## Pages

- **`/`: the homepage,** laid out as a bill of lading. About, the route from database to interface, Experience, Skills, a summary of Projects, and a Contact box with an email action.
- **`/projects`: Projects.** One numbered entry per project, with a screenshot, the layers built, the stack, its status and links.

Nothing on the site is invented. Any fact left empty in the data files renders as an **AWAITING** stamp until it is filled in.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) and React 19
- TypeScript
- [Tailwind CSS 4](https://tailwindcss.com), with tokens in `@theme`
- [GSAP](https://gsap.com) with ScrollTrigger for motion
- [Phosphor Icons](https://phosphoricons.com) for profile link icons
- Bun as the package manager

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
bun run build   # production build
bun start       # serve the production build
bun run lint    # ESLint
```

## Editing the content

All the facts live in three files in the `data/` folder. Each file explains its own fields.

| File | What it holds |
| --- | --- |
| `data/manifest.ts` | Name, email, location, profile links, and work experience (`cargo`) |
| `data/projects.ts` | Projects: name, summary, layers built, stack, status, links, screenshot |
| `data/skills.ts` | Skills, grouped by layer: Data, API & services, Interface, Infrastructure |

Put project screenshots in `public/projects/` and reference them as `/projects/<file>`.

Under each skill, the site links the projects whose `stack` names that skill. Capitals, spaces and punctuation don't matter, so `Nextjs` and `Next.js` count as the same skill.

## Project structure

```
app/
  page.tsx                 the homepage: About, Experience, Skills, Projects, Contact
  projects/page.tsx        the Projects page
  layout.tsx               fonts and metadata
  globals.css              Tailwind theme tokens and custom utilities
  components/
    site.tsx               header, footer, form fields, shared type
    Shipment.tsx           all page motion (GSAP)
    EmailAction.tsx        email button, copy address, pending state
    Awaiting.tsx           stamps: AWAITING, LIVE, IN PROGRESS
    StowagePlan.tsx        the skills section
    ConsignSection.tsx     the closing contact band and profile links
data/
  manifest.ts              owner details, profile links and experience
  projects.ts              projects
  skills.ts                skills by layer
public/
  myphoto.jpg              the photo in the Name field
  textures/                corrugated steel and stamp-grain textures
  projects/                project screenshots
```

## Design system

The visual rules are written down so later changes stay consistent:

- **`DESIGN.md`:** palette, type, layout, components, motion, and how each maps to Tailwind classes.
- **`PRODUCT.md`:** who the site is for, what it must do, and what it must never claim.
- **`.impeccable/`:** page briefs and the machine-readable design tokens.

Tailwind utilities defined in `app/globals.css`:

| Utility | What it draws |
| --- | --- |
| `tractor-feed` | Punched feed-hole margins and the perforation |
| `stamp-grain` | Uneven rubber-stamp ink |
| `ink-steel` | Black stamps on orange areas |
| `check-box` | Ticked form checkbox |
| `check-box-empty` | Open form checkbox |

## Motion

Every animation plays once and comes from how a manifest is made:

- the bill feeds in like tractor paper;
- lines print under a dot-matrix head;
- the closing line is sprayed through a stencil;
- the seal tag swings on its cable;
- "Copied" lands like a rubber stamp.

With `prefers-reduced-motion` set, the page renders finished, with nothing moving.

## The version tag

The Version tag (the seal tag) shows the git commit the site was built from. Locally this comes from `git rev-parse`, with a `+` added when the working tree has uncommitted changes. On Vercel it reads `VERCEL_GIT_COMMIT_SHA`. See `next.config.ts`.

## Deploying

The site is a standard Next.js app and deploys to [Vercel](https://vercel.com/new) without extra configuration. Any host that runs `next build` and `next start` also works.
