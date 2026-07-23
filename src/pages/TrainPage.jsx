import { useState } from 'react';
import MovementCard from '../components/MovementCard.jsx';
import { workouts } from '../data/movements.js';

export default function TrainPage() {
  const [selectedWorkout, setSelectedWorkout] = useState('push');
  const workout = workouts[selectedWorkout];

  return (
    <section className="page">
      <header className="section-header">
        <p className="eyebrow">TRAIN</p>
        <h1>Strength that transfers.</h1>
        <p>Choose a session and open each tile for cues and logging.</p>
      </header>

      <div className="segmented">
        {Object.entries(workouts).map(([workoutId, workoutData]) => (
          <button
            key={workoutId}
            className={selectedWorkout === workoutId ? 'active' : ''}
            onClick={() => setSelectedWorkout(workoutId)}
          >
            {workoutData.title.split('·')[0].trim()}
          </button>
        ))}
      </div>

      <article className="panel compact">
        <p className="eyebrow">TODAY’S SESSION</p>
        <h2>{workout.title}</h2>
        <p>{workout.subtitle}</p>
      </article>

      <div className="card-grid">
        {workout.exercises.map((exercise) => (
          <MovementCard key={exercise.name} movement={exercise} loggable />
        ))}
      </div>
    </section>
  );
}
