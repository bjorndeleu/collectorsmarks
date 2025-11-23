// app/stamps/page.js
// Tijdelijke versie zonder Supabase, zodat de site weer buildt.

const sampleStamps = [
  {
    lugt_number: 'L.1000',
    collector_name: 'Unknown Dutch collector',
    period: '17th century',
    ink_color: 'black',
    description: 'Initials "AB" in a circle'
  },
  {
    lugt_number: 'L.1783',
    collector_name: 'Comte de Cossé-Brissac',
    period: '1750–1780',
    ink_color: 'blue',
    description: "Collector's stamp"
  },
  {
    lugt_number: 'L.2304',
    collector_name: 'Jonathan Richardson Sr.',
    period: '18th century',
    ink_color: 'brown',
    description: "English collector's mark"
  },
  {
    lugt_number: 'L.3981',
    collector_name: 'Unknown',
    period: 'late 19th century',
    ink_color: 'purple',
    description: 'Monogram "PHF"'
  },
  {
    lugt_number: 'L.5207',
    collector_name: 'Unidentified',
    period: '20th century',
    ink_color: 'black',
    description:
      'Provisional stamp recorded in private collections; entry pending verification'
  }
];

export default function StampsPage() {
  return (
    <main className="page-content">
      <h2>Lugt Collectors’ Marks (Sample Records)</h2>
      <p>
        The records below are temporary sample data. Supabase integration can be
        re-enabled later, but this static version keeps the site online while we
        refine the architecture.
      </p>

      <div className="search-box">
        {/* eenvoudig info-tekstje in plaats van echte search, zodat alles simpel blijft */}
        <small>
          Search & filtering will be reintroduced once the database connection is
          stable.
        </small>
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
            {sampleStamps.map((stamp) => (
              <tr key={stamp.lugt_number}>
                <td>{stamp.lugt_number}</td>
                <td>{stamp.collector_name}</td>
                <td>{stamp.period}</td>
                <td>{stamp.ink_color}</td>
                <td>{stamp.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
