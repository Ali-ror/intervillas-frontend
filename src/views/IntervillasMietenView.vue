<template>
  <div class="intervillas-mieten-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + ferienhausImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Ferienhaus in Florida mieten</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="text-block">
            <p>Dass die US-amerikanische Ferienregion Cape Coral in Florida immer beliebter wird, ist kein Zufall. Unmittelbar am Golf von Mexiko gelegen erwartet Urlauber hier ein paradiesisches Ambiente mit Palmen und zahlreichen Erlebnismöglichkeiten. Intervilla bietet Ihnen eine große Auswahl an Luxus-Ferienhäusern direkt in Cape Coral. Mieten Sie jetzt unkompliziert online Ihre persönliche Ferienvilla und lassen Sie den Alltag hinter sich.</p>

            <h2>Ferienhäuser in Florida mieten - unser Angebot</h2>
            <p>Wir von Intervilla bieten Ihnen eine große Vielfalt an luxuriös eingerichteten Ferienvillen unmittelbar am wunderschönen palmenumsäumten Strand von Florida.</p>
            <p>Unsere Ferienhäuser sind mit allem ausgestattet, was Sie für einen erholsamen Urlaub brauchen. Es gibt komfortable Wohnzimmer mit Fernseher und deutschem Fernsehprogramm, große Küchen, mehrere bequeme Schlafzimmer mit voller Bettwäsche-Ausstattung, Pools, Terrassen mit Grills und viele weitere Extras. Auch ein Boot gehört zu fast jedem Haus. Damit können Sie die traumhafte Flusslandschaft Floridas sogar ohne Bootsführerschein erkunden. Abgerundet wird das Angebot durch einen Harley- und Auto-Verleih.</p>

            <h2>Ein Haus mieten in Florida - Ihre Vorteile bei Intervilla</h2>
            <ul>
              <li>Detaillierte Virtual-Touren zur Besichtigung der Villen</li>
              <li>Umfassende Betreuung rund um die Uhr</li>
              <li>Deutschsprachiger Service</li>
              <li>Alle Leistungen aus einer Hand</li>
              <li>Über 10 Jahre Erfahrung bei der Vermietung hochwertiger Ferienhäuser</li>
              <li>Über 15'000 zufriedene Kunden</li>
              <li>Zwischenreinigung kann unkompliziert dazugebucht werden</li>
            </ul>

            <h2>Cape Coral – für Abwechslung ist gesorgt</h2>
            <p>Cape Coral verfügt über eine vielschichtige Infrastruktur. Hier gibt es Einkaufsmöglichkeiten, Restaurants, Krankenhäuser und viele Sehenswürdigkeiten. Darüber hinaus laden die weitläufige Kanallandschaft und die abwechslungsreiche Geografie zu spannenden Ausflügen ein. Ein absolutes Highlight sind dabei die vielen Delfine und Manatees, die in freier Wildbahn beobachtet werden können. Beliebte Ausflugsziele sind zum Beispiel Pine Island, das Einkaufscenter Sanibel Outlets und der Sun Splash Family Waterpark. Viel Spass bieten auch die grossen Outlets wie Miromar und Coconut. Eine kurze Autofahrt von 30 Minuten und rein ins Vergnügen.</p>

            <h2>Das Klima von Cape Coral – ganzjährig sonnig und warm</h2>
            <p>Cape Coral zeichnet sich durch seine ganzjährig warmen Temperaturen und seine vielen Sonnenstunden aus. Die wärmste Zeit sind die Sommermonate. Hier hat es in der Regel deutlich über 30°C und eine hohe Luftfeuchtigkeit. Wer milderes Klima bevorzugt, besucht Cape Coral am besten im Frühjahr oder im Herbst. So kann man etwas früher in die warme Jahreszeit starten oder den europäischen Sommer noch ein wenig verlängern.</p>

            <h2>Anreise aus Deutschland</h2>
            <p>Die Reisezeit nach Cape Coral ist nicht so lang, wie man zunächst annimmt. Wenn man mit dem Flugzeug unterwegs ist, braucht man etwa 10 Stunden. Bequeme Nonstop-Flüge zum Fort Myers International Airport starten zum Beispiel in München und Düsseldorf. Von dort sind es dann nur noch etwa 35 Minuten Fahrt bis nach Cape Coral. Auch Miami ist immer ein Thema.</p>
            <p>Hinweis: Beachten Sie, dass Sie für die Einreise in die USA den neuen Reisepass (ePass) benötigen, der 2005 eingeführt wurde. Zusätzlich gilt für alle Gäste zwingend die ESTA-Genehmigung.</p>

            <h2>Jetzt Ferienhaus in Florida mieten</h2>
            <p>Sie interessieren sich dafür, ein Ferienhaus im sonnigen Florida zu mieten? Dann buchen Sie jetzt unkompliziert bei Intervilla und freuen Sie sich auf einen ganz besonderen Urlaub im Sunshine State am Golf von Mexiko. Gerne helfen wir Ihnen bei all Ihren Fragen weiter und finden genau die richtige Ferienvilla für Sie.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ferienhausImage from '../assets/background-intervillas.jpg'
</script>

<style scoped>
.intervillas-mieten-view {
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

  h3 {
    font-size: 1.3rem;
  }
}
</style> 