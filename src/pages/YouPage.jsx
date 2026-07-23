const profileDetails = [
  ['Primary goal', 'Fat loss + athletic rebuild'],
  ['Training environment', 'Planet Fitness'],
  ['Current focus', 'Durability, mobility, conditioning'],
  ['Return-to-sport goals', 'Tennis, swimming, judo, martial arts'],
];

export default function YouPage() {
  return (
    <section className="page">
      <header className="section-header">
        <p className="eyebrow">YOU</p>
        <h1>Your operating system.</h1>
        <p>Starting profile, preferences, and plan settings will live here.</p>
      </header>

      <article className="panel">
        <dl className="profile-list">
          {profileDetails.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  );
}
