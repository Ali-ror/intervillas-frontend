<template>
  <div class="last-minute-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container" v-if="specials.length">
        <h1>{{ specials[0].description }} ({{ formatDate(specials[0].start_date) }} - {{ formatDate(specials[0].end_date) }})</h1>
      </div>
    </section>

    <section class="featured-villas">
      <div class="container">
        <div class="villas-grid" v-if="specials.length">
          <VillaCard
            v-for="villa in specials[0].villas"
            :key="villa.title"
            v-bind="villa"
          />
        </div>
      </div>
    </section>

    <!-- <section class="slider-villas">
      <div class="container">
        <VillaSlider :villas="sliderVillas" />
      </div>
    </section> -->
  </div>
</template>

<script setup>
import axios from 'axios'
import {ref, onMounted} from 'vue'
import VillaCard from '../components/VillaCard.vue'
import VillaSlider from '../components/VillaSlider.vue'
import dockImage from '../assets/background-intervillas.jpg'
import villa1Image from '../assets/villa-1.jpg'
import villa2Image from '../assets/villa-2.jpg'
import villa3Image from '../assets/villa-3.jpg'
import intervillasPattern from '../assets/intervillas-pattern.png'

const specials = ref([])

onMounted(async () => {
  const response = await axios.get('http://localhost:3000/specials');
  if(response) {
    specials.value = response.data.map(special => {
      return  {
        ...special,
        villas: special.villas.map((villa, index)=> {
          return {
            ...villa,
            image: villa1Image,
            search_url: `${index}-villa`,
            id: index
          }
        })
      }
    })
    console.log(specials.value,'specials')
  }
})

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${month}.${day}.${year}`;
}

const featuredVillas = [
  {
    name: 'Villa Bermuda',
    teaser_price: {value: 1470},
    image: villa1Image,
    bedrooms_count: 3,
    bathrooms_count: 2,
    living_area: 172
  },
  {
    name: 'Villa Laguna',
    teaser_price: {value: 2730},
    image: villa2Image,
    bedrooms_count: 3,
    bathrooms_count: 3,
    living_area: 185
  },
  {
    name: 'Villa Penelope',
    teaser_price: {value: 2170},
    image: villa3Image,
    bedrooms_count: 3,
    bathrooms_count: 3,
    living_area: 211
  }
]

const sliderVillas = [
  {
    name: 'Villa Odyssey',
    teaser_price: {value: 1960},
    image: villa1Image,
    bedrooms_count: 4,
    bathrooms_count: 3,
    living_area: 240
  },
  {
    name: 'Villa Serenissima',
    teaser_price: {value: 1232},
    image: villa2Image,
    bedrooms_count: 3,
    bathrooms_count: 2,
    living_area: 194
  },
  {
    name: 'Villa White Style',
    price_from: {value: 1484},
    main_image: villa3Image,
    bedrooms_count: 4,
    bathrooms: 2,
    living_area: 220
  },
  {
    name: 'Villa Tropicana',
    teaser_price: {value: 1228},
    image: villa1Image,
    bedrooms_count: 3,
    bathrooms_count: 2,
    living_area: 200
  },
  {
    name: 'Villa Royal Sereni Tee',
    teaser_price: {value: 1827},
    image: villa2Image,
    bedrooms_count: 4,
    bathrooms_count: 3,
    living_area: 222
  },
  {
    name: 'Villa Brightwater',
    teaser_price: {value: 2236},
    image: villa3Image,
    bedrooms_count: 6,
    bathrooms_count: 4,
    living_area: 327
  }
]
</script>

<style scoped>
.last-minute-view {
  padding-top: 0;
}

.hero {
  height: 110vh;
  min-height: 800px;
  background-color: var(--primary-color);
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: end;
  margin-top: -80px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--white);
  margin: 0;
  font-weight: 300;
  line-height: 1.2;
  position: relative;
  text-align: center;
}

.hero-text {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 300;
  position: relative;
}

.featured-villas,
.slider-villas {
  padding: 6rem 0;
  background-color: #f5f5f5;
}

.slider-villas {
  background-color: white;
}

h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--font-heading);
  font-weight: 400;
}

.villas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 2;
}

@media (max-width: 1400px) {
  .villas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .villas-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    height: 100vh;
    min-height: 600px;
    padding-top: 100px;
    padding-bottom: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1.1rem;
  }

  .featured-villas {
    padding: 4rem 0;
  }

  h2 {
    font-size: 2rem;
  }
}

.full-width-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.pattern-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/intervillas-pattern.png');
  background-size: cover;
  background-position: center;
  z-index: 1;
  width: 100%;
}

.featured-villas {
  padding: 6rem 0;
  position: relative;
}

.featured-villas .container {
  position: relative;
  z-index: 2;
}
</style> 