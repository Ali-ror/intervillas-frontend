<template>
  <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>{{ $t('pages.maps_title') }}</h1>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <div class="map-view">
          <div ref="mapContainer" class="map-container"></div>

          <div v-if="activeVilla" class="modal">
            <TeaserVilla :villa="activeVilla" />

            <div class="modal-buttons">
              <button @click="zoomTo(activeVilla)">Zoom In</button>
              <a :href="activeVilla.search_url" target="_blank">More Info</a>
              <button @click="active = null">Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import dockImage from '../assets/background-intervillas.jpg'
import TeaserVilla from '@/components/TeaserVilla.vue'
import { fetchMapData, ClusterRenderer } from '@/components/map'
import { MarkerClusterer, SuperClusterAlgorithm } from '@googlemaps/markerclusterer'
//import poiIcon from '@/assets/poi.png'
import {useI18n} from 'vue-i18n'

const mapContainer = ref(null)
const villas = ref([])
const labels = ref({})
const active = ref(null)
const zoom = ref(12)
const {t, locale} = useI18n()
console.log('[i18n debug]', locale.value, t('home.maps_title'))

let mapInstance
let cluster
let markers = []

const activeVilla = computed(() => 
  villas.value.find((v) => v.id === active.value)
)

function zoomTo({ lat, lng }) {
  mapInstance.panTo({ lat, lng })
  mapInstance.setZoom(19)
}

watch(activeVilla, (newVal) => {
  console.log(newVal, 'marker')
})

async function initMap(googleMaps, payload) {
  villas.value = payload.villas.map((v, i) => ({ ...v, idx: i, labels: payload.labels }))

  mapInstance = new googleMaps.Map(mapContainer.value, {
    center: { lat: 26.62364, lng: -81.98729 },
    zoom: zoom.value,
    mapTypeId: googleMaps.MapTypeId.SATELLITE,
    mapTypeControl: false,
    gestureHandling: 'greedy',
  })

  cluster = new MarkerClusterer({
    map: mapInstance,
    algorithm: new SuperClusterAlgorithm({ radius: 100 }),
    renderer: new ClusterRenderer(googleMaps, '#fff', '#75c5cf'),
  })
  await nextTick()
  markers = villas.value.map((villa) => {
    const marker = new googleMaps.Marker({
      position: { lat: villa.lat, lng: villa.lng },
      icon: poiIcon,
    })
    marker.addListener('click', () => {
      active.value = villa.id
    })
    return marker
  })

  cluster.addMarkers(markers)
}

onMounted(async () => {
  await nextTick()
  await fetchMapData('http://localhost:3000/karte', initMap)
})
</script>

<style scoped>
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
  text-align: center;
}

h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--white);
  margin: 0;
  font-weight: 300;
  line-height: 1.2;
}
.map-view {
  margin: 30px;
}
.map-container {
  height: 100vh;
  width: 100%;
  position: relative;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.modal-buttons button,
.modal-buttons a {
  background: #75c5cf;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}
</style>
