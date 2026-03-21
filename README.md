# Cold Creek Land Services Website

A modern, responsive website for Cold Creek Land Services - a professional land management and clearing company. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Industrial aesthetic with forest green and earth tone color palette
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Gallery**: Masonry layout with before/after slider component
- **Contact Forms**: EmailJS integration for serverless form submission
- **SEO Optimized**: Structured data, meta tags, and sitemap
- **Performance**: Optimized images with Next.js Image component
- **Animations**: Smooth Framer Motion animations throughout

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + EmailJS
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── manifest.ts       # PWA manifest
│   └── sitemap.ts        # SEO sitemap
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── [feature components]
└── lib/                  # Utilities and types
    ├── types.ts          # TypeScript interfaces
    └── utils.ts          # Helper functions
```

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

4. **Update Business Information**
   Replace placeholder content in:
   - Contact information (phone, email, address)
   - Service areas
   - Business hours
   - License numbers
   - Social media links

5. **Add Real Images**
   Replace placeholder images with actual project photos:
   - Hero background image/video
   - Service images
   - Gallery portfolio images
   - Before/after comparison images

6. **Run Development Server**
   ```bash
   npm run dev
   ```

7. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

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
- Update metadata in each page's `metadata` export
- Modify the JSON-LD structured data in `layout.tsx`
- Update contact information throughout the site

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### Other Platforms
- Netlify: Use `npm run build` and deploy `out/` directory
- AWS/DigitalOcean: Use Docker or direct deployment

## 📊 SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card support
- JSON-LD structured data for LocalBusiness
- Sitemap.xml generation
- Robots.txt configuration
- Performance optimized (90+ Lighthouse score target)

## 🔧 Performance Optimizations

- Next.js Image optimization
- Code splitting with App Router
- Framer Motion lazy loading
- Tailwind CSS purging
- Compression and caching headers

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📄 License

This project is built for Cold Creek Land Services. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.
