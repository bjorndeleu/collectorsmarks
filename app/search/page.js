import { supabaseClient } from '@/lib/supabaseClient'
import SearchForm from './SearchForm';

export const metadata = {
  title: 'Collectorsmarks.org – Search by Lugt number',
};

export default async function SearchPage({ searchParams }) {
  const term = (searchParams.q || '').trim();

  let stamps = [];
  let errorMessage = '';

  if (term) {
    // we strip eventueel 'L.' weg en zoeken op nummerdeel
    const cleaned = term.replace(/^L\./i, '').trim();

    try {
      const { data, error } = await supabase
  .from('stamps')
  .select(
    'id, lugt_number, collector_name, period, ink_color, mark_description'
  )
  .or(
    `lugt_number.ilike.%${cleaned}%,collector_name.ilike.%${cleaned}%,period.ilike.%${cleaned}%`
  )
  .order('lugt_number', { ascending: true });
      if (error) {
        console.error(error);
        errorMessage = 'Could not load stamps from the database.';
      } else {
        stamps = data ?? [];
      }
    } catch (err) {
      console.error(err);
      errorMessage = 'Unexpected error while loading data.';
    }
  }

  return (
    <>
      <h2>Search by Lugt number</h2>
      <p>
  Enter a Lugt number, a collector name, or a period (e.g. “17th century”) to search the live database.
</p>

      <SearchForm initialQuery={term} />

      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && term && stamps.length === 0 && (
        <p>
          No marks found for “{term}”.
        </p>
      )}

      {stamps.length > 0 && (
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
              {stamps.map((stamp) => (
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
      )}
    </>
  );
}
