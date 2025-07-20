<template>
  <div v-if="rating !== null" class="feedbacks">
    <i
      v-for="(klass, i) in stars"
      :key="i"
      class="fa"
      :class="klass"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: Object,
    default: null,
  },
})

const stars = computed(() => {
  if (!props.rating) return []

  const [full, half] = props.rating.stars
  const empty = 5 - full - half

  return [
    ...Array(full).fill('fa-star'),
    ...Array(half).fill('fa-star-half-o'),
    ...Array(empty).fill('fa-star-o'),
  ]
})
</script>
