# Squarespace Grid System - Key Principles

## Overview
Based on research and analysis of the live site, here are the key principles for emulating Squarespace's grid system and spacing.

## Grid Structure

### Fluid Engine Grid System
- **Desktop (>750px)**: 24-column grid
- **Mobile (<750px)**: 8-column grid
- **Breakpoint**: 750px is a critical breakpoint where the grid changes dramatically

### Traditional Grid System (Pre-Fluid Engine / 7.1)
- **Large screens (>1200px)**: 12-column grid
- **Medium screens (768px - 1199px)**: 6-column grid  
- **Small screens (<768px)**: 4-column grid

## Spacing System

### Key Principle: Viewport-Based Units (vw)
Squarespace uses viewport width units for spacing to maintain proportional layouts across screen sizes.

**Common Spacing Values:**
- Section padding: `7vw` to `10vw` (top/bottom)
- Container padding: `4vw` to `6vw` (left/right)
- Gap between grid items: `4vw` to `6vw`
- This creates fluid spacing that scales with screen width

### Container Widths
- **Max-width**: Typically `1400px` - `1600px` for main content
- **Centered**: `margin: 0 auto` to center containers
- **Full-width sections**: Some sections span 100% width with internal constraints

### Consistent Spacing Scale
Use multiples of 8px for fixed spacing:
- `8px`, `16px`, `24px`, `32px`, `40px`, `48px`
- This creates visual rhythm and consistency

## Responsive Behavior

### Media Queries
```css
/* Mobile First Approach */
@media (min-width: 750px) {
  /* Tablet and up */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1200px) {
  /* Large desktop */
}
```

### Grid Template Adjustments
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr); /* Mobile: 8 columns */
  gap: 4vw;
}

@media (min-width: 750px) {
  .grid-container {
    grid-template-columns: repeat(12, 1fr); /* Tablet: 12 columns */
    gap: 5vw;
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(24, 1fr); /* Desktop: 24 columns */
    gap: 6vw;
  }
}
```

## Typography Scaling

### Font Sizes
Squarespace often uses `rem` or viewport units for typography:
- Body: `1rem` (16px) to `1.125rem` (18px)
- H2: `2rem` to `2.5rem`
- H1: `2.5rem` to `3.5rem`

### Line Heights
- Body text: `1.6` to `1.8`
- Headings: `1.1` to `1.3`

## Implementation Best Practices

### 1. Use CSS Grid
```css
.section-container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Common split: 1/3 and 2/3 */
  gap: 6vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 7vw 4vw;
}
```

### 2. Viewport-Based Padding
```css
.content-section {
  padding: 7vw 4vw; /* Vertical: 7vw, Horizontal: 4vw */
}

@media (max-width: 750px) {
  .content-section {
    padding: 10vw 5vw; /* More padding on mobile */
  }
}
```

### 3. Flexible Gaps
```css
.grid-layout {
  gap: clamp(2rem, 6vw, 6rem); /* Min 2rem, Preferred 6vw, Max 6rem */
}
```

## Common Patterns

### Two-Column Split (Image + Text)
```css
.split-section {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Image: 33%, Text: 67% */
  gap: 6vw;
  align-items: start;
}

@media (max-width: 750px) {
  .split-section {
    grid-template-columns: 1fr; /* Stack on mobile */
    gap: 4vw;
  }
}
```

### Full-Width Sections with Constrained Content
```css
.full-width-section {
  width: 100%;
  background: #f5f5f5;
}

.full-width-section .content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 7vw 4vw;
}
```

## Key Takeaways for Our Project

1. **Switch to viewport units (`vw`)** for major spacing instead of fixed `rem` values
2. **Use a 24-column grid** as the foundation (can span columns as needed)
3. **Breakpoint at 750px** is critical - test designs at this width
4. **Grid ratios**: Common splits are 1:2, 1:1, 1:3 (using `1fr 2fr` etc.)
5. **Max-width of 1400-1600px** for content containers
6. **Spacing scale**: Use viewport units for section/container spacing, fixed units (8px multiples) for micro-spacing

## Debugging Tips

- Inspect the live site at different breakpoints (750px, 1024px, 1200px)
- Check computed padding/margin values in DevTools
- Look for `.sqs-block` and `.sqs-layout` classes (Squarespace-specific)
- Use browser DevTools' responsive mode to test at exact Squarespace breakpoints

