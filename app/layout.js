import './globals.css';
import Nav from './Nav';

export const metadata = {
  title: 'Old Master Drawings & Lugt Stamps',
  description: 'Searchable database of drawings and collectors’ marks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
