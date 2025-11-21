import { supabase } from '../supabaseClient.js';
import StampsTable from './StampsTable';

export const metadata = {
  title: 'Collectorsmarks.org – Lugt Collectors’ Marks (sample)',
};

export default async function StampsPage() {
  let stamps = [];
  let errorMessage = '';

  try {
    const { data, error } = await supabase
      .from('stamps')
      .select(
        'id, lugt_number, collector_name, mark_description, period, ink_color'
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

  return (
    <>
      <h2>Lugt Collectors’ Marks (Sample Records)</h2>
      <p>
        The records below are loaded live from the Supabase database. In the
        future, this table can be expanded into a full catalogue with search
        and filtering.
      </p>

      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && stamps.length === 0 && (
        <p>
          No records found in the <code>stamps</code> table.
        </p>
      )}

      {stamps.length > 0 && <StampsTable stamps={stamps} />}
    </>
  );
}
