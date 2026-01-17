# Visual Grid Layout Guide

## Desktop Layout (24 columns, ≥ 768px)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ GUTTER │ 2  3  4  5  6  7  8  9  10 11 12 13 14│ 15 16 17 18 19 20 21 22 23 24│ GUTTER │
├────────┼────────────────────────────────────────┼───────────────────────────────┼────────┤
│        │                                        │                               │        │
│        │         ┌──────────────────┐           │  ┌──────────────────────────┐ │        │
│        │         │     IMAGE        │           │  │ Meet Charles Plucker,   │ │        │
│ FLEX   │         │                  │           │  │ Software Engineer        │ │ FLEX   │
│  1FR   │         │   Portrait       │           │  │                          │ │  1FR   │
│        │         │   Photo          │ z-index:1 │  │ Leading from the front.  │ │        │
│        │         │                  │           │  │ Embodied.                │ │        │
│        │         │   (12 columns)   │           │  │                          │ │        │
│        │         │                  │           │  │ Leading from the front   │ │        │
│        │         │   cols 2-14      │           │  │ means leading with your  │ │        │
│        │         │   rows 1-23      │           │  │ actions...               │ │        │
│        │         │                  │           │  │                          │ │        │
│        │         │                  │           │  │ (9 columns)              │ │        │
│        │         │                  │           │  │ cols 15-24       z-index:2│ │        │
│        │         │                  │           │  │ rows 1-22                │ │        │
│        │         └──────────────────┘           │  └──────────────────────────┘ │        │
│        │                                        │                               │        │
│        │                                        │  ┌────────────┐ ┌───────────┐ │        │
│        │                                        │  │  Download  │ │   Learn   │ │        │
│        │                                        │  │   Resume   │ │   More    │ │        │
│        │                                        │  └────────────┘ └───────────┘ │        │
└────────┴────────────────────────────────────────┴───────────────────────────────┴────────┘
         ↑                                        ↑                               ↑
    Column 1 (gutter)                      Column 14-15 (gap)              Column 25 (gutter)
```

### Column Breakdown:
- **Column 1**: Gutter (flexible, min 4vw)
- **Columns 2-14**: Image (12 columns = 50% of content area)
- **Columns 15-24**: Text (9 columns = 37.5% of content area)
- **Column 25**: Gutter (flexible, min 4vw)

### Key Measurements:
- **Total columns**: 24 content + 2 gutters = 26
- **Content max-width**: 1500px
- **Column gap**: 11px
- **Row gap**: 11px
- **Rows**: 25 rows (each ~2.15% of container width)

---

## Mobile Layout (8 columns, < 768px)

```
┌──────────────────────────────────────┐
│ GUTTER │ 2  3  4  5  6  7  8  9 │ GUTTER │
├────────┼───────────────────────┼────────┤
│        │                       │        │
│        │  ┌─────────────────┐  │        │
│        │  │                 │  │        │
│ FLEX   │  │     IMAGE       │  │ FLEX   │
│  1FR   │  │                 │  │  1FR   │
│        │  │   Portrait      │  │        │
│        │  │   Photo         │  │        │
│        │  │                 │  │        │
│        │  │   (8 cols)      │  │        │
│        │  │   cols 2-10     │  │        │
│        │  │   rows 1-9      │  │        │
│        │  └─────────────────┘  │        │
│        │                       │        │
│        │  ┌─────────────────┐  │        │
│        │  │ Meet Charles    │  │        │
│        │  │ Plucker,        │  │        │
│        │  │ Software        │  │        │
│        │  │ Engineer        │  │        │
│        │  │                 │  │        │
│        │  │ Leading from    │  │        │
│        │  │ the front.      │  │        │
│        │  │ Embodied.       │  │        │
│        │  │                 │  │        │
│        │  │ Leading from... │  │        │
│        │  │                 │  │        │
│        │  │   (8 cols)      │  │        │
│        │  │   cols 2-10     │  │        │
│        │  │   rows 9-27     │  │        │
│        │  └─────────────────┘  │        │
│        │                       │        │
│        │  ┌─────────────────┐  │        │
│        │  │ Download Resume │  │        │
│        │  └─────────────────┘  │        │
│        │  ┌─────────────────┐  │        │
│        │  │   Learn More    │  │        │
│        │  └─────────────────┘  │        │
└────────┴───────────────────────┴────────┘
```

### Column Breakdown:
- **Column 1**: Gutter (flexible, min 6vw)
- **Columns 2-9**: Full-width content (8 columns)
- **Column 10**: Gutter (flexible, min 6vw)

### Key Measurements:
- **Total columns**: 8 content + 2 gutters = 10
- **Column gap**: 11px
- **Row gap**: 11px
- **Rows**: 30 rows (each min 24px)
- **Content stacks vertically**

---

## Grid Area Notation Explained

The syntax is: `grid-area: row-start / col-start / row-end / col-end`

### Desktop Text Block: `1/15/22/24`
```
1  = Start at row 1 (top)
15 = Start at column 15
22 = End at row 22
24 = End at column 24
```

Visual:
```
     Columns →
   1  14 15            24 25
R  ┌──┬──┬──────────────┬──┐
o 1│  │  │ START HERE   │  │
w  │  │  │              │  │
s  │  │  │   TEXT BOX   │  │
↓  │  │  │              │  │
  22│  │  │ END HERE     │  │
   └──┴──┴──────────────┴──┘
```

### Desktop Image Block: `1/2/23/14`
```
1  = Start at row 1 (top)
2  = Start at column 2 (after left gutter)
23 = End at row 23
14 = End at column 14
```

Visual:
```
     Columns →
   1  2             14 15
R  ┌──┬──────────────┬──┐
o 1│  │ START HERE   │  │
w  │  │              │  │
s  │  │  IMAGE BOX   │  │
↓  │  │              │  │
  23│  │ END HERE     │  │
   └──┴──────────────┴──┘
```

---

## Responsive Behavior

### How the Grid Adapts:

1. **< 768px (Mobile)**
   - 8 columns
   - Elements stack vertically
   - Both blocks use full width (cols 2-10)
   - Image appears first (rows 1-9)
   - Text appears below (rows 9-27)

2. **≥ 768px (Desktop)**
   - 24 columns
   - Elements appear side-by-side
   - Image on left (50% of content)
   - Text on right (37.5% of content)
   - Both start at row 1 (same height)

---

## The "Box" Concept

When you asked about the text being in a "box" - YES! Here's what that means:

### The Text Box is defined by:

1. **Position**: `grid-area: 1/15/22/24`
   - Precisely placed on the grid

2. **Alignment**: 
   ```css
   justify-content: flex-start;  /* Vertical: top */
   align-items: flex-start;      /* Horizontal: left */
   ```

3. **Display**:
   ```css
   display: flex;
   flex-direction: column;
   ```

4. **Layering**:
   ```css
   z-index: 2;  /* Sits above image if they overlap */
   ```

This creates an **invisible bounding box** at the specified grid coordinates. The content inside aligns to the top-left of this box.

---

## Practical Grid Coordinate Examples

### Full-Width Desktop Sections:
```css
--desktop-grid-area: 1/2/10/26;  /* Spans all 24 content columns */
```

### Centered Content (60% width):
```css
--desktop-grid-area: 1/7/10/21;  /* Columns 7-21 = ~60% */
```

### Three Equal Columns:
```css
/* Column 1 */ --desktop-grid-area: 1/2/20/10;
/* Column 2 */ --desktop-grid-area: 1/10/20/18;
/* Column 3 */ --desktop-grid-area: 1/18/20/26;
```

### Asymmetric Layout (40/60):
```css
/* Left 40% */  --desktop-grid-area: 1/2/20/12;
/* Right 60% */ --desktop-grid-area: 1/12/20/26;
```

---

## Pro Tips

1. **Always account for gutters**
   - Content columns: 2-25 on desktop, 2-9 on mobile
   - Never use column 1 or last column for content

2. **Row numbers are flexible**
   - Desktop: 25 rows available
   - Mobile: 30 rows available
   - Use as many as needed for your content

3. **Overlapping elements**
   - Use z-index to control stacking
   - Higher z-index = appears on top
   - Great for creative layouts!

4. **Gap is built-in**
   - 11px gap between all cells
   - No need for additional margins
   - Keeps spacing consistent

5. **Responsive by default**
   - Define both mobile and desktop areas
   - Mobile stacks automatically
   - Desktop arranges side-by-side

---

## Summary

The grid system gives you:
- ✅ **Precise control** over element placement
- ✅ **Consistent spacing** (11px gaps)
- ✅ **Responsive behavior** (mobile/desktop)
- ✅ **Flexible layouts** (overlap, asymmetry)
- ✅ **Reusable patterns** (use across entire site)

The "Leading from the front" section uses:
- Desktop: Image (cols 2-14) + Text (cols 15-24)
- Mobile: Image (rows 1-9) stacked above Text (rows 9-27)
- Both elements have flex-start alignment (top-left)
- Text has higher z-index (appears on top if overlap)

