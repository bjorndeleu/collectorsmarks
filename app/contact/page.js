export default function ContactPage() {
  return (
    <main>
      <header className="hero">
        <h1>Contact</h1>
        <p>
          For questions, corrections, or collaboration proposals related to
          collectors marks and provenance research, please get in touch via the
          contact channels that will be listed here.
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
