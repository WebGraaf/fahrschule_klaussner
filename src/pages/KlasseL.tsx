import { Tractor, CheckCircle2, FileCheck } from 'lucide-react';

interface KlasseLProps {
  onNavigate: (path: string) => void;
}

export default function KlasseL({ onNavigate }: KlasseLProps) {
  const unterlagen = [
    'Gültiger Personalausweis oder Reisepass',
    'Biometrisches Passfoto',
    'Sehtest (nicht älter als 2 Jahre)',
    'Bescheinigung Erste-Hilfe-Kurs',
    'Bei Minderjährigen: Einverständniserklärung der Erziehungsberechtigten'
  ];

  const erlaubnis = [
    'Zugmaschinen für land- und forstwirtschaftliche Zwecke',
    'Bauartbedingte Höchstgeschwindigkeit maximal 40 km/h (mit Anhänger max. 25 km/h)',
    'Selbstfahrende Arbeitsmaschinen, Stapler und andere Flurförderzeuge bis 25 km/h',
    'Einachsige Zugmaschinen in Verbindung mit einachsigem Anhänger',
    'Alle Anhänger für land- und forstwirtschaftliche Zwecke'
  ];

  const zielgruppen = [
    {
      title: 'Landwirtschaft',
      description: 'Für Jugendliche aus landwirtschaftlichen Betrieben, die im Familienbetrieb mithelfen und selbstständig Traktoren fahren möchten.'
    },
    {
      title: 'Forstwirtschaft',
      description: 'Für angehende Forstwirte und Personen, die in der Holzwirtschaft tätig werden möchten.'
    },
    {
      title: 'Gartenbau',
      description: 'Für Auszubildende und Mitarbeiter in Gärtnereien, die Zugmaschinen und Arbeitsgeräte bedienen müssen.'
    },
    {
      title: 'Kommunale Betriebe',
      description: 'Für Mitarbeiter in Bauhöfen und kommunalen Einrichtungen, die entsprechende Fahrzeuge führen.'
    }
  ];

  const sicherheit = [
    'Vorsicht bei Straßenfahrten – Traktoren sind langsam und können den Verkehr behindern',
    'Immer auf gute Sichtbarkeit achten (Beleuchtung, Warntafeln)',
    'Anhänger richtig sichern und beladen',
    'Geschwindigkeit den Straßen- und Sichtverhältnissen anpassen',
    'Bei Kurvenfahrten das Kipprisiko beachten',
    'Schutzausrüstung tragen (festes Schuhwerk, ggf. Gehörschutz)'
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tractor className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Klasse L – Traktoren</h1>
            <p className="text-xl text-blue-100">
              Führerschein für land- und forstwirtschaftliche Zugmaschinen bis 40 km/h ab 16 Jahren.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="bg-gradient-to-br from-[#60A5FA] to-[#1D4ED8] rounded-2xl h-80 flex items-center justify-center">
                <Tractor className="w-32 h-32 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Der Führerschein für Land- und Forstwirtschaft</h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  Die Führerscheinklasse L ist speziell für Jugendliche ab 16 Jahren gedacht, die in der Land- und Forstwirtschaft tätig sind oder mithelfen. Mit dieser Klasse darfst du Traktoren und andere landwirtschaftliche Zugmaschinen fahren.
                </p>
                <p className="text-lg text-[#6B7280]">
                  Ideal für alle, die im Familienbetrieb, in der Ausbildung oder als Saisonkraft im landwirtschaftlichen Bereich arbeiten.
                </p>
              </div>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  ab 16 Jahren
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Was darfst du mit Klasse L fahren?</h2>
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
            <h2 className="text-3xl font-bold mb-8">Für wen ist die Klasse L geeignet?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {zielgruppen.map((gruppe, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#0B1220]">{gruppe.title}</h3>
                  <p className="text-[#6B7280]">{gruppe.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Sicherheit im Umgang mit Traktoren</h2>
            <div className="bg-[#EFF6FF] rounded-xl p-8">
              <p className="text-lg text-[#6B7280] mb-6">
                Traktoren sind besondere Fahrzeuge mit eigenen Herausforderungen. Wir legen großen Wert darauf, dass du sicher und verantwortungsvoll damit umgehen kannst:
              </p>
              <ul className="space-y-4">
                {sicherheit.map((tipp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937]">{tipp}</span>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#EFF6FF] rounded-xl p-8 border-2 border-[#2563EB]">
              <h3 className="text-2xl font-bold mb-4">Gut zu wissen</h3>
              <div className="space-y-4 text-[#1F2937]">
                <p>
                  <strong>Theorieunterricht:</strong> Du benötigst 12 Doppelstunden Grundstoff und 2 Doppelstunden klassenspezifischen Unterricht.
                </p>
                <p>
                  <strong>Prüfungen:</strong> Es gibt eine theoretische Prüfung. Eine praktische Prüfung ist bei der Klasse L nicht vorgeschrieben, kann aber je nach individueller Eignung erforderlich sein.
                </p>
                <p>
                  <strong>Gültigkeit:</strong> Der Führerschein Klasse L gilt unbefristet und muss nicht verlängert werden.
                </p>
                <p>
                  <strong>Erweiterung:</strong> Mit Klasse B oder T sind die Berechtigungen der Klasse L automatisch enthalten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für deinen Traktor-Führerschein?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ob im Familienbetrieb oder in der Ausbildung – mit der Klasse L bist du bestens gerüstet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/kontakt')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Beratung vereinbaren
            </button>
            <button onClick={() => onNavigate('/anmelden')} className="btn-outline border-white text-white hover:bg-white/10">
              Jetzt anmelden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
