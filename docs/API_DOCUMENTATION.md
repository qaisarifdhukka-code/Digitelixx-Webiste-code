# 6. API Documentation
This project is currently a statically exported frontend landing page. There are no internal API routes or backend endpoints implemented.

**Internal Endpoints**: None.

# 9. External Integrations
- **Third-party APIs**: None active. (Future capability: Formspree or EmailJS integration for the Contact form).
- **AI models**: None.
- **Authentication providers**: None.
- **Payment gateways**: None.
- **Cloud services**: Deployed purely as static files on Hostinger Shared Hosting.

# 10. Environment Variables
Currently, the project requires NO `.env` variables to build or run.

*(Future variables for contact form integration)*:
- `NEXT_PUBLIC_FORM_ENDPOINT`: (Public) The URL to POST contact form data to.

# 13. Security Measures
- **Authentication & Authorization**: N/A (Public static site).
- **Password encryption**: N/A.
- **Rate limiting**: Handled by Hostinger infrastructure / Cloudflare (if applied).
- **Input validation**: Basic HTML5 `required` and `type="email"` validation on the contact form to prevent empty submissions.
- **CORS configuration**: N/A (No external APIs fetched from the client side currently).
- **Vulnerabilities**: As a purely static HTML/CSS/JS site, the attack surface is near zero. No databases to inject, no servers to compromise.
