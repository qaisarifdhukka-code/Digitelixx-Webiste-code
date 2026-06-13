<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Digitelixx Project Specific Rules
1. **No Node.js Backend**: The project is exported to pure HTML/CSS/JS (`next build` outputs an `out/` folder). DO NOT suggest Server Actions, API routes, or middleware.
2. **Global CSS Priority**: Core design tokens (colors, fonts) and complex layout classes (e.g., `.case-study-split-grid`) are defined in `src/app/globals.css`. Always use `var(--teal-dark)`, `var(--orange)`, etc. rather than hardcoding hex values.
3. **No Dynamic Image Loading**: Because the site is hosted on Hostinger Shared Hosting, the Next.js Image Optimization API is not available. 
<!-- END:nextjs-agent-rules -->
