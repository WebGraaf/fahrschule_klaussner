import { Bike, CheckCircle2, Shield, FileCheck } from 'lucide-react';
import { useState } from 'react';

interface KlasseBProps {
  onNavigate: (path: string) => void;
}

export default function KlasseB({ onNavigate }: KlasseBProps) {
  const [activeTab, setActiveTab] = useState('a');

  const unterlagen = [
    'Gültiger Personalausweis oder Reisepass',
    'Biometrisches Passfoto',
    'Sehtest (nicht älter als 2 Jahre)',
    'Bescheinigung Erste-Hilfe-Kurs',
    'Bei Minderjährigen: Einverständniserklärung der Erziehungsberechtigten'
  ];

  const sicherheitstipps = [
    'Hochwertige Schutzkleidung mit Protektoren ist Pflicht',
    'Helm nach ECE-Norm 22.05 oder 22.06',
    'Motorradjacke und -hose mit Rücken-, Schulter-, Ellbogen- und Knieprotektoren',
    'Motorradhandschuhe mit Knöchelschutz',
    'Motorradstiefel mit festem Knöchelschutz',
    'Bei schlechtem Wetter: Regenkombi über der Schutzkleidung'
  ];

  const faqs = [
    {
      question: 'Kann ich direkt mit Klasse A offen starten?',
      answer: 'Ja, wenn du mindestens 24 Jahre alt bist, kannst du direkt die offene Klasse A machen und damit alle Motorräder fahren, unabhängig von der Leistung.'
    },
    {
      question: 'Was ist der Unterschied zwischen A2 und A1?',
      answer: 'A1 ist für Leichtkrafträder bis 125 ccm und 15 PS (ab 16 Jahren). A2 erlaubt Motorräder bis 48 PS und ist ab 18 Jahren möglich. Nach 2 Jahren A2 kannst du mit einer praktischen Prüfung auf A offen aufsteigen.'
    },
    {
      question: 'Muss ich eigene Schutzkleidung kaufen?',
      answer: 'Für die Fahrstunden benötigst du komplette Motorradschutzkleidung. Wir beraten dich gern beim Kauf und geben Tipps für gute Ausrüstung.'
    }
  ];

  const tabs = {
    a: {
      title: 'Klasse A offen',
      age: 'ab 24 Jahren',
      description: 'Die offene Klasse A berechtigt zum Führen aller Motorräder ohne Leistungsbeschränkung. Direkteinstieg ab 24 Jahren möglich.',
      details: [
        'Motorräder und Krafträder ohne Leistungsbeschränkung',
        'Hubraum und Leistung unbegrenzt',
        'Direkteinstieg ab 24 Jahren (oder ab 20 nach 2 Jahren A2)',
        'Dreirädrige Kraftfahrzeuge über 15 kW',
        'Berechtigt zum Führen von Fahrzeugen der Klassen A2, A1 und AM'
      ]
    },
    a2: {
      title: 'Klasse A2',
      age: 'ab 18 Jahren',
      description: 'Die Klasse A2 ist der ideale Einstieg in die Welt der Motorräder mit Fahrzeugen bis 48 PS.',
      details: [
        'Motorräder bis 35 kW (48 PS)',
        'Leistungsgewicht max. 0,2 kW/kg',
        'Ab 18 Jahren möglich',
        'Nach 2 Jahren Aufstieg zu Klasse A durch praktische Prüfung',
        'Berechtigt zum Führen von Fahrzeugen der Klassen A1 und AM',
        'Große Auswahl an sportlichen und tourentauglichen Motorrädern'
      ]
    },
    a1: {
      title: 'Klasse A1',
      age: 'ab 16 Jahren',
      description: 'Die Klasse A1 ermöglicht bereits Jugendlichen ab 16 Jahren den Einstieg ins Motorradfahren mit Leichtkrafträdern.',
      details: [
        'Leichtkrafträder bis 125 ccm',
        'Maximal 11 kW (15 PS)',
        'Leistungsgewicht max. 0,1 kW/kg',
        'Ab 16 Jahren möglich',
        'Berechtigt zum Führen von Fahrzeugen der Klasse AM',
        'Perfekt für Stadt und kurze Überlandfahrten',
        'Niedrige Unterhaltskosten'
      ]
    }
  };

  const currentTab = tabs[activeTab as keyof typeof tabs];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bike className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Klasse B – Motorräder</h1>
            <p className="text-xl text-blue-100">
              Freiheit auf zwei Rädern: Führerscheinklassen für Motorräder von A1 bis A offen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('a')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'a'
                    ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:text-[#2563EB]'
                }`}
              >
                A offen
              </button>
              <button
                onClick={() => setActiveTab('a2')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'a2'
                    ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:text-[#2563EB]'
                }`}
              >
                A2
              </button>
              <button
                onClick={() => setActiveTab('a1')}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === 'a1'
                    ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                    : 'text-[#6B7280] hover:text-[#2563EB]'
                }`}
              >
                A1
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
              <Shield className="w-10 h-10 text-[#2563EB]" />
              <h2 className="text-3xl font-bold">Sicherheit steht an erster Stelle</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <p className="text-lg text-[#6B7280] mb-6">
                Beim Motorradfahren ist die richtige Schutzausrüstung lebenswichtig. Wir legen großen Wert auf deine Sicherheit:
              </p>
              <ul className="space-y-4">
                {sicherheitstipps.map((tipp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937]">{tipp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#EFF6FF] rounded-xl p-6 border-2 border-[#2563EB]">
              <p className="text-[#0B1220] font-semibold">
                Wichtig: Für die praktische Ausbildung benötigst du eigene, vollständige Motorradschutzkleidung. Wir beraten dich gern beim Kauf!
              </p>
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Häufige Fragen</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 text-[#0B1220]">{faq.question}</h3>
                  <p className="text-[#6B7280]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1E40AF] to-[#1D4ED8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit für dein Motorrad-Abenteuer?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Starte jetzt deine Motorradausbildung und erlebe die Freiheit auf zwei Rädern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/kontakt')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Jetzt informieren
            </button>
            <button onClick={() => onNavigate('/anmelden')} className="btn-outline border-white text-white hover:bg-white/10">
              Online anmelden
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
