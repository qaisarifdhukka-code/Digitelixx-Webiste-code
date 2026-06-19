import TableOfContents from '@/components/TableOfContents';

export const metadata = {
  title: "Terms of Service | Digitelixx",
  description: "Terms and conditions for using Digitelixx services.",
};

const sections = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "license", title: "Use License" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitations", title: "Limitations" },
  { id: "revisions", title: "Revisions and Errata" }
];

export default function TermsOfService() {
  return (
    <main className="legal-page" style={{ padding: '120px 0', backgroundColor: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--teal-dark)', marginBottom: '16px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '60px' }}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="legal-layout">
          <TableOfContents sections={sections} />

          <div className="legal-content" style={{ color: 'var(--text-main)', lineHeight: '1.8' }}>
            <section id="agreement" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>1. Agreement to Terms</h2>
              <p style={{ marginBottom: '16px' }}>
                By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </section>

            <section id="license" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>2. Use License</h2>
              <p style={{ marginBottom: '16px' }}>
                Permission is granted to temporarily download one copy of the materials (information or software) on Digitelixx's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>modify or copy the materials;</li>
                <li style={{ marginBottom: '8px' }}>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li style={{ marginBottom: '8px' }}>attempt to decompile or reverse engineer any software contained on Digitelixx's website;</li>
                <li style={{ marginBottom: '8px' }}>remove any copyright or other proprietary notations from the materials; or</li>
                <li style={{ marginBottom: '8px' }}>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section id="disclaimer" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>3. Disclaimer</h2>
              <p style={{ marginBottom: '16px' }}>
                The materials on Digitelixx's website are provided on an 'as is' basis. Digitelixx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section id="limitations" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>4. Limitations</h2>
              <p style={{ marginBottom: '16px' }}>
                In no event shall Digitelixx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Digitelixx's website, even if Digitelixx or a Digitelixx authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section id="revisions" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>5. Revisions and Errata</h2>
              <p style={{ marginBottom: '16px' }}>
                The materials appearing on Digitelixx's website could include technical, typographical, or photographic errors. Digitelixx does not warrant that any of the materials on its website are accurate, complete or current. Digitelixx may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
