import MovementCard from '../components/MovementCard.jsx';
import { mobility } from '../data/movements.js';

export default function MovePage() {
  return (
    <section className="page">
      <header className="section-header">
        <p className="eyebrow">MOVE</p>
        <h1>Mobility is training.</h1>
        <p>Each movement is its own block, not a sliced document page.</p>
      </header>

      <div className="card-grid">
        {mobility.map((movement) => (
          <MovementCard key={movement.name} movement={movement} />
        ))}
      </div>
    </section>
  );
}
