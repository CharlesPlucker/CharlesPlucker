# Grid System Analysis - "Leading from the front" Section

## Overview
The "Leading from the front..." section uses a **Fluid Engine Grid System** from Squarespace. This is a responsive CSS Grid layout that adapts between mobile and desktop viewports.

---

## Container: `.fluid-engine` (`.fe-65d687cb6550520a2ebe6573`)

### Core Grid Setup

The container uses `display: grid` with responsive column systems:

#### Mobile (< 768px)
```css
.fe-65d687cb6550520a2ebe6573 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(30, minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}
```

**Key Points:**
- **8-column grid** on mobile
- 30 rows with minimum height of 24px
- Gutters are flexible (6vw minus gap)
- 11px gaps between cells

#### Desktop (≥ 768px)
```css
@media (min-width: 768px) {
  .fe-65d687cb6550520a2ebe6573 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(25, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}
```

**Key Points:**
- **24-column grid** on desktop
- 25 rows with height scaled to container width (2.15% of container width)
- Max width: 1500px
- Gutters shrink to 4vw minus gap

---

## Text Block: "Leading from the front..." (`.fe-block-yui_3_17_2_1_1708558110215_9694`)

This is the block containing your h3, h1, and paragraphs.

### Mobile Placement
```css
.fe-block-yui_3_17_2_1_1708558110215_9694 {
  grid-area: 9/2/27/10;
  z-index: 2;
}

.fe-block-yui_3_17_2_1_1708558110215_9694 .sqs-block {
  justify-content: flex-start;
}

.fe-block-yui_3_17_2_1_1708558110215_9694 .sqs-block-alignment-wrapper {
  align-items: flex-start;
}
```

**Grid Area Breakdown:** `9/2/27/10`
- **Row:** 9 to 27 (18 rows tall)
- **Column:** 2 to 10 (8 columns wide - full width minus gutters)

### Desktop Placement
```css
@media (min-width: 768px) {
  .fe-block-yui_3_17_2_1_1708558110215_9694 {
    grid-area: 1/15/22/24;
    z-index: 2;
  }

  .fe-block-yui_3_17_2_1_1708558110215_9694 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1708558110215_9694 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }
}
```

**Grid Area Breakdown:** `1/15/22/24`
- **Row:** 1 to 22 (21 rows tall)
- **Column:** 15 to 24 (9 columns wide - right side of layout)

---

## Image Block (`.fe-block-yui_3_17_2_1_1708558110215_8109`)

The portrait image to the left of the text.

### Mobile
```css
.fe-block-yui_3_17_2_1_1708558110215_8109 {
  grid-area: 1/2/9/10;
  z-index: 1;
}
```
**Grid Area:** `1/2/9/10` (rows 1-9, full width)

### Desktop
```css
@media (min-width: 768px) {
  .fe-block-yui_3_17_2_1_1708558110215_8109 {
    grid-area: 1/2/23/14;
    z-index: 1;
  }
}
```
**Grid Area:** `1/2/23/14` (left side, columns 2-14)

---

## Layout Visualization

### Desktop Layout (24 columns)
```
[gutter][2  3  4  5  6  7  8  9  10 11 12 13 14][15 16 17 18 19 20 21 22 23 24][gutter]
        |<------- IMAGE (cols 2-14) -------->||<--- TEXT (cols 15-24) ---->|
        |                                     ||                            |
        | Rows 1-23                           || Rows 1-22                  |
        |                                     ||                            |
        |_____________________________________|└────────────────────────────┘
```

### Mobile Layout (8 columns)
```
[gutter][2  3  4  5  6  7  8  9][gutter]
        |<-- IMAGE (full) -->|
        | Rows 1-9           |
        |____________________|
        |<-- TEXT (full)  -->|
        | Rows 9-27          |
        |____________________|
```

---

## Key Patterns to Replicate

### 1. **Responsive Grid System**
- Use CSS Grid with custom properties for flexibility
- Mobile: 8 columns, Desktop: 24 columns
- Calculate gutters and max-widths with CSS variables

### 2. **Grid Area Placement**
Use the `grid-area` shorthand:
```css
grid-area: row-start / column-start / row-end / column-end;
```

### 3. **Alignment**
The text block uses:
```css
justify-content: flex-start;  /* Left-aligned */
align-items: flex-start;      /* Top-aligned */
```

### 4. **Z-Index Layering**
- Image: `z-index: 1`
- Text: `z-index: 2` (on top)

### 5. **Responsive Column Span**
- **Desktop text**: Occupies ~37.5% of grid (9/24 columns)
- **Desktop image**: Occupies ~50% of grid (12/24 columns)
- **Mobile**: Both full-width (8/8 columns)

---

## React Implementation Suggestion

```jsx
// Container component
const FluidGrid = ({ children, maxWidth = 1500, mobileColumns = 8, desktopColumns = 24 }) => {
  return (
    <div className="fluid-engine" style={{
      '--sqs-site-max-width': `${maxWidth}px`,
      '--mobile-cols': mobileColumns,
      '--desktop-cols': desktopColumns,
    }}>
      {children}
    </div>
  )
}

// Block component
const GridBlock = ({ 
  children, 
  mobileArea = '1/2/10/10',  // default: full width
  desktopArea = '1/2/10/14', // default: half width
  alignment = 'flex-start',
  zIndex = 1
}) => {
  return (
    <div 
      className="fe-block"
      style={{
        '--mobile-grid-area': mobileArea,
        '--desktop-grid-area': desktopArea,
        '--block-alignment': alignment,
        zIndex: zIndex,
      }}
    >
      {children}
    </div>
  )
}
```

### CSS Module Example
```css
.fluidEngine {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11px);
  --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (11px * (var(--mobile-cols) - 1))) / var(--mobile-cols));

  display: grid;
  position: relative;
  grid-template-rows: repeat(30, minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(var(--mobile-cols), minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11px;
  column-gap: 11px;
}

@media (min-width: 768px) {
  .fluidEngine {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11px);
    --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (11px * (var(--desktop-cols) - 1))) / var(--desktop-cols));
    --row-height-scaling-factor: 0.0215;
    --container-width: min(
      var(--sqs-site-max-width, 1500px), 
      calc(100vw - var(--sqs-site-gutter, 4vw) * 2)
    );

    grid-template-rows: repeat(25, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(var(--desktop-cols), minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}

.feBlock {
  grid-area: var(--mobile-grid-area);
  z-index: var(--z-index, 1);
  justify-content: var(--block-alignment, flex-start);
  align-items: var(--block-alignment, flex-start);
}

@media (min-width: 768px) {
  .feBlock {
    grid-area: var(--desktop-grid-area);
  }
}
```

---

## Summary

The "Leading from the front..." section uses:
1. **CSS Grid** with 8 columns (mobile) / 24 columns (desktop)
2. **Grid-area shorthand** for precise placement
3. **CSS custom properties** for flexible sizing
4. **Responsive rows** that scale with container width on desktop
5. **11px gaps** between all grid cells
6. **Flexible gutters** (6vw mobile, 4vw desktop)
7. **Max-width constraint** of 1500px

This creates a robust, scalable layout system that can be reused throughout your site!

