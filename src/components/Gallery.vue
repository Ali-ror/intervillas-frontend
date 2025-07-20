<template>
  <div v-if="slides?.length" class="gallery">
    <div ref="carousel" class="carousel">
      <Transition :name="slideDirection">
        <a
          :key="activeIndex"
          href="#"
          class="slide"
          @click.prevent="toggleFullscreen"
        >
          <img
            :src="currentImage.url"
            @load="onImgLoad"
            alt="Boat image"
          />
        </a>
      </Transition>

      <nav class="controls">
        <button type="button" class="controls-prev" @click="prevSlide">
          <i class="fa fa-chevron-left" />
        </button>
        <button type="button" class="controls-next" @click="nextSlide">
          <i class="fa fa-chevron-right" />
        </button>
        <button
          v-if="isFullscreen"
          type="button"
          class="controls-exit-fullscreen"
          @click="toggleFullscreen"
        >
          <i class="fa fa-times" />
        </button>
      </nav>
    </div>

    <nav class="thumbnails" ref="thumbNav">
      <div class="wrapper" :style="{ left: `${thumbOffset}px` }">
        <a
          v-for="(img, i) in slides"
          :key="i"
          href="#"
          :class="{ active: index.value === i }"
          @click.prevent="setActive(i)"
        >
          <img :src="img.url" :alt="`Thumbnail ${i + 1}`" />
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed, nextTick } from 'vue'

const props = defineProps({
  slides: { type: Array, required: true }
})

const carousel = ref(null)
const thumbNav = ref(null)
const active = ref(0)
const isFullscreen = ref(false)
const slideDirection = ref('right')
const windowWidth = ref(window.innerWidth)
const thumbOffset = ref(0)

const index = computed(() => (props.slides?.length + active.value) % props.slides?.length)
const currentImage = computed(() => props.slides[index.value])

function setActive(i) {
  slideDirection.value = i < active.value ? 'left' : 'right'
  active.value = i
}

function nextSlide() {
  slideDirection.value = 'right'
  active.value++
}

function prevSlide() {
  slideDirection.value = 'left'
  active.value--
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
  document.body.classList.toggle('fullscreen-gallery', isFullscreen.value)
}

function onImgLoad() {
  // optional: adjust height based on image ratio
  updateThumbnails()
}

function updateThumbnails() {
  nextTick(() => {
    if (!thumbNav.value) return
    const container = thumbNav.value
    const activeThumb = container.querySelectorAll('a')[index.value]
    if (!activeThumb) return

    const containerRect = container.getBoundingClientRect()
    const thumbRect = activeThumb.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2
    const thumbCenter = thumbRect.left + thumbRect.width / 2
    const centerOffset = thumbCenter - containerCenter
    const wrapper = container.querySelector('.wrapper')
    const maxOffset = containerRect.width - wrapper.scrollWidth

    let newOffset = thumbOffset.value - centerOffset
    newOffset = Math.max(maxOffset, Math.min(0, newOffset))

    thumbOffset.value = newOffset
  })
}

watch(active, () => {
  updateThumbnails()
})

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
    updateThumbnails()
  })
})
</script>

<style scoped>
.gallery {
  margin-top: 1rem;
}
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}
.controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}
.controls button {
  pointer-events: all;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
}
.controls-exit-fullscreen {
  position: absolute;
  top: 0;
  right: 0;
}
.thumbnails {
  display: flex;
  overflow: hidden;
  margin-top: 1rem;
}
.wrapper {
  display: flex;
  gap: 10px;
  transition: left 0.3s ease;
  position: relative;
  left: 0;
}
.thumbnails a {
  border: 2px solid transparent;
}
.thumbnails a.active {
  border-color: #333;
}
.thumbnails img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}
body.fullscreen-gallery {
  overflow: hidden;
}
</style>
