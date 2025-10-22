import { Car, Bike, Tractor } from 'lucide-react';

interface FahrzeugeProps {
  onNavigate: (path: string) => void;
}

export default function Fahrzeuge({ onNavigate }: FahrzeugeProps) {
  const fahrzeuge = [
    {
      kategorie: 'PKW',
      icon: Car,
      color: 'from-[#2563EB] to-[#1E40AF]',
      beschreibung: 'Unsere modernen PKW sind perfekt für die Ausbildung der Klassen B, BE und BF17.',
      details: [
        'Neueste Modelle mit aktueller Sicherheitstechnik',
        'Komfortable Automatik- und Schaltgetriebe',
        'Übersichtliche Bedienung für entspanntes Lernen',
        'Regelmäßig gewartet und TÜV-geprüft',
        'Klimaanlage für angenehmes Fahren zu jeder Jahreszeit'
      ]
    },
    {
      kategorie: 'Motorräder',
      icon: Bike,
      color: 'from-[#1E40AF] to-[#1D4ED8]',
      beschreibung: 'Verschiedene Motorräder für die Klassen A, A2 und A1 – vom Leichtkraftrad bis zur offenen Klasse.',
      details: [
        'Unterschiedliche Leistungsklassen für jede Ausbildungsstufe',
        'Zuverlässige und gut gepflegte Maschinen',
        'Verschiedene Bauarten für individuelle Vorlieben',
        'ABS und moderne Sicherheitssysteme',
        'Regelmäßige Inspektionen für maximale Sicherheit'
      ]
    },
    {
      kategorie: 'Roller',
      icon: Bike,
      color: 'from-[#60A5FA] to-[#2563EB]',
      beschreibung: 'Wendige Roller für die Klasse M und Mofaprüfbescheinigung – ideal für den Einstieg.',
      details: [
        'Leicht zu handhabende 50-ccm-Roller',
        'Perfekt für Stadt und kurze Strecken',
        'Einsteigerfreundlich und übersichtlich',
        'Moderne Technik für sicheres Fahren',
        'Sparsam im Verbrauch'
      ]
    },
    {
      kategorie: 'Traktoren',
      icon: Tractor,
      color: 'from-[#1D4ED8] to-[#1E3A8A]',
      beschreibung: 'Landwirtschaftliche Zugmaschinen für die Klasse L – praxisnah und realitätsnah.',
      details: [
        'Traktor für land- und forstwirtschaftliche Ausbildung',
        'Praxisnahe Schulung an realen Maschinen',
        'Verschiedene Anhänger für umfassende Ausbildung',
        'Sicherheitsausstattung auf neuestem Stand',
        'Vertraut machen mit Arbeitsgeräten'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Unsere Fahrzeuge</h1>
            <p className="text-xl text-blue-100">
              Verschiedene Fahrzeuge für deine Ausbildung – passend zu jeder Klasse. Modern, sicher und bestens gewartet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-[#6B7280] text-center">
              Bei der Fahrschule Klaussner lernst du in modernen, technisch einwandfreien Fahrzeugen. Alle unsere Fahrzeuge werden regelmäßig gewartet und erfüllen höchste Sicherheitsstandards. So kannst du dich voll und ganz auf deine Ausbildung konzentrieren.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {fahrzeuge.map((fahrzeug, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`bg-gradient-to-br ${fahrzeug.color} p-12 flex items-center justify-center order-2 lg:order-1`}>
                    <fahrzeug.icon className="w-48 h-48 text-white" />
                  </div>
                  <div className="p-8 lg:p-12 order-1 lg:order-2">
                    <h2 className="text-3xl font-bold mb-4">{fahrzeug.kategorie}</h2>
                    <p className="text-lg text-[#6B7280] mb-6">{fahrzeug.beschreibung}</p>
                    <ul className="space-y-3">
                      {fahrzeug.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#1F2937]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sicherheit hat Priorität</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-[#6B7280] mb-6">
                Die Sicherheit unserer Fahrschüler steht bei uns an erster Stelle. Deshalb achten wir besonders auf:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#EFF6FF] rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-[#0B1220]">Regelmäßige Wartung</h3>
                  <p className="text-[#6B7280]">
                    Alle Fahrzeuge werden in kurzen Intervallen gewartet und durchlaufen regelmäßige TÜV-Prüfungen.
                  </p>
                </div>
                <div className="bg-[#EFF6FF] rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-[#0B1220]">Moderne Sicherheitstechnik</h3>
                  <p className="text-[#6B7280]">
                    ABS, ESP und weitere Assistenzsysteme sorgen für maximale Sicherheit während deiner Ausbildung.
                  </p>
                </div>
                <div className="bg-[#EFF6FF] rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-[#0B1220]">Optimale Sicht</h3>
                  <p className="text-[#6B7280]">
                    Alle Fahrzeuge bieten eine gute Rundumsicht, damit du den Verkehr jederzeit im Blick hast.
                  </p>
                </div>
                <div className="bg-[#EFF6FF] rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3 text-[#0B1220]">Alltagstaugliche Modelle</h3>
                  <p className="text-[#6B7280]">
                    Du lernst in Fahrzeugen, die du auch später im Alltag fahren wirst – realitätsnah und praxisorientiert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das richtige Fahrzeug für deine Klasse</h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Egal ob PKW, Motorrad, Roller oder Traktor – wir haben das passende Fahrzeug für deine Führerscheinausbildung. Informiere dich über unsere Führerscheinklassen und finde heraus, welches Fahrzeug zu dir passt.
            </p>
            <button onClick={() => onNavigate('/fuehrerscheine')} className="btn-solid">
              Führerscheinklassen entdecken
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für deine erste Fahrstunde?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Melde dich jetzt an und lerne in modernen, sicheren Fahrzeugen. Wir freuen uns auf dich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Jetzt anmelden
            </button>
            <button onClick={() => onNavigate('/kontakt')} className="btn-outline border-white text-white hover:bg-white/10">
              Beratung vereinbaren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
