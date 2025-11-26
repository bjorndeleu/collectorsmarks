import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Old Master Drawings & Lugt Stamps',
  description: 'Searchable database of drawings and collectors’ marks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="nav-inner">
            <Link href="/" className="logo">
              OMD
            </Link>
            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/search">Search</Link>
              <Link href="/research">Research</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
