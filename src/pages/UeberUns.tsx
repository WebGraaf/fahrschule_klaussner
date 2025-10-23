import { Users, Heart, Award, Target } from 'lucide-react';

interface UeberUnsProps {
  onNavigate: (path: string) => void;
}

export default function UeberUns({ onNavigate }: UeberUnsProps) {
  const team = [
    {
      name: 'Axel Klaussner',
      rolle: 'Fahrschulinhaber & Fahrlehrer',
      beschreibung: 'Mit über 25 Jahren Erfahrung leitet Axel die Fahrschule mit Leidenschaft und Kompetenz. Sein Fokus liegt auf individueller Förderung und einem respektvollen Umgang mit jedem Fahrschüler.'
    },
    {
      name: 'Ralf Wagener',
      rolle: 'Fahrlehrer',
      beschreibung: 'Ralf bringt viel Geduld und Humor in die Fahrstunden. Er versteht es, auch nervösen Fahrschülern die Angst zu nehmen und sie sicher durch die Ausbildung zu begleiten.'
    },
    {
      name: 'Petra Klaussner',
      rolle: 'Büro & Organisation',
      beschreibung: 'Petra ist die gute Seele im Hintergrund. Sie kümmert sich um Anmeldungen, Termine und steht bei allen organisatorischen Fragen mit Rat und Tat zur Seite.'
    },
    {
      name: 'Leon Kortwig',
      rolle: 'Fahrlehrer',
      beschreibung: 'Als jüngster im Team bringt Leon frischen Wind und moderne Lehrmethoden mit. Er hat ein offenes Ohr für alle Fragen und schafft eine lockere, aber konzentrierte Lernatmosphäre.'
    }
  ];

  const services = [
    'Begleitung zum Führerschein in allen Klassen von A bis L',
    'Seminare und Aufbaukurse für Punkteabbau und Verkehrssicherheit',
    'Aktuelle Informationen zu Neuerungen in der Straßenverkehrsordnung',
    'Auffrischungsfahrten und Seniorentraining für Wiedereinsteiger',
    'Unterstützung bei Wiedererteilung der Fahrerlaubnis',
    'MPU-Coaching mit professioneller Kommunikation und Vorbereitung',
    'Beratung zu allen Fragen rund um den Führerschein',
    'Begleitetes Fahren ab 17 (BF17) mit umfassender Betreuung'
  ];

  const werte = [
    {
      icon: Heart,
      title: 'Persönliche Betreuung',
      description: 'Jeder Fahrschüler ist einzigartig. Wir nehmen uns Zeit für dich und gehen individuell auf deine Bedürfnisse ein.'
    },
    {
      icon: Award,
      title: 'Kompetenz & Erfahrung',
      description: 'Unser Team verfügt über langjährige Erfahrung und bildet sich regelmäßig fort, um dir die beste Ausbildung zu bieten.'
    },
    {
      icon: Target,
      title: 'Faire Preise',
      description: 'Wir achten auf transparente und faire Kosten. Du weißt immer, wofür du bezahlst – ohne versteckte Gebühren.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Über uns</h1>
            <p className="text-xl text-blue-100">
              Persönliche Betreuung, faire Preise und kompetente Ausbildung – das ist die Fahrschule Klaussner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Deine Fahrschule im Oberbergischen</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[#6B7280] mb-6">
                Seit vielen Jahren sind wir deine zuverlässige Fahrschule in Waldbröl und Nümbrecht. Bei uns steht nicht nur das Bestehen der Führerscheinprüfung im Vordergrund, sondern vor allem deine Sicherheit im Straßenverkehr.
              </p>
              <p className="text-lg text-[#6B7280] mb-6">
                Wir legen großen Wert auf eine umfassende und kompetente Beratung. Dabei behalten wir die Kosten stets im Blick und sorgen für Transparenz – du sollst wissen, wofür du bezahlst und was du dafür bekommst.
              </p>
              <p className="text-lg text-[#6B7280]">
                Ob du deinen ersten Führerschein machst, eine neue Klasse erwerben möchtest oder nach längerer Pause wieder ins Fahren einsteigen willst – wir begleiten dich Schritt für Schritt und nehmen uns die Zeit, die du brauchst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {werte.map((wert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <wert.icon className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{wert.title}</h3>
                <p className="text-[#6B7280]">{wert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Users className="w-12 h-12 text-[#2563EB]" />
              <h2 className="text-3xl md:text-4xl font-bold">Unser Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((person, index) => (
                <div key={index} className="bg-[#EFF6FF] rounded-xl p-8">
                  <img src={`/images/${person.name}.jpg`} alt={person.name} className="w-40 h-40 rounded-full object-cover mb-6" />
                  <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                  <p className="text-[#2563EB] font-semibold mb-4">{person.rolle}</p>
                  <p className="text-[#6B7280]">{person.beschreibung}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Unsere Serviceangebote</h2>
            <p className="text-lg text-[#6B7280] text-center mb-12">
              Von der klassischen Führerscheinausbildung bis zur professionellen Weiterbildung – wir bieten dir umfassende Services rund ums Fahren:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[#1F2937]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Unsere Standorte</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#EFF6FF] rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Waldbröl</h3>
                <p className="text-[#6B7280] mb-4">
                  Unser Hauptstandort in Waldbröl an der Hochstrasse 7 bietet moderne Unterrichtsräume und eine entspannte Lernatmosphäre.
                </p>
                <p className="font-semibold text-[#0B1220]">Unterricht:</p>
                <p className="text-[#6B7280]">Dienstag & Donnerstag</p>
                <p className="text-[#6B7280] mb-4">18:30–20:00 Uhr</p>
              </div>

              <div className="bg-[#EFF6FF] rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Nümbrecht</h3>
                <p className="text-[#6B7280] mb-4">
                  In Nümbrecht am Dorfplatz sind wir ebenfalls für dich da. Beide Standorte kannst du flexibel für deinen Theorieunterricht nutzen.
                </p>
                <p className="font-semibold text-[#0B1220]">Unterricht:</p>
                <p className="text-[#6B7280]">Montag & Mittwoch</p>
                <p className="text-[#6B7280] mb-4">18:30–20:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Bereit durchzustarten?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Werde Teil der Fahrschule Klaussner und starte deine Ausbildung mit einem erfahrenen Team an deiner Seite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('/anmelden')} className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              Jetzt anmelden
            </button>
            <button onClick={() => onNavigate('/kontakt')} className="btn-outline border-white text-white hover:bg-white/10">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
