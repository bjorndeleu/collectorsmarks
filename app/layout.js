import './globals.css';

export const metadata = {
  title: 'Collectorsmarks.org – Lugt Stamp Research',
  description:
    'Digitaal platform voor onderzoek naar verzamelaarsmerken, gebaseerd op de Lugt-catalogus en aanvullend academisch onderzoek.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
