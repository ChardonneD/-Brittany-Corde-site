# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


brittany-corde-site/
├── public/
│   ├── favicon.ico
│   ├── hero.jpg
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── ContactCTA.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── responsive.css
│   ├── pages/
│   │   └── index.tsx
│   └── assets/
│       ├── brittany-headshot.png
│       └── brand-colors.json
├── package.json
├── vite.config.js or next.config.js
└── README.md

Branding 

Element         	Color	        Hex	                    Usage
Primary	        Warm-Amber	    #E89C3D     	Buttons, highlights, accents
Secondary       Deep-Teal       #1E4D4F     	Headers, navigation, callouts
Neutral         Light-Ivory   	#F9F7F3     	Backgrounds, section dividers
Neutral         Dark-Charcoal	#2E2E2E	    Body text, footer
Accent          Soft Coral  	#F26B5E     	Hover states, subtle emphasis

Typography

Heading Font: Playfair Display — elegant, professional serif for warmth and authority

Body Font: Inter — clean, modern sans‑serif for readability

Accent Font (Quotes/CTA): Raleway — light, airy tone for passion and approachability

Hierarchy
h1: 48px / bold / Playfair Display
h2: 32px / semi‑bold / Playfair Display
h3: 24px / medium / Inter
body: 18px / regular / Inter
cta: uppercase / letter‑spaced / Raleway

Responsive Layout Versions
Device	Layout Highlights
Mobile (≤768px)	Single‑column flow; hero image stacked above text; CTA buttons full‑width; collapsible menu

Tablet (769–1024px)	Two‑column hero; grid‑based service cards; sticky header; balanced padding

Desktop (≥1025px)	Full‑width hero with side image; 3‑column service grid; animated CTA hover; footer split layout