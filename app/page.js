'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Gebruik hier de beelden die ik je eerder gaf
const HERO_IMAGES = [
  "https://images.metmuseum.org/CRDImages/dp/original/DP802938.jpg",
  "https://images.metmuseum.org/CRDImages/dp/original/DP811674.jpg",
  "https://images.metmuseum.org/CRDImages/dp/original/DP827335.jpg",
  "https://lh3.googleusercontent.com/pw/AP1GczPJx8CwQytciDhT12ZkCH1Ca_FcY_PFp3LeiK0gtS10nRIBq2lGNvLIzIAyBvQhGVY39R06UJNKm5-oJskcO7Qt3Iti0l813cG1fPoA2kNjgPq5Sf1=w2400",
  "https://images.metmuseum.org/CRDImages/dp/original/DP123703.jpg",
  "https://images.metmuseum.org/CRDImages/dp/original/DP236020.jpg"
];

const SLIDE_INTERVAL = 10000; // 10 seconden – hier kun je de snelheid aanpassen

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero hero-slider">
      {/* Achtergrond-slides */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src + i}
          className={`hero-slide ${i === index ? 'is-active' : ''}`}
        >
          <img src={src} alt="Old master drawing" />
        </div>
      ))}

      {/* Vaste overlay (vignette + paper grain worden via CSS gedaan) */}
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

        {/* Lugt “watermark” */}
        <div className="hero-watermark">
          LUGT<br />
          <span>collectors&apos; marks</span>
        </div>
      </div>
    </section>
  );
}
