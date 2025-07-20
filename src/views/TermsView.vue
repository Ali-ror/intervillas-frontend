<template>
  <div class="terms-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Allgemeine Geschäftsbedingungen</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="content-wrapper">
            <div class="text-block">
              <p class="valid-date">gültig ab 1. Juli 2024</p>

              <div class="terms-section">
                <h2>1. Vorwort</h2>
                <p>Diese Allgemeinen Vertragsbedingungen sind Bestandteil des Vertrages zwischen Ihnen und Intervilla. Wir empfehlen Ihnen, die nachfolgenden Allgemeinen Vertragsbedingungen sorgfältig zu studieren.</p>
              </div>

              <div class="terms-section">
                <h2>2. Vertrag</h2>
                <p>Mit Ihrer schriftlichen (inkl. E-Mail) Buchung schliessen Sie einen Vertrag mit Intervilla ab. Von jenem Zeitpunkt an werden die Rechte und Pflichten aus dem Vertrag sowie die vorliegenden Vertragsbedingungen für Sie und Intervilla wirksam. Sie erhalten von Intervilla umgehend eine Buchungsbestätigung. Sie anerkennen mit Ihrer Anzahlung den Vertragsabschluss aufgrund der Buchungsbestätigung. Sonderwünsche Ihrerseits können wir nur als unverbindlichen Wunsch entgegennehmen. Auf dessen Erfüllung besteht kein Rechtsanspruch.</p>
              </div>

              <div class="terms-section">
                <h2>3. Preise</h2>
                <p>Ist nichts anderes vermerkt, sind die publizierten Preise pro Person und Tag für das gesamte Mietobjekt in der entsprechenden Preisperiode zu verstehen. Die publizierten Preise gelten bis zum Update der Website. Nicht im Mietpreis enthalten ist eine Gebühr für das Haus für anfallende Stromkosten. Nicht benutzte Gebühren werden zurückerstattet. Sales- und Tourist-Taxen sind in den Preisen eingeschlossen. An- und Abreisetag sind jeweils abhängig der Verfügbarkeit frei wählbar.</p>
              </div>

              <section>
                <h2>4. Geltungsbereich</h2>
                <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Anmietung von Ferienhäusern und Booten zwischen InterVillas Florida und dem Mieter.</p>
              </section>

              <section>
                <h2>5. Vertragsabschluss</h2>
                <p>Der Mietvertrag kommt durch die Buchungsbestätigung von InterVillas Florida zustande. Die Buchung kann schriftlich, telefonisch oder über das Online-Buchungssystem erfolgen.</p>
              </section>

              <section>
                <h2>6. Zahlungsbedingungen</h2>
                <p>Bei Vertragsabschluss ist eine Anzahlung in Höhe von 25% des Gesamtpreises zu leisten. Die Restzahlung ist spätestens 30 Tage vor Mietbeginn fällig.</p>
              </section>

              <section>
                <h2>7. Stornierung</h2>
                <p>Bei Stornierung der Buchung fallen folgende Gebühren an:</p>
                <ul>
                  <li>Bis 60 Tage vor Anreise: 25% des Gesamtpreises</li>
                  <li>Bis 30 Tage vor Anreise: 50% des Gesamtpreises</li>
                  <li>Weniger als 30 Tage vor Anreise: 100% des Gesamtpreises</li>
                </ul>
              </section>

              <section>
                <h2>8. Pflichten des Mieters</h2>
                <p>Der Mieter verpflichtet sich, das Mietobjekt pfleglich zu behandeln und die Hausordnung einzuhalten. Schäden sind unverzüglich zu melden.</p>
              </section>

              <section>
                <h2>9. Haftung</h2>
                <p>InterVillas Florida haftet für die ordnungsgemäße Bereitstellung des Mietobjekts. Eine weitergehende Haftung ist ausgeschlossen, soweit nicht vorsätzliches oder grob fahrlässiges Verhalten vorliegt.</p>
              </section>

              <section>
                <h2>10. Datenschutz</h2>
                <p>Die erhobenen Daten werden ausschließlich zur Vertragsabwicklung verwendet und nach den geltenden Datenschutzbestimmungen behandelt.</p>
              </section>

              <div class="terms-section">
                <h2>11. Bankverbindung</h2>
                <div class="bank-info">
                  <h3>Für alle Zahlungen</h3>
                  <table>
                    <tr>
                      <td>Adresse</td>
                      <td>JPMorgan Chase Bank, N.A.<br>
                          383 Madison Avenue<br>
                          New York, NY 10179<br>
                          USA</td>
                    </tr>
                    <tr>
                      <td>SWIFT-Adresse</td>
                      <td>CHASUS33XXX</td>
                    </tr>
                    <tr>
                      <td>Konto-Inhaber</td>
                      <td>Intervilla Corp.<br>
                          4929 SW 26th Ave<br>
                          Cape Coral, FL 33914<br>
                          USA</td>
                    </tr>
                    <tr>
                      <td>Konto-Nr.</td>
                      <td>653 668 221</td>
                    </tr>
                    <tr>
                      <td>Routing-Nr.</td>
                      <td>267 084 131</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import dockImage from '../assets/background-intervillas.jpg'
</script>

<style scoped>
.terms-view {
  padding-top: 0;
}

.hero {
  width: 100%;
  height: 110vh;
  background-color: var(--primary-color);
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  margin-top: -80px;
  display: flex;
  align-items: end;
  padding-bottom: 120px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0;
  position: relative;
  text-align: center;
}

.text-content {
  max-width: 1400px;
  margin: 4rem auto;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--primary-color);
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.text-block {
  width: 100%;
}

.valid-date {
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.terms-section {
  margin-bottom: 3rem;
}

h2 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.bank-info table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.bank-info td {
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  vertical-align: top;
}

.bank-info td:first-child {
  font-weight: 600;
  width: 150px;
  color: var(--primary-color);
  font-family: var(--font-body);
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  .bank-info td:first-child {
    width: 120px;
  }
}
</style> 