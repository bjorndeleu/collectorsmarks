import { createClient } from '@supabase/supabase-js';

export default async function StampsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // Query database
  const { data: stamps, error } = await supabase
    .from('stamps')
    .select('*')
    .order('lugt_number');

  if (error) {
    console.error(error);
    return <p>Error loading stamps.</p>;
  }

  return (
    <>
      <h2>Lugt Collectors’ Marks</h2>
      <p>
        This page lists collectors' stamps from the Lugt catalogue (sample entries).
      </p>

      <ul style={{ lineHeight: '1.8' }}>
        {stamps.map((stamp) => (
          <li key={stamp.id}>
            <strong>Lugt {stamp.lugt_number}</strong> — {stamp.collector_name}
          </li>
        ))}
      </ul>
    </>
  );
}
