import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Start', path: '/' },
    { label: 'Führerscheine', path: '/fuehrerscheine' },
    { label: 'Fahrzeuge', path: '/fahrzeuge' },
    { label: 'Über uns', path: '/ueber-uns' },
    { label: 'Kontakt', path: '/kontakt' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = currentPath === '/';
  const headerBg = isScrolled || !isHomePage ? 'bg-[#2563EB] shadow-lg' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[#2563EB]" />
            </div>
            <span className="text-white text-xl font-bold hidden sm:block">
              Fahrschule Klaussner
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-white hover:text-[#BFDBFE] transition-colors duration-200 font-medium ${
                  currentPath === item.path ? 'text-[#BFDBFE]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/anmelden')}
              className="btn-solid"
            >
              Jetzt anmelden
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1E40AF] border-t border-[#1D4ED8]">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-white text-left py-2 hover:text-[#BFDBFE] transition-colors ${
                  currentPath === item.path ? 'text-[#BFDBFE] font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/anmelden')}
              className="btn-solid mt-2"
            >
              Jetzt anmelden
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
