export default function StampsPage() {
  return (
    <main>
      <header className="hero">
        <h1>Stamps Database</h1>
        <p>
          This section will contain the searchable database of collectors marks,
          based on the Lugt catalogue and additional research.
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
