# Stylique Beauty OS

**The Ultimate AI-Powered Autonomous Sales Agent & Operating System for Beauty Brands.**

Stylique Beauty is not a simple "virtual try-on widget". It is a complete, ruthless, revenue-generating 10x architecture that intercepts customer hesitation, assumes the sale, and drives Average Order Value (AOV) to unprecedented heights.

## The 3 Core Pillars

### 1. The Autonomous Front-End (Theme Extension)
A beautifully crafted React/Vite widget injected directly into a merchant's Shopify storefront. 
- **The Friction Tracker:** Passively watches the DOM. If a user bounces between 3+ foundation shades, or idles on an ingredients list for 8 seconds, it triggers.
- **The AR Skin Scanner:** A futuristic, high-fidelity UI that uses the customer's webcam to mathematically calculate their exact skin tone, undertone, and skin type.
- **The Routine Builder:** Converts a single $45 product intent into a $185+ AOV by mathematically bundling Prep, Base, Color, and Set products.

### 2. The Stella AI Brain (`@stylique/ai`)
An incredibly aggressive, highly-typed "Sell, Don't Ask" AI architecture.
- Powered by Google Gemini and wrapped in our proprietary **Adaptive Guidance Manager (AGM)**.
- Capable of moving a shopper through distinct psychological stages: `VibeCheck` → `FrictionIntercept` → `Consultation` → `Prescription` → `Close`.

### 3. The Merchant Moat (Next.js Dashboard)
The `apps/shopify-backend` acts as the command center for the brand.
- **Value Realization Hub:** Proves Stylique's worth in real-time by tracking exact dollars saved from intercepted hesitation.
- **Catalog Intelligence:** Tracks every time the AI recommended a shade the brand *doesn't sell*, generating R&D pipelines for lost revenue.
- **Multi-Tenant Ingestion:** Automatically crawls a brand's website URL to extract their exact Tone of Voice and blacklisted ingredients, allowing Stella to mimic them flawlessly in seconds.

## Monorepo Architecture

This project is orchestrated using **Turborepo** and `npm workspaces`.

- `apps/shopify-backend`: The Next.js API, Prisma Database, and Merchant Dashboard.
- `apps/theme-extension`: The Vite/React widget built as a Shopify App Block.
- `packages/types`: The source-of-truth TypeScript definitions for Beauty logic.
- `packages/ai`: The Adaptive Guidance Manager and Gemini providers.
- `packages/db`: The Prisma ORM and schema.
- `packages/beauty-engine`: The mathematical Shade Matching matrices.

## Quick Start

```bash
# Install all dependencies across workspaces
npm install

# Build the entire OS (blazing fast with Turborepo caching)
npm run build

# Start the dev servers
npm run dev
```

---
*Built autonomously by Google Antigravity.*
