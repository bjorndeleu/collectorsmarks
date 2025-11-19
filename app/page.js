export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <h1>Collectorsmarks.org</h1>
        <p>
          Een digitaal platform voor het onderzoek, de documentatie en de studie van
          verzamelaarsmerken, gebaseerd op de Lugt-catalogus en aanvullend academisch onderzoek.
        </p>

        <nav>
          <a href="#">Stamps Database</a>
          <a href="#">Research</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <footer className="footer">
        © {new Date().getFullYear()} Collectorsmarks.org – Under development
      </footer>
    </main>
  );
}
