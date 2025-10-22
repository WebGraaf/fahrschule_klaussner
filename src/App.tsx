import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fuehrerscheine from './pages/Fuehrerscheine';
import KlasseA from './pages/KlasseA';
import KlasseB from './pages/KlasseB';
import KlasseM from './pages/KlasseM';
import KlasseMofa from './pages/KlasseMofa';
import KlasseL from './pages/KlasseL';
import Kontakt from './pages/Kontakt';
import Anmelden from './pages/Anmelden';
import UeberUns from './pages/UeberUns';
import Fahrzeuge from './pages/Fahrzeuge';
import Impressum from './pages/Impressum';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/fuehrerscheine':
        return <Fuehrerscheine onNavigate={navigate} />;
      case '/fuehrerscheine/klasse-a/':
        return <KlasseA onNavigate={navigate} />;
      case '/fuehrerscheine/klasse-b/':
        return <KlasseB onNavigate={navigate} />;
      case '/fuehrerscheine/klasse-m/':
        return <KlasseM onNavigate={navigate} />;
      case '/fuehrerscheine/klasse-mofa/':
        return <KlasseMofa onNavigate={navigate} />;
      case '/fuehrerscheine/klasse-l/':
        return <KlasseL onNavigate={navigate} />;
      case '/kontakt':
        return <Kontakt onNavigate={navigate} />;
      case '/anmelden':
        return <Anmelden onNavigate={navigate} />;
      case '/ueber-uns':
        return <UeberUns onNavigate={navigate} />;
      case '/fahrzeuge':
        return <Fahrzeuge onNavigate={navigate} />;
      case '/impressum':
        return <Impressum />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
