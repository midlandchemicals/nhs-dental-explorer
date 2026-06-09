import './globals.css';
import Link from 'next/link';
import SearchBox from '@/components/SearchBox';

export const metadata = {
  title: 'NHS Dental Payments Explorer 2024–25',
  description:
    'Browse NHS payments to dental practices in England by region, area and town — including the value paid per UDA.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="wordmark">
              UDA Explorer
              <span className="tag">NHS dental payments · England · 2024–25</span>
            </Link>
            <SearchBox />
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            Source: NHS Business Services Authority, “Payments to Dentists 2024–25”. Contracted
            £/UDA = baseline contract ÷ contracted UDAs; effective £/UDA = total contractual
            payments ÷ contracted UDAs (differs where clawback or other adjustments apply).
            Contracts with no contracted UDAs (e.g. orthodontic-only) show no rate.
          </div>
        </footer>
      </body>
    </html>
  );
}
