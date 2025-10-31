import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenUebersicht } from '../components/KlassenUebersicht';

const Fuehrerscheine: React.FC = () => {
  const tabs = [
    {
      label: 'Klasse B',
      title: 'Klasse B - Personenkraftwagen',
      content: 'Die Klasse B ist die am häufigsten nachgefragte Führerscheinklasse. Sie berechtigt zum Führen von Personenkraftwagen bis 3,5 Tonnen.',
      link: '/klasse-b',
      subclasses: [
        { code: 'B', description: 'ab 17 Jahre' },
        { code: 'BE', description: 'ab 17 Jahre' }
      ]
    },
    {
      label: 'Klasse A',
      title: 'Klasse A - Motorräder',
      content: 'Die Klasse A berechtigt zum Führen von Krafträdern aller Art ohne Leistungs- oder Hubraumbegrenzung.',
      link: '/klasse-a',
      subclasses: [
        { code: 'A', description: 'offen über 48 PS ab 24 Jahren' },
        { code: 'A2', description: 'bis 48 PS ab 18 Jahren' },
        { code: 'A1', description: '125ccm ab 16 Jahren' }
      ]
    },
    {
      label: 'Klasse L',
      title: 'Klasse L - Traktoren',
      content: 'Die Klasse L berechtigt zum Führen von Traktoren bis 25 km/h.',
      link: '/klasse-l',
      subclasses: [
        { code: 'L', description: 'ab 16 Jahre' }
      ]
    }
  ];

  useEffect(() => {
    document.title = 'Führerscheine Übersicht - Alle Führerscheinklassen';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Übersicht aller verfügbaren Führerscheinklassen bei unserer Fahrschule. Von Klasse B bis Klasse A - finde die passende Ausbildung für dich.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Übersicht aller verfügbaren Führerscheinklassen bei unserer Fahrschule. Von Klasse B bis Klasse A - finde die passende Ausbildung für dich.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <KlassenUebersicht tabs={tabs} />
    </div>
  );
};

export default Fuehrerscheine;