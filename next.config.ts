import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Bluehost (no Node.js host support) — `npm run build`
  // produces a plain HTML/CSS/JS site in `out/` to FTP-upload directly.
  output: 'export',
  // Emits contact/index.html, gallery/index.html, etc. instead of contact.html,
  // so plain Apache (no rewrite rules) resolves /contact and /gallery correctly.
  trailingSlash: true,
  images: {
    // Next's on-demand image optimization needs a Node server; static export
    // can't use it, so images are served as-is at whatever size you export them at.
    unoptimized: true,
  },
};

export default nextConfig;
