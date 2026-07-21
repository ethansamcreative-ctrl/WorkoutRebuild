const items = [
  ['today', 'Today', '⌂'],
  ['train', 'Train', '◆'],
  ['move', 'Move', '↟'],
  ['progress', 'Progress', '↗'],
  ['you', 'You', '●'],
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {items.map(([id, label, icon]) => (
        <button
          key={id}
          className={active === id ? 'nav-item active' : 'nav-item'}
          onClick={() => onChange(id)}
          aria-current={active === id ? 'page' : undefined}
        >
          <span aria-hidden="true">{icon}</span>
          <small>{label}</small>
        </button>
      ))}
    </nav>
  );
}
