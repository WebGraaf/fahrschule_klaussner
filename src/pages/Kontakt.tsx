import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { Kontaktinformationen } from '../components/Kontaktinformationen';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LogoDefault from '../default_images/logo_default.webp';

const BannerAnmeldenCopy: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="bg-card-bg rounded-2xl p-8 md:p-12 text-card-fg border border-card-border shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 lg:w-7/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                Bereit für deinen Führerschein?
              </h2>
              <p className="text-lg text-text-body mb-8">
                Starte jetzt deine Fahrschulausbildung bei uns. Professionelle Ausbildung, flexible Termine und erfahrene Fahrlehrer. Wir warten auf dich!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/anmelden"
                  className="px-8 py-4 bg-btn-solid-bg text-btn-solid-fg rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Jetzt Anmelden
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 lg:w-3/10 flex justify-center">
              <img
                src={LogoDefault}
                alt="Logo"
                className="max-w-full h-auto max-h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Kontakt: React.FC = () => {
  useEffect(() => {
    document.title = 'Kontakt - Fahrschule DriveAcademy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kontaktiere uns! Finde unsere Standorte, Telefonnummern und Öffnungszeiten. Wir helfen dir gerne bei Fragen zu deiner Fahrschulausbildung.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Kontaktiere uns! Finde unsere Standorte, Telefonnummern und Öffnungszeiten. Wir helfen dir gerne bei Fragen zu deiner Fahrschulausbildung.';
      document.head.appendChild(meta);
    }
  }, []);

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Section background="card-bg" padding="sm">
        <Container>
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="text-center max-w-3xl mx-auto"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
              Kontaktiere uns
            </h1>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Wir sind für dich da! Egal ob du Fragen zur Anmeldung hast, Informationen zu unseren Kursen benötigst oder einen Termin vereinbaren möchtest - melde dich gerne bei uns.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Unser freundliches Team hilft dir gerne weiter und beantwortet alle deine Fragen rund um deinen Führerschein.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <Kontaktinformationen />
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <StandorteUebersicht
            locations={[
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
            ]}
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <BannerAnmeldenCopy />
        </Container>
      </Section>
    </div>
  );
};

export default Kontakt;
