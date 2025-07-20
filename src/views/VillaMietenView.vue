<template>
  <div class="villa-mieten-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Villa Cape Coral mieten</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="text-block">
            <h2>Wie wäre es mit Urlaub in einer Villa in Cape Coral - Florida</h2>
            <p>Modern eingerichtet mit allen Annehmlichkeiten, schöne Swimmingpools mit dem gewissen Extra? Villa Cape Coral ist für viele Florida Fans schon ein bekannter Begriff.</p>

            <p>Ein Frühstück mit Blick aufs Wasser, relaxen unter Palmen oder traumhafte Sonnenuntergänge - einfach Erholung pur. Unsere gepflegten Villen sind an Top-Lagen und gehören zu den Schönsten in ganz Cape Coral. Überzeugen Sie sich selber, Sie werden begeistert sein. Florida wartet auf Sie!</p>
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
            <h2>Warum eine Villa in Cape Coral mieten?</h2>
            <p>Nach unserer Definition sind Villen im Vergleich zu Ferienhäuser eine Spur grösser und einen Tick luxuriöser. Der Vorgarten ist meist sehr gross und die Gartenlandschaft ist gespickt mit Palmen, Mango oder gar Avocadobäumen. Neben dem Garten ist der Peer generell grösser, sprich es lädt ein um beim Sonnenuntergange direkt am Wasser zu schlendern.</p>
            <p>Der grösste Unterschied von Villen und Ferienhäusern erkennt man an der Einrichtung und an der Poollandschaft. Ob Infinity-Pool mit Blick auf den Kanal oder auch mit Whirpool, traumhafte Erinnerungen sind garantiert. Preislich befinden sich Villen in einem preislich höheren Segment als 0815 Ferienhäusern. Auf Grund des Platzes macht es oft auch Sinn, zusammen mit Freunden eine Villa zu mieten. Durch das Aufteilen der Kosten werden Traumferien zum Schnäppchen.</p>

            <h2>Lage einer Villa Cape Coral</h2>
            <p>Zu den beliebtesten und schönsten Gegenden gehört "Rosegarden". Man ist nicht nur schnell auf dem River, sondern hat oftmals auch eine grössere Wasserfront vor sich. Schaut man sich gerne Sonnenuntergänge an, sollte man nach Villen mit Westausrichtung Ausschau halten.</p>
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
  const response = await axios.get('http://localhost:3000/ferienhaus-cape-coral');
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
.villa-mieten-view {
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