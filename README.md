# Annamalai Construction — Premium Building Design & Architecture Website

A bespoke, production-ready website for **Annamalai Construction**, an architectural building design and construction practice based in Pattukkottai, Tamil Nadu, India, headed by **Er AG. Murugesan**.

---

## 1. Verified Company Information

- **Company Name:** Annamalai Construction
- **Principal Engineer:** Er AG. Murugesan
- **Category:** Building Designer & Planning
- **Location:** Pattukkottai, Tamil Nadu, India
- **Address:** Railway Station Rd, Nadimuthu Nagar, Pattukkottai, Tamil Nadu 614602, India
- **Phone:** +91 99420 39206
- **WhatsApp:** [wa.me/919942039206](https://wa.me/919942039206)
- **Reported Rating:** 5.0 Stars (Google Maps)
- **Reported Reviews:** 92 Reviews
- **Google Maps Listing:** [Google Maps Search](https://www.google.com/maps/search/?api=1&query=Er%20AG.MURUGESAN%20Annamalai%20Construction%2C%20Pattukkottai)

> **Client Confirmation Note:**
> The phone numbers, address, Google reviews (92 reviews, 5.0 stars), and engineer identity are verified from public records.
> Service categories, execution milestones, and architectural portfolio items are currently presented as **sample draft concepts** and are explicitly marked for client review and final approval.

---

## 2. Technology Stack (MERN)

- **MongoDB:** Database for storing client inquiries and project specifications.
- **Express.js:** Backend REST API (`/api/enquiries`, `/api/health`).
- **React 19:** Frontend UI library.
- **Node.js (TypeScript / TSX):** Full-stack server runtime.
- **Vite:** High-performance React development and production bundler.
- **Motion / Framer Motion:** Smooth 3D tilt hero effect, staggered scroll reveals, and drawer animations.
- **Tailwind CSS v4:** Strict three-colour architectural palette system.
- **Lucide React:** Consistent architectural icons.

---

## 3. Strict Three-Color Palette

1. **Deep Maroon:** `#4B1428`
2. **Warm Ivory:** `#F5F0E8`
3. **Charcoal:** `#242124`

Both Dark and Light architectural themes are supported and persisted via `localStorage`.

---

## 4. Website Architecture (9 Sections)

1. **Section 1 — Premium Animated Hero:** 3D perspective tilt, staggered typography, high-contrast readability scrims, verified credential pill, and dual CTAs.
2. **Section 2 — About the Company:** Two-column layout with construction emblem, CAD blueprints, verified Er AG. Murugesan details, and draft service list.
3. **Section 3 — Business Metrics and Trust:** 5.0 Stars, 92 Google Reviews, Pattukkottai Central Location, and Building Designer category (zero fabricated statistics).
4. **Section 4 — Services:** Restrained architectural cards with draft flags, itemized deliverables, and "Enquire About This Service" triggers.
5. **Section 5 — Construction Strategy:** 4-stage construction methodology timeline (Consultation, Design, Coordination, Handover).
6. **Section 6 — Projects & Detail Viewer:** Editorial gallery of conceptual models with category filters and interactive modal overlay featuring gallery thumbnails and specs.
7. **Section 7 — Google Maps & Location:** Responsive Google Maps embed with verified search query, directions CTA, hours, and fallback link.
8. **Section 8 — Contact & Enquiry Hub:** Full contact details, spam protection, rate limiting, MongoDB integration, and instant WhatsApp fallback.
9. **Section 9 — Final CTA & Footer:** Closing invitation, section navigation, dynamic copyright year, and back-to-top control.

Plus:
- **Left-Side Navigation Drawer:** Smooth Framer Motion sliding drawer with outside click, Escape key close, and background scroll locking.
- **Dark/Light Theme Toggle:** Accessible switcher in navbar and drawer.
- **SEO & Structured Data:** Semantic HTML5, Schema.org `HomeAndConstructionBusiness` JSON-LD, OpenGraph, Twitter cards, sitemap.xml, and robots.txt.

---

## 5. Directory Structure

```
├── .env.example              # Environment variables template
├── index.html                # HTML entry point with SEO & JSON-LD
├── metadata.json             # Applet metadata
├── package.json              # Full-stack scripts & dependencies
├── server.ts                 # Full-stack Express server mounting Vite
├── public/
│   ├── robots.txt            # Search engine crawler directives
│   └── sitemap.xml           # XML sitemap
├── server/
│   ├── db.ts                 # MongoDB client connection & fallback handler
│   └── routes/
│       └── enquiries.ts      # Enquiry API routes with rate-limiting & validation
└── src/
    ├── data/
    │   └── companyData.ts    # Verified business data, services, sample projects
    ├── components/
    │   ├── Navbar.tsx        # Header with logo, links, theme toggle, drawer trigger
    │   ├── NavigationDrawer.tsx # Left-side slide drawer with scroll lock
    │   ├── ThemeToggle.tsx   # Light/dark mode switcher
    │   └── ProjectModal.tsx  # Project detail modal with gallery & specs
    ├── sections/
    │   ├── HeroSection.tsx   # Section 1: Animated 3D Hero
    │   ├── AboutSection.tsx  # Section 2: Two-column About
    │   ├── TrustMetricsSection.tsx # Section 3: 5-star, 92-review metrics
    │   ├── ServicesSection.tsx # Section 4: Architectural services grid
    │   ├── StrategySection.tsx # Section 5: 4-stage construction timeline
    │   ├── ProjectsSection.tsx # Section 6: Portfolio & detail trigger
    │   ├── LocationMapSection.tsx # Section 7: Google Maps & directions
    │   ├── ContactSection.tsx # Section 8: Enquiry form & WhatsApp
    │   └── FooterSection.tsx # Section 9: CTA & footer
    ├── utils/
    │   └── theme.ts          # Theme persistence & application
    ├── App.tsx               # Main application coordinator
    ├── main.tsx              # React DOM mounting
    └── index.css             # Tailwind CSS & architectural theme tokens
```

---

## 6. Installation & Startup Commands

### Install Dependencies
```bash
npm install
```

### Configure MongoDB (Optional)
Copy `.env.example` to `.env` and specify your MongoDB connection string:
```bash
cp .env.example .env
```
Inside `.env`:
```env
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/annamalai_construction?retryWrites=true&w=majority"
PORT=3000
```
*Note: If `MONGODB_URI` is left blank or the database is temporarily unreachable, the enquiry form will transparently display the database status and provide a 1-click pre-filled WhatsApp alternative to +91 99420 39206.*

### Start Full-Stack Development Server
```bash
npm run dev
```
The server will boot on `http://localhost:3000` with Express backend API routes and Vite frontend middleware.

### Production Build
```bash
npm run build
npm start
```

---

## 7. Verification & Anti-AI Slop Compliance
- No fake awards, no stock model pictures presented as owner, no fabricated project count.
- Honest disclaimers on draft services and sample architectural models.
- Responsive across mobile, tablet, and desktop screens with full touch support.
- Fully operational WhatsApp (+91 99420 39206) and direct call linkages.
