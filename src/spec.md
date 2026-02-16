# Specification

## Summary
**Goal:** Add a standalone ATS-friendly Resume Generator wizard as a new page/route, with live plain-text resume preview and simple export options.

**Planned changes:**
- Create a new dedicated TanStack Router route/page for an ATS Resume Generator implemented as a step-by-step wizard (Next/Back) with sections: Contact details, Professional summary, Skills (hard + soft), Work experience (with ATS action verbs + metrics prompts), Education, Certifications, Projects, and Keyword suggestions.
- Add basic validation, clear labels, and ensure the page is mobile-friendly and consistent with existing Tailwind + shadcn styling; no login required.
- Generate an ATS-friendly single-column plain-text resume preview that updates from wizard inputs, with one-click actions to copy to clipboard and download as a `.txt` file (no backend calls).
- Register SEO metadata (title/description/keywords/canonicalPath) for the new route and add the new URL to `sitemap.xml`.
- Add a new tool card entry in the “Resume & Placement Help” section that navigates to the new page/route, while keeping the existing four resume tool cards unchanged and still opening in their current modal behavior.

**User-visible outcome:** Users can open a new ATS Resume Generator page from the Resume & Placement Help section, complete a guided wizard to produce an ATS-friendly plain-text resume, then copy it or download it as a `.txt` file.
