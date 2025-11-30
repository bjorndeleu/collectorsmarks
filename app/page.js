import Image from "next/image";
import Nav from "./Nav";
import hero from "../guercino-hero.jpg";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Achtergrondbeeld met trage zoom-out */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Old master drawing of the Mocking of Christ"
          fill
          priority
          className="object-cover animate-zoom-out"
        />
      </div>

      {/* Donkere overlay voor leesbaarheid */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      {/* Inhoud bovenop het beeld */}
      <div className="relative flex flex-col min-h-screen">
        {/* Globale navigatie (je bestaande Nav.js) */}
        <Nav />

        {/* Hero-tekst gecentreerd */}
        <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] uppercase mb-4">
            Collectors Marks
          </h1>
          <p className="max-w-2xl text-sm md:text-base leading-relaxed">
            Discover works on paper through their collectors’ marks – a research
            platform to witness centuries of collecting and ownership history.
          </p>
        </section>

        {/* Footer / logo linksonder */}
        <footer className="flex items-end justify-between px-8 pb-6 text-xs">
          <div className="flex items-center gap-3">
            {/* CM-monogram: hier kan later je echte logo-beeld komen */}
            <div className="w-10 h-10 border border-white/70 rounded-full flex items-center justify-center text-xs tracking-[0.3em]">
              CM
            </div>
            <span className="opacity-70">
              Old Master Drawings – Provenance &amp; Collectors’ Marks
            </span>
          </div>
          <div className="opacity-60">
            © {new Date().getFullYear()} Collectors Marks
          </div>
        </footer>
      </div>
    </main>
  );
}
