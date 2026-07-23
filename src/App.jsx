import { useEffect, useMemo, useState } from 'react';
import BottomNav from './components/BottomNav.jsx';
import MovePage from './pages/MovePage.jsx';
import ProgressPage from './pages/ProgressPage.jsx';
import TodayPage from './pages/TodayPage.jsx';
import TrainPage from './pages/TrainPage.jsx';
import YouPage from './pages/YouPage.jsx';

const pageComponents = {
  today: TodayPage,
  train: TrainPage,
  move: MovePage,
  progress: ProgressPage,
  you: YouPage,
};

function getPageFromHash() {
  const pageId = window.location.hash.replace('#', '') || 'today';
  return pageComponents[pageId] ? pageId : 'today';
}

export default function App() {
  const initialPage = useMemo(getPageFromHash, []);
  const [activePage, setActivePage] = useState(initialPage);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (pageId) => {
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActivePage = pageComponents[activePage];

  return (
    <div className="app-shell">
      <main>
        <ActivePage />
      </main>
      <BottomNav active={activePage} onChange={navigate} />
    </div>
  );
}
