import './globals.css';
import Nav from './Nav';

export const metadata = {
  title: 'Collectorsmarks.org – Lugt Stamp Research',
  description:
    'A digital platform for the research, documentation, and study of collectors marks on works on paper, based on the Lugt catalogue and ongoing scholarly research.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-background">
          <div className="site-frame">
            <header className="site-header">
              <div className="site-logo">
                <h1>Collectorsmarks.org</h1>
                <p className="site-tagline">
                  A digital platform for the research, documentation, and study of
                  collectors marks on works on paper, based on the Lugt catalogue and
                  ongoing scholarly research.
                </p>
              </div>
              <Nav />
            </header>

            <main className="page-content">{children}</main>

            <footer className="site-footer">
              © {new Date().getFullYear()} Collectorsmarks.org – Under development
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
