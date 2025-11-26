'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const initialFilters = {
  keyword: '',
  artist: '',
  collection: '',
  country: '',
  continent: '',
  medium: '',
  category: '',
  dateFrom: '',
  dateTo: '',
  lugtStamp: '',
};

export default function SearchPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [artists, setArtists] = useState([]);
  const [collections, setCollections] = useState([]);
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [media, setMedia] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stamps, setStamps] = useState([]);

  useEffect(() => {
    loadFilterOptions();
    handleSearch();
  }, []);

  async function distinct(column) {
    const { data, error } = await supabase
      .from('drawings')
      .select(column, { distinct: true })
      .not(column, 'is', null);

    if (error) {
      console.error(error);
      return [];
    }

    const vals = data
      .map((row) => row[column])
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));

    return vals.map((v) => ({ value: v, label: v }));
  }

  async function loadFilterOptions() {
    setArtists(await distinct('artist_name'));
    setCollections(await distinct('collection_name'));
    setCountries(await distinct('country'));
    setContinents(await distinct('continent'));
    setMedia(await distinct('medium'));
    setCategories(await distinct('category'));
    setStamps(await distinct('lugt_stamp'));
  }

  async function handleSearch() {
    setLoading(true);

    let query = supabase
      .from('drawings')
      .select('*')
      .order('date_year', { ascending: true })
      .limit(300);

    if (filters.keyword.trim()) {
      const kw = filters.keyword.trim();
      query = query.or(
        `title.ilike.%${kw}%,description.ilike.%${kw}%`
      );
    }

    if (filters.artist) query = query.eq('artist_name', filters.artist);
    if (filters.collection) query = query.eq('collection_name', filters.collection);
    if (filters.country) query = query.eq('country', filters.country);
    if (filters.continent) query = query.eq('continent', filters.continent);
    if (filters.medium) query = query.eq('medium', filters.medium);
    if (filters.category) query = query.eq('category', filters.category);
    if (filters.lugtStamp) query = query.eq('lugt_stamp', filters.lugtStamp);

    if (filters.dateFrom) {
      query = query.gte('date_year', Number(filters.dateFrom));
    }
    if (filters.dateTo) {
      query = query.lte('date_year', Number(filters.dateTo));
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      setResults([]);
    } else {
      setResults(data || []);
    }

    setLoading(false);
  }

  function updateFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div>
      <h1 className="page-title">Search</h1>

      <div className="search-bar-row">
        <input
          className="input"
          type="text"
          placeholder="Search by keyword"
          value={filters.keyword}
          onChange={(e) => updateFilter('keyword', e.target.value)}
        />
        <button className="btn-red" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="filters-panel">
        <div className="field">
          <span className="label">Artist</span>
          <select
            className="select"
            value={filters.artist}
            onChange={(e) => updateFilter('artist', e.target.value)}
          >
            <option value="">Any</option>
            {artists.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="label">Collection</span>
          <select
            className="select"
            value={filters.collection}
            onChange={(e) => updateFilter('collection', e.target.value)}
          >
            <option value="">Any</option>
            {collections.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="label">Country</span>
          <select
            className="select"
            value={filters.country}
            onChange={(e) => updateFilter('country', e.target.value)}
          >
            <option value="">Any</option>
            {countries.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="label">Continent</span>
          <select
            className="select"
            value={filters.continent}
            onChange={(e) => updateFilter('continent', e.target.value)}
          >
            <option value="">Any</option>
            {continents.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="label">Medium</span>
          <select
            className="select"
            value={filters.medium}
            onChange={(e) => updateFilter('medium', e.target.value)}
          >
            <option value="">Any</option>
            {media.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="label">Category</span>
          <select
            className="select"
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
          >
            <option value="">Any</option>
            {categories.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="label">Date from</span>
          <input
            className="input"
            type="number"
            placeholder="e.g. 1600"
            value={filters.dateFrom}
            onChange={(e) => updateFilter('dateFrom', e.target.value)}
          />
        </div>

        <div className="field">
          <span className="label">Date to</span>
          <input
            className="input"
            type="number"
            placeholder="e.g. 1800"
            value={filters.dateTo}
            onChange={(e) => updateFilter('dateTo', e.target.value)}
          />
        </div>

        <div className="field">
          <span className="label">Lugt stamp / Collector</span>
          <select
            className="select"
            value={filters.lugtStamp}
            onChange={(e) => updateFilter('lugtStamp', e.target.value)}
          >
            <option value="">Any</option>
            {stamps.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="toolbar">
        <span>{loading ? 'Loading…' : `${results.length} result(s)`}</span>
        <span>Sort order: by date ↑</span>
      </div>

      <div className="grid">
        {results.map((d) => (
          <figure key={d.id} className="grid-item">
            {d.image_url && (
              <img src={d.image_url} alt={d.title} loading="lazy" />
            )}
            <figcaption>
              {d.artist_name && (
                <>
                  <strong>{d.artist_name}</strong>
                  <br />
                </>
              )}
              {d.title}
              {d.date_year && <> ({d.date_year})</>}
              {d.collection_name && (
                <>
                  <br />
                  <span>{d.collection_name}</span>
                </>
              )}
              {d.lugt_stamp && (
                <div className="stamp-label">{d.lugt_stamp}</div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
