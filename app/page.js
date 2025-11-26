import Link from 'next/link';

export default function HomePage() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1200)',
      }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">
          Exploring works on paper through collectors’ marks.
        </h1>

        <p className="hero-subtitle">
          A platform for researching centuries of collecting and ownership history.
        </p>

        <div className="hero-actions">
          <Link href="/search">
            <button className="btn-red">Start search</button>
          </Link>

          <Link href="/research">
            <button className="btn-red" style={{ background: '#333' }}>
              Research tools
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
