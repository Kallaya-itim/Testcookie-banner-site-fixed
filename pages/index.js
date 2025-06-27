import Head from 'next/head';
import CookieConsent from '../components/CookieConsent';

export default function Home() {
  return (
    <>
      <Head><title>My Cookie Website</title></Head>
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to My Website</h1>
        <p>This is a test site that uses cookies.</p>
      </main>
      <CookieConsent />
    </>
  );
}
