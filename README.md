# CharlesPlucker

> A personal anchor on the web — presenting who I am as a human and what it's like to work with me.

This is my personal portfolio website, built to represent my professional identity and values authentically. The content throughout this site is written in my own voice and serves as a source of truth about who I am and how I work.

**Philosophy:** I'm not for everyone, but if I am a good fit, I am a great fit — as evidenced by my consistently long tenures and the testimonials from colleagues who've worked with me.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16.1.1 (Pages Router)
- **UI Library:** [React](https://react.dev/) 19.2.3
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.9.3
- **Styling:** CSS Modules with CSS Grid layouts
- **Build Output:** Static export for hosting on Cloudflare Pages
- **Image Handling:** Next.js Image component with `unoptimized: true` for static compatibility

### Key Dependencies

```json
{
  "next": "^16.1.1",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "typescript": "^5.9.3"
}
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser. The page auto-updates as you edit files.

### Build

```bash
# Create production build (static export)
npm run build

# Preview production build locally
npm start
```

The static files will be generated in the `out/` directory, ready for deployment.

---

## Project Structure

```
charlesplucker/
├── components/          # React components with CSS Modules
│   ├── Hero.tsx         # Video hero section
│   ├── Navigation.tsx   # Responsive nav with scroll states
│   ├── LeadingSection.tsx          # "Leading from the front" section
│   ├── FeatureCardsSection.tsx     # Three feature cards
│   ├── Accolades.tsx              # Testimonials preview
│   ├── StopDoingStartBeing.tsx    # Philosophy section
│   └── ...
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── about.tsx       # Testimonials/About page
│   └── contact.tsx     # Contact information
├── styles/
│   └── globals.css     # Global styles and typography
├── data/
│   └── testimonials.json   # LinkedIn recommendations
└── public/
    ├── images/         # Feature images, testimonials, Patagonia photos
    └── videos/         # Background video (16MB, slowed for effect)
```

---

## Design Philosophy

### Layout System

This site uses CSS Grid for layouts:

- **Simple Two-Column Grid**
  - Clean, maintainable CSS Grid with `1fr 1fr`
  - Defined in `TwoColumnLayout.module.css`
  - Used for most sections
  - Components can also define custom grid layouts when needed (e.g., 3-column for Feature Cards)

### Styling Approach

- **CSS Modules** for component-scoped styles
- **Viewport-based spacing** (`vw` units) for fluid layouts
- **Mobile-first responsive design** with breakpoints at 750px, 1024px, 1250px, 1480px
- **Typography:** Proxima Nova with fallbacks, light weight (300-400)
- **Colors:** Dark blue primary (`#253a4b`), black/gray text, white backgrounds

---

## Quick Reference

### Design Tokens

**Colors:**
- Primary: `#253a4b` (buttons, accents)
- Hover: `#1a2d3b` (button hover)
- Text: `#000` (headings), `#333` (body), `#666` (muted)

**Typography:**
- Font: Proxima Nova, light weight (300-400)
- Headings: 2.5rem (desktop) / 1.75rem (mobile)
- Body: 1.1rem

**Spacing:**
- Desktop sections: `7vw 4vw`
- Mobile sections: `10vw 5vw`
- Grid gaps: 60px / 40px / 30px (desktop / tablet / mobile)

**Breakpoints:**
- 750px (Mobile), 1024px (Tablet), 1250px / 1480px (Desktop)

### Common Patterns

#### Button Component
```typescript
<a href="/path" className={styles.ctaButton}>
  Button Text
</a>
```
```css
.ctaButton {
  padding: 1.125rem 2.5rem;
  background-color: #253a4b;
  color: white;
  border-radius: 50px;
  transition: background-color 0.3s ease;
}
```

#### Two-Column Layout
```typescript
import layoutStyles from './TwoColumnLayout.module.css'

<section className={`${styles.mySection} ${layoutStyles.container}`}>
  <div>Column 1</div>
  <div>Column 2</div>
</section>
```

#### Dynamic Years Calculation
```typescript
import { getYearsOfExperience } from '../data/contact'
const yearsOfExperience = getYearsOfExperience()
```

### Gotchas & Tips

**Images:**
- Always use `unoptimized={true}` (required for static export)
- Always use `objectFit: 'cover'` for consistent aspect ratios
- Testimonial images should be ~150px square

**Video:**
- Set `playbackRate = 0.5` in useEffect for slow-motion
- Must include: `autoPlay`, `loop`, `muted`, `playsInline`

**Grid System:**
- Default to `TwoColumnLayout.module.css` for standard two-column layouts
- Define custom grid layouts in component CSS modules when needed

**Navigation:**
- Has 3 scroll states: `top`, `video`, `below`
- Updates based on scroll position and viewport height

**CSS Modules:**
- Component-scoped styles only
- No inline styles, no Tailwind, no styled-components
- Import as: `import styles from './Component.module.css'`

**Responsive:**
- Mobile-first approach
- Test at all 4 breakpoints (750px, 1024px, 1250px, 1480px)
- Use viewport units (`vw`) for major spacing

**Content:**
- Charles's voice is authoritative - don't change tone
- Button text matters: "Learn More About Charles", "Download Resume", "Get In Touch"
- Headings use periods: "Leading from the front."

---

## Content Management

### Updating Content

All content is **my authentic voice** and should be treated as authoritative when making decisions about representation.

**Key Content Sections:**
- **Hero:** "Skilled. Courageous. Value Driven."
- **Leading Section:** My philosophy on leadership and team building
- **Feature Cards:** Technical Leader, Courageous, Values-driven
- **Stop Doing Start Being:** My approach to presence and authenticity
- **Testimonials:** 7 LinkedIn recommendations (from 13 total)

### Testimonials

Edit `data/testimonials.json` to add/update testimonials. Each entry requires:
```json
{
  "author": "Name",
  "role": "Title",
  "text": "Quote...",
  "imagePath": "/images/testimonials/name.jpg"
}
```

### Contact Information & Social Links

**All contact information and social links are centralized in `data/contact.ts`** for easy maintenance and consistency across the site.

**File location:** `/data/contact.ts`

**What's included:**
- Email: `charles.plucker@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/charles-plucker/`
- LinkedIn Recommendations: `https://www.linkedin.com/in/charles-plucker/details/recommendations/`
- Instagram: `https://www.instagram.com/charlesisastrangeloop/`
- Graduation date (for calculating years of experience)

**Usage in components:**
```typescript
import { CONTACT_INFO, SOCIAL_LINKS, getYearsOfExperience } from '../data/contact'

// Email
<a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>

// Social links
<a href={SOCIAL_LINKS.linkedin}>LinkedIn</a>
<a href={SOCIAL_LINKS.instagram}>Instagram</a>

// Years of experience (calculated dynamically)
const years = getYearsOfExperience()
```

**Why centralized?**
- Single source of truth for all contact details
- Easy to update across entire site (navigation, footer, contact pages)
- Type-safe with TypeScript
- Includes helper function for dynamic years calculation

**Used in:**
- `components/Footer.tsx` - Footer contact icons
- `components/Navigation.tsx` - Header social links
- `components/ContactInfo.tsx` - Contact page
- `components/Accolades.tsx` - LinkedIn recommendations link

### Images

**Feature Cards** use photos from my Patagonia trip:
- `technical-leader.jpg` - Torres Del Paine
- `courageous.jpg` - Lago Grey
- `values-driven.jpg` - Mirador Britanico

**Background Video:** Slowed-down hiking footage (`public/videos/background.mp4`)

---

## Deployment

This site is configured for **static export** and deployed to **Cloudflare Pages**.

### Configuration

```js
// next.config.js
{
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true
}
```

### Deploy to Cloudflare Pages

1. Connect GitHub repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `out`
4. Branch: `main`

---

## About This Site

### The Content is the Truth

The text throughout this website represents my authentic voice and professional philosophy. When making decisions about features, design, or functionality, the content itself serves as the source of truth about who I am and what I value.

**Core Themes:**
- **Leading from the front** - Leading with actions, not just words
- **Courageous communication** - Articulating needs and team dynamics
- **Values-driven** - Building teams around shared values and psychological safety
- **Building the machine that builds the machine** - Systems thinking and long-term quality
- **Not for everyone, but a great fit when aligned** - Emphasis on cultural fit and long tenures

### Professional Identity

I am a **Principal Software Engineer** with over 14 years of experience who:
- Prioritizes long-term quality over quick wins
- Emphasizes full test coverage, observability, and CI/CD
- Brings genius out of teams through consensus and clear communication
- Contributes meaningfully to team morale and psychological safety
- Has measurable impacts (25% reduction in project cancellations, system improvements, etc.)

**Contact:**
- Email: charles.plucker@gmail.com
- LinkedIn: [charles-plucker](https://www.linkedin.com/in/charles-plucker/)
- Resume: Available for download on site

---

## Development Notes

### Performance Decisions

- **Images marked `unoptimized`**: Required for Next.js static export
- **16MB background video**: Intentionally high quality for impact; could be optimized further if needed
- **No image optimization service**: Static hosting doesn't support dynamic image optimization

### Future Enhancements

**SEO & Discoverability:**
- Meta tags, Open Graph data, JSON-LD structured data
- Q&A dataset for AI recruiting tools (help LLMs understand fit)
- Sitemap and robots.txt

**Content:**
- Add resume PDF to `/public/`

**Performance & UX:**
- Optimize image response size
- Loading effects upon scrolling
- New scroll animation in Carousels

**Philosophy:** Optimize for helping the *right* people find me, not maximum traffic

---

## License

This is a personal portfolio site. Content and photography © Charles Plucker. Code available for reference.

---

## Notes for AI Assistants

When working on this project:
1. **Respect the voice**: All text content is Charles's authentic voice - don't change tone
2. **Understand the purpose**: This site helps potential employers/teams understand fit
3. **Long tenures matter**: Design decisions should support deep, long-term professional relationships
4. **Content is authoritative**: When in doubt about Charles's values/approach, read the site content
5. **Not for everyone**: The site intentionally filters for cultural fit, not broad appeal
