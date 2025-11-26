'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// hier zet je de URLs van je tekeningen
const HERO_IMAGES = [
  'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1600', // vervang door echte old master
  'https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1600'
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  // automatisch elke 7 seconden naar de volgende slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero hero-slider">
      {/* achtergrond-slides */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src + i}
          className={`hero-slide ${i === index ? 'is-active' : ''}`}
        >
          <img src={src} alt="Old master drawing" />
        </div>
      ))}

      {/* tekstlaag */}
      <div className="hero-overlay hero-overlay-inner">
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
