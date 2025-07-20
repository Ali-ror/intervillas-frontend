<template>
  <div :id="`boat_${boat.id}`" class="row">
    <div class="col-md-6">
      <slot />

      <h4>Pricing</h4>
      <BoatDetailsDailyPrices :prices="boat.daily_prices" />

      <p v-for="d in discounts" :key="d.id">
        {{ d.name_amount }}
        <span class="small">{{ d.range }}</span>
      </p>
    </div>

    <div class="col-md-6">
      <h4>Description</h4>
      <table class="table table-striped table-condensed">
        <tbody>
          <tr>
            <th>Horse Power</th>
            <td>{{ boat.horse_power }} PS</td>
          </tr>
          <tr v-if="videoLink">
            <th>Video</th>
            <td>
              <a :href="videoLink.url" class="text-nowrap" target="_blank">
                <i class="fa" :class="videoLink.icon" />
                {{ videoLink.text }}
              </a>
            </td>
          </tr>
          <tr>
            <th>Training</th>
            <td>{{ boat.prices.training }}</td>
          </tr>
          <tr>
            <th>Deposit</th>
            <td>{{ boat.prices.deposit }}</td>
          </tr>
          <tr v-if="boat.availability.key === 'limited'">
            <th>Availability</th>
            <td>{{ boat.availability.desc }}</td>
          </tr>
        </tbody>
      </table>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="boat.description" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BoatDetailsDailyPrices from './BoatDetailsDailyPrices.vue'

const props = defineProps({
  boat: { type: Object, required: true }
})

const YT_LINK = /^https?:\/\/(www\.)?youtu\.?be/i

const videoLink = computed(() => {
  const { url } = props.boat
  if (!url) return null

  const isYoutube = YT_LINK.test(url)
  return {
    icon: isYoutube ? 'fa-youtube-play text-danger' : 'fa-external-link',
    text: isYoutube ? 'YouTube' : new URL(url).host,
    url
  }
})

const discounts = computed(() => {
  return (props.boat.discounts || []).map((d, i) => ({
    id: i,
    name_amount: `Save ${d.discount} (${d.percent}%)`,
    range: `Valid ${d.days_before}–${d.days_after} days around booking`
  }))
})
</script>
