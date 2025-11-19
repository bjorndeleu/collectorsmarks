export default function ResearchPage() {
  return (
    <main>
      <header className="hero">
        <h1>Research</h1>
        <p>
          Here we will present essays, case studies, and ongoing research
          related to collectors marks, provenance, and old master drawings.
        </p>

        <nav>
          <a href="/">Home</a>
          <a href="/stamps">Stamps Database</a>
          <a href="/research">Research</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <footer className="footer">
        © {new Date().getFullYear()} Collectorsmarks.org – Under development
      </footer>
    </main>
  );
}
