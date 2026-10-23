# Rosy's Essentials — website

Marketing website for **Rosy's Essentials**, a Kenyan supplier of dignity kits (sanitary pads and personal care
items) for NGOs, schools, faith-based groups and community organizations.

The site has one job: earn the trust of organizations and get them to **request a quote**. There are no prices
anywhere on the site, by design.

Built with [Astro](https://astro.build) as a fully static site: plain HTML and CSS, with one small script on the
quote page. It costs nothing to host on Netlify or Vercel.

---

## Contents

1. [Run it on your computer](#1-run-it-on-your-computer)
2. [Edit kits and packages](#2-edit-kits-and-packages)
3. [Edit contact details](#3-edit-contact-details)
4. [Connect the quote form](#4-connect-the-quote-form)
5. [Replace placeholder images and logo](#5-replace-placeholder-images-and-logo)
6. [Edit page text](#6-edit-page-text)
7. [Deploy (put it online)](#7-deploy-put-it-online)
8. [Launch checklist](#8-launch-checklist)
9. [Project structure](#9-project-structure)

---

## 1. Run it on your computer

You need **Node.js 22.12 or newer** ([download](https://nodejs.org)). Check with `node --version`.

```bash
npm install        # first time only
npm run dev        # start the site at http://localhost:4321 — refreshes as you edit
```

Other commands:

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm run build`   | Builds the finished site into the `dist/` folder               |
| `npm run preview` | Serves the built `dist/` folder locally, exactly as it will go live |

Tip: to check the phone layout, open the site in Chrome or Safari, open developer tools, and switch to a phone-sized
view (about 375px wide). Most visitors will be on phones.

---

## 2. Edit kits and packages

**All kit contents live in one file: `src/data/packages.json`.** The Home page cards, the Packages comparison
table, the package details and the quote form's package dropdown all read from it. Edit it once and every page
updates.

```jsonc
{
  "id": "essential",              // used in links like /quote/?package=essential — don't change once live
  "name": "Essential",
  "summary": "A fuller kit for programs that distribute every month.",
  "bestFor": "Monthly programs",
  "popular": true,                // shows the "Most popular" badge (use on one kit only)
  "minOrder": "[MOQ — REPLACE] kits",   // ← set the real minimum order, e.g. "100 kits"
  "image": "/images/placeholders/kit-essential.svg",
  "imageAlt": "Placeholder image of the Essential kit in a branded pouch",
  "contents": {
    "pads": "2 packs",
    "underwear": "2 pairs",
    "soap": "2 bars",
    "toothpaste": "1 tube",
    "jelly": "1 small tub",       // use null if the kit doesn't include this item
    "packaging": "Branded pouch"
  }
}
```

- **Change a quantity:** edit the text in `contents`, for example `"pads": "3 packs"`.
- **Remove an item from a kit:** set it to `null`. The table shows "—" and the kit details say "Not included".
- **Add a new item to every kit** (for example a towel): add `{ "key": "towel", "label": "Towel" }` to the `items` list
  at the top, then add `"towel": "..."` (or `null`) to each kit's `contents`.
- **Custom Kit text** is in the `custom` section at the bottom of the file.

> **Never add prices.** Pricing is quote-only.

---

## 3. Edit contact details

Phone, WhatsApp, email, address and opening hours are all in **`src/data/site.json`**. They appear in the footer,
on the quote page and in the floating WhatsApp button.

| Field             | Example                    | Notes                                                       |
| ----------------- | -------------------------- | ----------------------------------------------------------- |
| `phoneDisplay`    | `+254 712 345 678`         | How the number is shown on the site                         |
| `phoneLink`       | `+254712345678`            | Same number, no spaces (used for tap-to-call)               |
| `whatsappNumber`  | `254712345678`             | Country code + number, **no `+`, no spaces, no leading 0**  |
| `whatsappMessage` | `Hello Rosy's Essentials…` | The greeting pre-filled when someone taps the WhatsApp button |
| `email`           | `orders@yourdomain.co.ke`  | How the email is shown                                      |
| `emailLink`       | `orders@yourdomain.co.ke`  | Same email (used for tap-to-email)                          |
| `address`         | `Ngong Road, Nairobi`      |                                                             |
| `hours`           | `Mon–Fri, 8am – 5pm`       |                                                             |

Remove the `(REPLACE)` text from every value.

---

## 4. Connect the quote form

The quote form uses **[Web3Forms](https://web3forms.com)**: free (250 submissions a month at the time of writing),
no server needed, and it works on any host. Each quote request arrives as an email.

1. Go to <https://web3forms.com>, enter the email address that should **receive** quote requests, and click
   *Create Access Key*.
2. Web3Forms emails you an access key (it looks like `a1b2c3d4-…`).
3. Paste it into `src/data/site.json`:
   ```json
   "web3formsAccessKey": "a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   ```
4. Rebuild and deploy, then **send yourself one test request** from the live site and check that the email arrives.

How it behaves:

- Until the key is added, submitting the form shows *"The quote form is not connected yet"*. Nothing is lost
  silently.
- After a successful submission, visitors see a thank-you message on the same page.
- If a visitor's browser has JavaScript turned off, the form still works: Web3Forms sends them to `/thank-you/`.
- A hidden "botcheck" field filters out most spam.

The access key is designed to sit in public web pages. It can only send email to *your* address, so it's safe to
commit.

---

## 5. Replace placeholder images and logo

Every placeholder image says **"PLACEHOLDER — REPLACE WITH PHOTO"** on it and lives in
`public/images/placeholders/`.

| File                | Used on                   | Suggested photo                    |
| ------------------- | ------------------------- | ---------------------------------- |
| `hero.svg`          | Home (top)                | Packed kits, or a distribution day |
| `kit-basic.svg`     | Home cards, Packages      | Basic kit and its contents         |
| `kit-essential.svg` | Home cards, Packages      | Essential kit                      |
| `kit-premium.svg`   | Home cards, Packages      | Premium kit in its reusable bag    |
| `kit-custom.svg`    | Packages (Custom Kit)     | A branded or custom kit            |
| `about-team.svg`    | About Us                  | The team, or a packing day         |

**Keep photos small. Many visitors are on slow mobile connections.**

1. Crop to a **3:2** shape (for example 1200 × 800 px; the hero can be 1200 × 960).
2. Compress and convert to **WebP** at <https://squoosh.app> (quality about 75). Aim for **under 150 KB** per photo.
3. Save it in `public/images/` (for example `public/images/kit-essential.webp`).
4. Point to it:
   - kit photos: change `image` (and `imageAlt`) in `src/data/packages.json`
   - hero photo: `src/pages/index.astro` (search for `hero.svg`)
   - team photo: `src/pages/about.astro` (search for `about-team.svg`), and delete the placeholder caption under it
5. Write a real description in the `alt` text, for example *"Essential kit with two packs of pads, underwear and
   soap"*.

**Logo:** the rose logo is a placeholder drawn in code.

- Site logo: replace the `<svg>` in `src/components/Logo.astro`.
- Browser tab icon: replace `public/favicon.svg`, `public/favicon-32.png` (32 × 32) and
  `public/apple-touch-icon.png` (180 × 180).
- Social sharing image: `public/og-image.jpg` (1200 × 630). This is the preview shown when the site is shared on
  WhatsApp, Facebook or LinkedIn.

---

## 6. Edit page text

Each page is one file in `src/pages/`:

| Page            | File                          |
| --------------- | ----------------------------- |
| Home            | `src/pages/index.astro`       |
| Packages        | `src/pages/packages.astro`    |
| How It Works    | `src/pages/how-it-works.astro`|
| About Us        | `src/pages/about.astro`       |
| Request a Quote | `src/pages/quote.astro`       |

Text sits between the HTML tags, so it's safe to edit as long as you don't remove the `<` `>` tags around it. Shared
sections are in `src/components/`:

- "Why choose us" points: `WhyChooseUs.astro`
- "Delivery anywhere in Kenya" banner: `DeliveryBanner.astro`
- Footer: `Footer.astro`
- Menu: `Header.astro`
- Closing call-to-action band: `CtaBand.astro`

**Before launch, on the About page:**

- Rewrite **"Our story"** in the owner's own words, and delete the "Story placeholder" note.
- Replace the two **testimonial placeholders** with real quotes (with the partner's permission), or delete the
  "What our partners say" section entirely. Never publish made-up testimonials.

**Search engine text:** each page's `title` and `description` (what Google shows) are at the top of its file, in
`<BaseLayout title="…" description="…">`. Keep descriptions under about 155 characters.

---

## 7. Deploy (put it online)

Both options below are free. Either way, first push this folder to a GitHub repository.

### Option A: Netlify

1. Sign in at <https://app.netlify.com> → *Add new site* → *Import an existing project* → choose the GitHub repo.
2. Netlify detects Astro automatically. Check the settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click *Deploy*. You get a free `something.netlify.app` address straight away.

### Option B: Vercel

1. Sign in at <https://vercel.com> → *Add New* → *Project* → import the GitHub repo.
2. Framework preset: **Astro** (detected automatically). Leave the defaults.
3. Click *Deploy*. You get a free `something.vercel.app` address.

From then on, every change pushed to GitHub redeploys the site automatically.

### Custom domain (for example `rosysessentials.co.ke`)

1. Buy the domain from a Kenyan registrar (`.co.ke` domains are managed through KENIC-accredited registrars).
2. Add it in Netlify (*Domain management*) or Vercel (*Settings → Domains*) and follow their DNS instructions.
   HTTPS is set up automatically.
3. **Update the domain in two places** so search engines and social previews use the right address:
   - `astro.config.mjs` → `site: 'https://www.your-domain.co.ke'`
   - `public/robots.txt` → the `Sitemap:` line
4. Optional but recommended: add the site to [Google Search Console](https://search.google.com/search-console) and
   submit `https://www.your-domain.co.ke/sitemap-index.xml`.

---

## 8. Launch checklist

Search the project for `REPLACE` to find every remaining placeholder.

- [ ] Phone, WhatsApp, email, address and hours in `src/data/site.json`
- [ ] Web3Forms access key in `src/data/site.json`, and one test quote request received
- [ ] Minimum order quantity for each kit in `src/data/packages.json`
- [ ] Final kit contents and quantities confirmed in `src/data/packages.json`
- [ ] Real kit, hero and team photos (compressed WebP) with proper alt text
- [ ] Final logo, favicon and social sharing image
- [ ] "Our story" rewritten on the About page
- [ ] Testimonials replaced with real ones, or the section removed
- [ ] Wording confirmed by the owner, especially quality and reliability claims ("trusted products", "we deliver
      what we promise")
- [ ] Domain set in `astro.config.mjs` and `public/robots.txt`
- [ ] Tested on a real phone: menu, WhatsApp button, tap-to-call, and the quote form

---

## 9. Project structure

```
public/                     Files served as-is
  favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.jpg, robots.txt
  images/placeholders/      Placeholder images, to replace before launch
src/
  data/
    packages.json           ← kit contents (the only place they live)
    site.json               ← contact details + form key
    counties.json           All 47 Kenyan counties (quote form dropdown)
  components/               Header, Footer, WhatsApp button, package cards and table, SEO tags…
  layouts/BaseLayout.astro  Shared page shell (head tags, header, footer, WhatsApp button)
  pages/                    One file per page; the file name becomes the URL
  styles/global.css         Colours, fonts, buttons and spacing — brand colours are at the top
astro.config.mjs            Site domain + sitemap settings
```

**Brand colours** are defined once at the top of `src/styles/global.css` (`--rose-600` for buttons, `--plum-900`
for text, and so on). If you change them, keep enough contrast for readability. <https://webaim.org/resources/contrastchecker/>
can check a pair of colours.
