<template>
  <div class="ferienhaus-mit-boot-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Ferienhaus mit Boot mieten</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="text-block">
            <h2>Wie wäre es mit einem Ferienhaus in Cape Coral - Florida mit eigenem Boot?</h2>
            <p>Cape Coral ist ein Paradis für Bootskapitäne und Inselhopper. Rund um Cape Coral gibt es traumhafte kleine und grosse Inseln mit Buchten, die zum Entdecken einladen. Sind Sie ein Muschel- Fan, dann kommen Sie bei Sanibel Island voll auf Ihre Kosten. Sie suchen einen langen und breiten Strand, heisst Ihre Destination Fort Myers Beach. Lieben Sie leere Strände, dann ist Captiva genau Ihr Ding. Es gibt noch etliche weitere Strände und versteckte Buchten, die nur darauf warten entdeckt zu werden.</p>

            <p>Wussten Sie: In Florida sind Personen mit einem gültigen Fahrausweis berechtigt, ein Boot als Kapitän selber zu fahren? Aus diesem Grund bieten wir auch Bootseinweisungen vor Ort an. Wir empfehlen beim Mieten eines Bootes eine Skipperhaftpflichtversicherung abzuschliessen.</p>
          </div>

          <section class="featured-villas">
            <div class="villas-grid">
              <VillaCard
                v-for="villa in villas"
                :key="villa.title"
                v-bind="villa"
              />
            </div>
          </section>

          <div class="text-block">
            <h2>Bootfahren in Cape Coral</h2>
            <p>Sie haben somit Ihr Boot direkt vor der Haustüre und können so unabhängig jederzeit Ausflüge unternehmen. Alle aufgeführten Häuser besitzen ein hauseigenes Bootsdock (Bootsparkplatz). Die Boote sind in einem gepflegten Zustand und gibt es in unterschiedlichen Grössen & Ausführungen. Alle Boote können optional, zu den oben aufgeführten Villen, gebucht werden. Bei Fragen zur Bootsmiete stehen wir Ihnen auch gerne zur Seite.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import dockImage from '../assets/background-intervillas.jpg'
import VillaCard from '../components/VillaCard.vue'
import villa1Image from '../assets/villa-1.jpg'
import villa2Image from '../assets/villa-2.jpg'
import villa3Image from '../assets/villa-3.jpg'

const villas = ref([])

onMounted(async () => {
  const response = await axios.get('https://api.systembitz.com/ferienhaus-cape-coral');
  if(response) {
    villas.value = response.data
  }
})

// const villas = [
//   {
//     title: 'Villa Bermuda',
//     price: 1470,
//     image: villa1Image,
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 172
//   },
//   {
//     title: 'Villa Laguna',
//     price: 2730,
//     image: villa2Image,
//     bedrooms: 3,
//     bathrooms: 3,
//     area: 185
//   },
//   {
//     title: 'Villa Penelope',
//     price: 2170,
//     image: villa3Image,
//     bedrooms: 3,
//     bathrooms: 3,
//     area: 211
//   }
// ]
</script>

<style scoped>
.ferienhaus-mit-boot-view {
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

.text-block {
  width: 100%;
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

.featured-villas {
  padding: 4rem 0;
  background-color: #f5f5f5;
  margin: 3rem -50vw;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
}

.villas-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 1rem;
}

@media (max-width: 1024px) {
  .villas-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .villas-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  h2 {
    font-size: 1.6rem;
  }

  .featured-villas {
    padding: 2rem 0;
  }
}
</style> 