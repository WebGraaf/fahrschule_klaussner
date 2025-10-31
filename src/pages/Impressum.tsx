import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';

const Impressum: React.FC = () => {
  useEffect(() => {
    document.title = 'Impressum - Fahrschule Axel Klaussner';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Rechtliche Informationen und Impressum der Fahrschule Axel Klaussner. Kontaktdaten und Haftungsausschluss.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Rechtliche Informationen und Impressum der Fahrschule Axel Klaussner. Kontaktdaten und Haftungsausschluss.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-page-bg">
      <Section background="card-bg" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-text-heading mb-8">Impressum</h1>

            <div className="space-y-8 text-text-body">
              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="mb-2">Fahrschule Axel Klaussner</p>
                <p className="mb-2">Kleistweg 30</p>
                <p className="mb-2">51545 Waldbröl</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Vertreten durch
                </h2>
                <p>Inhaber: Axel Klaussner</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Kontakt
                </h2>
                <p className="mb-2">Telefon: 02291 900474</p>
                <p className="mb-2">Mobil: 0171 2835092</p>
                <p className="mb-2">E-Mail: Klaussner-Waldbroel@t-online.de</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Steuernummer
                </h2>
                <p>212/5117/1393</p>
              </div>



              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="mb-2">Axel Klaussner</p>
                <p className="mb-2">Kleistweg 30</p>
                <p>51545 Waldbröl</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-text-heading mb-3">
                  Haftungsausschluss
                </h2>

                <p className="leading-relaxed">
                  Haftungsausschluss: Für Inhalte, Links, Urheberrechte; Datenschutz gemäß DSGVO.
                </p>
              </div>

              <div className="pt-8 border-t border-border-divider">
                <p className="text-sm text-text-muted">
                  Stand: Oktober 2025
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Impressum;
