import { useState } from 'react';

export default function MovementCard({ movement, loggable = false }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="movement-card">
      <img src={movement.image} alt={`${movement.name} instructional visual`} loading="lazy" />
      <div className="movement-body">
        <div className="movement-heading">
          <div>
            <p className="eyebrow">{movement.prescription || movement.dose}</p>
            <h3>{movement.name}</h3>
          </div>
          <button className="icon-button" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? '−' : '+'}
          </button>
        </div>
        <p>{movement.why}</p>
        {open && (
          <div className="details">
            {movement.cues && (
              <ul>
                {movement.cues.map((cue) => <li key={cue}>{cue}</li>)}
              </ul>
            )}
            {loggable && (
              <div className="log-grid">
                <label>Weight<input inputMode="decimal" placeholder="0" /></label>
                <label>Reps<input inputMode="numeric" placeholder="0" /></label>
                <label>RPE<input inputMode="decimal" placeholder="1–10" /></label>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
