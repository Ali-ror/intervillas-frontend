<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import VillaCard from './VillaCard.vue'

const props = defineProps({
  villas: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const sliderRef = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const totalSlides = ref(0)

const calculateTotalSlides = () => {
  if (sliderRef.value && sliderRef.value.querySelector('.slide')){
    const containerWidth = sliderRef.value.offsetWidth
    const slideWidth = sliderRef.value.querySelector('.slide').offsetWidth
    const slidesPerView = Math.floor(containerWidth / slideWidth)
    totalSlides.value = props.villas.length - slidesPerView + 1
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
  if (sliderRef.value && sliderRef.value.querySelector('.slide')) {
    const slideWidth = sliderRef.value.querySelector('.slide').offsetWidth
    sliderRef.value.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    })
  }
}

const handleDragStart = (e) => {
  isDragging.value = true
  startX.value = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX
  scrollLeft.value = sliderRef.value.scrollLeft
}

const handleDragMove = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX
  const walk = x - startX.value
  if (sliderRef.value) {
    sliderRef.value.scrollLeft = scrollLeft.value - walk
  }
}

const handleDragEnd = () => {
  isDragging.value = false
  if (sliderRef.value && sliderRef.value.querySelector('.slide')) {
    const slideWidth = sliderRef.value.querySelector('.slide') ? sliderRef.value.querySelector('.slide').offsetWidth : 0
    const newIndex = Math.round(sliderRef.value.scrollLeft / slideWidth)
    currentIndex.value = Math.min(newIndex, totalSlides.value - 1)
  }
}

const handleScroll = () => {
  if (sliderRef.value && sliderRef.value.querySelector('.slide') && !isDragging.value) {
    const slideWidth = sliderRef.value.querySelector('.slide') ? sliderRef.value.querySelector('.slide').offsetWidth : 0
    const newIndex = Math.round(sliderRef.value.scrollLeft / slideWidth)
    if (newIndex !== currentIndex.value) {
      currentIndex.value = Math.min(newIndex, totalSlides.value - 1)
    }
  }
}

const handleResize = () => {
  calculateTotalSlides()
  // Ensure current index is still valid after resize
  currentIndex.value = Math.min(currentIndex.value, totalSlides.value - 1)
}

onMounted(async () => {
  if (sliderRef.value && sliderRef.value.querySelector('.slide')) {
    sliderRef.value.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    await nextTick()
    calculateTotalSlides()
  }
})

onUnmounted(() => {
  if (sliderRef.value && sliderRef.value.querySelector('.slide')) {
    sliderRef.value.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
  <div class="villa-slider-container">
    <div
      ref="sliderRef"
      class="villa-slider"
      @mousedown="handleDragStart"
      @mousemove="handleDragMove"
      @mouseup="handleDragEnd"
      @mouseleave="handleDragEnd"
      @touchstart="handleDragStart"
      @touchmove="handleDragMove"
      @touchend="handleDragEnd"
    >
      <div
        v-for="(villa, index) in villas"
        :key="index"
        class="slide"
      >
        <VillaCard v-bind="villa" />
      </div>
    </div>
    
    <div class="slider-dots">
      <button
        v-for="index in totalSlides"
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index - 1 }"
        @click="goToSlide(index - 1)"
      />
    </div>
  </div>
</template>

<style scoped>
.villa-slider-container {
  width: 100%;
  position: relative;
  overflow: visible;
  padding: 1rem 0;
}

.villa-slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  gap: 2rem;
  padding: 1rem 1.5rem 3rem;
  margin: -1rem -1.5rem 0;
  transition: all 0.3s ease;
  will-change: transform;
  user-select: none;
}

.villa-slider::-webkit-scrollbar {
  display: none;
}

.villa-slider.dragging {
  cursor: grabbing !important;
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.villa-slider.dragging .slide {
  pointer-events: none;
}

.slide {
  flex: 0 0 calc((100% - 4rem) / 3);
  scroll-snap-align: center;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease;
}

.slide :deep(.villa-card) {
  margin-bottom: 160px;
  transform: scale(1);
  transition: all 0.3s ease;
}

.villa-slider:not(.dragging) .slide :deep(.villa-card:hover) {
  transform: translateY(-8px);
}

.villa-slider.dragging .slide :deep(.villa-card) {
  transform: scale(0.98);
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  position: relative;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #173c3a;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.dot.active {
  opacity: 1;
}

@media (min-width: 1400px) {
  .villa-slider {
    padding: 1rem calc((100vw - 1400px) / 2 + 1.5rem) 3rem;
    margin: -1rem calc(-1 * ((100vw - 1400px) / 2 + 1.5rem)) 0;
  }
}

@media (max-width: 1200px) {
  .slide {
    flex: 0 0 calc((100% - 2rem) / 2);
  }
}

@media (max-width: 768px) {
  .villa-slider-container {
    overflow: visible;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
  }

  .villa-slider {
    padding: 1rem 1rem 3rem;
    margin: -1rem 0 0;
    gap: 1rem;
  }

  .slide {
    flex: 0 0 calc(100% - 2rem);
    padding: 0.5rem;
  }

  .slide :deep(.villa-card) {
    margin-bottom: 140px;
  }

  .slide :deep(.villa-info) {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .villa-slider {
    padding: 1rem 0.5rem 3rem;
  }

  .slide {
    flex: 0 0 calc(100% - 1rem);
  }

  .slide :deep(.villa-info) {
    width: 95%;
    padding: 1.25rem;
  }

  .slide :deep(.villa-info h2) {
    font-size: 1.4rem;
  }

  .slide :deep(.amenities) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .slide :deep(.amenity) {
    height: auto;
    padding: 0;
  }
}
</style> 