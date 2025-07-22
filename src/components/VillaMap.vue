<template>
    <div ref="mapRef" class="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {fetchMapData} from './map';
//import poi from '../assets/poi.png';

const props = defineProps({
    lat: {type: Number, default: null},
    lng: {type: Number, default: null},
    villaId: {type: String, required: true}
})

const mapRef = ref(null);

const initMap = (maps) => {
    const isTouch = 'ontouchstart' in window;
    const center =  {
        lat: Number(props.lat),
        lng: Number(props.lng)
    };
    const map = new maps.Map(mapRef.value, {
        zoom: 14,
        tilt: 0,
        center,
        mapTypeId: maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        gestureHandling: isTouch ? 'cooperative' : 'greedy',
        styles: [
        {
            featureType: 'poi.business',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
        }
        ]
    });

    new maps.Marker({
        map,
        position: center,
        icon: { url: poi }
    })
}

onMounted(() => {
    fetchMapData(`https://api.systembitz.com/${props.villaId}/map`, initMap);
})
</script>

<style scoped>
.map {
    height:400px;
}
</style>
