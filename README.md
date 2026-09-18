# Noir Lumière – Editorial Photography Portfolio
### Designed & Developed by [Hazem Elerefy](https://github.com/hazemelerefey)

A high-fashion, editorial photography portfolio web application extracted and recreated from **Framer** (`PhotoPort`) into a clean, modern **Next.js 14** application with **TypeScript**, **Tailwind CSS**, and a **Full Framer Archive**.

---

## 🌟 Highlights

- **Modern Tech Stack**: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Lucide Icons.
- **100% Extracted Assets**: Over 110 high-resolution images, fonts, and icons downloaded locally into `public/images/`.
- **Dynamic Content & CMS**:
  - **10 Complete Project Case Studies** (`/projects/[slug]`) with image galleries, client details, and testimonials.
  - **5 Editorial Articles & Essays** (`/articles/[slug]`) with reading time, category, and multiple visual spreads.
- **Complete Responsive Pages**:
  - **Home (`/`)**: High-impact editorial hero, interactive London GMT clock, stats counter, featured works, brand collab showcase, services & testimonials, behind-the-lens story teaser, and FAQ accordion.
  - **About (`/about`)**: Biography, Florence heritage, philosophy, awards, and complete gear catalog.
  - **Portfolio (`/projects`)**: Full portfolio gallery with instant category filtering (All, Brand Shoot, Fashion, Portrait, Editorial).
  - **Journal (`/articles`)**: Editorial thought pieces and photo essays.
  - **Contact (`/contact`)**: Interactive inquiry form with shoot type selector, direct studio email, and studio locations.
  - **404 Not Found (`/not-found`)**: Custom editorial 404 screen.
- **Full Static & Raw Framer Archive**:
  - `framer-export/static-site/`: Static mirror of all 20 compiled HTML pages from Framer.
  - `framer-export/styles_and_pages.json`: Complete AST and design token dump from Framer Server API.
  - `data/cms.json`: Raw Framer CMS database schema and items.

---

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
framer-noir-lumier/
├── app/
│   ├── layout.tsx             # Root layout with navigation & footer
│   ├── page.tsx               # Home page
│   ├── globals.css            # Typography & design tokens
│   ├── about/page.tsx         # About page & gear
│   ├── projects/
│   │   ├── page.tsx           # Filterable projects catalog
│   │   └── [slug]/page.tsx    # Dynamic project case study
│   ├── articles/
│   │   ├── page.tsx           # Journal & essays list
│   │   └── [slug]/page.tsx    # Dynamic article page
│   ├── contact/page.tsx       # Contact & booking form
│   └── not-found.tsx          # Custom 404 page
├── components/
│   ├── Navbar.tsx             # Header with London clock & mobile menu
│   ├── Footer.tsx             # Editorial footer with links
│   ├── ProjectCard.tsx        # Project card with hover zoom
│   ├── ArticleCard.tsx        # Article card
│   └── FaqAccordion.tsx       # Collapsible FAQ accordion
├── data/
│   ├── projects.ts            # 10 typed project items with local images
│   ├── articles.ts            # 5 typed article items with local images
│   └── cms.json               # Original Framer CMS export
├── framer-export/
│   ├── static-site/           # Static mirror of Framer production site
│   └── styles_and_pages.json  # Serialized Framer AST and tokens
└── public/
    └── images/                # 110+ extracted high-res photography assets
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy with zero configuration!

### Deploy to Netlify / Cloudflare Pages
Run `npm run build` or use the standard Next.js build command on your hosting platform.

---

## 📜 Credits & License
- **Design & Engineering**: Designed & Developed by [Hazem Elerefy](https://github.com/hazemelerefey).
- Original visual foundations from Framer PhotoPort. All rights reserved.
