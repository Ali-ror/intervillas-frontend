<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {useI18n} from 'vue-i18n'
import { useRoute } from 'vue-router'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SearchBanner from '../components/SearchBanner.vue'
import VillaCard from '../components/VillaCard.vue'
import InfoBlock from '../components/InfoBlock.vue'
import placeholderImage from '../assets/elementor-placeholder-image.webp'
import villa1Image from '../assets/villa-1.jpg'
import villa2Image from '../assets/villa-2.jpg'
import villa3Image from '../assets/villa-3.jpg'
import xandau2Image from '../assets/xandau-2.jpg'
import xandau3Image from '../assets/xandau-3.jpg'
import xandau4Image from '../assets/xandau-4.jpg'
import intervillasPattern from '../assets/intervillas-pattern.png'

const {t} = useI18n()
const villa_arr = ref([]);
// const startDate = ref('')
// const endDate = ref('')
const people = ref(2)
const rooms = ref(2)
const unavailableDates = ref([])
const dateRange = ref([new Date(), new Date(new Date().setDate(new Date().getDate() + 7))])
const route = useRoute()

const handleSearch = async () => {
  const [startDate, endDate] = dateRange.value || []
  if(!startDate || !endDate) return
  try{
    const response =await axios.post('https://api.systembitz.com/vacation-rentals-cape-coral/search', {
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0],
        people: people.value,
        rooms: rooms.value
    })
    if(response) {
      villa_arr.value = response.data.villas
    }

  } catch(error) {
  }
}

watch(villa_arr, (newVal) => {
  console.log('update_villa', newVal)
})

onMounted(async () => {
  const response = await axios.get('https://api.systembitz.com/ferienhaus-cape-coral');
  if(response) {
    villa_arr.value = response.data
  }

  const {start_date, end_date, people: p, rooms: r} = route.query;
  if(start_date && end_date && p && r) {
    dateRange.value = [new Date(start_date), new Date(end_date)];
    people.value = parseInt(p);
    rooms.value = parseInt(r);
    await handleSearch();
  }

  // const res = await axios.get('https://api.systembitz.com/ferienhaus-cape-coral/unavailable_dates.json')
  // if(res) {
  //   unavailableDates.value = res.data.map(d => new Date(d));
  //   console.log(unavailableDates.value,'blocked_date')
  // }
})

const villas = [
  {
    title: 'Villa Bermuda',
    price: 1470,
    image: villa1Image,
    bedrooms: 3,
    bathrooms: 2,
    area: 172
  },
  {
    title: 'Villa Laguna',
    price: 2730,
    image: villa2Image,
    bedrooms: 3,
    bathrooms: 3,
    area: 185
  },
  {
    title: 'Villa Penelope',
    price: 2170,
    image: villa3Image,
    bedrooms: 3,
    bathrooms: 3,
    area: 211
  }
]

const infoBlocks = [
  {
    title: 'Ferienhäuser Cape Coral an bester Lage direkt am Wasser',
    content: [
      'Am Golf von Mexiko an der Südwestküste von Florida liegt Cape Coral, eine junge Stadt und traumhafte Feriendestination. Cape Coral zählt heute zu den beliebtesten Urlaubsdestinationen in der USA und ist bekannt für seine wunderschönen Villen und Ferienhäuser. Bei uns, bei Intervillas Florida, können Sie ein Ferienhaus in Cape Coral mieten. Wir legen sehr grossen Wert auf Qualität und top Service, damit Sie einen unvergesslichen Urlaub erleben können.',
      'Aus diesem Grund, nehmen wir nur die schönsten Häuser an top Lagen bei uns auf. Die Nachfrage von Ferienhäuser in Cape Coral hat in den letzten Jahren stark zugenommen, daher ist es empfehlenswert Ihr Wunschferienhaus oder Villa frühzeitig zu buchen. Bei Ferienhäuser Cape Coral haben Sie meistens auch einen Peer mit Bootsanleger oder gar einen Bootslift. Achten Sie also bei der Buchung darauf falls Sie vorhaben ein Boot zu mieten. Mit Bootsausflügen machen Sie Ihren Urlaub noch aussergewöhnlicher. Steuern sie verlassene Strände an und entdecken Sie die schönsten Buchten in Florida.'
    ],
    image: xandau2Image,
    imageAlt: 'Cape Coral Ferienhaus am Wasser'
  },
  {
    title: 'Ferienhäuser Cape Coral mit Boot',
    content: [
      'Wollten Sie in Ihren Ferien schon immer einmal ein eigenes Boot haben? Bei uns sind Sie nur wenige Klicks von Ihrem Wunsch entfernt! In Cape Coral sind Sie mit einem gültigen Fahrausweis berechtigt, ein Boot zu steuern. Nutzen Sie die Möglichkeit Ferienhäuser in Cape Coral mit Boot zu mieten. Cruisen Sie durch die Kanäle oder aufs Meer und geniessen Sie den Luxus auf dem Golf von Mexiko.',
      'Bei uns haben Sie die Möglichkeit, zwischen verschiedenen Bootsmodellen auszuwählen – von familientauglich zu sportlich. Suchen Sie sich das ideale Boot zu Ihrem Ferienhaus und Ihren Ausflügen aus. Falls Sie sich nicht sicher sind, welches Boot das Richtige ist, beraten wir Sie gerne und finden individuell auf Sie zugeschnitten das beste Boot. Keine Sorge: Sie erhalten eine Bootseinweisung direkt vor Ort bei Ihrem Ferienhause in Cape Coral, damit Sie mit den wichtigsten Begebenheiten vertraut sind.'
    ],
    image: xandau3Image,
    imageAlt: 'Cape Coral Boot',
    reverse: true
  },
  {
    title: 'Ferienhäuser Cape Coral deutsche Vermieter',
    content: [
      'Alle unsere angebotenen Ferienhäuser in Cape Coral gehören privaten Eigentümern. Die meisten Vermieter stammen aus Deutschland, der Schweiz oder vereinzelt auch aus den USA oder Kanada. Vor Ort in Cape Coral haben Sie eine deutschsprachige Verwaltung, die Ihnen bei Fragen oder Problemen immer zur Seite steht. Die Kommunikation mit einer deutschsprachigen Verwaltung in Cape Coral ist wesentlich leichter und bringt eine gewisse Sicherheit.'
    ],
    image: xandau4Image,
    imageAlt: 'Cape Coral deutsche Vermieter',
    buttonText: 'Jetzt Ferienhäuser in Cape Coral mieten!',
    buttonLink: '#'
  }
]
</script>

<template>
  <div class="ferienhaus-view">
    <div class="hero-banner">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>{{ t('home.villa_title') }}</h1>
        <form class="search-form"  @submit.prevent="handleSearch">
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
            <select class="form-control" v-model.number="people">
              <option value="">Bitte auswählen</option>
              <option value="2">2 Personen</option>
              <option value="3">3 Personen</option>
              <option value="4">4 Personen</option>
              <option value="5">5+ Personen</option>
            </select>
          </div>
          <div class="form-group">
            <label>{{ t('home.search_rooms') }}</label>
            <select class="form-control" v-model.number="rooms">
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
    
    <section class="featured-villas full-width-section">
      <div class="container">
        <div class="villas-grid">
          <VillaCard
            v-for="villa in villa_arr"
            :key="villa.id"
            v-bind="villa"
          />
        </div>
      </div>
    </section>

    <section class="info-blocks">
      <div class="container">
        <InfoBlock
          v-for="(block, index) in infoBlocks"
          :key="index"
          v-bind="block"
        />
      </div>
    </section>
  </div>
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
.hero-banner {
  width: 100%;
  height: 110vh;
  min-height: 800px;
  background-image: url('../assets/background-intervillas.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  color: var(--white);
  margin-top: -80px;
  padding-top: 80px;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-content {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 100px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0;
  font-family: var(--font-heading);
  color: var(--white);
  text-align: center;
}

.search-form {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  padding: 0;
  border-radius: 14px;
}

.form-group {
  flex: 1;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-family: var(--font-heading);
  color: var(--white);
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
  font-family: var(--font-heading);
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
  font-family: var(--font-heading);
  height: 45px;
  opacity: 1;
  font-size: 1rem;
}

.search-button:hover {
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .hero-content {
    padding: 0 1rem;
  }
  
  .search-form {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
  }

  .form-group {
    width: 100%;
  }

  .search-button {
    width: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: 100vh;
    min-height: 700px;
    padding-top: 100px;
    align-items: flex-end;
  }

  .hero-content {
    padding: 0 1rem;
    gap: 2rem;
    margin-bottom: 100px;
  }

  .hero-content h1 {
    display: none;
  }

  .search-form {
    padding: 0;
    gap: 1.5rem;
  }

  .date-inputs {
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    margin-bottom: 0;
  }

  .form-control {
    height: 45px;
  }
}

.featured-villas {
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

.container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.villas-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
}

.info-blocks {
  padding: 6rem 0;
  background-color: white;
}

@media (max-width: 1024px) {
  .villas-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .villas-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .featured-villas {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }
}
</style> 