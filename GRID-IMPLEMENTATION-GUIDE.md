# Grid System Implementation Guide

## What I Found from the Live Site

The "Leading from the front..." section on charlesplucker.me uses **Squarespace's Fluid Engine Grid System**. Here's what makes it special:

---

## Core Grid Principles

### 1. **True CSS Grid with Precise Placement**

The live site uses `grid-area` with exact row/column coordinates:

**Desktop (24-column grid):**
- Image: `grid-area: 1/2/23/14` (columns 2-14 = 12 cols)
- Text: `grid-area: 1/15/22/24` (columns 15-24 = 9 cols)

**Mobile (8-column grid):**
- Image: `grid-area: 1/2/9/10` (full width, rows 1-9)
- Text: `grid-area: 9/2/27/10` (full width, rows 9-27)

### 2. **The Container Grid Setup**

```css
/* Mobile First */
.fluid-engine {
  display: grid;
  position: relative;
  grid-template-rows: repeat(30, minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11px;
  column-gap: 11px;
}

/* Desktop */
@media (min-width: 768px) {
  .fluid-engine {
    grid-template-rows: repeat(25, minmax(calc(var(--container-width) * 0.0215), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}
```

### 3. **Key CSS Variables**

```css
--sqs-site-max-width: 1500px;
--sqs-site-gutter: 4vw;          /* Desktop */
--sqs-mobile-site-gutter: 6vw;   /* Mobile */
--grid-gutter: calc(var(--sqs-site-gutter) - 11px);
--cell-max-width: calc((1500px - (11px * 23)) / 24); /* Desktop: 24 cols */
--row-height-scaling-factor: 0.0215; /* Rows = 2.15% of container width */
```

---

## Comparison: Your Current vs. Live Site

### Your Current Implementation ✅
- Simple 2-column grid on desktop (1fr 1fr)
- Clean, readable code
- Works well but less flexible

### Live Site Implementation 🎯
- 24-column grid system (more precise control)
- Rows that scale with container width
- Text block uses only 9 of 24 columns (~37.5%)
- Image uses 12 of 24 columns (~50%)
- **There's intentional asymmetry** - not a perfect 50/50 split

---

## The "Box" You Asked About

Yes! The text content IS in a box with specific rules:

### The Text Block Container Rules:

```css
.text-block {
  /* Desktop placement */
  grid-area: 1/15/22/24;
  z-index: 2;
  
  /* Alignment within the block */
  justify-content: flex-start;
  align-items: flex-start;
}
```

**What this means:**
- **Positioned** at columns 15-24 (right side)
- **Starts at row 1**, ends at row 22
- **z-index: 2** (sits above image if they overlap)
- **Content is top-left aligned** (`flex-start` for both axes)

---

## Should You Adopt This System?

### Option A: Keep Your Current Simple Grid ✅
**Pros:**
- Clean, maintainable code
- Easier to understand
- Works great for most layouts

**When to use:** If you only need basic 2-column layouts

### Option B: Adopt Fluid Engine Grid 🚀
**Pros:**
- Pixel-perfect control over element placement
- Can create overlapping elements
- Consistent spacing system across entire site
- Can reuse for complex layouts (multiple elements in one section)

**When to use:** 
- When you want the exact same look as the live site
- When you need more than 2 elements in a section
- When you want overlapping elements
- For sections with asymmetric layouts

---

## Recommended Approach for Your React Site

Create a **reusable grid system** that you can use throughout:

### 1. Create a Grid Container Component

```tsx
// components/FluidGrid/FluidGrid.tsx
interface FluidGridProps {
  children: React.ReactNode
  className?: string
}

export default function FluidGrid({ children, className = '' }: FluidGridProps) {
  return (
    <div className={`fluid-engine ${className}`}>
      {children}
    </div>
  )
}
```

### 2. Create a Grid Block Component

```tsx
// components/FluidGrid/GridBlock.tsx
interface GridBlockProps {
  children: React.ReactNode
  mobileArea?: string    // e.g., "1/2/9/10"
  desktopArea?: string   // e.g., "1/15/22/24"
  className?: string
  style?: React.CSSProperties
}

export default function GridBlock({ 
  children, 
  mobileArea,
  desktopArea,
  className = '',
  style = {}
}: GridBlockProps) {
  return (
    <div 
      className={`grid-block ${className}`}
      style={{
        '--mobile-grid-area': mobileArea,
        '--desktop-grid-area': desktopArea,
        ...style
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
```

### 3. Update Your LeadingSection

```tsx
// components/LeadingSection.tsx
import FluidGrid from './FluidGrid/FluidGrid'
import GridBlock from './FluidGrid/GridBlock'

export default function LeadingSection() {
  return (
    <section className={styles.leadingSection}>
      <FluidGrid>
        {/* Image Block */}
        <GridBlock 
          mobileArea="1/2/9/10"
          desktopArea="1/2/23/14"
          className={styles.imageBlock}
        >
          <Image
            src="/images/leading-from-the-front.jpg"
            alt="Charles Plucker"
            fill
            style={{ objectFit: 'cover' }}
          />
        </GridBlock>

        {/* Text Block */}
        <GridBlock 
          mobileArea="9/2/27/10"
          desktopArea="1/15/22/24"
          className={styles.textBlock}
        >
          <p className={styles.subtitle}>Meet Charles Plucker, Software Engineer</p>
          <h2>Leading from the front.<br />Embodied.</h2>
          <p>Leading from the front means leading with your actions...</p>
          {/* ... rest of content ... */}
        </GridBlock>

        {/* Buttons could be separate grid blocks too */}
        <GridBlock 
          mobileArea="27/2/29/10"
          desktopArea="24/15/26/20"
        >
          <a href="/resume.pdf">Download Resume</a>
        </GridBlock>
      </FluidGrid>
    </section>
  )
}
```

---

## The CSS for Your Fluid Grid System

I'll create this in a separate file for you to review.

---

## Key Takeaways

1. **The "box" is a grid cell** positioned with `grid-area`
2. **Text uses columns 15-24** on desktop (37.5% of content width)
3. **Image uses columns 2-14** on desktop (50% of content width)
4. **11px gap** between all grid cells is consistent
5. **Rows scale** with container width on desktop (2.15% ratio)
6. **Mobile stacks** everything full-width in an 8-column grid
7. **z-index layering** allows overlap (text z:2, image z:1)

The beauty of this system is you can reuse it for ANY section with multiple elements, not just this one!


