# Recreate System Windows Page

We will completely rebuild the "System Windows" page from the ground up to match the premium, highly-aesthetic design language we've established for the site. This page will be linked from the "Aluminum Systems" section.

## User Review Required

> [!IMPORTANT]
> Please review the proposed sections and design below. Let me know if you want to add, remove, or change any specific sections (e.g., adding technical specifications, specific series, or different features).

## Open Questions

> [!WARNING]
> 1. Do you want to include the specific series (25mm, 29mm, 32mm) on this page, or keep it more general?
> 2. Are there any specific features or benefits (like noise reduction, waterproofing, smooth sliding) that we MUST highlight?
> 3. Should I generate new, premium placeholder images for this page, or do you have specific images you want to use?

## Proposed Changes

### Routes and Configuration

#### [MODIFY] [constants/routes.js](file:///d:/weblinkers/racahna%20aluminium/src/constants/routes.js)
- Re-add the `SYSTEM_WINDOWS: '/products/system-windows'` route.

#### [MODIFY] [routes.jsx](file:///d:/weblinkers/racahna%20aluminium/src/routes.jsx)
- Import and add the `<SystemWindows />` page component to the router.

---

### Pages and Components

#### [NEW] [SystemWindows.jsx](file:///d:/weblinkers/racahna%20aluminium/src/pages/SystemWindows.jsx)
The main page component. It will assemble the following new sections:
1. **SystemHero**: A stunning, full-width header with a premium background image and bold tagline (e.g., "The Pinnacle of Window Engineering").
2. **SystemOverview**: A clean, elegant section explaining what makes your System Windows superior (precision, minimal design, durability).
3. **Features/Benefits**: A visually rich grid layout highlighting key features (e.g., Smooth Operation, Weather Resistance, Acoustic Insulation).
4. **Series Showcase (Optional)**: If desired, we can highlight the specific series (25mm, 29mm, etc.) with elegant cards.
5. **Call to Action**: A beautiful section at the bottom prompting the user to contact the team or visit the showroom.

#### [NEW] [SystemWindows.css](file:///d:/weblinkers/racahna%20aluminium/src/pages/SystemWindows.css)
- Custom styles for the page, utilizing our established CSS variables for colors, typography, and responsive layouts.

## Verification Plan

### Manual Verification
1. I will navigate to `/products/system-windows` to ensure the page renders flawlessly.
2. I will test the page on mobile view to ensure responsiveness.
3. I will verify that the "System Windows" card on the Aluminum Systems page successfully links to this new page.
