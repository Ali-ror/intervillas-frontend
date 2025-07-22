<template>
  <VueFinalModal
    v-model="isVisible"
    content-class="modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :lock-scroll="true"
    :esc-to-close="true"
    :click-to-close="true"
  >
    <div v-if="boatData" class="modal-body">
      <h4>{{ boatData.model }}</h4>
      <Gallery :slides="boatData.images" dots no-fullscreen />
      <BoatDetails :boat="boatData" />
      <div class="modal-footer">
        <button @click="close">Cancel</button>
        <button @click="selectCurrentBoat">Select</button>
      </div>
    </div>
    <div v-else class="text-center p-4">
      <i class="fa fa-spinner fa-pulse fa-2x" />
    </div>
  </VueFinalModal>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useVfm } from 'vue-final-modal'
import Gallery from './Gallery.vue'
import BoatDetails from './BoatDetails.vue'
import axios from 'axios'

const props = defineProps({ boat: Object })
const emit = defineEmits(['close', 'selected'])

const isVisible = ref(false)
const boatData = ref(null)
const { close } = useVfm()

watch(
  () => props.boat,
  async newBoat => {
    if (!newBoat?.id) return
    isVisible.value = true
    try {
      const { data } = await axios.get(`${process.env.VILLA_API_BASE_URL}/boats/${newBoat.id}.json`)
      boatData.value = { ...newBoat, ...data }
    } catch (e) {
      console.error('Failed to load boat details', e)
    }
  },
  { immediate: true }
)

function selectCurrentBoat() {
  emit('selected', boatData.value)
  close()
}
</script>

<style scoped>
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 90vh;
  overflow-y: auto;
  width: 780px;
}
</style>
