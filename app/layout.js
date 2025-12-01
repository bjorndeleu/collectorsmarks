import "./globals.css";
import Nav from "./Nav";

export const metadata = {
  title: "Collectors Marks",
  description: "Exploring works on paper through collectors’ marks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-900 text-white">
        {/* Globale nav bovenaan elke pagina */}
        <header className="fixed top-0 left-0 right-0 z-20 bg-white/90 text-black backdrop-blur border-b border-black/5">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <Nav />
          </div>
        </header>

        {/* ruimte onder nav + pagina-inhoud */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
