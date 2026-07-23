const phases = [
  {
    title: 'Foundation · Weeks 1–4',
    description: 'Consistency, movement quality, and pain-aware loading.',
  },
  {
    title: 'Capacity · Weeks 5–8',
    description: 'Gradually add volume and conditioning.',
  },
  {
    title: 'Athletic return · Weeks 9–12',
    description: 'Prepare for tennis, swimming, and martial arts.',
  },
];

export default function ProgressPage() {
  return (
    <section className="page">
      <header className="section-header">
        <p className="eyebrow">PROGRESS</p>
        <h1>Watch the rebuild happen.</h1>
        <p>
          This foundation screen will later hold weight, steps, strength,
          mobility, and streak charts.
        </p>
      </header>

      <div className="timeline">
        {phases.map((phase, index) => (
          <article key={phase.title}>
            <span>{index + 1}</span>
            <div>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
