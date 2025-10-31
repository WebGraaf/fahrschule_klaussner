import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { TeamBilder } from '../components/TeamBilder';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LogoDefault from '../default_images/logo_default.webp';
import PlatzhalterGruppenbildTeam from '../default_images/Platzhalter_Gruppenbild_Team.webp';
import PlatzhalterFahrschule from '../default_images/Platzhalter_Fahrschule.webp';
import PlatzhalterTeammitglied from '../default_images/Platzhalter_Teammitglied.webp';

const SplitMediaTextCopy: React.FC<{
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  variant?: 'default' | 'muted' | 'outline';
  className?: string;
}> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  imagePosition = 'left',
  variant = 'default',
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const variantClasses = {
    default: 'bg-card-bg border border-card-border',
    muted: 'bg-card-bg border border-card-border',
    outline: 'bg-card-bg border border-card-border',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`rounded-xl overflow-hidden py-0 px-0 ${variantClasses[variant]} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div
        className={`flex flex-col md:flex-row gap-8 ${
          imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-8 text-left">
          <h3 className="text-3xl font-bold text-text-heading mb-4">{title}</h3>
          <p className="text-text-body leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const UeberUns: React.FC = () => {
  useEffect(() => {
    document.title = 'Über uns - Fahrschule DriveAcademy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Erfahre mehr über unsere Fahrschule. Seit über 20 Jahren bilden wir Fahrschüler aus. Lerne unser Team kennen und unsere Philosophie.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Erfahre mehr über unsere Fahrschule. Seit über 20 Jahren bilden wir Fahrschüler aus. Lerne unser Team kennen und unsere Philosophie.';
      document.head.appendChild(meta);
    }
  }, []);

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { elementRef: teamHeaderRef, isVisible: teamHeaderVisible } = useScrollReveal();

  const teamMembers1 = [
    {
      imageSrc: '/kunde_bilder_download/Axel Klaussner.webp',
      imageAlt: 'Axel Klaussner',
      title: 'Axel Klaussner',
      description: '',
    },
    {
      imageSrc: '/kunde_bilder_download/Leon Kortwig.webp',
      imageAlt: 'Leon Kortwig',
      title: 'Leon Kortwig',
      description: '',
    },
  ];

  const teamMembers2 = [
    {
      imageSrc: '/kunde_bilder_download/Petra Klaussner.webp',
      imageAlt: 'Petra Klaussner',
      title: 'Petra Klaussner',
      description: '',
    },
    {
      imageSrc: '/kunde_bilder_download/Ralf Wagener.webp',
      imageAlt: 'Ralf Wagener',
      title: 'Ralf Wagener',
      description: '',
    },
  ];

  return (
    <div className="bg-page-bg">
      <Section background="card-bg" padding="xl">
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
              Über uns
            </h1>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Seit über 20 Jahren sind wir deine Fahrschule des Vertrauens. Mit viel Herz, Erfahrung und modernster Ausstattung begleiten wir dich auf deinem Weg zum Führerschein.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Unser Ziel ist es nicht nur, dir das Fahren beizubringen, sondern dich zu einem sicheren und verantwortungsvollen Verkehrsteilnehmer zu machen.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <SplitMediaTextCopy
            imageSrc={LogoDefault}
            imageAlt="Unsere Mission"
            title="Unsere Mission"
            description="Wir glauben daran, dass jeder das Recht hat, mobil und unabhängig zu sein. Deshalb setzen wir auf eine individuelle, geduldige und moderne Ausbildung. Egal ob jung oder alt, Anfänger oder Umsteiger - bei uns bist du in guten Händen. Deine Sicherheit und dein Erfolg stehen für uns an erster Stelle."
            imagePosition="left"
            variant="muted"
          />
        </Container>
      </Section>


      <Section background="page-bg" padding="xl">
        <Container>
          <div
            ref={teamHeaderRef as React.RefObject<HTMLDivElement>}
            className="text-center mb-12"
            style={{
              opacity: teamHeaderVisible ? 1 : 0,
              transform: teamHeaderVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Lerne die Menschen kennen, die dich auf deinem Weg zum Führerschein begleiten. Unser Team besteht aus erfahrenen, geduldigen und freundlichen Fahrlehrern.
            </p>
          </div>

          <div className="space-y-8">
            <TeamBilder teams={teamMembers1} variant="default" />
            <TeamBilder teams={teamMembers2} variant="muted" />
          </div>
        </Container>
      </Section>

      <Section background="card-bg" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              Werde Teil unserer Familie
            </h2>
            <p className="text-lg text-text-body mb-8">
              Tausende zufriedene Fahrschüler haben bereits bei uns ihren Führerschein gemacht. Jetzt bist du an der Reihe! Melde dich noch heute an und starte deine Fahrt in die Zukunft.
            </p>
            <a
              href="/anmelden"
              className="inline-block bg-btn-solid-bg text-btn-solid-fg px-8 py-4 rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Jetzt anmelden
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default UeberUns;
