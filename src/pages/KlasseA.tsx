import { Car, CheckCircle2, FileCheck } from 'lucide-react';
import { useState } from 'react';

interface KlasseAProps {
  onNavigate: (path: string) => void;
}

export default function KlasseA({ onNavigate }: KlasseAProps) {
  const [activeTab, setActiveTab] = useState('b');

  const unterlagen = [
    'Gültiger Personalausweis oder Reisepass',
    'Biometrisches Passfoto',
    'Sehtest (nicht älter als 2 Jahre)',
    'Bescheinigung Erste-Hilfe-Kurs',
    'Bei Minderjährigen: Einverständniserklärung der Erziehungsberechtigten'
  ];

  const faqs = [
    {
      question: 'Wie viele Fahrstunden brauche ich?',
      answer: 'Die Anzahl der Fahrstunden ist individuell und hängt von deinem Lernfortschritt ab. Gesetzlich vorgeschrieben sind mindestens 12 Sonderfahrten (5 Überland, 4 Autobahn, 3 Nacht).'
    },
    {
      question: 'Kann ich mit 17 schon alleine fahren?',
      answer: 'Nein, beim BF17 musst du bis zu deinem 18. Geburtstag mit einer eingetragenen Begleitperson fahren. Ab 18 darfst du dann selbstständig fahren.'
    },
    {
      question: 'Was kostet der Führerschein?',
      answer: 'Die Kosten setzen sich aus verschiedenen Posten zusammen: Grundgebühr, Fahrstunden, Lernmaterialien, Prüfungsgebühren und behördliche Kosten. Wir beraten dich gern persönlich zu den aktuellen Preisen.'
    }
  ];

  const tabs = {
    b: {
      title: 'Klasse B',
      age: 'ab 17 Jahren',
      description: 'Die Führerscheinklasse B ist die klassische PKW-Fahrerlaubnis und ermöglicht dir das Führen von Kraftwagen bis 3,5 Tonnen zulässiger Gesamtmasse mit bis zu 8 Sitzplätzen (außer Fahrersitz).',
      details: [
        'Kraftwagen bis 3,5 t zulässiger Gesamtmasse',
        'Bis zu 8 Sitzplätze (außer Fahrersitz)',
        'Anhänger bis 750 kg zG oder schwerer, wenn Kombination max. 3,5 t',
        'Berechtigt zum Führen von Fahrzeugen der Klassen AM und L',
        'Mit Schlüsselzahl 96: Anhänger über 750 kg, wenn Kombination zwischen 3,5 t und 4,25 t'
      ]
    },
    be: {
      title: 'Klasse BE',
      age: 'ab 17 Jahren',
      description: 'Die Klasse BE erweitert deinen B-Führerschein um schwerere Anhänger. Perfekt für Wohnwagen, Pferdeanhänger oder große Transportanhänger.',
      details: [
        'Fahrzeugkombination aus Klasse B plus Anhänger',
        'Anhänger über 750 kg bis 3,5 t zulässiger Gesamtmasse',
        'Gesamtzug kann mehr als 4.250 kg wiegen',
        'Keine theoretische Prüfung erforderlich',
        'Fahrerschulung mit anschließender praktischer Prüfung'
      ]
    },
    bf17: {
      title: 'BF17 – Begleitetes Fahren',
      age: 'ab 17 Jahren',
      description: 'Mit BF17 kannst du bereits mit 17 Jahren fahren – in Begleitung erfahrener Personen. Das gibt dir mehr Praxis und erhöht die Verkehrssicherheit erheblich.',
      details: [
        'Fahrerlaubnis ab 17 Jahren',
        'Fahren nur mit eingetragener Begleitperson',
        'Begleitperson muss mindestens 30 Jahre alt sein',
        'Begleitperson: mindestens 5 Jahre ununterbrochen im Besitz der Klasse B',
        'Begleitperson: maximal 1 Punkt in Flensburg',
        'Mit 18 automatisch unbeschränkte Fahrerlaubnis',
        'Statistisch weniger Unfälle durch mehr Fahrpraxis'
      ]
    }
  };

  const currentTab = tabs[activeTab as keyof typeof tabs];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Klasse A – PKW & Anhänger</h1>
            <p className="text-xl text-blue-100">
              Dein Weg zur Mobilität: Führerscheinklasse B für PKW, BE für Anhänger und BF17 für begleitetes Fahren ab 17.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('b')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'b'
                    ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:text-[#2563EB]'
                }`}
              >
                Klasse B
              </button>
              <button
                onClick={() => setActiveTab('be')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'be'
                    ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:text-[#2563EB]'
                }`}
              >
                Klasse BE
              </button>
              <button
                onClick={() => setActiveTab('bf17')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'bf17'
                    ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:text-[#2563EB]'
                }`}
              >
                BF17
              </button>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {currentTab.age}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">{currentTab.title}</h2>
              <p className="text-lg text-[#6B7280] mb-6">{currentTab.description}</p>
              <ul className="space-y-3">
                {currentTab.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937]">{detail}</span>
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
              <p className="text-lg text-[#6B7280] mb-6">
                Für deine Anmeldung zum Führerschein benötigst du folgende Unterlagen:
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Häufige Fragen</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#EFF6FF] rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3 text-[#0B1220]">{faq.question}</h3>
                  <p className="text-[#6B7280]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für deinen Führerschein?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Melde dich jetzt an und starte deine Ausbildung zum Führerschein Klasse B, BE oder BF17.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Zur Online-Anmeldung
            </button>
            <button onClick={() => onNavigate('/kontakt')} className="btn-outline border-white text-white hover:bg-white/10">
              Persönlich beraten lassen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
