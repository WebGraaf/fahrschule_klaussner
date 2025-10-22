import { CheckCircle2, Phone } from 'lucide-react';
import { useState } from 'react';

interface AnmeldenProps {
  onNavigate: (path: string) => void;
}

export default function Anmelden({ onNavigate }: AnmeldenProps) {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    klasse: '',
    starttermin: '',
    standort: '',
    nachricht: '',
    datenschutz: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold mb-6">Vielen Dank für deine Anmeldung!</h1>
                <p className="text-xl text-[#6B7280] mb-8">
                  Wir haben deine Anmeldung erhalten und werden uns schnellstmöglich bei dir melden, um alle weiteren Details zu besprechen.
                </p>
                <p className="text-lg text-[#6B7280] mb-8">
                  In der Zwischenzeit kannst du uns auch direkt unter <a href="tel:02291900474" className="text-[#2563EB] hover:underline font-semibold">02291 900474</a> oder <a href="tel:01712835092" className="text-[#2563EB] hover:underline font-semibold">0171 2835092</a> erreichen.
                </p>
                <button onClick={() => onNavigate('/')} className="btn-solid">
                  Zurück zur Startseite
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Jetzt anmelden</h1>
            <p className="text-xl text-blue-100">
              Wir beraten dich umfassend und achten auf faire, transparente Kosten. Fülle das Formular aus und wir melden uns bei dir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-[#EFF6FF] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Persönliche Daten</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vorname" className="block text-sm font-semibold mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="vorname"
                      required
                      value={formData.vorname}
                      onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="nachname" className="block text-sm font-semibold mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="nachname"
                      required
                      value={formData.nachname}
                      onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
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
                    <label htmlFor="telefon" className="block text-sm font-semibold mb-2">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#EFF6FF] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Führerscheindetails</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="klasse" className="block text-sm font-semibold mb-2">
                      Gewünschte Klasse *
                    </label>
                    <select
                      id="klasse"
                      required
                      value={formData.klasse}
                      onChange={(e) => setFormData({ ...formData, klasse: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="B">B – PKW</option>
                      <option value="BE">BE – PKW mit Anhänger</option>
                      <option value="BF17">BF17 – Begleitetes Fahren ab 17</option>
                      <option value="A">A – Motorrad offen</option>
                      <option value="A2">A2 – Motorrad bis 48 PS</option>
                      <option value="A1">A1 – Leichtkraftrad 125 ccm</option>
                      <option value="M">M – Roller 50 ccm</option>
                      <option value="Mofa">Mofa – Mofaprüfbescheinigung</option>
                      <option value="L">L – Traktor</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="starttermin" className="block text-sm font-semibold mb-2">
                      Bevorzugter Starttermin *
                    </label>
                    <input
                      type="date"
                      id="starttermin"
                      required
                      value={formData.starttermin}
                      onChange={(e) => setFormData({ ...formData, starttermin: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="standort" className="block text-sm font-semibold mb-2">
                      Bevorzugter Standort *
                    </label>
                    <select
                      id="standort"
                      required
                      value={formData.standort}
                      onChange={(e) => setFormData({ ...formData, standort: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="Waldbröl">Waldbröl – Hochstrasse 7</option>
                      <option value="Nümbrecht">Nümbrecht – am Dorfplatz</option>
                      <option value="Beide">Flexibel – beide Standorte</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#EFF6FF] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Zusätzliche Informationen</h2>
                <div>
                  <label htmlFor="nachricht" className="block text-sm font-semibold mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="nachricht"
                    rows={5}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    placeholder="Hast du besondere Fragen oder Wünsche? Teile uns hier mit, was uns sonst noch wissen sollten."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2563EB] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
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
                    Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anmeldung gespeichert und verarbeitet werden. Die Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Weitere Informationen findest du in unserem{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('/impressum')}
                      className="text-[#2563EB] hover:underline"
                    >
                      Impressum & Datenschutz
                    </button>
                    . *
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-solid w-full text-lg py-4">
                Anmeldung absenden
              </button>

              <p className="text-center text-sm text-[#6B7280]">
                * Pflichtfelder
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#EFF6FF]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Phone className="w-16 h-16 text-[#2563EB] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Oder ruf uns direkt an</h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Du hast noch Fragen oder möchtest dich lieber persönlich anmelden? Kein Problem – wir sind gerne für dich da!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:02291900474" className="btn-solid">
                02291 900474
              </a>
              <a href="tel:01712835092" className="btn-outline">
                0171 2835092
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
