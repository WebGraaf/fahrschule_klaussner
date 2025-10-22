import { Scale, Shield, Cookie, Globe } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Impressum & Datenschutz</h1>
            <p className="text-xl text-blue-100">
              Rechtliche Informationen und Datenschutzerklärung
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-10 h-10 text-[#2563EB]" />
                <h2 className="text-3xl font-bold">Impressum</h2>
              </div>
              <div className="bg-[#EFF6FF] rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Angaben gemäß § 5 TMG</h3>
                <div className="space-y-3 text-[#1F2937]">
                  <p className="font-semibold text-lg">Fahrschule Klaussner</p>
                  <p>Inhaber: Axel Klaussner</p>
                  <p>Kleistweg 30</p>
                  <p>51545 Waldbröl</p>

                  <div className="pt-4">
                    <p className="font-semibold">Kontakt:</p>
                    <p>Telefon: 02291 900474</p>
                    <p>Handy: 0171 2835092</p>
                    <p>E-Mail: Klaussner-Waldbroel@t-online.de</p>
                  </div>

                  <div className="pt-4">
                    <p className="font-semibold">Steuernummer:</p>
                    <p>212/5117/1393</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="text-[#1F2937]">
                  Axel Klaussner<br />
                  Kleistweg 30<br />
                  51545 Waldbröl
                </p>
              </div>

              <div className="mt-8 bg-[#EFF6FF] rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Haftungsausschluss</h3>
                <div className="space-y-4 text-[#6B7280]">
                  <div>
                    <p className="font-semibold text-[#1F2937] mb-2">Haftung für Inhalte</p>
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937] mb-2">Haftung für Links</p>
                    <p>
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-10 h-10 text-[#2563EB]" />
                <h2 className="text-3xl font-bold">Datenschutzerklärung</h2>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 mb-6">
                <h3 className="text-xl font-bold mb-4">Verantwortliche Stelle</h3>
                <p className="text-[#1F2937] mb-4">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-[#1F2937]">
                  Axel Klaussner<br />
                  Fahrschule Klaussner<br />
                  Kleistweg 30<br />
                  51545 Waldbröl<br />
                  <br />
                  Telefon: 02291 900474<br />
                  E-Mail: Klaussner-Waldbroel@t-online.de
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#EFF6FF] rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <Cookie className="w-8 h-8 text-[#2563EB] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">Cookies</h3>
                      <p className="text-[#6B7280] mb-3">
                        Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies sind kleine Textdateien, die auf deinem Computer gespeichert werden und die dein Browser speichert.
                      </p>
                      <p className="text-[#6B7280]">
                        Die meisten der von uns verwendeten Cookies sind sogenannte Session-Cookies. Sie werden nach Ende deines Besuchs automatisch gelöscht. Andere Cookies bleiben auf deinem Endgerät gespeichert, bis du diese löschst.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                  <div className="flex items-start gap-4">
                    <Globe className="w-8 h-8 text-[#2563EB] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">Google Analytics</h3>
                      <p className="text-[#6B7280] mb-3">
                        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                      </p>
                      <p className="text-[#6B7280] mb-3">
                        Google Analytics verwendet Cookies. Die durch den Cookie erzeugten Informationen über deine Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                      </p>
                      <p className="text-[#6B7280] font-semibold">
                        IP-Anonymisierung: Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird deine IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EFF6FF] rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-3">Google Web Fonts</h3>
                  <p className="text-[#6B7280] mb-3">
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt dein Browser die benötigten Web Fonts in deinen Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                  </p>
                  <p className="text-[#6B7280]">
                    Zu diesem Zweck muss der von dir verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über deine IP-Adresse unsere Website aufgerufen wurde.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-3">Kontaktformular & E-Mail-Kontakt</h3>
                  <p className="text-[#6B7280] mb-3">
                    Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine Angaben aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <p className="text-[#6B7280]">
                    Diese Daten geben wir nicht ohne deine Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                </div>

                <div className="bg-[#EFF6FF] rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-3">Speicherdauer</h3>
                  <p className="text-[#6B7280]">
                    Deine Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus dem Kontaktformular ist dies dann der Fall, wenn die jeweilige Konversation mit dir beendet ist.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-3">Deine Rechte</h3>
                  <p className="text-[#6B7280] mb-3">
                    Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten. Du hast außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                  </p>
                  <p className="text-[#6B7280]">
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#EFF6FF] to-white rounded-xl p-8 border-2 border-[#2563EB]">
              <p className="text-[#1F2937] text-center">
                <strong>Stand dieser Datenschutzerklärung:</strong> Oktober 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
