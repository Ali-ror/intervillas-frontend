<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import {useI18n} from 'vue-i18n'
import Datepicker from '@vuepic/vue-datepicker'
import { useRouter } from 'vue-router'
import '@vuepic/vue-datepicker/dist/main.css'
// import VillaCard from '../components/VillaCard.vue'
import VillaSlider from '../components/VillaSlider.vue'
import backgroundVideo from '../assets/Intervillas_V2.mp4'
import intervillasPattern from '../assets/intervillas-pattern.png'
import logo from '../assets/intervillas-logo.png'
import xandau1 from '../assets/xandau-1.jpg'
import xandau2 from '../assets/xandau-2.jpg'
import xandau3 from '../assets/xandau-3.jpg'
import xandau4 from '../assets/xandau-4.jpg'
import xandau5 from '../assets/xandau-5.jpg'
import xandau6 from '../assets/xandau-6.jpg'
import xandau9 from '../assets/xandau-9.jpg'
import retoPavoni from '../assets/reto-bild.jpeg'
import villa1 from '../assets/villa-1.jpg'
import villa2 from '../assets/villa-2.jpg'
import villa3 from '../assets/villa-3.jpg'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const currentIndex = ref(0)
const currentTestimonialIndex = ref(0)
const currentVillaIndex = ref(0)
const currentSlide = ref(0)
const reviews = ref([]);
const villas = ref([])
const dateRange = ref([new Date(), new Date(new Date().setDate(new Date().getDate() + 7))])
const people = ref(2)
const rooms = ref(2)
const {t} = useI18n()

// const villas = [
//   {
//     id: 'magic-summer',
//     title: 'Villa Magic Summer',
//     price: 1610,
//     image: villa1,
//     bedrooms: 3,
//     bathrooms: 3,
//     area: 230
//   },
//   {
//     id: 'bermuda',
//     title: 'Villa Bermuda',
//     price: 1470,
//     image: villa2,
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 172
//   },
//   {
//     id: 'laguna',
//     title: 'Villa Laguna',
//     price: 2730,
//     image: villa3,
//     bedrooms: 3,
//     bathrooms: 3,
//     area: 185
//   },
//   {
//     id: 'odyssey',
//     title: 'Villa Odyssey',
//     price: 1960,
//     image: villa1,
//     bedrooms: 4,
//     bathrooms: 3,
//     area: 240
//   },
//   {
//     id: 'serenissima',
//     title: 'Villa Serenissima',
//     price: 1232,
//     image: villa2,
//     bedrooms: 3,
//     bathrooms: 2,
//     area: 194
//   },
//   {
//     id: 'white-style',
//     title: 'Villa White Style',
//     price: 1484,
//     image: villa3,
//     bedrooms: 4,
//     bathrooms: 2,
//     area: 220
//   }
// ]

const sliderImages = [
  xandau1,
  xandau2,
  xandau3,
  xandau4,
  xandau5,
  xandau6
]

onMounted(async () => {
  const response = await axios.get('${process.env.VILLA_API_BASE_URL}/reviews.json', {params: {page: 1}});
  if(response) {
    reviews.value = response.data
  }
  const res = await axios.get('${process.env.VILLA_API_BASE_URL}/ferienhaus-cape-coral');
  if(response) {
    villas.value = res.data
  }
})

const handleHomepaegSearch = () => {
  const [startDate, endDate] = dateRange.value || []
  if(!startDate || !endDate) return
  router.push({
    name: 'ferienhaus',
    query: {
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
      people: people.value,
      rooms: rooms.value
    }
  })
}

const nextImage = () => {
  if (currentIndex.value < sliderImages.length - 3) {
    currentIndex.value++
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const totalSlides = computed(() => Math.max(0, sliderImages.length - 2))

const playVideo = () => {
  // Hier können Sie die Video-Funktionalität implementieren
  console.log('Video abspielen')
}

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % 12
}

const previousTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + 12) % 12
}

const nextVilla = () => {
  if (currentVillaIndex.value < villas.length - 1) {
    currentVillaIndex.value++
  }
}

const previousVilla = () => {
  if (currentVillaIndex.value > 0) {
    currentVillaIndex.value--
  }
}

// const reviews = [
//   {
//     title: 'Villa Penelope',
//     author: 'E.Thompson',
//     date: 'Pittsburgh/PA 08.12.2024',
//     rating: 5,
//     text: 'We stayed at Penelope for 5 nights. It\'s a beautiful house. It\'s very nice clean the villa. The interior is very thoughtfully designed and the furniture and bedding is excellent. The owners have really thought of everything and spared no expense. The pool and outdoor space is perfect for entertaining a family or group. It really is a wonderful place to stay and we highly recommend it. If we return to Cape Coral it will be to stay here again.',
//     backgroundImage: xandau1
//   },
//   {
//     title: 'Villa Incredible',
//     author: 'Lopez',
//     date: 'Sydney/AU 12.10.2024',
//     rating: 5,
//     text: 'we loved villa incredible the house matched the pictures and the description and for the most part we felt right at home. we were a bit surprised when a property manager visited us to check on us and make sure everything was OK which interrupted the family breakfast.',
//     backgroundImage: xandau2
//   },
//   {
//     title: 'Villa Bermuda',
//     author: 'M.Schmidt',
//     date: 'Berlin/DE 15.11.2024',
//     rating: 5,
//     text: 'Traumhafte Villa mit perfekter Ausstattung. Der Pool und die Terrasse sind ein absolutes Highlight. Die Betreuung vor Ort war ausgezeichnet und sehr professionell. Wir kommen definitiv wieder!',
//     backgroundImage: xandau3
//   },
//   {
//     title: 'Villa Laguna',
//     author: 'R.Johnson',
//     date: 'London/UK 03.01.2024',
//     rating: 5,
//     text: 'Exceptional property with stunning water views. The villa exceeded our expectations in every way. Perfect for a family vacation with plenty of space and all amenities you could need.',
//     backgroundImage: xandau4
//   },
//   {
//     title: 'Villa Serenity',
//     author: 'A.Dubois',
//     date: 'Paris/FR 22.12.2024',
//     rating: 5,
//     text: 'Une villa magnifique avec une vue imprenable. Le service était impeccable et l\'emplacement parfait. Nous avons passé des vacances inoubliables.',
//     backgroundImage: xandau5
//   },
//   {
//     title: 'Villa Paradise',
//     author: 'H.Müller',
//     date: 'München/DE 05.01.2024',
//     rating: 5,
//     text: 'Ein wahres Paradies! Die Villa ist perfekt ausgestattet und die Lage direkt am Wasser ist einmalig. Der Service war erstklassig und sehr zuvorkommend.',
//     backgroundImage: xandau6
//   }
// ]

const nextSlide = () => {
  if (currentSlide.value < reviews.value.length - 2) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}
</script>

<template>
  <div class="hero-banner">
    <video class="background-video" autoplay loop muted playsinline>
      <source :src="backgroundVideo" type="video/mp4">
    </video>
    <div class="overlay"></div>
    <div class="hero-content">
      <form class="search-form" @submit.prevent="handleHomepaegSearch">
        <div class="form-group">
          <label>{{ t('home.search_date_range') }}</label>
          <div class="date-inputs">
            <Datepicker
              v-model="dateRange"
              range
              :enable-time-picker="false"
              placeholder="Zeitraum auswählen"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group">
          <label>{{ t('home.search_people') }}</label>
          <select class="form-control" v-model="people">
            <option value="">Bitte auswählen</option>
            <option value="2">2 Personen</option>
            <option value="3">3 Personen</option>
            <option value="4">4 Personen</option>
            <option value="5">5+ Personen</option>
          </select>
        </div>
        <div class="form-group">
          <label>{{ t('home.search_rooms') }}</label>
          <select class="form-control" v-model="rooms">
            <option value="2">mind. 2</option>
            <option value="3">mind. 3</option>
            <option value="4">mind. 4</option>
            <option value="5">mind. 5</option>
          </select>
        </div>
        <button type="submit" class="search-button">{{ t('home.search') }}</button>
      </form>
    </div>
  </div>

  <section class="company-intro">
    <div class="intro-content">
      <div class="intro-image">
        <img :src="xandau9" alt="Villa Xandau">
      </div>

      <div class="slider-section">
        <div class="waiting-section">
          <div class="waiting-text">
            <h2>Florida is <br> waiting for you</h2>
            <p>Entdecken Sie exklusive Villen in Florida – ein Inbegriff von 
            Eleganz, Privatsphäre und unvergesslichem Luxus. Erleben Sie 
            den Zauber eines anspruchsvollen Rückzugsorts mit exquisitem 
            Design, atemberaubenden Panoramen und einer Atmosphäre, 
            die keine Wünsche offenlässt. Ihr perfekter Urlaub beginnt hier.</p>
          </div>
          <div class="profile-image">
            <img :src="retoPavoni" alt="Reto Pavoni">
          </div>
        </div>

        <div class="image-slider">
          <div class="slider-container">
            <div class="slider-images" :style="{ '--slider-index': currentIndex }">
              <div v-for="(image, index) in sliderImages" 
                   :key="index" 
                   class="slider-image-container">
                <img :src="image" 
                     :alt="'Villa Xandau ' + (index + 1)"
                     class="slider-image">
              </div>
            </div>
            
            <div class="slider-arrows">
              <button class="slider-arrow prev" 
                      @click="previousImage"
                      :disabled="currentIndex === 0">&lt;</button>
              <button class="slider-arrow next" 
                      @click="nextImage"
                      :disabled="currentIndex >= sliderImages.length - 3">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="search-banner">
    <div class="search-banner-bg">
      <div class="overlay"></div>
    </div>
    <div class="search-banner-content">
      <h2>{{t('home.book_villa')}}</h2>
      <form class="search-form" @submit.prevent="handleHomepaegSearch">
        <div class="form-group">
          <label>{{t('home.search_date_range')}}</label>
          <div class="date-inputs">
            <Datepicker
              v-model="dateRange"
              range
              :enable-time-picker="false"
              placeholder="Zeitraum auswählen"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group">
          <label>{{ t('home.search_people') }}</label>
          <select class="form-control" v-model="people">
            <option value="">Bitte auswählen</option>
            <option value="2">2 Personen</option>
            <option value="3">3 Personen</option>
            <option value="4">4 Personen</option>
            <option value="5">5+ Personen</option>
          </select>
        </div>
        <div class="form-group">
          <label>{{ t('home.search_rooms') }}</label>
          <select class="form-control" v-model="rooms">
            <option value="2">mind. 2</option>
            <option value="3">mind. 3</option>
            <option value="4">mind. 4</option>
            <option value="5">mind. 5</option>
          </select>
        </div>
        <button type="submit" class="search-button">{{ t('home.search') }}</button>
      </form>
    </div>
  </section>

  <section class="why-intervillas">
    <div class="container">
      <h2>{{t('home.villa_intro_headline')}}</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <img src="@/assets/happy-icon.png" alt="Kunden Icon">
          </div>
          <h3>{{ t('home.villa_intro1_title') }}</h3>
          <p>{{t('home.villa_intro1_text')}}</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <img src="@/assets/villa-icon.png" alt="Villen Icon">
          </div>
          <h3>{{t('home.villa_intro2_title')}}</h3>
          <p>{{ t('home.villa_intro2_text') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <img src="@/assets/administration-icon.png" alt="Administration Icon">
          </div>
          <h3>{{ t('home.villa_intro3_title') }}</h3>
          <p>{{ t('home.villa_intro3_text') }}</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <img src="@/assets/handschlag-icon.png" alt="Betreuung Icon">
          </div>
          <h3>{{t('home.villa_intro4_title')}}</h3>
          <p>{{ t('home.villa_intro4_text') }}</p>
        </div>
      </div>
      <div class="cta-buttons">
        <a href="/ferienhaus-cape-coral" class="btn">alle Villen anzeigen</a>
        <a href="/last-minute" class="btn">zu den Last-Minute-Angeboten</a>
      </div>
    </div>
  </section>

  <!-- Reviews Section -->
  <section class="reviews-section">
    <div class="reviews-container">
      <div class="reviews-slider">
          <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
            <div v-for="(review, index) in reviews" :key="index" class="review-slide">
              <div class="review-content">
                <div class="review-background" :style="{ backgroundImage: `url(${review.main_image})` }">
                  <div class="review-card">
                    <div class="review-header">
                      <a :href="review.villa_path"><h3>{{ review.villa_name }}</h3></a>
                      <div class="review-meta">
                        <span class="review-author">{{ review.name }} - {{ review.city }}</span>
                        <span class="review-date">{{ review.published_on }}</span>
                      </div>
                      <div class="review-rating">
                        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= review.rating }">★</span>
                      </div>
                    </div>
                    <p class="review-text" v-html="review.text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="slider-arrow prev" @click="prevSlide" :disabled="currentSlide === 0">
          <div class="arrow-circle">
            <ChevronLeftIcon class="arrow-icon" />
          </div>
        </button>
        <button class="slider-arrow next" @click="nextSlide" :disabled="currentSlide >= reviews.value?.length - 2">
          <div class="arrow-circle">
            <ChevronRightIcon class="arrow-icon" />
          </div>
        </button>
    </div>
  </section>

  <section class="info-blocks">
    <div class="container">
      <div class="info-block">
        <div class="text-content">
          <h2>Luxuriöser Urlaub in Cape Coral – Erholung und Abenteuer vereint</h2>
          <p>Cape Coral, bekannt als das "Venice Florida", bietet Urlaubern ein perfektes Maß aus Erholung und Freizeitmöglichkeiten. Mit über 600 Kilometer Kanälen und Wasserflächen vereinigt Sie eine beeindruckende Auswahl an Ferienhäusern in traumhafter Lage direkt am Wasser. Die Familienhäuser, Villen, Golfern, Singles oder einfach nur entspannen - Cape Coral lässt keine Wünsche offen. Als lebenswürdige zweitgrößte Stadt Floridas bietet es zahlreiche Möglichkeiten zum Shoppen, Bummeln, Essen gehen und Sightseeing. Gleichzeitig genießen Sie die Ruhe und Abgeschiedenheit in Ihrer Villa.</p>
          <p>Viele Villen verfügen über beheizten Pool, großzügige Wohnbereiche, moderne Küchen und schöne Außenbereiche. Komfort steht an erster Stelle. WLAN, hochwertige Unterhaltungselektronik und viel ausgestattete Räume sind Standard.</p>
        </div>
        <div class="image-content">
          <img :src="xandau4" alt="Luxuriöse Villa mit Meerblick">
        </div>
      </div>

      <div class="info-block reverse">
        <div class="text-content">
          <h2>Warum nicht ein Ferienhaus in Cape Coral mit Boot mieten?</h2>
          <p>Wer in Cape Coral Urlaub macht, sollte sich die Gelegenheit nicht entgehen lassen. Hier finden Sie eine unvergleichliche Auswahl. Zahlreiche Villen verfügen über einen eigenen Liegeplatz am Kanal, eigenem Pool und privatem Bootssteg. Perfekt, um ein Boot dazu zu mieten und die vielfältigen Wasserwege Floridas zu erkunden oder auf unzähligen Inseln inmitten dem Alltag zu entfliehen.</p>
          <p>Als Anlaufziele wie Intracoastal Parade sind Sie auf der sicheren Seite. Herrliches Golf- und Angelerlebnis garantiert. Auch die Strände von Fort Myers Beach und Sanibel Island sind beliebte Ausflugsziele.</p>
          <p>Gönnen Sie sich dieses besondere Erlebnis.</p>
          <p>Ein Ferienhaus in Cape Coral mit Boot macht Ihren Traumurlaub komplett!</p>
          <a href="#" class="btn">Mehr erfahren</a>
        </div>
        <div class="image-content">
          <img :src="xandau5" alt="Boot am Steg">
        </div>
      </div>

      <div class="info-block">
        <div class="text-content">
          <h2>Ferienhaus in Cape Coral bequem online buchen – auch auf Deutsch</h2>
          <p>Für deutschsprachige Urlauber bietet Intervillas Florida einen herausragenden Service. Die Buchung eines Ferienhauses oder einer Villa in Cape Coral kann sicher und bequem auf Deutsch erfolgen, inklusive einer deutschsprachigen Betreuung. Mit einem breiten Portfolio an luxuriösen und gepflegten Villen, die meist direkt am Wasser liegen, finden Sie garantiert Ihr Traumdomizil.</p>
          <p>Von komfortablen Villen mit 180 m² und 4 Schlafzimmern bis hin zu großzügigen Anwesen mit 400 m² & Schlafzimmern und 5 Metern – für jeden Anspruch gibt es das passende Ferienhaus. Was es besonders Highlights sucht, kann ein Ferienhaus mit eigenem Boot mieten. Dafür stehen spezielle Objekte zur Verfügung. Auch ein Skipper für das Boot ist buchbar.</p>
          <p>Luxus-Living - Intervillas steht ihnen hierbei beratend und deutschsprachig zur Verfügung, mit ihrem Außenbüro in Florida umfassend zu machen. Buchen Sie Ihre Traumvilla und erleben Sie einen Urlaub voller Luxus und Freiheit!</p>
          <a href="#" class="btn">Mehr erfahren</a>
        </div>
        <div class="image-content">
          <img :src="xandau6" alt="Luxuriöses Interieur">
        </div>
      </div>
    </div>
  </section>

  <!-- Villa Slider Section -->
  <section class="slider-villas full-width-section">
    <div class="pattern-background"></div>
    <div class="container">
      <h2 class="section-title-left">Weitere Villen</h2>
      <VillaSlider :villas="villas" />
    </div>
  </section>
</template>

<style scoped>
div[data-datepicker-instance] {
  padding:6px
}
::v-deep(.dp__input) {
  background: transparent !important;
  border: none !important;
  color: white !important;
}
a {
  text-decoration: none;
}
.hero-banner {
  width: 100%;
  height: 110vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-top: -80px;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  width: 100%;
  max-width: 1400px;
  text-align: center;
  padding: 0 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 200px;
}

.hero-logo {
  width: 300px;
  height: auto;
  margin: 0;
  margin-top: 35vh;
  margin-bottom: auto;
}

.search-form {
  max-width: 1400px;
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
  margin-bottom: 100px;
  padding: 2rem;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-family: 'Quicksand', sans-serif;
  color: var(--white);
  text-align: left;
}

.date-inputs {
  display: flex;
  gap: 1rem;
}

.date-inputs .form-control {
  width: 100%;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--white);
  background: transparent;
  color: var(--white);
  border-radius: 14px;
  font-family: 'Quicksand', sans-serif;
}

.form-control::placeholder {
  color: var(--white);
}

.form-control option {
  background: var(--primary-color);
  color: var(--white);
}

.search-button {
  background: var(--white);
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;
  font-family: 'Quicksand', sans-serif;
  height: 45px;
  opacity: 1;
  font-size: 1rem;
}

.search-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0;
  }

  .hero-logo {
    width: 200px;
    margin-top: 25vh;
  }

  .search-form {
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    padding: 1.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  .search-form .form-group {
    width: 100%;
  }

  .search-form .date-inputs {
    flex-direction: column;
    gap: 1rem;
  }

  .search-form .date-inputs .form-control {
    width: 100%;
  }

  .search-form .search-button {
    width: 100%;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.header.scrolled {
  background-color: var(--primary-color);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .header {
    background-color: var(--primary-color);
    padding: 0.5rem 1rem;
  }

  .header-content {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

section {
  width: 100%;
  padding: 4rem 0;
}

.container,
.hero-content,
.features-grid,
.showcase-content,
.intro-content,
.testimonials .container,
.info-blocks .container,
.featured-villas .container,
.stats-grid,
.cta-buttons {
  width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}

.villa-showcase {
  padding: 4rem 0;
  background-color: var(--primary-color);
  margin-top: -1px; /* Prevents gap between banner and showcase */
}

.showcase-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-image {
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.featured-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.thumbnail-navigation {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.thumbnails {
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
}

.thumbnail {
  width: 60px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.thumbnail.active {
  opacity: 1;
  box-shadow: 0 0 0 2px var(--white);
}

.nav-button {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0.5rem;
}

.showcase-right {
  color: var(--white);
  padding: 2rem;
  background: rgba(23, 60, 58, 0.9);
  border-radius: 8px;
}

.showcase-right h2 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--white);
  text-align: left;
}

.showcase-right p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 300;
}

.consultant {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.consultant-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.consultant span {
  font-size: 0.9rem;
  opacity: 0.9;
}

.stats-section {
  background-color: var(--primary-color);
  padding: 0 0 4rem 0;
  position: relative;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
}

.stats-grid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
  color: var(--white);
}

.stat-item {
  position: relative;
}

.stat-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -1rem;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  width: 1px;
  background: rgba(255,255,255,0.2);
}

.stat-number {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  line-height: 1.4;
}

.intro {
  text-align: center;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
}

.cta-buttons {
  width: 1400px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: var(--white);
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.3s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.features-grid {
  display: flex;
  width: 1400px;
  margin: 0 auto 4rem auto;
  padding: 0;
}

.feature-item {
  flex: 1;
  text-align: center;
  padding: 2rem;
  position: relative;
  border-right: 1px solid #d4cac1;
}

.feature-item:last-child {
  border-right: none;
}

.feature-item:not(:last-child)::after {
  display: none;
}

.feature-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.feature-item h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-weight: 400;
}

.feature-item p {
  font-size: 1rem;
  font-family: var(--font-body);
  line-height: 1.5;
  color: #666;
  max-width: 280px;
  margin: 0 auto;
}

.cta-buttons .btn {
  padding: 1rem 2rem;
  border-radius: 14px;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: opacity 0.3s;
  text-decoration: none;
  text-align: center;
  background-color: #d4cac1;
  color: var(--primary-color);
  border: none;
  min-width: 200px;
}

@media (max-width: 1440px) {
  .container,
  .hero-content,
  .features-grid,
  .showcase-content,
  .intro-content,
  .testimonials .container,
  .info-blocks .container,
  .featured-villas .container,
  .stats-grid,
  .cta-buttons {
    width: 100%;
    max-width: 1400px;
  }

  .feature-item {
    border-right: none;
  }

  .feature-item:not(:last-child) {
    border-right: 1px solid #d4cac1;
  }
}

@media (max-width: 1024px) {
  .features-grid {
    flex-wrap: wrap;
  }

  .feature-item {
    flex: 0 0 50%;
    border-right: none;
    border-bottom: 1px solid #d4cac1;
  }

  .feature-item:nth-child(odd) {
    border-right: 1px solid #d4cac1;
  }

  .feature-item:nth-child(3),
  .feature-item:nth-child(4) {
    border-bottom: none;
  }
}

@media (max-width: 768px) {
  .features-grid {
    flex-direction: column;
  }

  .feature-item {
    flex: 1;
    border-right: none !important;
    border-bottom: 1px solid #d4cac1;
  }

  .feature-item:last-child {
    border-bottom: none;
  }
}

.villa-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.villa-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.villa-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.villa-info {
  padding: 1.5rem;
}

.villa-info h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.location {
  color: #666;
  font-size: 0.9rem;
}

.price {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0;
}

.price-info {
  font-size: 0.9rem;
  color: #666;
}

.special {
  color: #e74c3c;
  font-weight: 500;
  margin: 0.5rem 0;
}

.villa-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.content-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.content-columns p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

@media (max-width: 1024px) {
  .showcase-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .featured-image {
    height: 400px;
  }

  .showcase-right {
    margin: 0 1rem;
  }

  .showcase-right h2 {
    font-size: 2.5rem;
    text-align: left;
  }

  .showcase-right p {
    text-align: left;
  }

  .consultant {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .search-form {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  .stat-item:nth-child(2n)::after {
    display: none;
  }

  .thumbnail {
    width: 40px;
    height: 30px;
  }

  .showcase-right {
    padding: 1.5rem;
    margin: 0;
    border-radius: 0;
  }

  .showcase-right h2 {
    font-size: 2rem;
  }

  .showcase-right p {
    font-size: 1rem;
  }

  .consultant {
    flex-direction: column;
    align-items: flex-start;
  }

  .consultant-image {
    width: 50px;
    height: 50px;
  }
}

.company-intro {
  padding: 6rem 0;
  background-color: #fff;
  position: relative;
}

.intro-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
}

.intro-image {
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-section {
  width: 100%;
}

.image-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-container {
  position: relative;
  width: 100%;
  padding-top: 25%;
}

.slider-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(calc(-33.333% * var(--slider-index)));
}

.slider-image-container {
  min-width: 33.333%;
  height: 100%;
  padding: 0 5px;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-arrows {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 2;
}

.slider-arrow {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #d4cac1;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.slider-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-arrow:not(:disabled):hover {
  opacity: 0.9;
}

/* Remove dots */
.slider-dots {
  display: none;
}

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .intro-image {
    height: 400px;
  }

  .slider-container {
    padding-top: 60%;
  }
  
  .slider-image-container {
    min-width: 100%;
  }
  
  .slider-images {
    transform: translateX(calc(-100% * var(--slider-index)));
  }
}

.book-villa {
  background-image: linear-gradient(rgba(23, 60, 58, 0.85), rgba(23, 60, 58, 0.85)), url('../assets/elementor-placeholder-image.webp');
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
  color: white;
}

.book-villa h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  font-weight: 400;
}

.search-form-dark {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.search-form-dark .form-group {
  margin-bottom: 0;
}

.search-form-dark label {
  color: white;
  margin-bottom: 0.5rem;
  display: block;
  font-family: 'Quicksand', sans-serif;
}

.search-form-dark .form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 4px;
  font-family: 'Quicksand', sans-serif;
}

.search-form-dark .form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Quicksand', sans-serif;
}

.search-form-dark .search-button {
  grid-column: 1 / -1;
  background: white;
  color: var(--primary-color);
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;
  font-family: 'Quicksand', sans-serif;
}

.search-form-dark .search-button:hover {
  opacity: 0.9;
}

.date-range {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 768px) {
  .search-form-dark {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .book-villa h2 {
    font-size: 2rem;
    padding: 0 1rem;
  }
}

.why-intervillas {
  padding: 6rem 0;
  background-color: white;
}

.why-intervillas h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
  color: var(--primary-color);
  font-weight: 400;
}

.testimonials {
  padding: 6rem 0;
  background-color: white;
}

.testimonials h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--primary-color);
  font-weight: 400;
}

.testimonials-slider {
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
}

.testimonials-track {
  display: flex;
  transition: transform 0.3s ease;
}

.testimonial-item {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0 1rem;
}

.testimonial-image {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.testimonial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testimonial-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.testimonial-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.rating {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  line-height: 1.8;
  color: #333;
}

.testimonial-nav {
  position: absolute;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: var(--primary-color);
}

.nav-arrow {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0.5rem;
}

.testimonials-cta {
  text-align: center;
  margin-top: 4rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-item {
    grid-template-columns: 1fr;
  }

  .testimonial-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .testimonial-content {
    padding: 1rem 0;
  }
}

.info-blocks {
  padding: 6rem 0;
  background-color: white;
}

.info-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.info-block:last-child {
  margin-bottom: 0;
}

.info-block.reverse {
  direction: rtl;
}

.info-block.reverse .text-content,
.info-block.reverse .image-content {
  direction: ltr;
}

.text-content {
  padding: 2rem;
}

.text-content h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: left;
  line-height: 1.2;
  font-weight: 400;
  font-family: var(--font-body);
}

.text-content p {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--primary-color);
  font-family: var(--font-body);
  margin-bottom: 1.5rem;
}

.text-content .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 14px;
  transition: opacity 0.3s;
}

.text-content .btn:hover {
  opacity: 0.9;
}

.image-content {
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.image-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .info-block {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .info-block.reverse {
    direction: ltr;
  }

  .text-content {
    padding: 1rem;
  }

  .text-content h2 {
    font-size: 2rem;
    text-align: center;
  }

  .image-content {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .info-blocks {
    padding: 3rem 0;
  }

  .info-block {
    margin-bottom: 3rem;
  }

  .text-content h2 {
    font-size: 1.8rem;
  }
}

.featured-villas {
  padding: 6rem 0;
  background-color: #f5f5f5;
}

.villas-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.slider-track > * {
  min-width: 100%;
  padding: 0 1rem;
}

.slider-arrows {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none;
}

.slider-arrow {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #d4cac1;
  color: white;
  font-size: 20px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.slider-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-arrow:not(:disabled):hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .waiting-section {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  .profile-image {
    flex: 0 0 150px;
    height: 150px;
  }
}

.waiting-section {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}

.waiting-text {
  flex: 1;
}

.waiting-text h2 {
  font-family: var(--font-body);
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--primary-color);
  text-align: left;
}

.waiting-text p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: var(--primary-color);
  max-width: 90%;
  text-align: left;
}

.profile-image {
  flex: 0 0 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.search-banner {
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  overflow: hidden;
}

.search-banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.search-banner-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/xandau-9.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.search-banner .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.search-banner-content {
  position: relative;
  width: 1400px;
  margin: 0 auto;
  z-index: 2;
  padding: 0;
}

.search-banner-content h2 {
  color: white;
  text-align: left;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 400;
}

.search-banner .search-form {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  width: 100%;
  margin: 0;
  padding: 0;
}

.search-banner .form-group {
  flex: 1;
}

.search-banner .form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-family: 'Quicksand', sans-serif;
  color: var(--white);
  text-align: left;
}

.search-banner .date-inputs {
  display: flex;
  gap: 1rem;
}

.search-banner .date-inputs .form-control {
  width: 100%;
}

.search-banner .form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--white);
  background: transparent;
  color: var(--white);
  border-radius: 14px;
  font-family: 'Quicksand', sans-serif;
}

.search-banner .form-control::placeholder {
  color: var(--white);
}

.search-banner .form-control option {
  background: var(--primary-color);
  color: var(--white);
}

.search-banner .search-button {
  background: var(--white);
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;
  font-family: 'Quicksand', sans-serif;
  height: 45px;
  opacity: 1;
  font-size: 1rem;
}

.search-banner .search-button:hover {
  opacity: 0.9;
}

@media (max-width: 1440px) {
  .search-banner-content {
    width: 100%;
    max-width: 1400px;
    padding: 0 2rem;
  }
}

@media (max-width: 768px) {
  .search-banner {
    height: auto;
    padding: 3rem 0;
    display: none !important;
  }

  .search-banner-content {
    padding: 0 1rem;
  }

  .search-banner-content h2 {
    font-size: 2rem;
    text-align: center;
  }

  .search-banner .search-form {
    flex-direction: column;
    gap: 1rem;
  }

  .search-banner .form-group {
    width: 100%;
  }

  .search-banner .date-inputs {
    flex-direction: column;
    gap: 1rem;
  }

  .search-banner .search-button {
    width: 100%;
  }
}

.consultation {
  padding: 6rem 0;
  background-color: white;
}

.consultation-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

.consultation-text {
  max-width: 600px;
}

.consultation-text h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: left;
  font-weight: 400;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.consultation-form .form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d4cac1;
  border-radius: 14px;
  font-family: var(--font-body);
}

.consultation-form textarea.form-control {
  min-height: 120px;
  resize: vertical;
}

.consultation-form .submit-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;
  font-family: var(--font-body);
  width: 100%;
}

.consultation-form .submit-button:hover {
  opacity: 0.9;
}

.consultation-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
}

.consultation-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .consultation-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .consultation-text {
    max-width: 100%;
  }

  .consultation-image {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .consultation {
    padding: 3rem 0;
  }

  .consultation-text h2 {
    font-size: 2rem;
    text-align: center;
  }

  .consultation-image {
    width: 150px;
    height: 150px;
  }
}

.slider-villas {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.full-width-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.pattern-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
}

.slider-villas .container {
  position: relative;
  z-index: 2;
}

.reviews-section {
  padding: 6rem 0;
  background-color: white;
  overflow: hidden;
}

.reviews-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  padding: 0 70px;
}

.reviews-slider {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.review-slide {
  min-width: 50%;
  padding: 0 1rem;
}

.review-content {
  width: 100%;
}

.review-background {
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
}

.review-card {
  background: white;
  padding: 2rem;
  width: 65%;
  margin-right: -5rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.review-header {
  margin-bottom: 1.5rem;
}

.review-header h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.review-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.review-rating {
  margin-bottom: 1rem;
}

.star {
  color: #ddd;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffd700;
}

.review-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--primary-color);
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
}

.arrow-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #D4CAC1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.arrow-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.slider-arrow:hover .arrow-circle {
  transform: scale(1.1);
}

.slider-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-arrow:disabled .arrow-circle {
  background: rgba(212, 202, 193, 0.5);
}

.slider-arrow.prev {
  left: 0;
}

.slider-arrow.next {
  right: 0;
}

@media (max-width: 1440px) {
  .reviews-container {
    max-width: 100%;
    padding: 0 50px;
  }
}

@media (max-width: 1024px) {
  .review-card {
    width: 75%;
    margin-right: -2rem;
  }
}

@media (max-width: 768px) {
  .reviews-section {
    padding: 3rem 0;
  }

  .reviews-container {
    padding: 0 1rem;
  }

  .reviews-slider {
    overflow: visible;
  }

  .slider-track {
    flex-direction: column;
    transform: none !important;
    gap: 2rem;
  }

  .review-slide {
    min-width: 100%;
    padding: 0;
  }

  .review-background {
    height: auto;
    min-height: 400px;
  }

  .review-card {
    width: 90%;
    margin-right: -1rem;
    padding: 1.5rem;
  }

  .review-header h3 {
    font-size: 1.25rem;
  }

  .review-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .review-text {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .slider-arrow {
    display: none;
  }
}

@media (max-width: 480px) {
  .reviews-container {
    padding: 0 1rem;
  }

  .review-background {
    min-height: auto;
  }

  .review-card {
    width: 100%;
    margin-right: 0;
    padding: 1.25rem;
  }

  .review-text {
    font-size: 0.9rem;
  }
}
</style> 
