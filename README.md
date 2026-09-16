# 💍 Wedding Card — Digital Wedding Invitation

[![GitHub Repo](https://img.shields.io/badge/GitHub-Himanshu--b20%2FWedding--Card-181717?logo=github)](https://github.com/Himanshu-b20/Wedding-Card)

A luxury, animated **digital wedding invitation website** built with React, TypeScript, Vite, and Tailwind CSS. Features a cinematic scroll-through temple portal, live countdown, RSVP form, wishes wall, and ambient music — all powered by a single data file you can customise in minutes.

---

## ✨ Features

| Section | Description |
|---|---|
| **Hero** | Full-screen animated temple mandap portal that splits open on scroll |
| **Invitation** | Ganesh shloka, family names & formal blessing text |
| **Date Reveal** | Interactive "flip card" that reveals the wedding date |
| **Celebrations** | Mehndi, Sangeet, Wedding & Reception event cards with attire & venue |
| **Couple Story** | Timeline milestones + photo carousel |
| **Instagram Wall** | Hashtag section to collect guest photos |
| **Pre-Wedding Teaser** | Embedded YouTube video section |
| **Countdown Timer** | Live countdown to the wedding date & time |
| **Concierge / Things to Know** | Venue, weather, contacts & guest guidelines |
| **RSVP** | Validated guest RSVP flow |
| **Wishes Wall** | Guests can post wishes; persisted in `localStorage` |
| **Ambient Music Player** | Floating background wedding music player |
| **Sticky Nav** | Appears after scrolling past the hero |

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** — dev server & bundler
- **Tailwind CSS 3** — utility-first styling with a custom wedding design system
- **Framer Motion** — scroll-linked animations and transitions
- **Lucide React** — icon library
- **canvas-confetti** — celebration effects
- **Oxlint** — fast linting

---

## 🚀 Setup & Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 18.x → [Download](https://nodejs.org/)
- **npm** ≥ 9.x (bundled with Node.js)

Check your versions:

```bash
node -v
npm -v
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/Himanshu-b20/Wedding-Card.git
cd Wedding-Card
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Add Your Assets

Place the following files in the **`public/`** directory before running:

| File | Description |
|---|---|
| `public/temple-mandap.png` | Hero portal artwork (transparent PNG, portrait orientation recommended) |
| `public/favicon.svg` | Browser tab icon |
| `public/images/couple-royal.jpg` | Couple photo — royal/wedding attire |
| `public/images/couple-mehndi.jpg` | Couple photo — Mehndi ceremony |
| `public/images/couple-sangeet.jpg` | Couple photo — Sangeet night |
| `public/og-image.jpg` | Open Graph image for social sharing (1200×630px recommended) |

> **Tip:** The `temple-mandap.png` is split into left/right halves on scroll to simulate opening doors. A clean, centred PNG with a transparent background works best.

---

### 4. Customise Wedding Details

All wedding content lives in **one file**:

```
src/data/weddingData.ts
```

Open it and update the fields to match your wedding:

```ts
export const weddingData: WeddingData = {
  groom: {
    firstName: "Ranbir",              // ← Groom's first name (used in hero & nav)
    fullName: "Ranbir Raj Kapoor",
    bio: "...",
    parents: "...",
    grandparents: "...",
  },
  bride: {
    firstName: "Alia",               // ← Bride's first name
    fullName: "Alia Bhatt",
    ...
  },
  dateText: "Sunday, 31st January 2027",        // ← Human-readable date display
  targetWeddingDate: "2027-01-31T17:30:00+05:30", // ← ISO date for live countdown
  hashtag: "#RanbirAlia2027",                   // ← Instagram hashtag
  youtubeVideoId: "dQw4w9WgXcQ",                // ← YouTube video ID for teaser
  events: [ ... ],    // ← Mehndi, Sangeet, Wedding, Reception details
  story: [ ... ],     // ← Couple's love story milestones
  thingsToKnow: { ... },  // ← Venue, weather, contacts, guest guidelines
  initialWishes: [ ... ], // ← Pre-seeded wishes on the Wishes Wall
};
```

Also update the **`index.html`** title and meta tags to match:

```html
<title>YourName & PartnerName — Wedding Celebration | DD Month YYYY</title>
<meta name="description" content="Your custom invitation description." />
```

---

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Changes hot-reload instantly.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Type-check + build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint across the codebase |

---

## 🏗️ Project Structure

```
Wedding-Card/
├── public/
│   ├── temple-mandap.png        # Hero portal artwork
│   ├── favicon.svg
│   └── images/                  # Couple photos for the carousel
├── src/
│   ├── components/
│   │   ├── Hero.tsx             # Scroll-animated temple portal
│   │   ├── Invitation.tsx       # Ganesh blessing & family names
│   │   ├── DateReveal.tsx       # Interactive date flip card
│   │   ├── Functions.tsx        # Event cards (Mehndi/Sangeet/Wedding/Reception)
│   │   ├── CoupleStory.tsx      # Love story timeline + photo carousel
│   │   ├── Carousel.tsx         # Reusable image carousel
│   │   ├── InstagramSection.tsx # Hashtag section
│   │   ├── VideoSection.tsx     # YouTube teaser embed
│   │   ├── Countdown.tsx        # Live countdown timer
│   │   ├── ThingsToKnow.tsx     # Venue/concierge info cards
│   │   ├── RSVP.tsx             # RSVP form with validation
│   │   ├── WishesWall.tsx       # Guest wishes (localStorage)
│   │   ├── MusicPlayer.tsx      # Ambient floating music player
│   │   ├── GaneshMotif.tsx      # Decorative SVG motif
│   │   └── Footer.tsx
│   ├── data/
│   │   └── weddingData.ts       # ⭐ All wedding content & config
│   ├── App.tsx                  # Root layout & sticky navigation
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles & Tailwind base
├── index.html                   # HTML shell with meta tags & Google Fonts
├── tailwind.config.js           # Custom colors (ivory, maroon, gold, royalbrown)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

The Tailwind config defines a custom wedding colour palette:

| Token | Usage |
|---|---|
| `ivory-*` | Page background |
| `maroon-*` | Primary accent (CTAs, headings) |
| `gold-*` | Decorative highlights & dividers |
| `royalbrown-*` | Body text |

**Google Fonts** loaded in `index.html`:

| Font | Used For |
|---|---|
| **Cinzel** | Headings & dates |
| **Cormorant Garamond** | Elegant serif body text |
| **Playfair Display** | Pull quotes & hero typography |
| **Plus Jakarta Sans** | UI labels & navigation |
| **Tiro Devanagari Hindi** | Sanskrit shloka text |

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimised static site is output to `dist/`. Deploy this folder to any static host.

### Recommended Hosts

| Host | How to Deploy |
|---|---|
| **Vercel** | `npx vercel --prod` or connect GitHub for auto-deploy |
| **Netlify** | Drag & drop `dist/` or connect via Git |
| **GitHub Pages** | Use `gh-pages` package or GitHub Actions |
| **Firebase Hosting** | `firebase deploy` after `firebase init` |

> **Note:** This is a fully static SPA — no backend or database required. All RSVP submissions and wishes are stored in the guest's browser `localStorage`.

---

## 🔧 Customisation Tips

- **Add/remove events** — edit the `events` array in `weddingData.ts`
- **Change background music** — swap the audio `src` in `MusicPlayer.tsx`
- **Add more carousel photos** — add entries to `carouselPhotos` in `weddingData.ts` and place images in `public/images/`
- **Embed a different video** — replace `youtubeVideoId` with your YouTube video ID
- **Pre-seed wishes** — add objects to `initialWishes` in `weddingData.ts`
- **Accessibility** — the site respects `prefers-reduced-motion` for all Framer Motion animations

---

## 📄 License

This project is for personal use. Feel free to customise it for your own celebration. 💕
