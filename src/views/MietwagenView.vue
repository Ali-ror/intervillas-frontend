<template>
  <div class="mietwagen-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Günstige Mietwagen | Ferienhaus Cape Coral - Florida</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="content-wrapper">
            <div class="text-block">
              <p>Wir arbeiten mit unserem Partner rentalcars.com zusammen und sind dadurch in der Lage, Ihnen sehr gute Preise für Ihren Mietwagen in Florida oder überall in der Welt zu besorgen.</p>

              <h2>Warum über rentalcars.com buchen?</h2>
              <div class="icon-list">
                <div class="icon-item">
                  <span class="icon">✓</span>
                  <span>garantierter Niedrigstpreis</span>
                </div>
                <div class="icon-item">
                  <span class="icon">✓</span>
                  <span>keine Kreditkartengebühren</span>
                </div>
                <div class="icon-item">
                  <span class="icon">✓</span>
                  <span>Buchungen online ändern oder stornieren</span>
                </div>
              </div>

              <h2>Über rentalcars.com</h2>
              <p>Mit vermittelten Mietfahrzeugen in über 180 Ländern und über 40 Sprachen ist rentalcars.com eine der weltweit führenden Autovermietungsagenturen. Wir arbeiten Hand in Hand mit führenden Anbietern und bieten unschlagbare Preise auf alle Fahrzeugklassen, inklusive Luxusfahrzeugen, Minivans und Fahrzeugen mit Automatikgetriebe. Unser mehrsprachiges Callcenter arbeitet an 7 Tagen der Woche, um Ihnen die besten Preise für Ihr Mietfahrzeug zu finden. Egal wo, egal wann.</p>
            </div>
            <img src="../assets/car.jpg" alt="Mietwagen" class="side-image">
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
.mietwagen-view {
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.text-block {
  width: 100%;
}

.side-image {
  width: 300px;
  height: auto;
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

.icon-list {
  margin: 2rem 0;
}

.icon-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.icon {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-right: 1rem;
  font-weight: bold;
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
  }

  .side-image {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    position: static;
  }

  h2 {
    font-size: 1.6rem;
  }
}
</style> 