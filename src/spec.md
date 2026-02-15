# Specification

## Summary
**Goal:** Fix the Privacy Policy URL by adding a dedicated Privacy Policy page, linking to it from the footer, and ensuring it is discoverable and SEO-friendly.

**Planned changes:**
- Add a new standalone Privacy Policy page at `/privacy-policy` within the existing site layout (StickyNavbar + Footer) with clear English content describing: no login requirement, no personal data collection, calculations performed locally in the browser, and notes about third-party advertising scripts (e.g., Google AdSense) potentially using cookies/identifiers.
- Update the footer “Privacy Policy” area to include a clearly clickable link to `/privacy-policy`, while keeping the existing short privacy summary text and current design consistency.
- Register the `/privacy-policy` route in TanStack Router and add corresponding SEO metadata so title/meta description/canonical update via the existing HeadTags mechanism.
- Update `frontend/public/sitemap.xml` to include `https://studenthub.com/privacy-policy` with changefreq/priority consistent with other informational pages.

**User-visible outcome:** Users can click “Privacy Policy” in the footer to open a fully populated Privacy Policy page at `/privacy-policy`, and the page is properly indexed and shows correct SEO metadata.
