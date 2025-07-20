<template>
  <div class="room-thumb" :data-villa-id="id">
    <div class="teaser-image">
      <img
        :src="props.villa.thumbnail_url"
        :alt="`${props.villa.name} Florida`"
        width="356"
        height="228"
      />
      <div v-if="locality" class="locality">{{ props.villa.locality }}</div>

      <FeedbackRating :rating="props.villa.rating" />
    </div>

    <div class="ident">
      <h4><a :href="props.villa.searchUrl">{{ props.villa.name }}</a></h4>

      <div class="price h5">
        {{ props.villa.labels?.price_from }} {{ props.villa.price_from }}
      </div>
    </div>


    <div class="features">
      <div>
        <i class="fa fa-fw fa-bed" />
        {{ props.villa.bedrooms }}
      </div>
      <div>
        <i class="fa fa-fw fa-bath" />
        {{ props.villa.bathrooms }}
      </div>
      <div>
        <i class="fa fa-fw fa-home" />
        {{ props.villa.livingArea }}
      </div>
      <div>
        <i class="fa fa-fw fa-compass" />
        {{ props.villa.poolOrientation }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import FeedbackRating from './FeedbackRating.vue'

const props = defineProps({
  villa:Object
})

const priceTimeUnit = computed(() => {
  const mode = props.villa.weeklyPricing ? 'weekly' : 'nightly'
  const unit = props.villa.labels?.price_time_unit?.[mode] || ''
  const count = props.villa.weeklyPricing ? props.villa.bedsCount : props.villa.minimumPeople
  return unit.replace('%{count}', count ?? '')
})
</script>

