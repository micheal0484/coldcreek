Project Brief: Cold Creek Land Services
Role: You are an expert Full-Stack Web Developer specializing in modern, high-conversion service business websites.
Objective: Build a responsive, fast, and SEO-optimized website for a land management company called "Cold Creek Land Services".
Reference Aesthetic: brushworksco.com (Match the modern, industrial, and highly visual style).
Domain: coldcreeklandservices.com

1. Tech Stack & Architecture
Framework: Next.js (App Router) with React.

Language: TypeScript.

Styling: Tailwind CSS.

Animations: Framer Motion (for smooth section reveals, fade-ins, and hover states).

Form Handling: React Hook Form + EmailJS (for lightweight, serverless email routing).

Icons: Lucide React.

Deployment: Vercel.

Setup Instructions:

Initialize a new Next.js project with Tailwind and TypeScript.

Set up the directory structure using the App Router (/app).

Configure Tailwind with a custom color palette: Deep forest greens, earth tones (browns/tans), and high-contrast accents (like safety orange or yellow) for Call-to-Action (CTA) buttons.

2. Global Design System & UI/UX
Typography: Use a clean, modern sans-serif (e.g., Inter or Roboto) for body text, and a strong, heavy block font for headers to convey industrial strength.

Mobile-First: Ensure all grids collapse elegantly to single columns on mobile. Navigation must use a clean, accessible hamburger menu on smaller screens.

Visuals: Heavy emphasis on high-quality imagery. Use dark gradients or overlays on background images to ensure white text remains readable.

3. Frontend Development (Core Pages)
A. Landing Page (/)
Hero Section: Full-screen high-quality background video or image (e.g., land clearing in action) with a dark overlay. Include a bold headline (e.g., "Reclaim Your Land"), a subheadline, and a highly visible "Get a Free Quote" CTA button.

Social Proof Banner: A strip below the hero showing badges like "Licensed & Insured", "Locally Owned", and service area highlights.

Services Grid: A responsive grid highlighting the core services with icons or background images:

Debris Removal & Cleanup

Dirt Work & Site Prep

Food Plot Creation

Gravel Driveway Construction & Repair

Pond & Fence Row Cleanup

Brush Hogging & Mulching

Land Clearing

New Septic System & Water Line Install

Snow Removal

The Process: A simple 3-step visual timeline (e.g., 1. Request Quote, 2. We Clear the Land, 3. Enjoy Your Property).

Footer: Standard navigation links, physical service areas, phone number, email, and social links.

B. Media & Work Gallery Page (/gallery)
Layout: A Masonry image grid to handle different aspect ratios of on-site photos and equipment.

Interactive Features: Include a "Before & After" image slider component (where the user can drag a vertical slider left/right to reveal the before and after states of an overgrown lot).

Optimization: Strictly use the Next.js <Image /> component for automatic WebP conversion, responsive sizing, and lazy loading.

C. Contact & Quote Page (/contact)
Layout: Two-column design on desktop. Left side: Direct contact info (Phone, Email, Business Hours). Right side: The lead capture form.

Form Structure: Create a clean form with the following fields:

First / Last Name

Email & Phone Number

Service Requested (Dropdown containing the core services)

Project Description / Acreage (Textarea)

Backend Integration: Wire the submit button to EmailJS to forward leads directly to the business email without needing a custom backend database. Show a clear success message upon submission.

4. SEO & Performance Requirements
Metadata: Generate dynamic title and meta description tags for every page.

Local SEO Schema: Inject JSON-LD structured data for a LocalBusiness and LandscapingService, including the business name, list of services, and geographic service area.

Semantic HTML: Use proper <header>, <main>, <section>, and footer tags. Ensure strict H1 -> H2 -> H3 header hierarchy for screen readers and search engines.

Speed: Maintain a Lighthouse performance score of 90+ across all metrics.

5. Execution Steps for the AI
Phase 1: Generate the layout.tsx, global CSS, and configuration files. Pause for review.

Phase 2: Build the reusable UI components (Buttons, Navbar, Footer, Service Cards, Inputs).

Phase 3: Assemble the Landing Page using the components.

Phase 4: Assemble the Media page (with the Before/After slider) and the Contact page (wiring up the EmailJS logic).

Phase 5: Implement SEO metadata, schema markup, and final responsive polish.