import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Achtergrond: tekening met trage zoom-out */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/guercino-hero.jpg"   // of jouw huidige bestand in /public
          alt="Old master drawing"
          fill
          priority
          className="object-cover animate-zoom-out"
        />
      </div>

      {/* Gradient overlay (onderaan donkerder voor tekst) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      {/* Content (Nav zit in layout.js, dus hier alleen hero-tekst) */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] uppercase mb-4">
          Collectors Marks
        </h1>
        <p className="max-w-2xl text-sm md:text-base leading-relaxed">
          Discover works on paper through their collectors&apos; marks – a
          research platform to witness centuries of collecting and ownership
          history.
        </p>
      </section>
    </main>
  );
}
