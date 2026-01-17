# Asset Inventory & File Structure

This document lists all assets needed for the Next.js migration and the expected file structure.

## Expected File Structure

```
charlesplucker/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   └── (hero images if any)
│   │   ├── features/
│   │   │   ├── technical-leader.jpg (or .webp)
│   │   │   ├── courageous.jpg (or .webp)
│   │   │   └── values-driven.jpg (or .webp)
│   │   ├── social/
│   │   │   ├── instagram.svg (or .png)
│   │   │   └── linkedin.svg (or .png)
│   │   └── logo/
│   │       └── (logo/branding images if any)
│   ├── videos/
│   │   └── background.mp4
│   └── resume.pdf
├── data/
│   └── testimonials.json
└── (rest of Next.js project structure)
```

## Required Assets Checklist

### Images

#### Feature Card Background Images (3 required)
- [ ] **Technical Leader** - Patagonia image (Torres Del Paine mentioned on site)
  - Expected location: `public/images/features/technical-leader.jpg`
  - Alternative names to look for: `torres-del-paine.jpg`, `patagonia-1.jpg`, `feature-1.jpg`

- [ ] **Courageous** - Patagonia image (Lago Grey mentioned on site)
  - Expected location: `public/images/features/courageous.jpg`
  - Alternative names to look for: `lago-grey.jpg`, `patagonia-2.jpg`, `feature-2.jpg`

- [ ] **Values Driven** - Patagonia image (Mirador Britanico mentioned on site)
  - Expected location: `public/images/features/values-driven.jpg`
  - Alternative names to look for: `mirador-britanico.jpg`, `patagonia-3.jpg`, `feature-3.jpg`

#### Social Media Icons (2 required)
- [ ] **Instagram icon**
  - Expected location: `public/images/social/instagram.svg` (preferred) or `.png`
  - Should be square format, suitable for small display

- [ ] **LinkedIn icon**
  - Expected location: `public/images/social/linkedin.svg` (preferred) or `.png`
  - Should be square format, suitable for small display

#### Hero Section Images (if any)
- [ ] Hero background image (if not using video)
  - Expected location: `public/images/hero/hero-background.jpg`
  - May not be needed if video is the hero

#### Logo/Branding (if any)
- [ ] Logo or branding image
  - Expected location: `public/images/logo/logo.svg` or `.png`
  - May not be needed if using text-based branding

### Video

- [ ] **Background video** - Slowed-down MP4
  - Expected location: `public/videos/background.mp4`
  - Should be optimized for web (reasonable file size)
  - Format: MP4 (H.264 codec recommended for compatibility)

### Documents

- [ ] **Resume PDF**
  - Expected location: `public/resume.pdf`
  - Should be optimized PDF

### Data Files

- [ ] **Testimonials data** (will be created from content extraction)
  - Expected location: `data/testimonials.json`
  - Format: JSON array with testimonial objects
  - Structure:
    ```json
    [
      {
        "author": "Matthew Manela",
        "role": "Software Engineering Lead",
        "text": "Charles is a strong engineer..."
      },
      // ... 12 more testimonials
    ]
    ```

## Asset Naming Conventions

- Use lowercase with hyphens: `technical-leader.jpg` not `Technical Leader.jpg`
- Images: Prefer `.webp` for photos, `.svg` for icons, `.png` as fallback
- Keep filenames descriptive but concise
- Avoid spaces in filenames

## Image Optimization Notes

Before transferring assets, consider:
- **Feature images**: Should be high quality but optimized (aim for 200-500KB each)
- **Icons**: Should be small (under 50KB)
- **Video**: Should be compressed but maintain quality (aim for 5-10MB if possible, but depends on length)
- **Resume**: Should be optimized PDF (can use tools like `ghostscript` or online PDF compressors)

## Next Steps

1. Review this checklist against your existing assets folder
2. Identify which assets you have and note any missing ones
3. Rename assets to match expected names (if needed)
4. Create the folder structure: `public/images/features/`, `public/images/social/`, `public/videos/`
5. Transfer assets to the correct locations
6. Note any assets that need to be downloaded/extracted from Squarespace

## Questions to Consider

- Do you have all three Patagonia feature images?
- What format is your background video in? (MP4, MOV, etc.)
- Do you have social media icons, or should we use a library like `react-icons`?
- Is your resume already a PDF, or do you need to convert it?
