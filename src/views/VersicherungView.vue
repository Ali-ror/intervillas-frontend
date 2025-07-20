<template>
  <div class="versicherung-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Reiserücktrittsversicherung</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="content-wrapper">
            <img src="../assets/travelsecure.png" alt="Travel Secure Logo" class="logo">
            <div class="text-block">
              <h3>Mit der <strong>Travel Secure Reiserücktrittsversicherung</strong> sind sie umfassend abgesichert: Erstattung der anfallenden Stornierungskosten bei Erkrankung, schwerer Unfall, Verlust des Arbeitsplatzes, Schwangerschaft, Schaden am Eigentum und vieles mehr.</h3>
              <p>Bei der Produkteübersicht können Sie verschiedene Deckungsarten wählen, mit oder ohne Selbstbehalt. Die «Reiserücktrittsversicherung Grundschutz» ist der Mindestschutz und versichert Sie gegen anfallende Stornierungskosten bei Erkrankung, schwerer Unfall, Schwangerschaft etc.</p>
              <p>Für detaillierte Fragen bitten wir Sie, mit der Versicherung direkt Kontakt aufzunehmen.</p>
              <p>Nachdem Sie auf «zur Versicherungsanfrage» geklickt haben, werden Sie zu unserem Versicherungspartner weitergeleitet.</p>
              <ul>
                <li>Erstattung der Stornokosten bei Reiserücktritt</li>
                <li>Übernahme zusätzlicher Rückreisekosten</li>
                <li>Erstattung nicht genutzter Urlaubsleistungen</li>
                <li>24h-Notruf-Service in deutscher Sprache</li>
              </ul>
              <a class="button" href="https://www.travelsecure.de/tarifrechner/default.aspx?partnerid=1-8-4343" target="_blank">Zur Versicherungsrate</a>
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
}

.logo {
  width: 100%;
  height: auto;
}

.text-block {
  flex: 1;
}

h3 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
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
  text-decoration: none;
}

.button:hover {
  background-color: #1d4f4c;
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
}
</style> 