# Rachana Aluminium — Design System (Phase 4)

> **Objective:** Create a reusable visual system reflecting Trust, Quality, Modern Architecture, Minimal Luxury, and Human Warmth.
> **Source of Truth:** This document governs all future UI decisions and component builds. No pages will be built outside this system.

---

## 1. Brand Voice & Copywriting Principles

Write in a tone that represents the owner's philosophy.

**✅ DO Write:**
- Calm
- Honest
- Human
- Confident

**❌ AVOID:**
- "Best in India"
- "World Class"
- "Revolutionary"
- "Number One"

**Good Examples:**
> "Quality at its Best."
> "We treat every project as if we were building it for ourselves."

---

## 2. Color Tokens

The color palette is deliberately restrained to create an architecture-studio feel.

| Token | Color Description | Hex / Value | Usage |
|---|---|---|---|
| `bg-primary` | Pure White | `#FFFFFF` | Main backgrounds, creating spaciousness and air. |
| `bg-secondary` | Very Light Grey | `#F8F9FA` | Subtle section separation, card backgrounds. |
| `bg-dark` | Dark Surface | `#111111` | Footer, statistics sections, high-contrast hero sections. |
| `overlay-dark` | Image Overlay | `rgba(0,0,0,0.45)` | Applied over project/hero photography to ensure text readability. |
| `text-primary` | Charcoal Black | `#1C1C1C` | High readability, premium feel. Headings & primary copy. |
| `text-secondary` | Medium Grey | `#666666` | Descriptions, supporting text, meta information. |
| `text-inverse` | Pure White | `#FFFFFF` | Text on dark images, overlays, or dark sections. |
| `accent-primary` | Brand Red | `#D32F2F` *(approx)* | Strict usage rules apply (see below). |
| `border-subtle`| Light Grey | `#EAEAEA` | Dividers, subtle card borders. |

### Accent Red Rules

**✅ Use Red Only For:**
- Active navigation item
- Underlines
- Tiny separators
- Small badges
- Links
- Micro-interactions / Icons on hover

**❌ Never Use Red For:**
- Hero backgrounds
- Buttons everywhere
- Large sections
- Cards
- Product backgrounds

*(This prevents the website from accidentally becoming "red themed.")*

---

## 3. Typography Scale

**Design Principles:** Clean, Elegant, Highly Readable, Architectural.

**Primary Font Choices:**
- **Headings:** *Outfit* (Modern and architectural)
- **Body:** *Inter* (Extremely readable)
*(Avoid Roboto as it feels too generic and corporate.)*

| Element | Size / Weight | Line Height | Usage |
|---|---|---|---|
| **Display Heading** | 3.5rem (56px) / Medium | 1.1 | Hero sections only. |
| **Page Heading** | 2.5rem (40px) / Medium | 1.2 | Top of major pages. |
| **Section Heading** | 2rem (32px) / Regular | 1.25 | Main section titles. |
| **Subheading** | 1.25rem (20px) / Medium | 1.4 | Product names, card titles, section intros. |
| **Body Text** | 1rem (16px) / Regular | 1.6 | Main paragraphs, descriptions, selection guides. |
| **Small Labels** | 0.875rem (14px) / Medium | 1.5 | Meta data, category tags, footer links. |

---

## 4. Spacing Scale

The interface should breathe. Dense layouts are strictly prohibited.

| Token | Size | Application |
|---|---|---|
| `space-xs` | 8px | Inside small components (e.g., between icon and text). |
| `space-sm` | 16px | Inner padding for small cards, spacing between paragraphs. |
| `space-md` | 32px | Inner padding for large cards, spacing between internal section blocks. |
| `space-lg` | 64px | Vertical spacing between minor page sections. |
| `space-xl` | 120px | Vertical spacing between major page sections (Hero to Section 2). |

---

## 5. Grid System, Breakpoints & Section Widths

A strict grid makes development predictable and ensures spaciousness.

### Breakpoints
- **Mobile:** 0–767px
- **Tablet:** 768–1023px
- **Desktop:** 1024–1439px
- **Large Desktop:** 1440px+

### Layout Grid
- **Desktop:** 12 columns | Max width: 1280px | Container padding: 80px
- **Tablet:** 8 columns | Padding: 48px
- **Mobile:** 4 columns | Padding: 20px

### Section Widths
- **Standard Section:** 1280px (Full grid)
- **Narrow Section:** 900px (Centered content)
- **Text Section:** 700px – 800px max (Optimal reading width; prevents long, ugly paragraphs)

---

## 6. Interaction & Component Design

**Border Radius:** 4px (Minimal and architectural).
**Shadows:** Very subtle. Elevated but lightweight. No harsh corporate drop shadows.

### Icon Library Recommendation
**Lucide Icons**
*(Outline-based, architectural, minimal, excellent consistency, works beautifully with minimal luxury).*

### Buttons & States
- **Primary Button ("Connect With Us"):** 
  - Dark background (`#111111`), White text. Creates an architecture-studio feel (Apple-inspired restraint).
  - Height: 48px | Padding: 16px 28px | Radius: 4px.
- **Secondary Button ("Learn More"):** Text + Arrow. No filled background.
- **Button States:**
  - **Default:** Standard presentation.
  - **Hover:** Slight opacity reduction / slight darkening (200ms transition). Arrow moves 2px.
  - **Active:** Depressed state.
  - **Focus:** Visible outline (accessibility).
  - **Disabled:** 50% opacity, `cursor: not-allowed`.
  - **Loading:** Spinner replaces text or icon.

### Forms
- **Input:** 48px height.
- **Textarea:** Minimum 120px height.
- **Error State:** Red border.
- **Success State:** Green check.
- **Validation:** Inline messages below the field.

### Navigation Behavior
- **Desktop:** Sticky header. Transparent over hero images, turning solid white upon scroll.
- **Mobile:** Sticky header. Hamburger menu opening to a full-screen overlay menu. Small underline animation on hover for links.

### Cards Standardization
- **Product Card:** 
  - Image (4:3 ratio).
  - Title.
  - Description (max 2 lines).
  - Card Padding: 24px.
  - CTA (Secondary Button): Always bottom aligned for consistency.
- **Project Card:** Image -> Project Name -> Location -> Category.
- **Trust Card:** Outline Icon -> Big Number -> Small Label.

---

## 7. Specific Reusable Components

### Section Header Component
Creates consistency across the site.
1. **Eyebrow Label:** (e.g., "OUR PROCESS")
2. **Section Heading:** (e.g., "Built with precision and attention to detail.")
3. **Supporting Text** (optional)
4. **Section Content** (Grid, Timeline, etc.)

### Statistics Component
- **Desktop:** 4-column grid.
- **Tablet:** 2 × 2 grid.
- **Mobile:** Vertical stack.

### Process Timeline Component
Crucial for demonstrating manufacturing depth.
- **Desktop:** Horizontal timeline.
- **Mobile:** Vertical timeline.
- **Elements:** Minimal outline icons (Lucide), optional workshop images.

### Selection Guide Card
Educate without overwhelming.
**Contains:** Suitable For | Best Applications | Recommended Sizes | Customization Available | Ideal For
**Avoids:** Dense technical specification tables.

### Project Gallery Component
- Masonry grid
- Filter by category tabs
- Lightbox functionality
- Before/after support

### Empty State Guidelines
Avoid awkward empty pages when content is light.
**Message Example:** *"More projects coming soon. We continue delivering projects across multiple states and categories."*

### Trust Components Section
Reusable badges and blocks: Warranty Badge, Multi-State Presence, In-House Manufacturing Badge, Free Site Visit Badge.

---

## 8. Photography, Image Rules & Performance

### Image Aspect Ratios
- **Homepage Hero:** 21:9 or 100vh immersive section (Creates a highly premium, architectural feel).
- **Product Hero:** 16:9
- **Product Cards:** 4:3
- **Project Cards:** 3:2
- **Gallery:** Mix of 1:1 and 3:2

### Image Content Rules
**✅ Prioritize:** Finished projects, Close-up window details, Workshop processes, Craftsmen at work.
**❌ Avoid:** Smiling stock families, Random villas from Pinterest, AI luxury mansions.

### Performance Rules
- **Images:** WebP preferred.
- **Lazy Loading:** Required for all off-screen imagery.
- **Animations:** Must maintain 60fps.
- **Avoid:** Heavy videos, large GIFs, unoptimized images.

---

## 9. Motion & Micro-interactions

Animations must feel **Calm, Purposeful, and Lightweight.**

### Timing & Easing
- **Fast:** 200ms
- **Medium:** 300ms
- **Slow:** 500ms
- **Easing:** `ease-out` (Keeps animations consistent and natural)

### Micro-interactions
Architecture websites feel premium because of details.
- **Navigation:** Small underline animation on hover.
- **Product Cards:** Tiny image zoom inside the bounding box.
- **Buttons:** Arrow moves right by 2px on hover.
- **Gallery:** Image darkens slightly on hover to reveal view action.

---

## 10. Accessibility Rules

- **Contrast:** Minimum WCAG AA compliance across all text.
- **Body Text:** Minimum 16px to ensure legibility across devices.
- **Touch Targets:** Minimum 48px height/width for all tappable elements.
- **Focus States:** Clearly visible focus rings. Especially critical for inquiry forms.

---

## 11. Design Do's and Don'ts

**✅ DO**
- Use whitespace generously
- Use real project images
- Keep copy concise
- Use subtle motion
- Prioritize trust signals

**❌ DON'T**
- Use gradients everywhere
- Use glassmorphism
- Use neumorphism
- Use huge shadows
- Use stock imagery
- Use red backgrounds everywhere
- Use flashy animations

---

## 12. Component Status Table

| Component | Status |
|---|---|
| Header | Planned |
| Footer | Planned |
| Hero | Planned |
| Product Card | Planned |
| Project Card | Planned |
| Timeline | Planned |
| Statistics | Planned |
| Selection Guide | Planned |
| Gallery | Planned |
| Inquiry Form | Planned |
| Accordion | Planned |
