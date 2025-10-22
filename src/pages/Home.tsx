import { Car, Users, FileText, RefreshCw, Award, MessageSquare, GraduationCap, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: GraduationCap,
      title: 'Begleitung zum Führerschein',
      description: 'Von der ersten Fahrstunde bis zur bestandenen Prüfung begleiten wir dich mit Geduld und Kompetenz.'
    },
    {
      icon: Award,
      title: 'Seminare & Aufbaukurse',
      description: 'Punkteabbau-Seminare und Auffrischungskurse für sicheres Fahren in jeder Situation.'
    },
    {
      icon: FileText,
      title: 'StVO-Neuerungen',
      description: 'Wir informieren dich über aktuelle Änderungen der Straßenverkehrsordnung und wichtige Neuerungen.'
    },
    {
      icon: RefreshCw,
      title: 'Auffrischungsfahrten',
      description: 'Seniorentraining und Wiedereinsteiger-Kurse für mehr Sicherheit im Straßenverkehr.'
    },
    {
      icon: Users,
      title: 'Wiedererteilung & MPU-Coach',
      description: 'Unterstützung bei der Wiedererteilung der Fahrerlaubnis und professionelles MPU-Coaching.'
    },
    {
      icon: MessageSquare,
      title: 'Beratung rund um den Führerschein',
      description: 'Alle Fragen zu Führerscheinklassen, BF17 und besonderen Anforderungen beantworten wir gern.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Beratung',
      description: 'Wir besprechen deine Ziele und die passende Führerscheinklasse.'
    },
    {
      number: 2,
      title: 'Anmeldung',
      description: 'Einfache Anmeldung online oder persönlich bei uns.'
    },
    {
      number: 3,
      title: 'Theorie & Praxis',
      description: 'Unterricht in modernen Räumen und Fahrstunden mit erfahrenen Fahrlehrern.'
    },
    {
      number: 4,
      title: 'Prüfung',
      description: 'Gut vorbereitet in die theoretische und praktische Prüfung.'
    }
  ];

  const faqs = [
    {
      question: 'Wie läuft die Anmeldung ab?',
      answer: 'Die Anmeldung ist ganz einfach: Du kannst dich online über unser Formular anmelden oder persönlich bei uns vorbeikommen. Wir besprechen dann gemeinsam alle Details, klären deine Fragen und legen den Starttermin fest.'
    },
    {
      question: 'Welche Unterlagen benötige ich?',
      answer: 'Für die Anmeldung brauchst du: einen gültigen Personalausweis oder Reisepass, ein biometrisches Passfoto, einen Sehtest (nicht älter als 2 Jahre) und eine Bescheinigung über einen Erste-Hilfe-Kurs.'
    },
    {
      question: 'Wann finden die Theoriestunden statt?',
      answer: 'In Waldbröl findet der Theorieunterricht dienstags und donnerstags von 18:30 bis 20:00 Uhr statt. In Nümbrecht montags und mittwochs zur gleichen Zeit. Du kannst flexibel an beiden Standorten teilnehmen.'
    },
    {
      question: 'Kann ich auch als Wiedereinsteiger Fahrstunden nehmen?',
      answer: 'Selbstverständlich! Wir bieten spezielle Auffrischungsfahrten für Wiedereinsteiger und Senioren an. Dabei gehen wir individuell auf deine Bedürfnisse ein und helfen dir, wieder Sicherheit im Straßenverkehr zu gewinnen.'
    },
    {
      question: 'Was ist das Besondere an BF17?',
      answer: 'Beim Begleiteten Fahren ab 17 darfst du bereits mit 17 Jahren Auto fahren – allerdings nur mit eingetragenen Begleitpersonen. Das gibt dir mehr Fahrpraxis und erhöht die Sicherheit. Mit 18 fährst du dann selbstständig.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#2563EB] via-[#1E40AF] to-[#1D4ED8] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Sicher fahren lernen – mit persönlicher Betreuung in Waldbröl & Nümbrecht
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Von A bis L: Begleitung zum Führerschein, Seminare & Auffrischungskurse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
                Jetzt anmelden
              </button>
              <button onClick={() => onNavigate('/fuehrerscheine')} className="btn-outline border-white text-white hover:bg-white/10">
                Klassen entdecken
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Unsere Standorte</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#EFF6FF] rounded-xl p-8 border-2 border-[#BFDBFE]">
              <div className="w-full h-48 bg-gradient-to-br from-[#BFDBFE] to-[#93C5FD] rounded-lg mb-6 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Waldbröl</h3>
              <p className="text-lg mb-2">Hochstrasse 7</p>
              <div className="flex items-center gap-2 text-[#6B7280]">
                <Clock className="w-5 h-5" />
                <span>Unterricht: Di & Do 18:30–20:00</span>
              </div>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl p-8 border-2 border-[#BFDBFE]">
              <div className="w-full h-48 bg-gradient-to-br from-[#93C5FD] to-[#60A5FA] rounded-lg mb-6 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nümbrecht</h3>
              <p className="text-lg mb-2">am Dorfplatz</p>
              <div className="flex items-center gap-2 text-[#6B7280]">
                <Clock className="w-5 h-5" />
                <span>Unterricht: Mo & Mi 18:30–20:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unsere Services</h2>
          <p className="text-center text-lg text-[#6B7280] mb-12 max-w-2xl mx-auto">
            Von der Führerscheinausbildung bis zur professionellen Weiterbildung – wir sind für dich da
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#6B7280]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dein Weg zum Führerschein</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#BFDBFE]"></div>
                  )}
                  <div className="relative bg-white">
                    <div className="w-16 h-16 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-center text-[#6B7280] text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EFF6FF]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Moderne Fahrzeuge für deine Ausbildung</h2>
              <p className="text-lg text-[#6B7280] mb-6">
                Lerne in gepflegten, technisch einwandfreien Fahrzeugen. Unsere Flotte umfasst moderne PKW, Motorräder und weitere Fahrzeuge für alle Führerscheinklassen.
              </p>
              <button onClick={() => onNavigate('/fahrzeuge')} className="btn-solid">
                Unsere Fahrzeuge ansehen
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#60A5FA] to-[#2563EB] rounded-2xl h-80 flex items-center justify-center">
              <Car className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="bg-gradient-to-br from-[#93C5FD] to-[#60A5FA] rounded-2xl h-80 flex items-center justify-center order-2 lg:order-1">
              <Users className="w-32 h-32 text-white" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Erfahrenes Team mit Herz</h2>
              <p className="text-lg text-[#6B7280] mb-6">
                Unser Team besteht aus erfahrenen Fahrlehrern, die dich mit Geduld und fachlicher Kompetenz durch die Ausbildung begleiten. Bei uns stehst du im Mittelpunkt.
              </p>
              <button onClick={() => onNavigate('/ueber-uns')} className="btn-solid">
                Mehr über uns erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span className="text-2xl text-[#2563EB]">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-[#6B7280]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bereit durchzustarten?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Melde dich jetzt an und sichere dir deinen Platz in unserer nächsten Ausbildungsgruppe.
          </p>
          <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
            Jetzt Termin sichern
          </button>
        </div>
      </section>
    </div>
  );
}
