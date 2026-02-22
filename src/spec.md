# Specification

## Summary
**Goal:** Improve deterministic career roadmap quality and add a new ATS-friendly Resume Generator tool as a dedicated page.

**Planned changes:**
- Update the deterministic roadmap template data used by `getRoadmapTemplate(...)` so phases/topics/resources are career-appropriate (including Indian student/fresher context) and avoid irrelevant mandatory tech (e.g., AWS/Vercel, MongoDB, Node/Express) unless clearly optional and appropriate.
- Add a new dedicated ATS Resume Generator route/page implemented as a multi-step wizard covering Contact, Summary, Skills, Experience, Education, Certifications, Projects, and Keywords.
- Generate an ATS-friendly single-column resume preview from wizard inputs, with export options to copy as plain text and download as a `.txt` file.
- Add a new tool card for the ATS Resume Generator in the existing “Resume & Placement Help” section that navigates to the dedicated page, while keeping existing four tool cards modal-based and unchanged.
- Register the new route in TanStack Router (lazy-loaded), add SEO metadata in `frontend/src/seo/seoRoutes.ts`, and include the new URL in `frontend/public/sitemap.xml`.

**User-visible outcome:** Users get more realistic, career-relevant roadmaps without mismatched mandatory technologies, and can use a new step-by-step ATS Resume Generator page to create a clean single-column resume and export it via clipboard or `.txt` download.
