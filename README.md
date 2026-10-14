# Cold Creek Land Services Website

A modern, responsive website for Cold Creek Land Services - a professional land management and clearing company. Built with Next.js, TypeScript, and Tailwind CSS. The site is **live** and deployed as a static export to Bluehost shared hosting.

## 🌟 Features

- **Modern Design**: Industrial aesthetic with forest green and earth tone color palette
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Gallery**: Masonry layout with before/after slider component
- **Contact Forms**: EmailJS integration for serverless form submission
- **SEO Optimized**: Structured data, per-page meta tags/canonical URLs, Open Graph share image, and sitemap
- **Animations**: Smooth Framer Motion animations throughout

## 🚀 Tech Stack

- **Framework**: Next.js 16.2.1 (App Router), built as a **static export** — note: this is a much newer major version than most AI tooling and documentation assume; consult `AGENTS.md` before making framework-level changes
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + EmailJS
- **Hosting**: Bluehost shared hosting (plain Apache, no Node.js support) — see [Deployment](#-deployment) below

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout (includes LandscapingService JSON-LD + default metadata)
│   ├── page.tsx           # Home page
│   ├── manifest.ts        # PWA manifest (static-exported)
│   └── sitemap.ts         # SEO sitemap (static-exported)
├── components/             # React components
│   ├── ui/                # Reusable UI primitives (Button, Input, Select, Textarea, ServiceCard)
│   ├── ComingSoon.tsx      # Temporary "coming soon" page (see below)
│   └── [feature components] # Navigation, HeroSection, ServicesSection, ProcessSection,
│                             # GalleryGrid, BeforeAfterSlider, ContactForm, ContactInfo, Footer
└── lib/                    # Utilities, types, and config
    ├── types.ts            # TypeScript interfaces + services data
    ├── utils.ts            # Helper functions (cn, formatPhoneNumber, slugify, validators)
    ├── seo.ts              # Shared baseUrl + default OG/Twitter share image
    └── config.ts           # COMING_SOON_MODE site-wide gate (see below)

public/images/              # Real project photos + the generated og-image.jpg
```

## 🚧 Coming Soon mode

`src/lib/config.ts` exports `COMING_SOON_MODE`, a single flag checked at the top of `page.tsx`, `gallery/page.tsx`, and `contact/page.tsx`. When `true`, every route renders `src/components/ComingSoon.tsx` (business name, phone, email, Facebook link) instead of the real page content — useful while a redesign is pending owner approval. **Currently `false`** — the real site is live. Flip it back to `true` (or grep for `COMING_SOON_MODE` to find all three call sites) to gate the site again.

## 📇 Business info & secrets (`.env.local`)

A single **gitignored** `.env.local` file at the repo root holds two different kinds of things:

- **`NEXT_PUBLIC_EMAILJS_*`** — actually read by `ContactForm.tsx` at build time (see [EmailJS Configuration](#-emailjs-configuration)). Required for `npm run build` to produce a working contact form.
- **Everything else** (`facebooklink`, `phone_number`, `email`, `address`, `latitude`, `longitude`) — reference only, *not* read by any code. These values are hardcoded directly in `ContactInfo.tsx`, `ContactForm.tsx`, `Footer.tsx`, `Navigation.tsx`, `contact/page.tsx`, and the JSON-LD in `layout.tsx`. If the phone number, email, or address ever change, update those components directly — this file is just a record of what's currently live, and a build-time source for the EmailJS keys.

Keeping this out of git avoids committing a personal phone/email/API key directly into history. Since there's no `.env.example` committed, anyone setting up the repo fresh will need these values handed to them separately (see Known Issues).

Not currently shown anywhere on the site (intentionally omitted, not a placeholder): **license number** (N/A for now), Instagram/LinkedIn (removed — no accounts to link to).

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coldcreek
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file and configure EmailJS:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   > See the note in **EmailJS Configuration** below — these env vars aren't actually read by the code yet.

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production (static export)**
   ```bash
   npm run build
   ```
   This produces a plain static site in `out/` — see [Deployment](#-deployment).

## 📧 EmailJS Configuration

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{project_description}}`
   - `{{acreage}}`
   - `{{to_email}}`
4. Update the EmailJS configuration in `ContactForm.tsx`

> **Status**: wired up and working. `ContactForm.tsx` reads `process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` from `.env.local` at build time, and the real values are confirmed to be inlined into the exported JS bundle. Since this is a static export (no server), these **must be present in `.env.local` whenever `npm run build` is run** — if that file is missing or the vars lack the `NEXT_PUBLIC_` prefix, the form will silently build but fail to send.

## 🎨 Customization

### Colors
The color palette is defined in `globals.css`:
- Forest Green: `#1b4332`
- Safety Orange: `#ff6600`
- Earth Tan: `#d2b48c`
- Stone Gray: `#6b7280`

### Services
Update the services array in `src/lib/types.ts` to match your offerings.

### Content
- Update metadata in each page's `metadata` export (see `src/lib/seo.ts` for the shared OG image/base URL)
- Modify the JSON-LD structured data in `layout.tsx`
- Update contact information throughout the site — see [Business info](#-business-info-infomd) above

### Images
Real project photos live in `public/images/`. Because the site is a static export (`images.unoptimized: true` in `next.config.ts`), **nothing resizes or compresses images automatically** — whatever file you commit is exactly what ships to visitors. When adding new photos:
- Resize to roughly the size they'll actually display at (≈1600px on the long edge is plenty for anything on this site, including the gallery lightbox)
- Re-save as JPEG at ~80% quality
- Keep individual files under ~500KB where possible

## 🚀 Deployment

**This is how the site is actually deployed today:**

1. `next.config.ts` sets `output: 'export'` and `trailingSlash: true`, so `npm run build` produces a plain static site (HTML/CSS/JS, no Node.js required to serve it) in `out/` — routes export as `contact/index.html`, `gallery/index.html`, etc., which Apache serves natively.
2. `images.unoptimized: true` is also set — Bluehost can't run Next's image optimizer, so images are served exactly as committed (see [Images](#images) above).
3. Source lives in git; there is **no CI/CD**. To deploy: run `npm run build` locally, then manually upload the contents of `out/` (not the whole repo) to the Bluehost web root via FTP or Beyond Compare.
4. The two Next.js metadata route handlers (`sitemap.ts`, `manifest.ts`) both set `export const dynamic = 'force-static'`, which is required for them to work under static export.


## 📊 SEO Features

- Per-page `<title>`, meta description, and `alternates.canonical` (home, gallery, contact)
- `metadataBase` set so Open Graph/Twitter image URLs resolve correctly
- Open Graph + Twitter Card (`summary_large_image`) on every page, sharing `public/images/og-image.jpg` (1200×630, generated from a real project photo)
- JSON-LD `LandscapingService` structured data in `layout.tsx` — real address, geo-coordinates, phone, service catalog, and `areaServed` (Ozark, AR / Franklin County)
- `sitemap.xml` and `robots.txt` (robots.txt points at the sitemap)
- Clean heading hierarchy (one `<h1>` per page) and descriptive `alt` text on all photos

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## ⚠️ Known Issues / Still Outstanding

- **`Footer.tsx` links to `/privacy` and `/terms`**, but neither route exists yet — these currently 404. Worth having before public launch given the contact form collects name/email/phone/project details and its privacy notice ("we respect your privacy...") currently has no policy page to back it up.
- **`HeroSection.tsx`'s background image (`hero1.jpg`) is low-resolution** (458×421px) for a full-screen background — it will look soft/blurry on larger screens, and it's the first thing visitors see. Needs a higher-resolution source photo.
- **`public/images/hero.jpg` appears unused** — not referenced anywhere in `src/`. Likely a leftover from an earlier hero image swap; confirm whether it's still needed before removing.
- **No `.env.example` committed** — since `.env.local` is gitignored (by design, it holds the real EmailJS keys), anyone setting up the project fresh has no record of which variables are required. Worth adding an `.env.example` with the key names but placeholder values.

## 📄 License

This project is built for Cold Creek Land Services. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.
