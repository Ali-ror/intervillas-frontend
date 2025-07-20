<template>
  <div class="einreise-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Einreisebestimmungen</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="text-block">
            <h2>Visa Waiver Program</h2>
            <p>Dieses Programm erlaubt es den Bürgerinnen und Bürgern bestimmter Länder ohne Visum für maximal 90 Tage in die USA einzureisen. Sehen Sie hier, welche Länder an diesem Programm teilnehmen.</p>

            <div class="link-wrapper">
              <a href="#" class="esta-link">Beantragen Sie hier Ihre ESTA-Reisegenehmigung</a>
            </div>

            <h2>Visum</h2>
            <p>Sie benötigen ein Visum, wenn Ihr Pass nicht den Anforderungen entspricht oder Sie nicht aus einem Land des VWP-Programms sind. Bitte informieren Sie sich bei der Botschaft der Vereinigten Staaten von Amerika in Ihrem Land bezüglich dem Prozedere</p>

            <h2>Electronic System for Travel Authorization (ESTA)</h2>
            <p>Alle Reisende, die im Rahmen des Visa Waiver Programms in die USA einreisen möchten, sind verpflichtet, eine elektronische Reisegenehmigung zu beantragen. Wir empfehlen mindestens 72 Stunden vor Abflug. Es empfiehlt sich, die Erlaubnis auszudrucken und bei Reisen mit sich zu führen.</p>
            <p>Ohne gültige ESTA-Reisegenehmigung zur Zeit des Check-in muss Ihnen die Fluggesellschaft den Transport verweigern.</p>

            <h2>Gültigkeit von der ESTA-Reisegenehmigung</h2>
            <p>Die erteilte Reisegenehmigung über ESTA ist bis zu zwei Jahre gültig, sofern sie nicht widerrufen wird oder Ihr Reisepass abläuft. Die ESTA-Reisegenehmigung ist für mehrere Einreisen in die USA gültig. Aktualisieren Sie Änderungen bezüglich Zieladresse, Reiseroute oder zukünftiger Reisepläne problemlos über die ESTA-Website.</p>

            <div class="link-wrapper">
              <a href="#" class="esta-link">Beantragen Sie hier Ihre ESTA-Reisegenehmigung</a>
            </div>

            <h2>Passanforderungen</h2>
            <p>Ihr Pass muss, je nach Ausstellungsdatum, folgende Anforderungen erfüllen:</p>
            <ul>
              <li>Ausstellung vor dem 26.10.2005: Ihr Pass muss eine maschinenlesbare Zone (Textzeilen mit Personalangaben in OCR-B Schrift) enthalten.</li>
              <li>Ausstellung zwischen dem 26.10.2005 und 25.10.2006: Ihr Pass muss eine maschinenlesbare Zone und ein digitales Passfoto enthalten.</li>
              <li>Ausstellung ab dem 26.10.2006: Ihr Pass muss ein «E-Passport» sein. Er enthält einen Chip mit Ihren biografischen, biometrischen Daten sowie ein digitales Passfoto</li>
            </ul>
            <p>Weitere Informationen finden Sie hier.</p>

            <h2>Advanced Passenger Information System (APIS)</h2>
            <p>APIS ist eine gesetzliche Regelung der Einwanderungsbehörde in den USA: Am Abflugtag übermitteln die Fluggesellschaften die erfassten Daten ausschliesslich an das US Department of Homeland Security. Um Unannehmlichkeiten am Zielflughafen zu vermeiden, ist das korrekte und vollständige Ausfüllen des APIS Formulars wichtig. Das Advanced Passenger Information System (APIS) erfasst Daten wie zum Beispiel Name, Vorname, Passnummer usw.</p>

            <p>Für die Einreise in die USA gibt es folgende Formulare, die Sie während Ihres Fluges ausfüllen müssen:</p>

            <h3>Weisses Formular (I-94)</h3>
            <p>Die US-Behörden verlangen von Reisenden mit Visumpflicht im weissen Formular Angaben zu ihrer Person, zur Ein- und Ausreise und zu ihrem Visum. Bitte füllen Sie die Karte beidseitig in Druckbuchstaben aus und vergessen Sie nicht Ihre Unterschrift.</p>
            <p>Besondere Schreibweise: In den USA hat die «7» keinen Querstrich und die «1» wird als senkrechter Strich geschrieben.</p>

            <h3>Blaues Formular (6059B)</h3>
            <p>Das Zollformular ist von allen Reisenden, unabhängig von der Visumpflicht, auszufüllen. Auf der Vorderseite sind Sie aufgefordert, Angaben zur Ihrer Person zu machen. Auf der Rückseite müssen Sie zollpflichtige Waren deklarieren.</p>
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
.einreise-view {
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
  display: block;
}

.text-block {
  width: 100%;
}

h2 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
}

h3 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

ul {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.link-wrapper {
  margin: 2rem 0;
}

.esta-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.esta-link:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .logo {
    max-width: 250px;
    margin: 0 auto;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.3rem;
  }
}
</style> 