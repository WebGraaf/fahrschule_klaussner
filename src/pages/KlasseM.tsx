import { Bike, CheckCircle2, FileCheck } from 'lucide-react';

interface KlasseMProps {
  onNavigate: (path: string) => void;
}

export default function KlasseM({ onNavigate }: KlasseMProps) {
  const unterlagen = [
    'Gültiger Personalausweis oder Reisepass',
    'Biometrisches Passfoto',
    'Sehtest (nicht älter als 2 Jahre)',
    'Bescheinigung Erste-Hilfe-Kurs'
  ];

  const vorteile = [
    'Ideal für den Stadtverkehr und kurze Strecken',
    'Niedrige Unterhalts- und Versicherungskosten',
    'Kein Parkplatzproblem mehr',
    'Einsteigerfreundlich und leicht zu fahren',
    'Perfekt für Schüler, Azubis und Berufspendler',
    'Umweltfreundlicher als das Auto'
  ];

  const ausbildung = [
    {
      title: 'Theorieunterricht',
      description: '12 Doppelstunden Grundstoff und 2 Doppelstunden klassenspezifischer Stoff'
    },
    {
      title: 'Praktische Ausbildung',
      description: 'Individuelle Fahrstunden je nach Lernfortschritt, keine Sonderfahrten vorgeschrieben'
    },
    {
      title: 'Theorieprüfung',
      description: '30 Fragen am Computer, mindestens 20 richtige Antworten erforderlich'
    },
    {
      title: 'Praktische Prüfung',
      description: 'Circa 30 Minuten Fahrprüfung im realen Verkehr'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#60A5FA] to-[#2563EB] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bike className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Klasse M – Roller 50 ccm</h1>
            <p className="text-xl text-blue-100">
              Dein Einstieg in die mobile Freiheit: Mit der Klasse M fährst du Roller bis 50 ccm und 45 km/h.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#EFF6FF] rounded-xl p-8 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  ab 16 Jahren
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Was darfst du mit Klasse M fahren?</h2>
              <p className="text-lg text-[#6B7280] mb-6">
                Die Führerscheinklasse M berechtigt dich zum Führen von zweirädrigen Kleinkrafträdern (Mopeds, Roller) und Fahrrädern mit Hilfsmotor.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2937]">Zweirädrige Kleinkrafträder (Roller, Mopeds)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2937]">Höchstgeschwindigkeit maximal 45 km/h</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2937]">Hubraum maximal 50 ccm (bei Verbrennungsmotor)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2937]">Auch Elektro-Roller mit entsprechender Leistung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F2937]">Fahrräder mit Hilfsmotor</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#93C5FD] to-[#60A5FA] rounded-xl h-64 flex items-center justify-center">
                <Bike className="w-32 h-32 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Perfekt für den Alltag</h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  Ein Roller der Klasse M ist die ideale Lösung für kurze Strecken in der Stadt, den Weg zur Schule oder zur Arbeit. Günstig, wendig und praktisch.
                </p>
                <ul className="space-y-3">
                  {vorteile.slice(0, 3).map((vorteil, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1F2937]">{vorteil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Deine Vorteile mit der Klasse M</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vorteile.map((vorteil, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                    <span className="text-[#1F2937] font-medium">{vorteil}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">So läuft die Ausbildung ab</h2>
            <div className="space-y-6">
              {ausbildung.map((schritt, index) => (
                <div key={index} className="bg-[#EFF6FF] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{schritt.title}</h3>
                      <p className="text-[#6B7280]">{schritt.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <FileCheck className="w-10 h-10 text-[#2563EB]" />
              <h2 className="text-3xl font-bold">Benötigte Unterlagen</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <ul className="space-y-4">
                {unterlagen.map((unterlage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2563EB] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-[#1F2937]">{unterlage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#60A5FA] to-[#2563EB] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Starte jetzt in deine mobile Zukunft</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mit der Klasse M bist du flexibel unterwegs. Melde dich jetzt an und beginne deine Ausbildung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Jetzt anmelden
            </button>
            <button onClick={() => onNavigate('/kontakt')} className="btn-outline border-white text-white hover:bg-white/10">
              Fragen stellen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
