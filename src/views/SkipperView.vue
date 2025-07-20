<template>
  <div class="skipper-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>{{ t('home.skipper_title') }}</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="content-wrapper">
            <img src="../assets/schomacker.png" alt="Hamburger Yachtversicherung Schomacker Logo" class="logo">
            <div class="text-block">
              <div class="text-block" v-html="t('skipper.content1')"></div>
              <a class="button" href="http://www.schomacker.de/charterversicherungen.html?pid=a1435" target="_blank">{{t('skipper.link')}}</a>
              <!-- <h2>Hamburger Yachtversicherung Schomacker</h2>
              <p class="bold">Die Hamburger Yachtversicherung Schomacker bietet Ihnen die Skipper-Haftpflicht-Versicherung an und macht Ihre Bootsbuchung wasserdicht!</p>
              <p>Versichert ist über die Skipper-Haftpflicht-Versicherung die gesetzliche Haftpflicht des Versicherungsnehmers in der Eigenschaft als Mieter und Führer des Motorbootes weltweit.</p>
              <p>Das Boot, dass Sie gebucht haben ist haftpflicht- als auch kaskoversichert. Die Skipper-Hapftfplicht-Versicherung ist eine wichtige Deckungsergänzung für Skipper und Crew. In bestimmten Fällen kann es vorkommen, dass die Boots-Haftpflicht- oder Kasko-Versicherung des Mietbootes nicht leistet oder die Deckungssumme bzw. der Deckungsumfang nicht ausreicht. Diese Risiken werden durch die Skipper-Haftpflicht-Versicherung abgedeckt.</p>
              <p>Beim Abschluss einfach die Rubrik "Motoryacht bis 10 Meter Länge" anklicken.</p>
              <h2>Kautions-Versicherung</h2>
              <p>Zum Ausschluss des Selbstbehalts (Kaution) schliessen Sie zudem die Kautions-Versicherung ab.</p>
              <p>Charteryachten sind in der Regel vollkaskoversichert. Vercharterer und dessen Versicherung haben üblicherweise eine Selbstbeteiligung im Schadenfall vereinbart. In der Regel entspricht die Selbstbeteiligung der zu hinterlegenden Kaution des Charterers.</p>
              <p>Entsteht während des Törns an der gecharterten Yacht ein Schaden, kann das Charterunternehmen die Kaution ganz oder zum Teil einbehalten. Dieses finanzielle Risiko deckt die Garantieleistung zur Absicherung von Charterkautionen ab. Bei dieser Yachtcharter-Kautionsversicherung gibt es keine Selbstbeteiligung.</p>
              <p>Diese Versicherung können Sie aus versicherungstechnischen Gründen nur dann abschliessen, wenn Sie Bürger eines EU-Mitgliedstaates sind.</p>
              <a class="button" href="http://www.schomacker.de/charterversicherungen.html?pid=a1435" target="_blank">Zur Versicherungsanfrage</a>
              <p class="bold">Die Hamburger Yachtversicherung – Schnell – Unkompliziert – Sicher!</p> -->
            </div>
          </div>

          <div class="content-wrapper second-section">
            <img src="../assets/pantaenius.png" alt="Pantaenius Logo" class="logo">
            <div class="text-block">
              <div class="text-block" v-html="t('skipper.content2')"></div>
              <a class="button" href="http://www.pantaenius-group.com/content/2526" target="_blank">{{ t('skipper.link') }}</a>
              <!-- <h2>Pantaenius Skipperhaftpflichtversicherung</h2>
              <p>"Als Skipper haften Sie persönlich mit Ihrem Vermögen für alle von Ihnen verursachten Schäden, die Sie Dritten durch den Gebrauch einer fremden Yacht zufügen."</p>
              <p>Die Pantaenius Skipperhaftpflichtversicherung bietet Ihnen das ganze Jahr über Schutz bei Schäden, die beim Gebrauch einer fremden Yacht entstehen. Sie wird wirksam, wenn die yachteigene Haftpflichtversicherung nicht eintritt.</p>
              <p>Versichert ist ebenfalls die Nutzung von Beibooten oder anderen Wassersportgeräten. Die Versicherung kann sowohl für den privaten Skipper als auch für gewerbliche Skipper abgeschlossen werden.</p>
              <p>Die jährliche Deckung gilt für Skipper und Crew bei Sach- und Personenschäden – weltweit.</p>
              <ul>
                <li>Die Abwehr unberechtigter Ansprüche</li>
                <li>Gewässerschäden</li>
                <li>Sicherheitsleistungen bei einer Arrestierung der Yacht bis 100'000,00 EUR</li>
                <li>Der Verlust von Nachfolgevercharterungen bis 20'000,00 EUR</li>
                <li>Schäden durch grobe Fahrlässigkeit an der vom Skipper geführten Yacht</li>
              </ul>
              <p>Beim Abschluss wählen Sie die Rubrik "Private Nutzung, 6 Mio EUR Versicherungssumme, bis 17m Schiffslänge".</p>
              <p>Versichert werden können nur Personen mit Wohnsitz in der Europäischen Union, Schweiz, Liechtenstein, Norwegen oder Island.</p>
              <a class="button" href="http://www.pantaenius-group.com/content/2526" target="_blank">Zur Versicherungsanfrage</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import dockImage from '../assets/background-intervillas.jpg'
import {useI18n} from 'vue-i18n'

const {t} =  useI18n()
</script>

<style scoped>
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
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 4rem;
}

.content-wrapper.second-section {
  margin-top: 4rem;
}

.logo {
  width: 100%;
  height: auto;
}

.text-block {
  flex: 1;
  margin-bottom:30px;
}

h2 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

h3 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

ul {
  margin: 2rem 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 1rem 0;
  text-decoration: none;
}

.button:hover {
  background-color: #1d4f4c;
}

.bold {
  font-weight: bold;
  margin: 1rem 0;
  font-family: var(--font-body);
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
}
</style> 