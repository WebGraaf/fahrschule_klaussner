import { Car, Bike, Tractor } from 'lucide-react';

interface FuehrerscheineProps {
  onNavigate: (path: string) => void;
}

export default function Fuehrerscheine({ onNavigate }: FuehrerscheineProps) {
  const klassen = [
    {
      title: 'Klasse A',
      subtitle: 'PKW & Anhänger',
      description: 'Führerschein für Kraftwagen bis 3,5 Tonnen. Enthält die Klassen B, BE und BF17 (Begleitetes Fahren ab 17).',
      icon: Car,
      path: '/fuehrerscheine/klasse-a/',
      color: 'from-[#2563EB] to-[#1E40AF]'
    },
    {
      title: 'Klasse B',
      subtitle: 'Motorräder',
      description: 'Führerschein für Motorräder. Enthält die Klassen A offen, A2 und A1 für verschiedene Leistungsklassen.',
      icon: Bike,
      path: '/fuehrerscheine/klasse-b/',
      color: 'from-[#1E40AF] to-[#1D4ED8]'
    },
    {
      title: 'Klasse M',
      subtitle: 'Roller 50 ccm',
      description: 'Führerschein für Roller bis 50 ccm und maximal 45 km/h. Perfekt für den Stadtverkehr.',
      icon: Bike,
      path: '/fuehrerscheine/klasse-m/',
      color: 'from-[#60A5FA] to-[#2563EB]'
    },
    {
      title: 'Mofa',
      subtitle: 'Bis 25 km/h',
      description: 'Mofaprüfbescheinigung für Fahrzeuge bis 25 km/h. Ideal für den Einstieg in die motorisierte Fortbewegung.',
      icon: Bike,
      path: '/fuehrerscheine/klasse-mofa/',
      color: 'from-[#93C5FD] to-[#60A5FA]'
    },
    {
      title: 'Klasse L',
      subtitle: 'Traktoren',
      description: 'Führerschein für land- und forstwirtschaftliche Zugmaschinen bis 25 km/h ab 16 Jahren.',
      icon: Tractor,
      path: '/fuehrerscheine/klasse-l/',
      color: 'from-[#1D4ED8] to-[#1E3A8A]'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Führerscheinklassen im Überblick</h1>
            <p className="text-xl text-blue-100">
              Von PKW über Motorrad bis zum Traktor – wir bilden dich in allen relevanten Führerscheinklassen aus. Wähle die passende Klasse für deine Bedürfnisse.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {klassen.map((klasse, index) => (
              <button
                key={index}
                onClick={() => onNavigate(klasse.path)}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-left"
              >
                <div className={`h-48 bg-gradient-to-br ${klasse.color} flex items-center justify-center`}>
                  <klasse.icon className="w-24 h-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{klasse.title}</h3>
                  <p className="text-[#2563EB] font-semibold mb-3">{klasse.subtitle}</p>
                  <p className="text-[#6B7280] mb-4">{klasse.description}</p>
                  <span className="text-[#2563EB] font-semibold group-hover:underline">
                    Mehr erfahren →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EFF6FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Noch unentschlossen?</h2>
          <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Wir beraten dich gern persönlich und helfen dir, die richtige Führerscheinklasse für deine Bedürfnisse zu finden.
          </p>
          <button onClick={() => onNavigate('/kontakt')} className="btn-solid">
            Jetzt Beratung vereinbaren
          </button>
        </div>
      </section>
    </div>
  );
}
