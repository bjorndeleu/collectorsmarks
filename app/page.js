// app/stamps/page.js
import { supabaseClient } from '@/lib/supabaseClient'
export const metadata = {
  title: 'Collectorsmarks.org – Lugt Collectors’ Marks',
};

export default async function StampsPage() {
  // Data ophalen
  const { data, error } = await supabase
    .from('stamps')
    .select('id, lugt_number, collector_name, period, ink_color, mark_description')
    .order('lugt_number', { ascending: true });

  // Foutmelding tonen
  if (error) {
    return (
      <main className="page-content">
        <h2>Lugt Collectors’ Marks</h2>
        <p>⚠️ Error loading stamps: {error.message}</p>
      </main>
    );
  }

  return (
    <main className="page-content">
      <h2>Lugt Collectors’ Marks</h2>
      <p>The records below are loaded live from the Supabase database.</p>

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
          {data?.map((row) => (
            <tr key={row.id}>
              <td>{row.lugt_number}</td>
              <td>{row.collector_name}</td>
              <td>{row.period}</td>
              <td>{row.ink_color}</td>
              <td>{row.mark_description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
