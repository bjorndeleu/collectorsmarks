export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <h1>Collectorsmarks.org</h1>
        <p>
          A digital platform for the research, documentation, and study of
          collectors&apos; marks on works on paper, based on the Lugt catalogue
          and ongoing scholarly research.
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
