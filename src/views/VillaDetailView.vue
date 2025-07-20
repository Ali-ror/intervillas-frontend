<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import xandau1Image from '../assets/xandau-1.jpg'
import xandau2Image from '../assets/xandau-2.jpg'
import xandau3Image from '../assets/xandau-3.jpg'
import xandau4Image from '../assets/xandau-4.jpg'
import xandau5Image from '../assets/xandau-5.jpg'
import xandau6Image from '../assets/xandau-6.jpg'
import xandau7Image from '../assets/xandau-7.jpg'
import xandau9Image from '../assets/xandau-9.jpg'
import bedIcon from '../assets/bed-icon.png'
import bathIcon from '../assets/bath-icon.png'
import compassIcon from '../assets/compass-icon.png'
import homeIcon from '../assets/home-icon.png'
import boat1Image from '../assets/boot-1.jpg'
import boat2Image from '../assets/boot-2.jpg'
import boat3Image from '../assets/boot-3.jpg'
import lageVillaImage from '../assets/lage-villa.png'
import intervillasPattern from '../assets/intervillas-pattern.png'
import boatPattern from '../assets/boat-pattern.jpg'
import villa1Image from '../assets/villa-1.jpg'
import villa2Image from '../assets/villa-2.jpg'
import villa3Image from '../assets/villa-3.jpg'
import VillaSlider from '../components/VillaSlider.vue'
import VillaMap from '../components/VillaMap.vue'

const selectedImages = ref([
  { src: xandau1Image, alt: 'Villa Magic Summer 1' },
  { src: xandau2Image, alt: 'Villa Magic Summer 2' },
  { src: xandau3Image, alt: 'Villa Magic Summer 3' },
  { src: xandau4Image, alt: 'Villa Magic Summer 4' },
  { src: xandau5Image, alt: 'Villa Magic Summer 5' },
])

const allVillaImages = [
  { src: xandau1Image, alt: 'Villa Image 1' },
  { src: xandau2Image, alt: 'Villa Image 2' },
  { src: xandau3Image, alt: 'Villa Image 3' },
  { src: xandau4Image, alt: 'Villa Image 4' },
  { src: xandau5Image, alt: 'Villa Image 5' },
  { src: xandau6Image, alt: 'Villa Image 6' },
  { src: xandau7Image, alt: 'Villa Image 7' },
  { src: xandau9Image, alt: 'Villa Image 9' }
]

const currentImageIndex = ref(0)
const showImagePopup = ref(false)
const route = useRoute();
const villaId = route.params.id
const villaData = ref({});

// Automatischer Bildwechsel alle 5 Sekunden
let intervalId = null
onMounted(async () => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedImages.value.length
  }, 5000)
  const response = await axios.get(`http://localhost:3000${villaId}.json`);
  if(response) {
    villaData.value = {
      ...response.data,
      price: 1500,
    }
    console.log(villaData.value,'villa')
  }
})
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const openImagePopup = () => {
  showImagePopup.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling when popup is open
}

const closeImagePopup = () => {
  showImagePopup.value = false
  document.body.style.overflow = '' // Restore scrolling
}

const changeMainImage = (index) => {
  currentImageIndex.value = index
}

const villa = {
  title: 'Villa Magic Summer',
  price: 1610,
  rating: 5,
  features: [
    { icon: bedIcon, label: '3 SCHLAFZIMMER' },
    { icon: bathIcon, label: '3 BADEZIMMER' },
    { icon: homeIcon, label: '230M² FLÄCHE' },
    { icon: compassIcon, label: 'POOL OSTEN' }
  ],
  details: {
    buildYear: '1996',
    lastRenovated: '2023',
    livingSpace: '230 m²'
  },
  location: {
    title: 'Lage der Villa Magic Summer',
    description: 'Die Karte bietet Ihnen einen umfassenden Einblick in die exklusive Lage der Villa und zeigt, wie sie in die Umgebung eingebettet ist.\nDie idyllisch direkt am Wasser, in einer ruhigen Wohngegend nahe der Nähe von Sehenswürdigkeiten - all dies finden Sie übersichtlich auf der Standorte basiert zu.\n\nSo können Sie sich bereits vorab ein detailliertes Bild davon machen, wie ideal diese Lage für Ihren Traumurlaub ist, und die einzigartigen Möglichkeiten erkunden, die Sie erwarten.'
  },
  feedback: {
    title: 'Feedback zu Magic Summer',
    reviews: [
      {
        date: '17.11.2024',
        rating: 5,
        text: 'Wie immer war das Haus in einem Top-Zustand. Wir haben bereits für nächstes Jahr wieder gebucht. Top Service provided by Sarah Schulze was also excellent!',
        language: 'Englisch/Deutsch'
      },
      {
        date: '20.11.2024',
        rating: 5,
        text: 'Villa Magic Summer nochmals wunderbar! Wir haben uns sehr wohlgefühlt - Lage und Ausstattung waren perfekt. Sarah hatte sich perfekt für uns gekümmert. Wir kommen im nächsten Jahr wieder!',
        language: 'Deutsch'
      }
    ]
  },
  virtualTour: {
    title: 'Virtueller Rundgang',
    rooms: [
      { name: 'Pool', link: '#' },
      { name: 'Lounge', link: '#' },
      { name: 'Kitchen', link: '#' },
      { name: 'Bedroom II', link: '#' },
      { name: 'Living', link: '#' },
      { name: 'Bedroom III', link: '#' },
      { name: 'Masterbath', link: '#' },
      { name: 'Master Bedroom', link: '#' }
    ]
  }
}

const calendar = {
  months: [
    {
      name: 'Okt 2021',
      days: Array(31).fill(null).map((_, i) => ({
        day: i + 1,
        available: ![5, 6, 7, 8].includes(i + 1)
      }))
    },
    {
      name: 'Nov 2021',
      days: Array(30).fill(null).map((_, i) => ({
        day: i + 1,
        available: ![6, 7, 8].includes(i + 1)
      }))
    },
    {
      name: 'Dez 2021',
      days: Array(31).fill(null).map((_, i) => ({
        day: i + 1,
        available: ![20, 21, 22].includes(i + 1)
      }))
    }
  ]
}

const prices = [
  { persons: 2, price: 2320.50 },
  { label: 'weitere Personen', price: 80 }
]

const sliderVillas = [
  {
    title: 'Villa Odyssey',
    price: 1960,
    image: villa1Image,
    bedrooms: 4,
    bathrooms: 3,
    area: 240
  },
  {
    title: 'Villa Serenissima',
    price: 1232,
    image: villa2Image,
    bedrooms: 3,
    bathrooms: 2,
    area: 194
  },
  {
    title: 'Villa White Style',
    price: 1484,
    image: villa3Image,
    bedrooms: 4,
    bathrooms: 2,
    area: 220
  },
  {
    title: 'Villa Tropicana',
    price: 1228,
    image: villa1Image,
    bedrooms: 3,
    bathrooms: 2,
    area: 200
  },
  {
    title: 'Villa Royal Sereni Tee',
    price: 1827,
    image: villa2Image,
    bedrooms: 4,
    bathrooms: 3,
    area: 222
  },
  {
    title: 'Villa Brightwater',
    price: 2236,
    image: villa3Image,
    bedrooms: 6,
    bathrooms: 4,
    area: 327
  }
]

// Scroll zu title-container
const scrollToTitle = () => {
  const el = document.querySelector('.title-container')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="villa-detail">
    <!-- Hero Banner -->
    <div class="hero-banner">
      <div class="main-image-container" v-if="villaData.images && villaData.images.length">
        <Transition name="crossfade" mode="out-in">
          <img 
            :key="currentImageIndex"
            :src="villaData.images[currentImageIndex].url" 
            :alt="villaData.name" 
            class="hero-image"
          >
        </Transition>
        <button class="view-all-photos-button" @click="openImagePopup">
          <span class="view-all-photos-icon-bg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9V5a2 2 0 0 1 2-2h4" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 15v4a2 2 0 0 1-2 2h-4" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 9V5a2 2 0 0 0-2-2h-4" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 15v4a2 2 0 0 0 2 2h4" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="view-all-photos-text">Alle Bilder anzeigen</span>
        </button>
        <!-- Chevron Button -->
        <button class="chevron-down-btn" @click="scrollToTitle" aria-label="Nach unten scrollen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="thumbnail-gallery">
        <div 
          v-for="(image, index) in villaData.images" 
          :key="index"
          class="thumbnail"
          :class="{ active: currentImageIndex === index }"
          @click="changeMainImage(index)"
        >
          <img :src="image.url" :alt="villaData.name">
        </div>
      </div>
    </div>

    <!-- Title Container jetzt außerhalb der hero-banner -->
    <div class="title-container">
      <div class="title-content max-width">
        <h1>{{ villaData?.name }}</h1>
        <div class="rating-price">
          <div class="rating">
            <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= villa.rating }">★</span>
          </div>
          <div class="price">
            ab {{ villaData?.price_from }}
            <span class="price-note">inklusive 2 Personen / Woche</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="main-content">
      <!-- Features -->
      <div class="features">
        <div class="max-width">
          <div class="features-grid">
            <div class="feature">
              <img :src="bedIcon" alt="bedIcon" class="feature-icon">
              <span class="feature-label" v-if="villaData && villaData.highlights">{{ villaData.highlights.bedrooms_count }} SCHLAFZIMMER</span>
            </div>
            <div class="feature">
              <img :src="bathIcon" alt="bathIcon" class="feature-icon">
              <span class="feature-label" v-if="villaData && villaData.highlights">{{ villaData.highlights.bathrooms_count }} BADEZIMMER</span>
            </div>
            <div class="feature">
              <img :src="homeIcon" alt="homeIcon" class="feature-icon">
              <span class="feature-label" v-if="villaData && villaData.highlights">{{ villaData.highlights.living_area }} M² FLÄCHE</span>
            </div>
            <div class="feature">
              <img :src="compassIcon" alt="compassIcon" class="feature-icon">
              <span class="feature-label" v-if="villaData && villaData.highlights">POOL {{ villaData.highlights.pool_orientation.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar and Price Section -->
      <div class="booking-container">
        <div class="max-width">
          <div class="booking-grid">
            <!-- Calendar Section -->
            <div class="calendar-section">
              <h2>Reisedatum</h2>
              <div class="calendar-grid">
                <div v-for="month in calendar.months" :key="month.name" class="month">
                  <h3>{{ month.name }}</h3>
                  <div class="calendar">
                    <div class="weekdays">
                      <span>Mo</span>
                      <span>Di</span>
                      <span>Mi</span>
                      <span>Do</span>
                      <span>Fr</span>
                      <span>Sa</span>
                      <span>So</span>
                    </div>
                    <div class="days">
                      <div 
                        v-for="day in month.days" 
                        :key="day.day"
                        class="day"
                        :class="{ 'not-available': !day.available }"
                      >
                        {{ day.day }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Price Section -->
            <div class="price-section">
              <h2>Preise</h2>
              <div class="price-info">
                <div class="price-table">
                  <div>Basic price: {{ villaData?.prices?.base_price }}</div>
                  <div>Other people {{ villaData?.prices?.additional_person }}</div>
                  <div>Rental conditions</div>
                  <div>{{ villaData?.prices?.incl_taxes }} {{ villaData?.prices?.high_season_discount?.label }}</div>
                </div>
              <button class="book-button">Auswahl bestätigen</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overview and Amenities Section -->
      <section class="overview-amenities">
        <div class="max-width">
          <div class="overview-amenities-grid">
            <div class="overview-section">
              <h2>Übersicht</h2>
              <div class="overview-details" v-if="villaData && villaData.highlights">
                <h3>Baujahr: {{ villaData.highlights.build_year }}</h3>
                <h3>Zuletzt renoviert: {{ villaData.highlights.lat_renovation }}</h3>
                <h3>Wohnfläche: {{ villaData.highlights.living_area }} m²</h3>
              </div>
              <div class="overview-description" v-if="villaData && villaData.description">
                {{ villaData.description.text }}
              </div>
            </div>

            <div class="amenities-section">
              <h2>Ausstattung</h2>
              <div class="amenities-accordion">
                <div class="accordion-item">
                  <div class="accordion-header active">
                    <h3>Highlights</h3>
                    <span class="accordion-icon">▼</span>
                  </div>
                  <div class="accordion-content show">
                    <ul class="amenities-list">
                      <li>Ausrichtung Pool: Ost</li>
                      <li>3 Schlafzimmer / 6 Personen</li>
                      <li>3 Badezimmer, 3 WC/Toiletten</li>
                      <li>Solar-Heizung Pool</li>
                      <li>Baumralle</li>
                      <li>Nespresso Kaffeemaschine</li>
                      <li>elektrisch-beheizbarer Pool</li>
                      <li>Fahrrad</li>
                    </ul>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-header">
                    <h3>Badezimmer</h3>
                    <span class="accordion-icon">▶</span>
                  </div>
                  <div class="accordion-content">
                    <ul class="amenities-list">
                      <li>Dusche</li>
                      <li>Badewanne</li>
                      <li>Haartrockner</li>
                      <li>Handtücher</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Walkthrough Section -->
      <section class="walkthrough-section">
        <div class="walkthrough-container">
          <div class="max-width">
            <h2 class="section-title-left">Walktrough {{ villaData?.name }}</h2>
          </div>
          <div class="walkthrough-preview" v-if="villaData.videos && villaData.videos.length">
            <img :src="villaData.videos[0].preview" alt="Villa Walkthrough">
            <a :href="villaData.videos[0].url" class="play-button">
              <span class="play-icon">▶</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <div class="content-section">
        <div class="max-width">
          <div class="location-content">
            <div class="location-text">
              <h2>Location of {{ villaData.name }}</h2>
              <p>{{ villa.location.description }}</p>
            </div>
            <div class="location-image" v-if="villaData && villaData.geocode">
              <VillaMap :lat="villaData?.geocode.latitude" :lng="villaData?.geocode.longitude" :villaId="villaId" />
            </div>
          </div>
        </div>
      </div>

      <div class="max-width">
        <!-- Boats Section -->
        <section class="boats-section full-width-section">
          <div class="pattern-overlay"></div>
          <div class="max-width">
            <h2 class="section-title-left text-white">Zusätzliche Buchung von Booten</h2>
            <div class="boats-grid">
              <!-- Boat Card 1 -->
              <div class="boat-card" v-for="boat in villaData.boats">
                <div class="boat-image">
                  <img :src="boat.images[0].url" :lt="boat.model">
                  <div class="boat-info">
                    <h2>{{boat.model}}</h2>
                    <div class="price">from ${{ boat.teaser_price[1].value }} for booking for {{boat.teaser_price[0]}} days</div>
                  </div>
                </div>
              </div>
            </div>
              
            <div class="center-button">
              <a href="/boote" class="show-all-button">Alle Boote anzeigen</a>
            </div>
          </div>
        </section>

        <!-- Villa Slider Section -->
        <section class="slider-villas full-width-section">
          <div class="pattern-background"></div>
          <div class="max-width">
            <h2 class="section-title-left">Weitere Villen</h2>
            <VillaSlider :villas="villaData.other_villas" />
            <div class="center-button">
              <a href="/ferienhaus-cape-coral" class="show-all-button">Alle Villen anzeigen</a>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Full-screen Image Popup -->
    <Transition name="fade">
      <div v-if="showImagePopup" class="image-popup-overlay">
        <div class="image-popup-content">
          <button class="close-popup-button" @click="closeImagePopup">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="popup-image-grid">
            <div 
              v-for="(image, index) in allVillaImages"
              :key="index"
              :class="{'popup-large-image-wrapper': index % 3 === 0, 'popup-small-image-wrapper': index % 3 !== 0}"
              class="popup-image-wrapper"
            >
              <img :src="image.src" :alt="image.alt">
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.villa-detail {
  width: 100%;
}

.max-width {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.main-content {
  width: 100%;
}

.hero-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

/* Crossfade transition for image switching */
.crossfade-enter-active,
.crossfade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}

.crossfade-enter-to,
.crossfade-leave-from {
  opacity: 1;
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.thumbnail-gallery {
  position: absolute;
  top: 50%;
  right: 4rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 2;
  height:500px;
  overflow: hidden;
}

.thumbnail {
  width: 100px;
  height: 70px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.thumbnail:hover {
  opacity: 1;
}

.thumbnail.active {
  border-color: white;
  opacity: 1;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.view-all-photos-button {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: transparent;
  color: #fff;
  padding: 0;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 500;
  z-index: 10;
  box-shadow: none;
  transition: none;
}

.view-all-photos-text {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}

.view-all-photos-icon-bg {
  background: #fff;
  border-radius: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-all-photos-icon-bg svg {
  display: block;
}

/* Image Popup Styles */
.image-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.image-popup-content {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
  padding: 80px;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  box-sizing: border-box;
}

.close-popup-button {
  position: fixed;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  color: #333;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1001;
  padding: 5px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.close-popup-button svg {
  width: 48px;
  height: 48px;
}

.popup-image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  align-items: flex-start;
}

.popup-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 0;
}

.popup-image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popup-large-image-wrapper {
  flex: 1 1 100%;
  padding-top: 40%;
}

.popup-small-image-wrapper {
  flex: 1 1 calc(50% - 15px);
  padding-top: 40%;
}

.popup-image-grid img {
  height: 100%;
}

.popup-main-image, 
.popup-main-image img,
.popup-thumbnails,
.popup-thumbnails::-webkit-scrollbar,
.popup-thumbnails::-webkit-scrollbar-thumb,
.popup-thumbnails::-webkit-scrollbar-track,
.popup-thumbnail-item,
.popup-thumbnail-item.active,
.popup-thumbnail-item img {
  display: none;
}

.title-container {
  position: relative;
  width: 100%;
  background: white;
  z-index: 3;
}

.title-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}

.title-content h1 {
  font-size: 2.5rem;
}

.features {
  background-color: #d4cac1;
  padding: 4rem 2rem;
  width: 100%;
}

.features-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.feature {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.feature-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.feature-label {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  font-family: var(--font-body);
  text-transform: uppercase;
}

.rating-price {
  display: block;
  text-align: end;
  gap: 2rem;
}

.rating .star {
  color: #ffd700;
  font-size: 2rem;
}

.rating .star.filled {
  color: #ffd700;
}

.price {
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--font-body);
  color: var(--primary-color);
  line-height: 1.5;
}

.price-note {
  font-size: 1rem;
  opacity: 0.8;
  margin-left: 0.5rem;
  font-family: var(--font-body);
  line-height: 1.5;
}

.content-sections {
  margin: 4rem 0;
}

.content-section {
  padding: 4rem 0;
  background: #fff;
}

.location-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.location-text h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.location-text p {
  line-height: 1.5;
  color: #333;
  white-space: pre-line;
  font-family: var(--font-body);
  font-size: 1rem;
}

.location-image img {
  width: 100%;
  height: auto;
}

.booking-container {
  padding: 4rem 0;
  background: white;
}

.booking-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.calendar-section {
  background: white;
  padding: 2rem;
  border: 1px solid #eee;
  align-content: center;
}

.calendar-section h2,
.price-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.month h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.calendar {
  background: white;
  border: 1px solid #eee;
  padding: 0.5rem;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 0.2rem;
  font-size: 0.75rem;
  color: #666;
  font-weight: bold;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.2rem;
}

.day {
  text-align: center;
  padding: 0.2rem;
  font-size: 0.8rem;
  min-width: 1.2rem;
  min-height: 1.2rem;
}

.day.not-available {
  background: #ffebee;
  color: #d32f2f;
}

.price-section {
  background: white;
  padding: 2rem;
  border: 1px solid #eee;
  height: 100%;
}

.price-info p {
  color: #666;
  margin-bottom: 1.5rem;
}

.price-table {
  margin-bottom: 2rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.price-row span:first-child {
  font-weight: 700;
}

.price-note {
  margin-top: 1rem;
  color: #666;
  line-height: 1.4;
}

.book-button {
  width: 100%;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.book-button:hover {
  opacity: 0.9;
}

.cta-section {
  text-align: center;
  margin: 4rem 0;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 14px;
  font-size: 1.1rem;
  transition: opacity 0.3s;
  font-family: var(--font-body);
}

.cta-button:hover {
  opacity: 0.9;
}

.feedback-section {
  margin: 4rem 0;
  padding: 4rem 0;
  background: #f5f5f5;
  width: 100%;
}

.feedback-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary-color);
  font-size: 2rem;
}

.feedback-slider {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.feedback-navigation {
  position: absolute;
  top: 50%;
  left: -3rem;
  right: -3rem;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.nav-button {
  background: var(--white);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: opacity 0.3s;
}

.nav-button:hover {
  opacity: 0.8;
}

.feedback-cards {
  display: flex;
  gap: 2rem;
  overflow: hidden;
}

.feedback-card {
  flex: 0 0 calc(50% - 1rem);
  background: var(--white);
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.review-rating {
  margin-bottom: 1rem;
}

.review-text {
  line-height: 1.6;
}

.feedback-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ddd;
  cursor: pointer;
}

.dot.active {
  background: var(--primary-color);
}

.show-all-button {
  display: block;
  margin: 3rem auto 0;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.virtual-tour-section {
  padding: 4rem 0;
  width: 100%;
}

.virtual-tour-section .room-button {
  background: transparent;
  border: 1px solid #d4cac1;
  color: #d4cac1;
}

.virtual-tour-section .room-button:hover {
  background: #d4cac1;
  color: var(--primary-color);
}

.tour-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: stretch;
  min-height: 500px;
}

.tour-image {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.tour-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-buttons {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.buttons-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.room-button {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid #d4cac1;
  color: #d4cac1;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.room-button:hover {
  background: #d4cac1;
  color: var(--primary-color);
}

.section-title-left {
  text-align: left;
  margin-bottom: 3rem;
  color: var(--primary-color);
  font-size: 2rem;
}

.walkthrough-section {
  padding: 4rem 0;
  background: white;
  overflow: hidden;
}

.walkthrough-container {
  width: 100%;
}

.walkthrough-preview {
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
}

.walkthrough-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: var(--primary-color);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration:none
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
  color: white;
  font-size: 2rem;
  margin-left: 5px;
}

@media (max-width: 1200px) {
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 992px) {
  .thumbnail-gallery {
    right: 1rem;
  }
  
  .thumbnail {
    width: 80px;
    height: 56px;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: auto;
    min-height: unset;
  }

  .hero-image {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  .thumbnail-gallery {
    position: static;
    transform: none;
    flex-direction: row;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 0.75rem;
    justify-content: flex-start;
    margin: 0;
  }

  .thumbnail {
    width: 80px;
    height: 60px;
    flex: 0 0 auto;
    margin: 0;
  }

  .title-container {
    margin-top: 0;
  }

  .title-content {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
  }

  .title-content h1 {
    margin-bottom: 1rem;
  }

  .rating-price {
    text-align: center;
  }

  .image-popup-content {
    padding: 20px;
    gap: 15px;
  }

  .close-popup-button {
    top: 20px;
    right: 20px;
    font-size: 2rem;
  }

  .close-popup-button svg {
    width: 32px;
    height: 32px;
  }

  .popup-image-grid {
    gap: 15px;
  }

  .popup-large-image-wrapper,
  .popup-small-image-wrapper {
    flex: 1 1 100%;
    padding-top: 40%;
  }
}

@media (max-width: 480px) {
  .hero-image {
    height: 70vh;
  }

  .thumbnail {
    width: 70px;
    height: 50px;
  }

  .title-content {
    padding: 1rem;
  }
}

.full-width-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 4rem 0;
}

.boats-section {
  position: relative;
  overflow: hidden;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
}

.pattern-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-color);
  opacity: 0.85;
}

.boats-section .max-width {
  position: relative;
  z-index: 2;
}

.boats-section .section-title-left {
  color: white;
}

.boats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.boat-card {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.boat-card:hover {
  transform: translateY(-5px);
}

.boat-image {
  position: relative;
  padding-top: 85%;
  overflow: hidden;
}

.boat-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.boat-info {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.75rem 1rem;
  max-width: calc(100% - 30px);
}

.boat-info h2 {
  font-size: 0.95rem;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.price {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
  font-family: var(--font-body);
  line-height: 1.5;
}

.specs {
  font-size: 1rem;
  opacity: 0.9;
  color: var(--primary-color);
  font-family: var(--font-body);
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .boats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .boat-info {
    padding: 0.75rem;
    bottom: 12px;
    left: 12px;
  }
  
  .boat-info h2 {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .boats-grid {
    grid-template-columns: 1fr;
  }

  .boats-section {
    padding: 2rem 0;
  }
}

.slider-villas {
  position: relative;
  padding: 8rem 0 4rem;
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  .slider-villas {
    order: -1;
    margin-top: -4rem;
    position: relative;
    z-index: 10;
  }

  .main-content {
    display: flex;
    flex-direction: column;
  }

  .boats-section {
    order: 1;
  }
}

.pattern-background {
  display: none;
}

.boats-section .section-title-left,
.slider-villas .section-title-left {
  text-align: center;
  margin-bottom: 3rem;
}

.overview-amenities {
  padding: 4rem 0;
  background-color: white;
}

.overview-amenities-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.overview-section h2,
.amenities-section h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 400;
}

.overview-details {
  margin-bottom: 2rem;
}

.overview-details h3 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 400;
}

.overview-description p {
  color: var(--primary-color);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: var(--font-body);
}

.amenities-accordion {
  border: 1px solid #d4cac1;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #d4cac1;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  padding: 1rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.accordion-header h3 {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 500;
  margin: 0;
}

.accordion-icon {
  color: var(--primary-color);
  font-size: 0.8rem;
}

.accordion-content {
  padding: 1rem;
  background-color: white;
  display: none;
}

.accordion-content.show {
  display: block;
}

.amenities-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 2rem;
}

.amenities-list li {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: var(--font-body);
  line-height: 1.5;
}

.amenities-list li::before {
  content: "✓";
  margin-right: 0.5rem;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .overview-amenities-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .amenities-list {
    grid-template-columns: 1fr;
  }

  .overview-details h3 {
    font-size: 1.5rem;
  }
}

.main-color-bg {
  background-color: var(--primary-color);
}

.text-white {
  color: white !important;
}

.center-button {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.show-all-button {
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show-all-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .show-all-button {
    width: 100%;
  }
}

/* Booking Grid Styles */
.booking-grid {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 2rem;
}

@media (max-width: 1024px) {
  .booking-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .calendar-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .calendar-grid {
    grid-template-columns: 1fr;
  }

  .calendar-section,
  .price-section {
    padding: 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

/* Virtual Tour Section */
.tour-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: stretch;
  min-height: 500px;
}

@media (max-width: 1024px) {
  .tour-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }

  .tour-image {
    aspect-ratio: 16/9;
  }

  .room-buttons {
    padding: 1rem 0;
  }
}

/* Location Content */
.location-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 1024px) {
  .location-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .location-text {
    order: -1;
  }

  .location-image img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
  }
}

@media (max-width: 768px) {
  .location-image img {
    max-height: 300px;
  }
}

.chevron-down-btn {
  position: absolute;
  right: 32px;
  bottom: 20px;
  width: 36px;
  height: 36px;
  border-radius: 0;
  background: transparent;
  border: 2px solid #fff;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: none;
  z-index: 20;
}
.chevron-down-btn:hover {
  border-color: #fff;
}
.chevron-down-btn svg {
  display: block;
  stroke: #fff;
  fill: none;
}
</style> 