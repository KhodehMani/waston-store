# WASTON — فروشگاه اینترنتی (Next.js + React + Vue)

A responsive, RTL (Persian) e-commerce frontend that reproduces the **«ماک فروشگاه WASTON»** mockup
(home page, six collection pages, dark mode, mobile frame and the WASTON design-system sheet).

> All product names, prices, discounts and ratings are **sample data**, exactly as the mockup states.
> There is no backend: cart, wishlist, theme and orders are stored in the browser (`localStorage`).

---

## Quick start

Requirements: **Node.js ≥ 20.9** (tested with Node 24) and npm.

```bash
npm install        # also builds the Vue module (postinstall)
npm run dev        # Next.js dev server + Vue module watcher → http://localhost:3000
```

Production:

```bash
npm run build      # builds the Vue module, then `next build`
npm start          # serves the production build on http://localhost:3000
```

Type-check everything (React/Next + Vue SFCs):

```bash
npm run typecheck
```

---

## How React, Next.js and Vue work together

| Technology | Role |
|---|---|
| **Next.js 16 (App Router)** | Routing, static generation of all catalogue pages (`generateStaticParams`), metadata, layouts, fonts/CSS bundling. |
| **React 19** | Every page and UI component: header, product cards, filters, cart, checkout, toasts, dialogs. Shared state via `useSyncExternalStore`. |
| **Vue 3** | Two self-contained interactive widgets written as Single File Components in `vue-modules/`: the **gift-wrap & greeting-card composer** (product page + cart) and the **newsletter sign-up form** (home page). |

The Vue code is an **isolated module**:

1. `vue-modules/` is compiled by **Vite + @vitejs/plugin-vue** into a small ES library (`vue-modules/dist/index.js` + `index.css`).
   The public contract is typed in `vue-modules/types/index.d.ts`.
2. Next.js imports that bundle lazily through the `@vue-widgets` alias (`tsconfig.json → paths`).
3. `src/components/vue/VueIsland.tsx` is the bridge: React renders an empty `<div>`, the Vue app is mounted
   into it with `createApp()`, React prop changes are pushed into Vue reactively (`handle.update()`), and the
   Vue app is unmounted with the React component. React never renders into the Vue node, so the runtimes never conflict.
4. Both UIs share one source of truth: the framework-agnostic store in `src/lib/store/`. The Vue gift composer
   emits `change` → React writes it to the cart store → the cart, checkout summary and other islands update.

---

## Project structure

```
Watson2/
├── docs/                      design-system reference extracted from the mockup
├── public/                    static assets (favicon)
├── src/
│   ├── app/                   Next.js App Router pages
│   │   ├── page.tsx           home
│   │   ├── shop/              /shop (all products) and /shop/[slug] (categories & collections)
│   │   ├── product/[slug]/    product detail
│   │   ├── search/  cart/  checkout/  wishlist/
│   │   ├── magazine/[slug]/   magazine articles
│   │   ├── info/[slug]/       customer-service pages (footer links)
│   │   ├── layout.tsx         RTL root layout, fonts, theme bootstrap
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/            announcement bar, header, search, mobile menu, tab bar, footer
│   │   ├── home/              hero, service strip, categories, banners, magazine, newsletter
│   │   ├── listing/           collection hero, filter panel, listing view, FAQ/guide/feature sections
│   │   ├── product/           product card/tile/meta, detail, purchase panel, specs
│   │   ├── cart/  checkout/   cart, order summary, wishlist, checkout form
│   │   ├── ui/                Button, Chips, Accordion, Sheet (dialog), Toast, EmptyState, …
│   │   ├── icons/             line-art product illustrations + icon map
│   │   └── vue/               React ⇄ Vue bridge (VueIsland) and the two island wrappers
│   ├── data/                  catalogue, collections config, site copy, articles, info pages
│   ├── lib/                   formatting (Persian digits), search, filtering/sorting, pricing,
│   │   ├── store/             persistent framework-agnostic stores (cart, wishlist, restock)
│   │   └── hooks/             React hooks for the stores
│   ├── styles/                design tokens (light/dark), base, utilities
│   └── types/                 shared TypeScript types
├── vue-modules/               isolated Vue 3 module (SFCs + Vite library build)
│   ├── src/components/        GiftComposer.vue, NewsletterForm.vue
│   ├── src/index.ts           mount functions exported to the host app
│   ├── types/index.d.ts       public contract (copied to dist/index.d.ts)
│   └── vite.config.mts
├── next.config.ts  tsconfig.json  package.json
```

---

## Implemented features

**From the mockup**
- Announcement bar, header (logo, search, theme toggle, account, wishlist, cart with count) and main navigation with active state.
- Home: hero with tile mosaic and floating gift card, 6 service cards, 5 categories, best sellers, gift banner,
  new arrivals, “how to buy” steps, special offers, magazine, newsletter, footer.
- Collection pages (`/shop/kitchen-appliances`, `kitchenware`, `cleaning`, `gifts`, `best-sellers`, `new`, `offers`, plus `ceramics` and `/shop`):
  breadcrumb, hero card, sub-category / occasion chips, filters (stock, price range, category facet — power, material
  or device type — brand with counts, rating), sorting, product counts, and per-page sections
  (feature rows, recommendation rails, buying guides, FAQ accordion, gift steps, gift packs, reviews placeholder, CTA banners).
- Product card states: discount / new / limited / gift-wrap badges, low stock (“فقط ۳ عدد”), out of stock with
  “موجود شد خبرم کن” (toggles a restock alert), wishlist heart, add to cart with toast.
- Light & dark themes from the design-system palette (saved per browser, no flash on load), Vazirmatn typography scale,
  radii 18/12/999, 44px touch targets, AA-contrast pairs (navy text on teal/coral as specified).
- Mobile layout from the mobile frame: hamburger drawer, full-width search, bottom tab bar, horizontal snap rails,
  filters in a bottom sheet.
- Design-system states: loading skeletons, empty/no-results, success toast, error messages, out-of-stock.

**Added because a working store needs them (styled with the same system)**
- Product detail page with quantity, specs table, related products and the Vue gift composer.
- Cart (quantity, remove, savings, free-shipping hint, gift options) and checkout (validated form that accepts
  Persian digits, shipping methods, simulated order placement and confirmation).
- Search page + instant search suggestions in the header (Persian-normalised: ی/ي, ک/ك, digits, ZWNJ).
- Wishlist page, magazine article pages, customer-service info pages, 404 page, sign-in dialog (demo only).

---

## Mockup elements not implemented (and why)

| Element | Reason |
|---|---|
| Real product photography | The mockup itself uses line-art illustrations; these were redrawn as SVG components. |
| Real login / OTP, payment gateway, order tracking | Need a backend and third-party services; the UI is complete but simulated (clearly labelled as demo). |
| Verified buyer reviews | The mockup shows placeholders (“[متن نظر تأییدشده خریدار]”); kept as placeholders. |
| Contact details, e-trust badges, cut-off time “[—]” | Left as the mockup’s bracketed placeholders — the real values are unknown. |
| Shipping costs / free-shipping threshold | Not specified in the mockup; sample values are used in `src/lib/pricing.ts`. |
