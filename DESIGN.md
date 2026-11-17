---
name: Rosy's Essentials
description: Botanical apothecary meets editorial print — a supplier's monograph for dignity kits.
colors:
  linen: "#f6f4ef"
  parchment: "#ece8df"
  field: "#fbfaf7"
  ink: "#1a1816"
  ink-soft: "#5a534c"
  rosehip: "#8c2d38"
  rosehip-deep: "#6e1f29"
  on-dark-soft: "#c9c2b8"
  on-rosehip-soft: "#f1dcdc"
  rule-strong: "#8a8178"
  hairline: "rgb(26 24 22 / 14%)"
  danger: "#a3241f"
  whatsapp: "#187a42"
typography:
  display:
    fontFamily: "Instrument Serif, Instrument Serif Fallback, Georgia, serif"
    fontSize: "clamp(3rem, 10.5vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Instrument Serif, Instrument Serif Fallback, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Instrument Serif, Instrument Serif Fallback, Georgia, serif"
    fontSize: "clamp(2.125rem, 5.5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Plus Jakarta Sans, Plus Jakarta Sans Fallback, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Plus Jakarta Sans, Plus Jakarta Sans Fallback, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 2.2vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Plus Jakarta Sans, Plus Jakarta Sans Fallback, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  none: "2px"
spacing:
  gutter-sm: "1.25rem"
  gutter-lg: "2.5rem"
  section: "clamp(4rem, 11vw, 8rem)"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.rosehip}"
    textColor: "{colors.linen}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.rosehip-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.4rem"
  button-light:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "50px"
  plate:
    backgroundColor: "{colors.parchment}"
    padding: "0.75rem"
---

# Design System: Rosy's Essentials

## Overview

**North star: the supplier's monograph.** The site reads like a printed catalogue of specimens: each kit documented with its exact contents, plates in hairline frames, and small monospaced notes in the margins. It borrows the precision of an apothecary label and the pacing of an editorial lookbook, then spends that credibility on a plain job: getting an NGO, school or community group to request a quote.

Visitors are procurement and program staff, mostly on phones and slow connections. The look must read as careful and trustworthy, never as luxury: copy stays plain and factual, prices never appear, and every decorative choice is one a printer could make with ink on linen paper.

Key characteristics: linen ground, espresso ink, one dried-rosehip accent; 1px rules and tonal surface shifts instead of shadows; oversized serif display set tight; monospaced uppercase labels for contents, counts and counties; square 2px corners everywhere.

## Colors

Restrained strategy: tinted neutrals plus one accent, with two committed full-bleed fields (ink and rosehip) that punctuate the scroll.

- **Linen `#f6f4ef`** is the canvas. **Parchment `#ece8df`** is the one raised surface: alternate sections, plates, bento cells, the popular column of the comparison table.
- **Ink `#1a1816`** is all primary text (16.1:1 on linen) and the dark field (delivery section, footer). **Ink-soft `#5a534c`** is secondary text and mono labels (6.9:1 on linen, 6.2:1 on parchment). Nothing lighter carries text.
- **Rosehip `#8c2d38`** is the only accent: primary buttons, the "Most popular" tag, step numerals, the 47 numeral, the closing call-to-action field. Rosehip-deep `#6e1f29` is its hover/pressed state.
- On dark fields, text is linen; secondary text is `on-dark-soft #c9c2b8` on ink and `on-rosehip-soft #f1dcdc` on rosehip.
- **Hairline `rgb(26 24 22 / 14%)`** is decorative only (dividers, grid lines). Form controls use **rule-strong `#8a8178`** (3.5:1) so field edges meet WCAG non-text contrast.

## Typography

- **Instrument Serif** (400 + italic) for every heading. Display and page headlines sit at line-height 0.95 and -0.03em tracking; section titles at 1.0 / -0.025em. No bold weight exists or is faked: hierarchy comes from size.
- **Plus Jakarta Sans** (variable 400–700) for body, buttons and form labels, 16px at 1.6.
- **JetBrains Mono** 500, 12px, uppercase, +0.08em, tabular numerals, for labels only: kit contents, ledgers, counties, captions, placeholders. Never for paragraphs.
- Italic is reserved for one accent phrase in the Home hero ("delivered reliably.") and the footer statement. Do not add italic accents to other headings.
- All three faces are self-hosted Latin subsets (~80 KB total) with metric-matched fallbacks.

## Layout

- Mobile-first at 390px; container 1240px with 1.25rem gutters (2.5rem from 768px). Sections breathe at `clamp(4rem, 11vw, 8rem)`.
- Desktop layouts are asymmetric 7/5 splits: type in seven columns, plate or supporting copy in five. Page heads put an oversized headline left and the lead right, aligned to the baseline.
- Grids use `minmax(0, 1fr)` tracks so long words and enlarged text never widen the page; headings may hyphenate.
- Lists are ruled rows (1px hairlines, an ink rule on top), not cards.

## Elevation & Depth

Flat. There are no drop shadows, glows or blurs anywhere. Depth comes from (1) tonal shifts between linen and parchment, (2) 1px hairline frames around plates, and (3) full-bleed ink and rosehip fields. Bento grids get their lines from a 1px gap over a hairline-tinted background, so borders never double up.

## Shapes

Square: every radius is 2px (buttons, inputs, focus rings, WhatsApp button). Plates are rectangles with a 0.75rem parchment mat inside a hairline border; placeholder images are 4:5 portrait.

## Components

- **Buttons:** primary (rosehip fill), outline (1px ink), light (linen fill on dark fields), ink. 48px minimum height, 600 weight, a drawn SVG arrow that nudges 3px on hover.
- **Links:** body links keep a 40%-opacity underline that firms up on hover. Standalone links (`.link-reveal`) have no underline at rest and draw a 1px rule in from the left.
- **Plate:** framed picture with a mono caption row; on pointer devices the image scales to 1.03 over 700ms.
- **Ledger:** two-column mono list of label/value pairs between hairlines (hero facts, minimum order, delivery).
- **Kit index (Home):** numbered rows 01–04 with serif name, mono contents manifest and actions; on desktop the hovered or focused row swaps the sticky preview plate (CSS `:has()`, no JavaScript); on phones each row carries its own thumbnail.
- **Delivery section:** ink field, an outlined rosehip "47" numeral and all 47 county names typeset as one mono block.
- **Bento:** "Why choose us" and About reasons, ruled with 1px lines; the first cell is larger and on linen.
- **Form fields:** field-white background, rule-strong border, ink border on hover, 2px rosehip focus outline, 2px danger border when invalid.
- **Header:** linen with a hairline base; mobile menu reads as a numbered table of contents in serif.

Motion uses one easing, `cubic-bezier(0.22, 1, 0.36, 1)`: 240ms for colour/underline changes, 700ms for image scale and preview crossfades. Reduced motion removes scaling and movement but keeps colour state changes.

## Do's and Don'ts

- **Do** document kits with exact contents in mono; **don't** describe them with ingredient or "batch/origin" language the business can't back up.
- **Do** keep every price out of the site; mono is for quantities, counts and counties.
- **Do** separate with 1px hairlines and tonal surfaces; **don't** add shadows, gradients, glows or pill shapes.
- **Don't** put a small label or kicker above a heading; numbers and tags go beside or below.
- **Don't** add a second accent colour or use rosehip for body text blocks.
- **Do** mark every placeholder (photos, story, testimonials, MOQ) in rosehip mono so it can't pass as real.
