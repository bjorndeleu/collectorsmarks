export default function AboutPage() {
  return (
    <main>
      <header className="hero">
        <h1>About Collectorsmarks.org</h1>
        <p>
          Collectorsmarks.org is an independent scholarly platform dedicated to
          the study of collectors marks on works on paper. It builds on the
          pioneering work of Frits Lugt and aims to support provenance research
          for curators, scholars, and the art trade.
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
