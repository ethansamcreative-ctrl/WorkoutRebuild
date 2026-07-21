import { useEffect, useMemo, useState } from 'react';
import BottomNav from './components/BottomNav.jsx';
import MovementCard from './components/MovementCard.jsx';
import { mobility, workouts } from './data/movements.js';

function Today() {
  const [missions, setMissions] = useState(() => JSON.parse(localStorage.getItem('rebuild-missions') || '[false,false,false,false]'));
  useEffect(() => localStorage.setItem('rebuild-missions', JSON.stringify(missions)), [missions]);
  const labels = ['Complete today’s movement', 'Reach step target', 'Do 8 minutes of mobility', 'Log a recovery note'];
  return <section className="page">
    <header className="hero">
      <p className="eyebrow">PROJECT REBUILD · WEEK 1</p>
      <h1>Build the base.<br/>Earn the next level.</h1>
      <p>Today is about consistency, not exhaustion.</p>
    </header>
    <div className="metrics">
      <div><strong>3</strong><span>training days</span></div>
      <div><strong>6K</strong><span>step target</span></div>
      <div><strong>8m</strong><span>mobility floor</span></div>
    </div>
    <article className="panel">
      <p className="eyebrow">TODAY’S MISSION</p>
      <h2>Four simple wins</h2>
      <div className="checklist">
        {labels.map((label, i) => <label key={label}><input type="checkbox" checked={missions[i]} onChange={() => setMissions(missions.map((v, n) => n === i ? !v : v))}/><span>{label}</span></label>)}
      </div>
    </article>
    <article className="coach-card"><p className="eyebrow">COACH NOTE</p><blockquote>“Don’t chase fatigue today. Chase the version of you who returns tomorrow.”</blockquote></article>
  </section>;
}

function Train() {
  const [selected, setSelected] = useState('push');
  const workout = workouts[selected];
  return <section className="page"><header className="section-header"><p className="eyebrow">TRAIN</p><h1>Strength that transfers.</h1><p>Choose a session and open each tile for cues and logging.</p></header>
    <div className="segmented">{Object.entries(workouts).map(([key, value]) => <button key={key} className={selected === key ? 'active' : ''} onClick={() => setSelected(key)}>{value.title.split('·')[0].trim()}</button>)}</div>
    <article className="panel compact"><p className="eyebrow">TODAY’S SESSION</p><h2>{workout.title}</h2><p>{workout.subtitle}</p></article>
    <div className="card-grid">{workout.exercises.map((exercise) => <MovementCard key={exercise.name} movement={exercise} loggable />)}</div>
  </section>;
}

function Move() { return <section className="page"><header className="section-header"><p className="eyebrow">MOVE</p><h1>Mobility is training.</h1><p>Each movement is its own block, not a sliced document page.</p></header><div className="card-grid">{mobility.map((item) => <MovementCard key={item.name} movement={item}/>)}</div></section>; }
function Progress() { return <section className="page"><header className="section-header"><p className="eyebrow">PROGRESS</p><h1>Watch the rebuild happen.</h1><p>This foundation screen will later hold weight, steps, strength, mobility, and streak charts.</p></header><div className="timeline">{['Foundation · Weeks 1–4','Capacity · Weeks 5–8','Athletic return · Weeks 9–12'].map((x,i)=><article key={x}><span>{i+1}</span><div><h3>{x}</h3><p>{i===0?'Consistency, movement quality, and pain-aware loading.':i===1?'Gradually add volume and conditioning.':'Prepare for tennis, swimming, and martial arts.'}</p></div></article>)}</div></section>; }
function You() { return <section className="page"><header className="section-header"><p className="eyebrow">YOU</p><h1>Your operating system.</h1><p>Starting profile, preferences, and plan settings will live here.</p></header><article className="panel"><dl className="profile-list"><div><dt>Primary goal</dt><dd>Fat loss + athletic rebuild</dd></div><div><dt>Training environment</dt><dd>Planet Fitness</dd></div><div><dt>Current focus</dt><dd>Durability, mobility, conditioning</dd></div><div><dt>Return-to-sport goals</dt><dd>Tennis, swimming, judo, martial arts</dd></div></dl></article></section>; }

const pages = { today: <Today/>, train: <Train/>, move: <Move/>, progress: <Progress/>, you: <You/> };

export default function App() {
  const initial = useMemo(() => location.hash.replace('#','') || 'today', []);
  const [active, setActive] = useState(pages[initial] ? initial : 'today');
  useEffect(() => { const handler = () => { const next = location.hash.replace('#','') || 'today'; if (pages[next]) setActive(next); }; addEventListener('hashchange', handler); return () => removeEventListener('hashchange', handler); }, []);
  const navigate = (id) => { location.hash = id; setActive(id); scrollTo({ top: 0, behavior: 'smooth' }); };
  return <div className="app-shell"><main>{pages[active]}</main><BottomNav active={active} onChange={navigate}/></div>;
}
