import { Phone, Smartphone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

interface KontaktProps {
  onNavigate: (path: string) => void;
}

export default function Kontakt({ onNavigate }: KontaktProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nachricht: '',
    datenschutz: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', nachricht: '', datenschutz: false });
    }, 5000);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">So erreichst du uns</h1>
            <p className="text-xl text-blue-100">
              Wir sind persönlich für dich da. Ruf uns an, schreib uns oder komm vorbei.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-[#EFF6FF] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Telefon</h3>
              <a href="tel:02291900474" className="text-lg text-[#2563EB] hover:underline font-semibold">
                02291 900474
              </a>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Handy</h3>
              <a href="tel:01712835092" className="text-lg text-[#2563EB] hover:underline font-semibold">
                0171 2835092
              </a>
            </div>

            <div className="bg-[#EFF6FF] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">E-Mail</h3>
              <a href="mailto:Klaussner-Waldbroel@t-online.de" className="text-sm text-[#2563EB] hover:underline font-semibold break-all">
                Klaussner-Waldbroel@t-online.de
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-[#EFF6FF] rounded-xl p-8 border-2 border-[#2563EB]">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[#2563EB] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Erreichbarkeit</h3>
                  <p className="text-[#6B7280]">
                    Wir sind für dich erreichbar, etwa 30 Minuten vor Unterrichtsbeginn. Du kannst uns auch gerne eine Nachricht hinterlassen – wir melden uns schnellstmöglich zurück.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-10 h-10 text-[#2563EB]" />
              <h2 className="text-3xl font-bold">Postadresse</h2>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <p className="text-xl font-semibold mb-2">Fahrschule Klaussner</p>
              <p className="text-lg text-[#6B7280]">Kleistweg 30</p>
              <p className="text-lg text-[#6B7280]">51545 Waldbröl</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Standorte mit Unterrichtszeiten</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#BFDBFE] to-[#93C5FD] flex items-center justify-center">
                <iframe
                  title="Standort Waldbröl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.123456789!2d7.6123!3d50.8753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUyJzMxLjEiTiA3wrAzNic0NC4zIkU!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Waldbröl</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" />
                    <span className="text-[#6B7280]">Hochstrasse 7, 51545 Waldbröl</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0B1220]">Unterricht:</p>
                      <p className="text-[#6B7280]">Dienstag 18:30–20:00 Uhr</p>
                      <p className="text-[#6B7280]">Donnerstag 18:30–20:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#93C5FD] to-[#60A5FA] flex items-center justify-center">
                <iframe
                  title="Standort Nümbrecht"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.987654321!2d7.5432!3d50.9012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzA0LjMiTiA3wrAzMiczNS41IkU!5e0!3m2!1sde!2sde!4v1234567891"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Nümbrecht</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" />
                    <span className="text-[#6B7280]">am Dorfplatz, 51588 Nümbrecht</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#0B1220]">Unterricht:</p>
                      <p className="text-[#6B7280]">Montag 18:30–20:00 Uhr</p>
                      <p className="text-[#6B7280]">Mittwoch 18:30–20:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Send className="w-10 h-10 text-[#2563EB]" />
              <h2 className="text-3xl font-bold">Schreib uns eine Nachricht</h2>
            </div>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Vielen Dank für deine Nachricht!</h3>
                <p className="text-green-700">Wir melden uns schnellstmöglich bei dir zurück.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#EFF6FF] rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-semibold mb-2">
                      Deine Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      required
                      rows={6}
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="datenschutz"
                      required
                      checked={formData.datenschutz}
                      onChange={(e) => setFormData({ ...formData, datenschutz: e.target.checked })}
                      className="mt-1 w-5 h-5 text-[#2563EB] border-gray-300 rounded focus:ring-[#2563EB]"
                    />
                    <label htmlFor="datenschutz" className="text-sm text-[#6B7280]">
                      Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. Weitere Informationen findest du in unserem{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('/impressum')}
                        className="text-[#2563EB] hover:underline"
                      >
                        Impressum & Datenschutz
                      </button>
                      .
                    </label>
                  </div>

                  <button type="submit" className="btn-solid w-full">
                    Nachricht senden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Oder ruf uns direkt an</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Am schnellsten erreichst du uns telefonisch. Wir freuen uns auf deinen Anruf!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02291900474" className="btn-solid bg-white text-[#2563EB] hover:bg-gray-100">
              02291 900474
            </a>
            <a href="tel:01712835092" className="btn-outline border-white text-white hover:bg-white/10">
              0171 2835092
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
