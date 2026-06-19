import TableOfContents from '@/components/TableOfContents';

export const metadata = {
  title: "Privacy Policy | Digitelixx",
  description: "Privacy Policy and data handling practices for Digitelixx.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "data-collection", title: "The Data We Collect" },
  { id: "data-usage", title: "How We Use Your Data" },
  { id: "data-security", title: "Data Security" },
  { id: "contact-us", title: "Contact Us" }
];

export default function PrivacyPolicy() {
  return (
    <main className="legal-page" style={{ padding: '120px 0', backgroundColor: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--teal-dark)', marginBottom: '16px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '60px' }}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="legal-layout">
          <TableOfContents sections={sections} />

          <div className="legal-content" style={{ color: 'var(--text-main)', lineHeight: '1.8' }}>
            <section id="introduction" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>1. Introduction</h2>
              <p style={{ marginBottom: '16px' }}>
                Welcome to Digitelixx. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section id="data-collection" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>2. The Data We Collect</h2>
              <p style={{ marginBottom: '16px' }}>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li style={{ marginBottom: '8px' }}><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li style={{ marginBottom: '8px' }}><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                <li style={{ marginBottom: '8px' }}><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section id="data-usage" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>3. How We Use Your Data</h2>
              <p style={{ marginBottom: '16px' }}>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li style={{ marginBottom: '8px' }}>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li style={{ marginBottom: '8px' }}>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section id="data-security" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>4. Data Security</h2>
              <p style={{ marginBottom: '16px' }}>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
            </section>

            <section id="contact-us" style={{ marginBottom: '60px', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--teal-dark)', marginBottom: '20px' }}>5. Contact Us</h2>
              <p style={{ marginBottom: '16px' }}>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p style={{ fontWeight: '600' }}>
                Email: info@digitelixx.com<br />
                Phone: +91 73047 59661<br />
                Location: 1601, Magic Square, Near Dhukka Chambers, Off. Poddar Road, Malad(E), Mumbai-400097
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
