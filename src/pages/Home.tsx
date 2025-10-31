import React from 'react';
import { HeroStartseite } from '../components/HeroStartseite';
import { TextGalerieStapel } from '../components/TextGalerieStapel';
import { KlassenUebersichtGridSpotlight } from '../components/KlassenUebersichtGridSpotlight';
import VorherNacherBildVergleich from '../components/VorherNacherBildVergleich';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import BannerAnmelden from '../components/BannerAnmelden';
import BannerMitIcons from '../components/BannerMitIcons';
import { SplitMediaText } from '../components/SplitMediaText';
import { SplitMediaTextInvert } from '../components/SplitMediaTextInvert';
import { FAQ } from '../components/FAQ';
import { UserCheck, BookOpen, FileText, RefreshCw, MessageSquare, HelpCircle } from 'lucide-react';

const Home: React.FC = () => {
  // Daten für TextGalerieStapel
  const galleryImages = [
    {
      src: '/kunde_bilder_download/Motorrad_Axel.webp',
      alt: 'Motorrad von Axel'
    },
    {
      src: '/kunde_bilder_download/Auto_rot.webp',
      alt: 'Rotes Auto'
    },
    {
      src: '/kunde_bilder_download/Auto1.webp',
      alt: 'Auto 1'
    },
    {
      src: '/kunde_bilder_download/Auto2.webp',
      alt: 'Auto 2'
    },
    {
      src: '/kunde_bilder_download/Axel Klaussner.webp',
      alt: 'Axel Klaussner'
    }
  ];

  // Daten für StandorteUebersicht
  const locations = [
    {
      label: 'Hauptstandort Waldbröl',
      address: 'Hochstrasse 7, 51545 Waldbröl',
      phone: '02291 900474',
      hours: 'Dienstags und Donnerstags: 18:30-20:00 Uhr'
    },
    {
      label: 'Standort Nümbrecht',
      address: 'Am Dorfplatz, Nümbrecht',
      phone: '02291 900474',
      hours: 'Montags und Mittwochs: 18:30-20:00 Uhr'
    }
  ];

  // Daten für BannerMitIcons
  const services = [
    {
      icon: <UserCheck className="w-8 h-8 text-primary-500" />,
      title: 'Begleitung',
      description: 'Begleitung auf dem Weg zum Führerschein'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: 'Seminare',
      description: 'Seminare / Aufbaukurse (Nachschulungen – Punkteabbau)'
    },
    {
      icon: <FileText className="w-8 h-8 text-primary-500" />,
      title: 'Informationen',
      description: 'Informationen über „Neues" aus der Straßenverkehrsordnung'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary-500" />,
      title: 'Auffrischung',
      description: 'Auffrischungsfahrten (Seniorentraining)'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary-500" />,
      title: 'MPU-Coach',
      description: 'Wiedererteilung der Fahrerlaubnis, MPU-Coach (Kommunikationstraining)'
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-primary-500" />,
      title: 'Fragen',
      description: 'Fragen rund um den Führerschein'
    }
  ];

  // Daten für FAQ
  const faqs = [
    {
      question: 'Wie melde ich mich für einen Führerscheinkurs an?',
      answer: 'Sie können sich ganz einfach online über unsere Website anmelden oder persönlich in einer unserer Filialen vorbeikommen.'
    },
    {
      question: 'Welche Voraussetzungen muss ich erfüllen?',
      answer: 'Sie müssen mindestens 17 Jahre alt sein und einen gültigen Personalausweis oder Reisepass vorlegen.'
    },
    {
      question: 'Wie lange dauert die Ausbildung?',
      answer: 'Die Dauer hängt von der Führerscheinklasse ab und variiert zwischen 2-6 Monaten, abhängig von Ihren Vorkenntnissen und der Verfügbarkeit von Fahrstunden.'
    },
    {
      question: 'Bieten Sie auch Intensivkurse an?',
      answer: 'Ja, wir bieten verschiedene Intensivkurse an, die Ihnen helfen, Ihren Führerschein schneller zu erhalten.'
    }
  ];

  return (
    <div>
      <HeroStartseite
        title="Wir machen dich Mobil"
        subtitle="Fahrschule Frank Klaussner"
        description="Erfahren Sie mehr über unsere Fahrschulausbildung in Waldbröl und Nümbrecht. Wir bieten umfassende und kompetente Beratung und bemühen uns, die Kosten so gering wie möglich zu halten."
        buttonText="Jetzt anmelden"
        buttonLink="/anmelden"
        logoSrc="/src/default_images/logo_default.webp"
        logoAlt="Fahrschule Logo"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <TextGalerieStapel
            title="Unsere Fahrschule"
            description="Erfahren Sie mehr über die Fahrschule Frank Klaussner mit Standorten in Waldbröl und Nümbrecht. Wir bieten eine moderne Fahrschulausbildung mit erfahrenen Fahrlehrern und legen Wert auf umfassende Beratung."
            images={galleryImages}
            imagePosition="left"
          />
        </div>
      </section>

      <KlassenUebersichtGridSpotlight />

      <VorherNacherBildVergleich
        title=""
        beforeImage="/kunde_bilder_download/Auto_rot.webp"
        afterImage="/kunde_bilder_download/Motorrad_Axel.webp"
        beforeLabel=""
        afterLabel=""
      />

      <StandorteUebersicht
        title="Unsere Standorte"
        subtitle="Finden Sie den nächstgelegenen Standort"
        locations={locations}
      />

      <BannerAnmelden />

      <BannerMitIcons items={services} />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaText
          imageSrc="/kunde_bilder_download/Auto2.webp"
          imageAlt="Fahrschule Ausbildung"
          title="Professionelle Fahrausbildung"
          description="Bei uns erhalten Sie eine erstklassige Fahrausbildung von zertifizierten Fahrlehrern. Wir legen Wert auf individuelle Betreuung und moderne Lehrmethoden, um Sie sicher auf die Straße zu bringen."
          imagePosition="left"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaTextInvert
          imageSrc="/kunde_bilder_download/auto1.webp"
          imageAlt="Moderner Fuhrpark"
          title="Topmoderner Fuhrpark"
          description="Unser Fahrzeugpark umfasst die neuesten Modelle verschiedener Automarken. Alle Fahrzeuge sind perfekt gewartet und erfüllen höchste Sicherheitsstandards für Ihre optimale Ausbildung."
          imagePosition="right"
        />
      </div>

      <FAQ
        title="Häufig gestellte Fragen"
        faqs={faqs}
      />

      <BannerAnmelden />
    </div>
  );
};

export default Home;
