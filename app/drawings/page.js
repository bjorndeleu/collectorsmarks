import { supabase } from '../supabaseClient.js';

export const metadata = {
  title: 'Collectorsmarks.org – Drawings (sample records)',
};

export default async function DrawingsPage() {
  let drawings = [];
  let errorMessage = '';

  try {
    const { data, error } = await supabase
      .from('drawings')
      .select(
        'id, artist_name, artist_school, title, date_text, repository, inventory_number'
      )
      .order('artist_name', { ascending: true });

    if (error) {
      console.error(error);
      errorMessage = 'Could not load drawings from the database.';
    } else {
      drawings = data ?? [];
    }
  } catch (err) {
    console.error(err);
    errorMessage = 'Unexpected error while loading data.';
  }

  return (
    <>
      <h2>Drawings (Sample Records)</h2>
      <p>
        The records below are sample drawings stored in the Supabase database.
        This page can later be expanded into a full catalogue with images and
        links to collectors’ marks.
      </p>

      {errorMessage && <p>{errorMessage}</p>}

      {!errorMessage && drawings.length === 0 && (
        <p>
          No drawings found yet in the <code>drawings</code> table.
        </p>
      )}

      {drawings.length > 0 && (
        <div className="table-scroll">
          <table className="stamps-table">
            <thead>
              <tr>
                <th>Artist</th>
                <th>School</th>
                <th>Title</th>
                <th>Date</th>
                <th>Repository</th>
                <th>Inv. no.</th>
              </tr>
            </thead>
            <tbody>
              {drawings.map((d) => (
                <tr key={d.id}>
                  <td>{d.artist_name || 'Unknown artist'}</td>
                  <td>{d.artist_school || '—'}</td>
                  <td>{d.title || 'Untitled'}</td>
                  <td>{d.date_text || '—'}</td>
                  <td>{d.repository || '—'}</td>
                  <td>{d.inventory_number || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
