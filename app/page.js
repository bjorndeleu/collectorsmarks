import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">

      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/guercino-hero.jpg"
          alt="Collectors Marks Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* subtle dark overlay */}
      </div>

      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 md:px-10 text-center">

        <p className="text-lg md:text-xl text-white/80 mb-3">
          Welcome to
        </p>

        <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white mb-4">
          Collectors Marks
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-white/90 leading-relaxed mb-10">
          Exploring works on paper through collectors’ marks — a research platform
          for uncovering centuries of collecting and ownership history.
        </p>

        <div className="flex gap-4">
          <a
            href="/search"
            className="px-6 py-3 rounded-full text-white bg-red-700 hover:bg-red-800 transition"
          >
            Start search
          </a>

          <a
            href="/research"
            className="px-6 py-3 rounded-full text-black bg-white/90 hover:bg-white transition"
          >
            Research tools
          </a>
        </div>
      </section>
    </main>
  );
}
