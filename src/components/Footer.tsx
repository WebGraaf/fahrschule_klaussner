import { Phone, Smartphone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontakt</h3>
            <div className="space-y-3">
              <a href="tel:02291900474" className="flex items-center gap-3 hover:text-[#60A5FA] transition-colors">
                <Phone className="w-5 h-5" />
                <span>02291 900474</span>
              </a>
              <a href="tel:01712835092" className="flex items-center gap-3 hover:text-[#60A5FA] transition-colors">
                <Smartphone className="w-5 h-5" />
                <span>0171 2835092</span>
              </a>
              <a href="mailto:Klaussner-Waldbroel@t-online.de" className="flex items-center gap-3 hover:text-[#60A5FA] transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm break-all">Klaussner-Waldbroel@t-online.de</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Kleistweg 30<br />51545 Waldbröl</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Erreichbar ca. 30 Minuten vor Unterrichtsbeginn
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Standorte</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[#60A5FA]">Waldbröl</p>
                <p className="text-sm">Hochstrasse 7</p>
                <p className="text-sm text-gray-400">Di & Do 18:30–20:00</p>
              </div>
              <div>
                <p className="font-semibold text-[#60A5FA]">Nümbrecht</p>
                <p className="text-sm">am Dorfplatz</p>
                <p className="text-sm text-gray-400">Mo & Mi 18:30–20:00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-[#60A5FA] transition-colors">
                  Start
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/fuehrerscheine')} className="hover:text-[#60A5FA] transition-colors">
                  Führerscheine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/fahrzeuge')} className="hover:text-[#60A5FA] transition-colors">
                  Fahrzeuge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/ueber-uns')} className="hover:text-[#60A5FA] transition-colors">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/kontakt')} className="hover:text-[#60A5FA] transition-colors">
                  Kontakt
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/anmelden')} className="hover:text-[#60A5FA] transition-colors">
                  Anmelden
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('/impressum')} className="hover:text-[#60A5FA] transition-colors">
                  Impressum & Datenschutz
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fahrschule Klaussner. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
