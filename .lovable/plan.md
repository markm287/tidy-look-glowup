## Goal
Make the Treatments page easier to read by increasing text sizes across the pricing table, tab bar, category labels, packages, boosters, and retail rows — without changing layout, colors, or content.

## Changes (public/radiance.html, styles only)

Tabs
- `.ptab-btn` font-size: 10.5px → 12.5px; padding: 12px 20px → 14px 22px

Category headings
- `.category-label` font-size: 9.5px → 11px; letter-spacing slightly tightened for legibility

Pricing rows (Injectables, Devices & Laser, Wellness, Facials & Peels, Retail)
- `.price-service` 13px → 15px
- `.price-detail` 11px → 12.5px, color lightened to `var(--mid)` for better contrast
- `.price-amount` 18px → 22px
- `.price-amount span` (unit label like "/unit") 11px → 12.5px
- `.price-row` vertical padding 11px → 13px

Packages
- `.pkg-name` 22px → 26px
- `.pkg-tagline` 11px → 12.5px
- `.pkg-includes` 11px → 12px
- `.pkg-items li` 12.5px → 14px
- `.pkg-price` 28px → 32px
- `.pkg-savings` / `.pkg-retail` 11px → 12.5px

Boosters
- Bump booster service/price font sizes proportionally to match the new price-row scale

Pricing notes
- `.pricing-note` 12.5px → 13.5px

## Out of scope
- No copy changes, no color palette changes, no layout restructuring, no changes to other pages.

## Verification
- Reload `/` (which iframes `public/radiance.html`), visit Treatments, and spot-check each tab on desktop and mobile widths.