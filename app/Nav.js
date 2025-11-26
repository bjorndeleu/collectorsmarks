import Link from 'next/link';

export default function Nav() {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="logo">
          OMD
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
