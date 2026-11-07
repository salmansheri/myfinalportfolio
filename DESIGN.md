---
name: Manifest
description: A full-stack engineer's career as one bill of lading, loaded at the database and delivered at the screen.
colors:
  orange: "#e2531f"
  orange-rib: "#cc4818"
  form: "#f1f4f7"
  form-shade: "#e3e8ee"
  ink: "#15171a"
  ink-soft: "#3c4047"
  carbon: "#2b4a8b"
  carbon-rule: "#b6c1d6"
typography:
  display:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 8.5rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.01em"
    fontVariation: "\"opsz\" 72"
  headline:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 3.6vw, 2.875rem)"
    fontWeight: 800
    lineHeight: 0.95
  title:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "\"tnum\" 1"
    fontVariation: "\"wdth\" 92"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.45
    fontVariation: "\"wdth\" 92"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "\"wdth\" 92"
  stamp:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.08em"
  micro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.08em"
    fontVariation: "\"wdth\" 92"
  small:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "\"wdth\" 92"
  seal-number:
    fontFamily: "Big Shoulders Stencil, Arial Narrow, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0"
  stamp: "3px"
  seal-tag: "0.75rem"
spacing:
  gutter: "clamp(1rem, 3vw, 2.5rem)"
  sheet-max: "78rem"
  feed: "2.25rem"
  feed-narrow: "1.5rem"
  field: "0.75rem 1rem 1rem"
  line: "1.375rem"
components:
  button-email:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.form}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem 0.9rem"
  button-email-hover:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.form}"
  button-email-steel:
    backgroundColor: "{colors.form}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "1rem 1.25rem 0.9rem"
  button-email-steel-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.form}"
  button-copy:
    textColor: "{colors.carbon}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.6rem"
  stamp-awaiting:
    textColor: "{colors.carbon}"
    typography: "{typography.stamp}"
    rounded: "{rounded.stamp}"
    padding: "0.1em 0.45em 0.05em"
  stamp-awaiting-steel:
    textColor: "{colors.ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.stamp}"
    padding: "0.1em 0.45em 0.05em"
  form-field:
    backgroundColor: "{colors.form}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.field}"
  form-field-signature:
    backgroundColor: "{colors.form-shade}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.field}"
  seal-tag:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.form}"
    rounded: "{rounded.seal-tag}"
    padding: "0.5rem 0.875rem 0.625rem 1.5rem"
  manifest-line:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "1.375rem 0"
---

# Design System: Manifest

## Overview

**Creative North Star: "The Manifest"**

The whole site is one shipping document laid on the side of a container. Container orange owns entire bands as corrugated steel; on that steel sits a single continuous bill of lading, cool form-white paper with carbon-blue rules, numbered fields and rubber stamps. Monumental stencil type is the voice of the steel and the headings; a plain, slightly condensed form face fills in the fields. Nothing floats: there are no card grids, no dark screen, no neon. The bill is one sheet, and its repetition (identical numbered fields, identical cargo lines) is the grid.

Density is that of a real form: tight field padding, hairline carbon rules, labels in small tracked caps, values large and plain. Honesty is a visual rule here: a fact that has not been supplied is drawn as a stamped AWAITING gap on an open line, never filled with a plausible placeholder. Motion speaks the document's own mechanics (paper feeding, a print head, stencil spray, a tag on its cable) and plays once; nothing loops.

**Key Characteristics:**
- Container orange as ground, with corrugation relief that only ever lightens the orange.
- One continuous form-white bill with punched tractor-feed margins, never cards.
- One stencil display face at monumental scale; Archivo (narrowed to wdth 92, tabular figures) for every field.
- Carbon blue for rules, field labels, numbers and stamps on the form; stencil ink for stamps on bare steel.
- Missing facts render as AWAITING rubber stamps.
- Motion is mechanical and plays once: feed, print, spray, stamp, swing. No ambient loops.

## Colors

Three materials and their inks: orange steel, cool form paper, black stencil ink, carbon-copy blue.

### Primary
- **Container Orange** (#e2531f, `orange`): the steel. Owns the page ground, the header band, the closing "Consign" band and the footer. It is the darkest face of the corrugation tile, so every ink text on steel reads at 4.7:1 or better.
- **Orange Rib** (#cc4818, `orange-rib`): the shadowed rib tone, used only as the scrollbar track. Never under text (ink on it is 3.85:1).

### Secondary
- **Carbon Blue** (#2b4a8b, `carbon`): the carbon copy. Field labels, field numbers, column heads, check marks, the seal tag, the copy button, focus outlines and every stamp that lands on the form. 7.75:1 on form white. It disappears into orange (2.24:1), so it never carries meaning on steel.
- **Carbon Rule** (#b6c1d6, `carbon-rule`): hairline field borders, cargo-line rules and the dashed perforation beside the feed strip. Lines only, never text.

### Neutral
- **Form White** (#f1f4f7, `form`): the bill's paper. Cool, not cream.
- **Form Shade** (#e3e8ee, `form-shade`): the shaded signature box and the seal tag's punched hole; the one tonal step on the paper.
- **Stencil Ink** (#15171a, `ink`): all primary text, heavy section rules, the route line, the live email action and stamps on steel. Also the selection background.
- **Ink Soft** (#3c4047, `ink-soft`): secondary prose on the form (footnotes, the address line).

### Named Rules
**The Lighter-Relief Rule.** Any texture on container orange may only add faces lighter than #e2531f. The darkest pixel of the steel is the orange itself, which is what keeps ink text on steel at 4.7:1.

**The Stamp-Ink Rule.** Stamps take their colour from `--stamp`, set per region: carbon blue on the form, stencil ink on bare steel (header, Consign band, footer). Never set a stamp colour directly.

**The Cool Paper Rule.** The form is cool white (#f1f4f7 / #e3e8ee). Warm paper or cream is a different world.

## Typography

**Display Font:** Big Shoulders Stencil (with Arial Narrow, sans-serif)
**Body Font:** Archivo, variable width axis at wdth 92, tabular figures on (with system-ui, sans-serif)

**Character:** Stencil sprayed on steel against the typed plainness of a shipping form. The stencil is always uppercase; Archivo does the reading.

### Hierarchy
- **Display** (900, clamp(2.75rem, 10vw, 8.5rem), 0.8, opsz 72): the route line SCHEMA → SCREEN and the closing "Consign the next one" (same weight and opsz, up to 8rem at 0.85).
- **Headline** (800, clamp(2.25rem, 3.6vw, 2.875rem), 0.95): section titles on the bill ("Description of goods", "Bill of lading" at a step smaller).
- **Title** (800, clamp(1.75rem, 2.6vw, 2.5rem), 1): large field values (ports), the shipper name and role, the email action label, cargo line numbers.
- **Body** (400, 1.0625rem, 1.4): field values and cargo-line cells. Notes cap at 34–60ch.
- **Lede** (500, clamp(1.125rem, 1.6vw, 1.375rem), 1.45): the Consign paragraph, capped at 44ch.
- **Label** (600, 0.75rem, 0.08em, uppercase): field labels, column heads, bill-number caption, pending-address hint. Carbon on the form.
- **Stamp** (stencil 700, 1rem, 0.08em, uppercase): the AWAITING stamp. The NONE stamp is the same voice at 900 / 2.5rem.
- **Micro** (Archivo 600, 0.6875rem, 0.08em, uppercase, 1.5): the SEAL label on the seal tag and the cargo-line labels on phones. The seal's SEAL label is set at 700 with 0.14em tracking.
- **Small** (Archivo 400, 0.9375rem, 1.5): the cargo footnote and the email address line, which is set at 600.
- **Seal number** (stencil 800, 1.625rem, 1, 0.08em, uppercase): the commit hash on the seal tag.

### Named Rules
**The One Stencil Rule.** Big Shoulders Stencil is the only display face. Every heading, plate, port and stamp uses it, uppercase. No second display face, and no system display fallback treated as a design choice.

**The Form Face Rule.** Anything a clerk would type into the form is Archivo at wdth 92 with tabular figures.

## Layout

One centred sheet at a max of 78rem with a fluid gutter (clamp(1rem, 3vw, 2.5rem)). Above it, the header band (MANIFEST plate and bill number left, two stencil nav links right) and the monumental route line sit directly on steel. The bill is a 24-column grid of numbered fields from 45rem (`sheet:`). From 67.5rem (`wide:`) shipper/location/ports/transshipment/terms fill columns 1–16 and the shaded signature box spans columns 17–24 across the first three rows. Between 45rem and 67.5rem the signature box sits full width below the shipper row, and the remaining fields pair up in halves and thirds. Below 45rem every field stacks to full width, ordered shipper → signature → the rest so the email action follows the name; the tractor feed narrows to 1.5rem.

Cargo lines use one five-column template (line no. 4.5rem, consignee, goods, period, shipped at 1.1 / 1.1 / 0.8 / 2fr). Below 45rem the column header disappears and each cell carries its own carbon label, with the line number spanning the left column.

The closing Consign band is generous steel (clamp(5rem, 12vw, 9rem) on top), then a footer bounded by a 2px ink rule.

**The One Line Rule.** Every role is the same manifest-line module with the same columns, numbered 001, 002, …. No featured role, no variant layout; the repetition is the grid.

## Elevation & Depth

The system is flat paper on flat steel. Depth comes from material, not shadow: the corrugation tile on the ground, the punched feed holes through which the steel shows, the dashed perforation, and the 3px ink rules that head each section. Only two objects cast a shadow, because they physically sit on or above the paper: the seal tag hanging on its cable, and the solid email action.

### Shadow Vocabulary
- **Seal drop** (`box-shadow: 0 6px 14px -8px rgb(21 23 26 / 0.55)`): under the tilted seal tag.
- **Action lift** (`box-shadow: 0 10px 22px -12px rgb(21 23 26 / 0.6)`): the soft drop under the live email action.

### Named Rules
**The Paper-Is-Flat Rule.** Fields, lines and the sheet itself never take a shadow. A shadow means a separate object resting on the bill.

## Shapes

Square. The sheet, fields, buttons and rules have no radius. Curves belong only to physical objects: the rubber stamp (3px corners, tilted -1° to -5° with stamp-grain voids), the seal tag (0.25rem / 0.75rem asymmetric tab with a punched hole, tilted -4°) and the circular tractor-feed holes masked down both sheet margins on a 1.5rem pitch. Checkboxes are drawn squares with a filled carbon centre. Icons are inline stroked SVG with square caps.

**The Tractor-Feed Rule.** The bill always has punched feed margins (2.25rem, 1.5rem on narrow screens) with a dashed carbon perforation beside them. The steel shows through the holes. The `#000` in the feed mask is an opaque mask channel, not a colour on the page; it is not part of the palette and must not be added to it.

## Components

### Email Action (signature component)
The one call to action, drawn as a solid stencil-ink slab.
- **Live (email supplied):** ink slab, form-white stencil label at title size with a square-capped arrow; address and a Copy button below. Hover turns the slab carbon blue, lifts 1px and nudges the arrow 4px (180ms, `ease-out-expo`); active presses down 1px.
- **On steel (`tone="steel"`):** inverted to a form-white slab with ink text; hover goes to ink with form-white text. The address and copy button take ink.
- **Pending (no email):** no slab. The label sits above an open line (1.5px underline) with a small "address" hint and an AWAITING stamp on it. Carbon on the form, ink on steel. Not clickable.
- **Copy button:** transparent, carbon text, carbon-rule hairline border that darkens to carbon on hover; reports Copied / failure in text and to a polite live region.

### Numbered Form Field
- **Style:** hairline carbon-rule right and bottom borders on form white; padding 0.75rem 1rem 1rem.
- **Label:** carbon label caps preceded by a boxed two-digit number (01–08) with a 1px carbon border.
- **Value:** body text, or title-size stencil for single-word values. The signature field is shaded form-shade and holds the signature line, the email action and the seal tag.

### AWAITING Stamp
- **Base:** every stamp (AWAITING, LIVE, IN TRANSIT) is the shared `Stamp` component.
- **Style:** stencil caps in a 2px `currentColor` border with 3px corners, coloured by `--stamp`, tilted by a per-instance `--tilt`, masked by the stamp-grain texture so the rubber shows voids.
- **Behaviour:** renders wherever a fact is null; screen readers hear "<what> not supplied yet".

### Manifest Line
- **Style:** one row per role on the five-column template, 1.375rem vertical padding, carbon-rule bottom border, carbon stencil line number.

### Profile Links
- **Style:** on the Consign band, each profile link is a 24px [Phosphor](https://phosphoricons.com) icon in the **bold** weight (to match the 2–2.5px strokes of the site's own arrows) followed by its label in semibold ink, with a 40% ink underline that turns solid on hover (160ms). Opens in a new tab.
- **Icon choice:** derived from the link's host: `GithubLogo` for github.com, `LinkedinLogo` for linkedin.com, `LinkSimple` for anything else. Imported from `@phosphor-icons/react/dist/ssr` so they render on the server with no client JavaScript.

### Shipper Photo
- **Style:** the owner's portrait stapled into field 01 beside the name, like a passport photo on a form: a 4px form-shade mat inside a carbon-rule hairline, tilted -2°, with the same soft drop as the seal tag and a small staple (ink-soft outline on form-shade) across the top edge. 4.5rem square on phones, 5.5rem from `sheet:` up.
- **Source:** `shipper.photo` in `data/manifest.ts` (a file in `public/`); set it to `null` to leave the field without a photo.

### Seal Tag
- **Style:** carbon tab with form-white text (label caps, stencil number, small note) hanging from a carbon cable SVG, carrying the live commit hash or "Unsealed".

### Stowage Plan (homepage skills)
- **Layout:** four holds as numbered form fields (H1–H4: Data, API & services, Interface, Infrastructure) in one row from `wide:`, two-up from `sheet:`, stacked below. Sits on the bill between Description of goods and Containers loaded, and prints as one line.
- **Skill entry:** the skill name in semibold body text; under it, at label size, the container numbers of every project whose stack names that skill, each linking to its place on the packing list. Matching is case-insensitive on the declared stack, so proof is derived, never typed.
- **Rule:** no levels, bars, stars or percentages. An empty hold is an AWAITING stamp.

### Container Line (homepage)
- **Style:** the "Containers loaded" block on the bill uses the same line rhythm as the Manifest Line, on a four-column template: container number, contents, status stamp, and a carbon "Packing list" link with an arrow that nudges 4px on hover. Prints like a cargo line.

### Container Number
- **Style:** an ISO 6346 code in carbon stencil: owner code `MNFU`, six-digit serial, and the check digit boxed in a 2px `currentColor` border, as painted on container doors. Generated from the project's position by `containerNumber()`; it is a numbering scheme, never a claim.

### Packing List Container (`/projects`)
- **Layout:** one container per project, carbon-rule bottom border between containers. From `sheet:` the inspection photo takes the left half and the fields the right; below 45rem they stack, photo first.
- **Inspection photo:** the screenshot set in a 16:10 frame on form-shade with an 8px mat and a carbon-rule hairline, captioned "Fig. NN · <name>, as shipped" in label caps. Missing image: a dashed carbon-rule frame holding an AWAITING stamp.
- **Fields:** six numbered form fields: 01 container number, 02 contents (project name as the section heading at title size, summary in ink-soft), 03 handled by the shipper (the four layers as ticked `check-box` or open `check-box-empty` items), 04 status stamp, 05 marks & numbers (the stack joined by middots, no pills), 06 seal (live site and repository as carbon underlined links with an out-arrow).
- **Status stamp:** a Stamp reading LIVE or IN TRANSIT; AWAITING when unknown.

### Navigation
- **Style:** three stencil 800 uppercase ink links on steel (Experience, Projects, Contact; 1.25rem, 1.0625rem under 45rem), shared by every page through `SiteHeader`. Hover draws a 2px ink underline (160ms ease-out). Below 45rem the nav wraps under the Manifest plate.

### Motion
All motion lives in `Shipment` (GSAP + ScrollTrigger) except the copy stamp, which is a CSS keyframe. Each piece plays once and comes from how a real manifest is made:
- **Load timeline:** only the parts present on a page join it (the packing list has the feed but no route, stamp or seal). The bill feeds up three hole pitches in stepped ticks (`steps(3)`, 0.36s), the route line draws left to right, the arrowhead slides in, SCREEN sharpens from blur, the NONE stamp slams down, and the seal tag swings onto its cable (`expo.out`). Skipped when the tab is not visible at load. Scroll triggers are re-measured when the feed stops.
- **Lines print:** cargo lines, container lines and packing-list containers all print the same way. When one's top enters the viewport, a 6px carbon print head passes left to right while the line is revealed behind it (`clip-path`, `steps(32)`, 0.75s), then the head fades.
- **Closing line is sprayed:** "Consign the next one" is revealed by a soft-edged mask travelling across the stencil lettering (0.9s, `power2.out`) when it reaches 80% of the viewport; the mask is cleared afterwards.
- **Seal swings:** pointing at the seal tab swings it on its cable (-9°, 1°, -6°, back to its -4° rest, sine eases). GSAP folds the tab's CSS `rotate` into its transform, so swing angles are absolute.
- **Copied stamp:** the copy button's result label lands like a rubber stamp (`animate-stamp-in`: 1.35× and faint to flat, 160ms).
- **Reduced motion:** nothing travels or fades in; the bill renders finished, already printed and painted. Hover colour changes and the Copied/failed label text still change. Smooth scrolling is off.


## Do's and Don'ts

### Do:
- **Do** let container orange (#e2531f) own whole bands; the steel is the page ground, not an accent.
- **Do** set `--stamp` per region (carbon on the form, ink on steel) and let stamps inherit it.
- **Do** render every missing fact as an AWAITING stamp on its open line.
- **Do** add new roles as another identical manifest line, numbered in sequence.
- **Do** add new facts as numbered fields with carbon labels and carbon-rule hairlines.
- **Do** keep any steel texture lighter than #e2531f so ink text stays at 4.7:1 or better.
- **Do** draw every animation from the manifest's own mechanics, play it once, and render the finished bill under reduced motion; the load timeline is also skipped in background tabs.

### Don't:
- **Don't** invent a value for a fact the shipper has not supplied, including names, dates, companies, counts or the email address.
- **Don't** put carbon blue text or stamps on bare orange; it falls to 2.24:1.
- **Don't** break the bill into cards or a card grid; it is one continuous sheet.
- **Don't** introduce a second display face, or warm/cream paper.
- **Don't** give a single cargo line a featured treatment or a different layout.
- **Don't** shadow fields, lines or the sheet.

## Implementation

The page is built with Tailwind CSS v4. No CSS module files remain: layout and styling are utility classes in `app/page.tsx` and `app/components/`, and the tokens and custom utilities live in `app/globals.css`.

### Tokens
- **Colours** are `@theme` variables used as utilities: `bg-orange`, `text-ink`, `bg-form`, `border-carbon-rule`. The token names are the colour keys in the front matter.
- **Sheet width** is `--container-sheet` (78rem), used as `max-w-sheet` (`sheet-max`).
- **Gutter** is the plain `:root` variable `--gutter`, used as `px-(--gutter)`.
- **Stamp ink** is the plain `:root` variable `--stamp`, which starts as carbon. Stamps use `text-(--stamp)` and `border-(--stamp)`. Set it per region with `ink-steel`; never set a stamp colour directly.
- **Feed** is the `--feed` variable set by `tractor-feed`, used for the bill's padding (`feed` and `feed-narrow`).
- **Easing** is `--ease-out-expo`, used as `ease-out-expo`.
- **Fonts** are `font-display` (Big Shoulders Stencil) and `font-sans` (Archivo).
- **Type sizes and shadows** are not theme tokens. The type ramp steps are arbitrary values such as `text-[1.625rem]`, and the shadows are arbitrary `shadow-[...]` values.

### Breakpoints
Two custom breakpoints are defined in `@theme` and used as variants. Layout is mobile-first: unprefixed classes are the phone layout.
- `sheet:` at 45rem (720px): the 24-column grid and the cargo table header appear, and the tractor feed widens to 2.25rem.
- `wide:` at 67.5rem (1080px): the full bill, with the signature box beside the fields.

### Custom utilities
Defined in `app/globals.css`:
- `tractor-feed`: the bill's punched feed margins and dashed perforation. It sets `--feed` to 1.5rem, or 2.25rem from `sheet:` up. Its mask uses an opaque `#000` channel. That channel is a mask value, not a colour on the page, so do not add it to the palette.
- `stamp-grain`: the rubber-stamp ink mask on the AWAITING and NONE stamps.
- `ink-steel`: sets `--stamp` to stencil ink on bare orange regions (header, Consign band, footer).
- `check-box`: the ticked carbon checkbox drawn before list items on the form.
- `check-box-empty`: the same box left open in carbon-rule, for a layer a project did not include.

### Component snippets
The component snippets in `.impeccable/design.json` are standalone plain-CSS references. Their `ds-*` class names are not in the codebase; the page uses the utilities above.
