import './globals.css';

export const metadata = {
  title: 'Collectorsmarks.org – Lugt Stamp Research',
  description:
    "A digital platform for the research, documentation, and study of collectors' marks on works on paper, based on the Lugt catalogue and ongoing scholarly research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
