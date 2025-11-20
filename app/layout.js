import './globals.css';

export const metadata = {
  title: 'Collectorsmarks.org – Lugt Stamp Research',
  description:
    'A digital platform for the research, documentation, and study of collectors marks on works on paper, based on the Lugt catalogue and ongoing scholarly research.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="hero">
            <h1>Collectorsmarks.org</h1>
            <p className="hero-subtitle">
              A digital platform for the research, documentation, and study of
              collectors marks on works on paper, based on the Lugt catalogue
              and ongoing scholarly research.
            </p>

            <nav className="nav">
              <a href="/">Home</a>
              <a href="/stamps">Stamps Database</a>
              <a href="/research">Research</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </header>

          <main className="page-content">{children}</main>

          <footer className="footer">
            © {new Date().getFullYear()} Collectorsmarks.org — Under development
          </footer>
        </div>
      </body>
    </html>
  );
}
