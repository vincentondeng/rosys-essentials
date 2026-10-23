# Rosy's Essentials — Business Website

## What this project is
A simple, professional marketing website for **Rosy's Essentials**, a Kenyan B2B supplier of feminine hygiene and personal care kits ("dignity kits").

The site is NOT an online shop. Its single goal is to earn the trust of organizations and get them to **request a quote**.

## Target customers
NGOs, women- and girl-focused organizations, schools, faith-based groups, and community-based organizations (CBOs) that buy kits in bulk to distribute to women and girls.

## Business rules (do not change without asking)
- **Pricing is quote-only.** Never display prices anywhere on the site. Every package shows a "Request a Quote" button instead.
- **Delivery: anywhere in Kenya.** State this clearly on the Home page, the Packages page, and in the footer.
- Kits are sold in bulk with volume-based pricing (mentioned, not shown).
- Custom kits are available on request.

## Products
Three tiers, shown side by side in a comparison layout. Highlight **Essential** as "Most popular".

| Item | Basic | Essential | Premium |
|---|---|---|---|
| Sanitary pads | 1 pack | 2 packs | 3 packs |
| Underwear | 1 pair | 2 pairs | 3 pairs |
| Bathing soap | 1 bar | 2 bars | 2 bars |
| Toothpaste | — | 1 tube | 1 tube + toothbrush |
| Petroleum jelly | — | 1 small tub | 1 large tub |
| Packaging | Plain pouch | Branded pouch | Branded reusable bag |
| Best for | One-off distributions | Monthly programs | Flagship / donor-visible events |

Quantities are placeholders the owner will confirm. Keep product data in ONE data file (e.g. `src/data/packages.json` or equivalent) so it can be edited without touching page markup.

Fourth option: **Custom Kit** — "Need something different? We'll build it to your program's needs."

## Pages
1. **Home** — headline about dignity and reliable supply; short intro; the three packages (summary); "Why choose us"; "Delivery anywhere in Kenya"; call to action.
2. **Packages** — full detail per tier, what's inside, minimum order quantity (placeholder), "Request a Quote" button on each that pre-selects that package in the form.
3. **How It Works** — 1) Choose a package or request a custom kit → 2) Receive your quote → 3) We pack and deliver anywhere in Kenya.
4. **About Us** — the story behind Rosy's Essentials; why menstrual and personal hygiene matter for women's and girls' health, schooling and dignity.
5. **Request a Quote / Contact** — form with:
   - Organization name (required)
   - Contact person (required)
   - Email (required)
   - Phone (required, Kenyan format, e.g. +254 7XX XXX XXX)
   - Package: Basic / Essential / Premium / Custom (required)
   - Quantity of kits (required, number)
   - Delivery county (dropdown of all 47 Kenyan counties)
   - Delivery town / location
   - Preferred delivery date
   - Message / special requirements
   Show a clear success message after submission.

Global: sticky header with logo + nav + "Request a Quote" button; floating WhatsApp click-to-chat button; footer with contact details, "Delivering across Kenya", and quick links.

## "Why choose us" points
- Ready-packed kits that save procurement time
- Bulk pricing and flexible order sizes
- Quality, trusted products
- Reliable delivery anywhere in Kenya
- Custom kits for specific programs or donors

## Design
- Warm, clean, trustworthy. Primary: soft rose/pink. Supporting: white and a deep neutral (plum or charcoal) for text and contrast. Must feel credible to procurement officers — avoid childish or overly "girly" styling.
- Mobile-first; most visitors will be on phones, often on slower connections. Keep pages light: compress images, no heavy animations, minimal JavaScript.
- Simple rose-inspired SVG logo placeholder.
- Placeholder images for kits and packaging (clearly marked for replacement).
- Accessible: good color contrast, alt text, labelled form fields, keyboard navigable.

## Tone
Respectful, warm, professional. Emphasize dignity and reliability — never pity.

## Tech approach
- Keep it simple and cheap to host: a static site (plain HTML/CSS/JS, or Astro + Tailwind if a framework helps).
- Quote form must work without a custom backend — use a form service such as Netlify Forms, Formspree or Web3Forms. Leave the endpoint/key as a clearly marked placeholder.
- Deployable for free on Netlify or Vercel.
- Include a README explaining how to run locally, edit packages/contact details, and deploy.
- Basic SEO: page titles, meta descriptions, Open Graph tags, favicon. Target phrases like "sanitary pads supplier Kenya", "dignity kits for NGOs Kenya".

## Placeholders to leave for the owner
Phone number, WhatsApp number, email, physical address, minimum order quantity, final kit contents, testimonials, logo, photos, form service key.

## How to work
- Plan first and show me the plan before writing code.
- Build page by page; run the site locally and check it at phone width before moving on.
- Ask before adding any new dependency or changing a business rule above.
