import { useEffect, useState } from 'react';

const missionLabels = [
  'Complete today’s movement',
  'Reach step target',
  'Do 8 minutes of mobility',
  'Log a recovery note',
];

export default function TodayPage() {
  const [missions, setMissions] = useState(() =>
    JSON.parse(localStorage.getItem('rebuild-missions') || '[false,false,false,false]'),
  );

  useEffect(() => {
    localStorage.setItem('rebuild-missions', JSON.stringify(missions));
  }, [missions]);

  const toggleMission = (index) => {
    setMissions((current) =>
      current.map((isComplete, missionIndex) =>
        missionIndex === index ? !isComplete : isComplete,
      ),
    );
  };

  return (
    <section className="page">
      <header className="hero">
        <p className="eyebrow">PROJECT REBUILD · WEEK 1</p>
        <h1>
          Build the base.
          <br />
          Earn the next level.
        </h1>
        <p>Today is about consistency, not exhaustion.</p>
      </header>

      <div className="metrics">
        <div>
          <strong>3</strong>
          <span>training days</span>
        </div>
        <div>
          <strong>6K</strong>
          <span>step target</span>
        </div>
        <div>
          <strong>8m</strong>
          <span>mobility floor</span>
        </div>
      </div>

      <article className="panel">
        <p className="eyebrow">TODAY’S MISSION</p>
        <h2>Four simple wins</h2>
        <div className="checklist">
          {missionLabels.map((label, index) => (
            <label key={label}>
              <input
                type="checkbox"
                checked={missions[index]}
                onChange={() => toggleMission(index)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </article>

      <article className="coach-card">
        <p className="eyebrow">COACH NOTE</p>
        <blockquote>
          “Don’t chase fatigue today. Chase the version of you who returns tomorrow.”
        </blockquote>
      </article>
    </section>
  );
}
