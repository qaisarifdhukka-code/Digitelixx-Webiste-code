# 1. Project Overview
**Project Name**: Digitelixx Agency Website
**Purpose of the project**: A premium, high-performance landing page and digital portfolio for Digitelixx, a digital marketing and development agency.
**Problem it solves**: Establishes online credibility, showcases case studies/portfolio, and acts as a lead generation tool for prospective clients.
**Target users**: B2B clients, startups, and enterprises looking for digital growth, eCommerce scaling, and software development.
**Key features**: Responsive design, premium editorial layouts (e.g., Case Study highlights), animated sections, static export for high-speed delivery, embedded contact forms and FAQs.

# 2. Tech Stack
- **Frontend frameworks**: Next.js (App Router), React
- **Backend frameworks**: N/A (Static Site)
- **Database**: N/A
- **Authentication**: N/A
- **AI/ML models**: N/A
- **APIs**: N/A
- **Libraries**: `matter-js` (potentially for future canvas animations), Tailwind CSS v4.
- **Deployment platforms**: Hostinger Shared Hosting (Static Export via `out` folder).
- **Dev tools**: ESLint, PostCSS.

*Why chosen*: Next.js was chosen for its component-based architecture and ease of building React applications. Static export (`output: 'export'`) was chosen specifically to allow hosting on highly cost-effective shared hosting platforms like Hostinger, which do not support Node.js server environments but excel at serving static HTML/CSS/JS.

# 11. Installation Guide
**Prerequisites**: Node.js 18+ and npm.
**Setup steps**:
1. Clone the repository.
2. Navigate to the project root.

**Commands to install dependencies**:
`npm install`

**Run commands** (Development):
`npm run dev`

**Build commands** (Production):
`npm run build`

**Deployment commands**:
After running `npm run build`, copy the entire contents of the generated `out/` directory to the `public_html` directory of the Hostinger shared hosting environment.

# 12. Dependencies
- `next` (16.2.6): Core React framework.
- `react` / `react-dom` (19.2.4): UI library.
- `matter-js`: 2D physics engine for potential interactive UI elements.
- `tailwindcss` / `@tailwindcss/postcss`: Utility-first CSS framework.

# 14. Current Features
- Premium Hero section with strong CTA.
- Service highlight grid using SVG icons.
- Complex Case Study highlight section mimicking premium editorial design.
- Logo wall and platform marquees.
- FAQ accordion layout.
- Testimonials and Why Us sections.

# 15. Future Improvements
- Implement scroll-based fade-in animations using Framer Motion or native CSS.
- Wire up the Contact Form to a backend service like Formspree or an API route (if hosting upgrades to Vercel/Node).
- Integrate a headless CMS for Case Studies to allow non-developers to publish new work.

# 16. Known Issues
- Form submissions are currently purely aesthetic and do not send emails.
- Animations are minimal; the site relies heavily on static layout polish.
