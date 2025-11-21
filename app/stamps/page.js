import { supabase } from '../supabaseClient.js';

export default async function StampsPage() {
  let stamps = [];
  let errorMessage = '';

  if (!supabase) {
    errorMessage =
      'Database connection not configured. Please check the Supabase settings.';
  } else {
    const { data, error } = await supabase
      .from('stamps')
      .select('*')
      .order('lugt_number', { ascending: true });

    if (error) {
      console.error(error);
      errorMessage = 'Could not load data from Supabase.';
    } else {
      stamps = data || [];
    }
  }

  return (
    <>
      <h2>Lugt Collectors’ Marks (Sample Records)</h2>
      <p>
        This is a temporary demonstration of how entries from the Lugt catalogue
        could appear. In the future, this page will be powered by a full
        database with search and images.
      </p>

      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && stamps.length === 0 && (
        <p>No records found in the <code>stamps</code> table.</p>
      )}

      {stamps.length > 0 && (
        <ul style={{ lineHeight: '1.8' }}>
          {stamps.map((stamp) => (
            <li key={stamp.id}>
              <strong>{stamp.lugt_number}</strong> —{' '}
              {stamp.mark_description || stamp.collector_name || 'Sample entry.'}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
