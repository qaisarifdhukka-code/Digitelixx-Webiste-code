import Link from 'next/link';

export const metadata = {
  title: "Page Not Found | Digitelixx",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main style={{
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'var(--bg)',
      padding: '20px'
    }}>
      <div className="container">
        <h1 style={{ fontSize: 'clamp(6rem, 15vw, 10rem)', color: 'var(--orange)', margin: '0', fontWeight: '800', lineHeight: '1' }}>404</h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--teal-dark)', margin: '20px 0', fontWeight: '700' }}>Lost in Cyberspace?</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          It looks like the page you are looking for has been moved, deleted, or simply never existed in the first place.
        </p>
        <Link href="/" className="btn-primary" style={{ display: 'inline-flex', padding: '16px 32px' }}>
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
