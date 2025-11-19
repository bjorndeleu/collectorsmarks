export default function StampsPage() {
  return (
    <div>
      <h2>Lugt Collectors’ Marks (Sample Records)</h2>

      <p>
        This is a temporary demonstration of how entries from the Lugt
        catalogue could appear. In the future, this page will be powered by a
        full database with search and images.
      </p>

      <ul style={{ lineHeight: '1.8' }}>
        <li>
          <strong>Lugt 1000</strong> — Initials “AB” in a circle (17th century).
          Attributed to an unidentified Dutch collector.
        </li>

        <li>
          <strong>Lugt 1783</strong> — Stamp of <em>Comte de Cossé-Brissac</em>,
          blue ink. Known from impressions on French drawings, ca. 1750–1780.
        </li>

        <li>
          <strong>Lugt 2304</strong> — Collector’s mark of
          <em> Jonathan Richardson Sr.</em>, London. Typical on Old Master drawings.
        </li>

        <li>
          <strong>Lugt 3981</strong> — “PHF” monogram (Phoebus Foundation example),
          late 19th century. Often found on Flemish drawings.
        </li>

        <li>
          <strong>Lugt 5207</strong> — Recently discovered stamp recorded in
          private collections; provisional entry pending verification.
        </li>
      </ul>

      <p>
        More sample records can be added, or we can begin designing the full
        database schema whenever you're ready.
      </p>
    </div>
  );
}
