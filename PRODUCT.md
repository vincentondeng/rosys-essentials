# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Procurement and program staff at organizations that buy kits in bulk to distribute to women and girls in Kenya: NGOs, women- and girl-focused organizations, schools, faith-based groups and community-based organizations (CBOs). They are judging whether a small supplier is credible and reliable enough to trust with a program order. Most visit on phones, often on slow connections.

## Product Purpose

A marketing site for Rosy's Essentials, a Kenyan B2B supplier of ready-packed feminine hygiene and personal care kits ("dignity kits"). It is not a shop. Its only goal is to earn an organization's trust and get it to **request a quote**. Success is a submitted quote request (or a WhatsApp conversation) from a real organization.

## Positioning

Founder-led and personal: a real founder stands behind the business and deals with buyers directly, not an anonymous wholesaler. On top of that, the practical value: kits arrive already packed, which saves procurement teams from buying and packing items one by one. Delivery is available anywhere in Kenya, and custom kits are made for specific programs or donors.

Not confirmed, so do not claim: local sourcing or manufacturing, speed advantages, certifications, client numbers or years in business.

## Operating Context

- Buyers compare suppliers, ask for quotes, and order in bulk for one-off distributions, monthly programs or donor-visible events.
- Pricing is quote-only and based on volume. The quote form (Web3Forms) and WhatsApp click-to-chat are the two ways buyers get in touch.
- The business is shared/family-run: the developer and the owner decide content and design together. Factual claims about the business need the owner's sign-off.

## Capabilities and Constraints

- Static Astro site (`astro` + `@astrojs/sitemap` only). Ask before adding a dependency. Must stay free to host (Netlify or Vercel; host not chosen yet; GitHub Pages demo exists).
- Business rules (from CLAUDE.md, not to be changed without asking): never show prices anywhere; every package has "Request a Quote"; say "delivery anywhere in Kenya" on Home, Packages and the footer.
- Three tiers: Basic, Essential (marked "Most popular"), Premium. A fourth option is Custom Kit. All kit data lives in `src/data/packages.json`, and contact details in `src/data/site.json`.
- Quote form fields and the list of 47 counties are set in CLAUDE.md. Package choice is pre-selected via `/quote/?package=<id>`.
- Pages must stay light on phones: small images (WebP), minimal JS, no heavy animation.
- Still undecided or placeholder: phone, WhatsApp, email, address, hours, minimum order quantity, final kit quantities, the founder's name and story, the Web3Forms key, testimonials, the final logo, and the production domain.

## Brand Commitments

- Name: Rosy's Essentials. Tagline in use: "Dignity kits, delivered anywhere in Kenya."
- Voice: respectful, warm and professional. Emphasize dignity and reliability. Never pity.
- Must feel credible to procurement officers. Avoid childish or overly "girly" styling. (CLAUDE.md also pins a soft rose primary with white and a deep plum/charcoal neutral.)

## Evidence on Hand

- Real kit and packaging photos are **coming from the owner**. Until then, the clearly marked SVG placeholders in `public/images/placeholders/` stay.
- No testimonials, client names, logos, order counts or certifications exist yet. Do not invent any of these. Leave proof slots empty or marked as placeholders.
- Supporting business documents exist in the repo root (`rosys-essentials-board-deck.pptx`, `rosys-essentials-cost-model.xlsx`). They are not website content.

## Product Principles

1. **Trust before everything.** Every page should make a careful buyer more confident, through clarity, honesty and a real person behind the business, never through invented proof.
2. **One action.** Every route leads to requesting a quote (or WhatsApp). Nothing competes with it.
3. **Dignity, not pity.** Women and girls are the reason for the work, not objects of sympathy.
4. **Owner-editable.** Content lives in data files that a non-developer can change safely.
5. **Light and fast on a phone.** Kenyan mobile connections are the baseline, not the edge case.

## Accessibility & Inclusion

Good color contrast, alt text on all images, labelled form fields, full keyboard navigation. Mobile-first at about 375px. Works on slow connections.
