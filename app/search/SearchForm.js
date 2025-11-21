'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm({ initialQuery }) {
  const [value, setValue] = useState(initialQuery || '');
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();

    if (!q) {
      router.push('/search'); // leeg → gewoon pagina zonder resultaten
    } else {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className="stamps-controls">
      <label className="stamps-search">
        <span>Lugt no.:</span>
        <input
          type="text"
          placeholder="e.g. L.2304 or 2304"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit" className="search-main-button">
        Search
      </button>
    </form>
  );
}
