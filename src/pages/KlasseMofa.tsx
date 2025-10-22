import { Bike, CheckCircle2, FileCheck } from 'lucide-react';

interface KlasseMofaProps {
  onNavigate: (path: string) => void;
}

export default function KlasseMofa({ onNavigate }: KlasseMofaProps) {
  const unterlagen = [
    'Gültiger Personalausweis oder Reisepass',
    'Biometrisches Passfoto',
    'Bei Minderjährigen: Einverständniserklärung der Erziehungsberechtigten'
  ];

  const voraussetzungen = [
    'Mindestalter 15 Jahre',
    'Bescheinigung über Teilnahme am Mofa-Kurs (mindestens 6 Doppelstunden Theorie)',
    'Praktische Übungsfahrten (keine festgelegte Anzahl)',
    'Theoretische Prüfung (keine praktische Prüfung erforderlich)',
    'Keine ärztliche Untersuchung notwendig',
    'Kein Sehtest erforderlich'
  ];

  const erlaubnis = [
    'Einspurige Fahrräder mit Hilfsmotor',
    'Maximal 25 km/h bauartbedingte Höchstgeschwindigkeit',
    'Höchstens 50 ccm Hubraum bei Verbrennungsmotor',
    'Elektromotor mit maximal 0,5 kW Leistung',
    'Ein Sitzplatz (Fahrer)'
  ];

  const ablauf = [
    {
      title: 'Anmeldung',
      description: 'Melde dich bei uns an und bringe die erforderlichen Unterlagen mit.'
    },
    {
      title: 'Theorieunterricht',
      description: 'Mindestens 6 Doppelstunden à 90 Minuten mit allen wichtigen Verkehrsregeln.'
    },
    {
      title: 'Praktische Übungen',
      description: 'Fahrstunden im realen Verkehr, um sicheres Fahren zu lernen.'
    },
    {
      title: 'Theorieprüfung',
      description: '20 Fragen am Computer, davon müssen mindestens 17 richtig beantwortet werden.'
    },
    {
      title: 'Prüfbescheinigung',
      description: 'Nach bestandener Theorieprüfung erhältst du deine Mofaprüfbescheinigung.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#93C5FD] to-[#60A5FA] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bike className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Mofaprüfbescheinigung</h1>
            <p className="text-xl text-blue-100">
              Der ideale Einstieg in die Mobilität: Fahre mit 15 Jahren Mofa bis 25 km/h.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Der perfekte Start ins mobile Leben</h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  Die Mofaprüfbescheinigung ist kein vollwertiger Führerschein, sondern eine spezielle Fahrerlaubnis für Mofas bis 25 km/h. Sie ist der ideale Einstieg für Jugendliche ab 15 Jahren.
                </p>
                <p className="text-lg text-[#6B7280]">
                  Mit einer einfachen theoretischen Prüfung und ein paar praktischen Übungsstunden bist du schnell startklar. Die Ausbildung ist unkompliziert und günstig.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#BFDBFE] to-[#93C5FD] rounded-2xl h-80 flex items-center justify-center">
                <Bike className="w-32 h-32 text-white" />
              </div>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  ab 15 Jahren
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Was darfst du mit der Mofaprüfbescheinigung fahren?</h2>
              <ul className="space-y-3">
                {erlaubnis.map((punkt, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937]">{punkt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Voraussetzungen & Ablauf</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-6">Diese Voraussetzungen musst du erfüllen:</h3>
              <ul className="space-y-4">
                {voraussetzungen.map((voraussetzung, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937]">{voraussetzung}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">So läuft die Ausbildung ab:</h3>
              {ablauf.map((schritt, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{schritt.title}</h4>
                      <p className="text-[#6B7280]">{schritt.description}</p>
                    </div>
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
            <div className="flex items-center gap-4 mb-8">
              <FileCheck className="w-10 h-10 text-[#2563EB]" />
              <h2 className="text-3xl font-bold">Benötigte Unterlagen</h2>
            </div>
            <div className="bg-[#EFF6FF] rounded-xl p-8">
              <p className="text-lg text-[#6B7280] mb-6">
                Für die Anmeldung zur Mofaprüfbescheinigung benötigst du nur wenige Unterlagen:
              </p>
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
              <div className="mt-6 p-4 bg-white rounded-lg border-2 border-[#2563EB]">
                <p className="text-[#0B1220] font-semibold">
                  Wichtig: Für die Mofaprüfbescheinigung ist kein Sehtest und keine ärztliche Untersuchung erforderlich!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#93C5FD] to-[#60A5FA] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für dein erstes Mofa?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Die Mofaprüfbescheinigung ist schnell gemacht und der perfekte Einstieg in die mobile Freiheit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Jetzt anmelden
            </button>
            <button onClick={() => onNavigate('/kontakt')} className="btn-outline border-white text-white hover:bg-white/10">
              Beratung anfragen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
