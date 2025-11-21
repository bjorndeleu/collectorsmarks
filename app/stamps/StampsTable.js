'use client';

import { useMemo, useState } from 'react';

export default function StampsTable({ stamps }) {
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('lugt_number');
  const [sortDir, setSortDir] = useState('asc');

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    let result = stamps;

    if (term) {
      result = stamps.filter((s) =>
        (s.lugt_number || '').toLowerCase().includes(term) ||
        (s.collector_name || '').toLowerCase().includes(term)
      );
    }

    const dir = sortDir === 'asc' ? 1 : -1;
    return [...result].sort((a, b) => {
      const va = (a[sortField] || '').toString().toLowerCase();
      const vb = (b[sortField] || '').toString().toLowerCase();
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
  }, [stamps, search, sortField, sortDir]);

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const sortIndicator = (field) =>
    sortField === field ? (sortDir === 'asc' ? '↑' : '↓') : '';

  return (
    <>
      <div className="stamps-controls">
        <label className="stamps-search">
          <span>Search:</span>
          <input
            type="text"
            placeholder="Lugt no. or collector"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <div className="stamps-sort">
          <span>Sort by:</span>
          <button
            type="button"
            onClick={() => toggleSort('lugt_number')}
          >
            Lugt no. {sortIndicator('lugt_number')}
          </button>
          <button
            type="button"
            onClick={() => toggleSort('collector_name')}
          >
            Collector {sortIndicator('collector_name')}
          </button>
        </div>
      </div>

      <div className="table-scroll">
        <table className="stamps-table">
          <thead>
            <tr>
              <th>Lugt no.</th>
              <th>Collector</th>
              <th>Period</th>
              <th>Ink colour</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((stamp) => (
              <tr key={stamp.id}>
                <td>{stamp.lugt_number}</td>
                <td>{stamp.collector_name || '—'}</td>
                <td>{stamp.period || '—'}</td>
                <td>{stamp.ink_color || '—'}</td>
                <td>{stamp.mark_description || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
