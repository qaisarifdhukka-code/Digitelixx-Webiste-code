# 18. AI Assistant Context

PROJECT_NAME: Digitelixx Agency Website
DESCRIPTION: A fully static, highly polished landing page for a digital marketing agency built to run on shared hosting.
TECH_STACK: Next.js 16.2.6 (App Router), React 19, Tailwind CSS, Vanilla CSS (`globals.css`).
ARCHITECTURE: Static-Site Generation (SSG). Pure client-side frontend. No backend.
DATABASE: N/A
API_LIST: N/A
AUTH_METHOD: N/A
AI_MODELS: N/A
IMPORTANT_FILES: `src/app/page.js` (Homepage assembler), `src/app/globals.css` (Core styling and tokens), `src/components/CaseStudyHighlight.jsx` (Complex custom layout component), `next.config.mjs` (Configured for static export).
CURRENT_STATUS: Layout complete, components built, codebase cleaned. Ready for final animation polish or content injection.
NEXT_TASKS: Add scroll animations, wire up contact forms, review mobile responsiveness across all components.

# 19. Developer Notes
- **Hosting Constraint**: The project MUST remain statically exportable (`output: 'export'`). Do not add `next/image` components unless configured for unoptimized remote images, as Hostinger Shared Hosting cannot run the Next.js image optimization server. Do not add Next.js Server Actions or dynamic API routes.
- **Styling**: While Tailwind is installed, a significant portion of the premium styling, custom layouts, and CSS variables are managed centrally in `src/app/globals.css`. Always check `globals.css` before writing custom inline styles or arbitrary Tailwind classes.

# 7. User Flow
- **Registration/Login/Logout/Admin**: N/A. This is a public-facing brochure website.
- **Main application workflow**: User lands on Hero -> Scrolls through Social Proof (Brands) -> Explores Services -> Reviews detailed Case Studies -> Reads Testimonials -> Checks FAQs -> Fills out Contact Form.

# 8. Business Logic
- **Core algorithms**: N/A
- **AI decision-making process**: N/A
- **Validation rules**: N/A (Frontend HTML5 form validation only).
- **Calculations/Recommendation**: N/A
