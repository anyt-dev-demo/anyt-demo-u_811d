# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SlideTemplate is a Next.js-based slide presentation system built with React 19, TypeScript, and Tailwind CSS. It provides an interactive slide navigation experience with keyboard controls and PDF export functionality.

## Development Commands

### Package Management
- Use `pnpm` for all package operations (not npm)
- Install dependencies: `pnpm install`

### Development
- Run dev server: `pnpm dev` (runs on port 5555)
- Build for production: `pnpm build`
- Start production server: `pnpm start`

### Code Quality
- Lint code: `pnpm lint` (uses Biome)
- Format code: `pnpm format` (uses Biome with 2-space indentation)
- Type check: `pnpm typecheck`

## Architecture

### Core Component Structure

The application uses a hierarchical component architecture:

1. **SlideContainer** (`src/components/SlideContainer.tsx`)
   - Client component that manages presentation state
   - Handles keyboard navigation (Arrow keys, Home, End)
   - Controls slide transitions and current slide index
   - Integrates with SlideNavigation and SlideToolbar
   - Manages PDF export functionality

2. **Slide** (`src/components/Slide.tsx`)
   - Individual slide component with consistent layout
   - Accepts `title`, `subtitle`, and children props
   - Provides full-screen centered layout with max-width constraint

3. **SlideNavigation** - UI controls for slide navigation
4. **SlideToolbar** - Export and additional controls

### Routes

- `/` (`src/app/page.tsx`) - Main presentation view with interactive navigation
- `/print` (`src/app/print/page.tsx`) - Print-optimized view for PDF generation (all slides rendered statically)
- `/api/export-pdf` (`src/app/api/export-pdf/route.ts`) - PDF generation endpoint using Puppeteer

### PDF Export Flow

The PDF export uses a server-side rendering approach:

1. Client calls `exportSlidesToPDF()` utility (`src/utils/exportPDF.ts`)
2. Utility fetches `/api/export-pdf` endpoint
3. API route launches Puppeteer browser
4. Puppeteer renders `/print` page (static version with all slides)
5. Generates PDF with A4 landscape format
6. Returns PDF buffer to client for download

### Key Configuration

- **TypeScript**: Path alias `@/*` maps to `./src/*`
- **Next.js**: Uses webpack mode explicitly via `--webpack` flag
- **Biome**: Configured for Next.js and React with recommended rules

## Creating Slides

### Basic Structure

Slides are defined in `src/app/page.tsx` using the component pattern:

```tsx
<SlideContainer>
  <Slide title="Title" subtitle="Optional subtitle">
    {/* Slide content here */}
  </Slide>

  <Slide title="Another Slide">
    {/* More content */}
  </Slide>
</SlideContainer>
```

**Important**: For PDF export to work, duplicate all slides in `src/app/print/page.tsx` without the SlideContainer wrapper.

### Available Slide Components

Import from `@/components/slides/`:

#### FeatureCard
Small cards with colored left border. Great for features, steps, or bullet points.
```tsx
import FeatureCard from "@/components/slides/FeatureCard";

<FeatureCard
  color="blue"  // "blue" | "green" | "purple" | "orange" | "red"
  title="Feature Title"
  description="Feature description text"
/>
```

#### PhaseCard
Larger cards with timeline badge. Ideal for roadmaps or phased plans.
```tsx
import PhaseCard from "@/components/slides/PhaseCard";

<PhaseCard
  color="blue"  // "blue" | "green" | "purple"
  title="Phase 1: Title"
  timeline="Q1 2025"
  description="Phase description"
/>
```

#### HighlightBox
Full-width emphasis boxes for key messages.
```tsx
import HighlightBox from "@/components/slides/HighlightBox";

<HighlightBox variant="gradient-blue">  {/* "gradient-blue" | "gradient-purple" | "gray" */}
  <p className="text-xl font-semibold">Important message here</p>
</HighlightBox>
```

#### StatCard
Compact cards for metrics and statistics.
```tsx
import StatCard from "@/components/slides/StatCard";

<StatCard
  label="Users"
  value="10K+"
  subtitle="Optional subtitle"  // optional
  variant="default"  // "default" | "gradient" | "dashed"
/>
```

#### LogoRow
Display a row of logos/images.
```tsx
import LogoRow from "@/components/slides/LogoRow";

<LogoRow
  logos={[
    { src: "/logo1.png", alt: "Logo 1", height: 48 },
    { src: "/logo2.png", alt: "Logo 2", height: 40 },
  ]}
/>
```

### Common Layout Patterns

#### Two-Column Comparison (Red/Green)
```tsx
<div className="grid grid-cols-2 gap-6">
  <div className="rounded-lg border-2 border-red-300 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
    <h4 className="mb-2 text-xl font-semibold text-red-900 dark:text-red-100">Before</h4>
    <p className="text-red-700 dark:text-red-300">Problem description</p>
  </div>
  <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
    <h4 className="mb-2 text-xl font-semibold text-green-900 dark:text-green-100">After</h4>
    <p className="text-green-700 dark:text-green-300">Solution description</p>
  </div>
</div>
```

#### Big Number Hero
```tsx
<div className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-center text-white">
  <div className="mb-2 text-6xl font-bold">$50M</div>
  <p className="text-2xl">Market opportunity</p>
</div>
```

#### Grid of Items (3 or 4 columns)
```tsx
<div className="grid grid-cols-4 gap-3 text-center">
  <div className="rounded-lg bg-blue-100 p-4 dark:bg-blue-900">
    <p className="font-semibold text-blue-900 dark:text-blue-100">Item 1</p>
  </div>
  {/* More items... */}
</div>
```

#### 5-Column Layout with Image
```tsx
<div className="grid grid-cols-5 gap-6">
  <div className="col-span-3">{/* Content */}</div>
  <div className="col-span-2">{/* Image */}</div>
</div>
```

### Adding Images

In main page (`src/app/page.tsx`), use Next.js Image:
```tsx
import Image from "next/image";

<Image src="/your-image.png" alt="Description" width={800} height={600} />
```

In print page (`src/app/print/page.tsx`), use native img for Puppeteer compatibility:
```tsx
{/* biome-ignore lint/performance/noImgElement: img required for PDF generation */}
<img src="/your-image.png" alt="Description" className="w-full" />
```

### Workflow for Adding New Slides

1. Add your slide in `src/app/page.tsx` inside `<SlideContainer>`
2. Copy the same slide content to `src/app/print/page.tsx` (inside `<div className="print-slides">`)
3. If using images, use `Image` component in page.tsx and `img` in print/page.tsx
4. Run `pnpm dev` to preview
5. Run `pnpm lint` to check for issues

## Important Notes

- All slides must be duplicated between `/` and `/print` routes for PDF export to work
- The print route uses `"use client"` and includes print-specific CSS for page breaks
- Puppeteer requires specific browser args for server environments (no-sandbox, disable-setuid-sandbox)
- Keyboard navigation only works on the main presentation route, not in print view
