import './globals.css';
import Nav from './Nav';

export const metadata = {
  title: 'Collectorsmarks.org – Lugt Stamp Research',
  description:
    'A digital platform for the research and documentation of collectors marks on works on paper.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="hero">
          <h1>Collectorsmarks.org</h1>
          <p>
            A digital platform for the research, documentation, and study of
            collectors marks on works on paper, based on the Lugt catalogue and
            ongoing scholarly research.
          </p>
          <Nav />
        </header>

        <main>{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} Collectorsmarks.org – Under development
        </footer>
      </body>
    </html>
  );
}
