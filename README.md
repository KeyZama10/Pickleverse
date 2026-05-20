# 🥒 Pickleverse

A premium, Awwwards-level landing page for the **Pickleverse** pickleball brand — built with React, Vite, Framer Motion, and Tailwind CSS.

Inspired by the aesthetic of [Brets.fr](https://brets.fr), the page features bold typography, parallax scroll animations, floating pickleball elements, and a luxury sporty feel.

---

## ✨ Features

- **Hero Section** — Full-screen hero with the Passion One font, floating product image animation, and a frosted-glass navbar
- **Live Scores Ticker** — Animated score feed for ongoing pickleball matches
- **Sponsor Showcase** — Anti-gravity, asymmetrical card layout with scroll-linked parallax and bobbing animations
- **Floating Pickleballs** — Ambient floating elements for depth and dynamism
- **Zig-Zag Dividers** — Custom SVG section dividers for a fluid, editorial layout
- **Smooth Animations** — Powered by Framer Motion throughout

---

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| Framer Motion | Animations & scroll effects |
| Tailwind CSS 4 | Utility styling |
| Lucide React | Icon library |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Pickleverse/
├── public/             # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Frosted-glass nav with scroll cover effect
│   │   ├── Hero.jsx            # Full-screen hero section
│   │   ├── FloatingElement.jsx # Ambient floating pickleball elements
│   │   ├── LiveScores.jsx      # Animated live score ticker
│   │   ├── Sponsors.jsx        # Anti-gravity sponsor showcase carousel
│   │   ├── ZigZagDivider.jsx   # SVG section dividers
│   │   └── CTAButton.jsx       # Reusable CTA button component
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── tanker-font/        # Custom font files
├── index.html
├── vite.config.js
└── package.json
```

---

## 📄 License

MIT
