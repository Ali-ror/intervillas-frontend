<template>
  <table class="table table-striped table-condensed">
    <thead>
      <tr>
        <th>Period</th>
        <th class="text-right">Per Day</th>
        <th class="text-right">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(price, i) in decoratedPrices" :key="i">
        <td>{{ price.days }} days</td>
        <td class="text-right">{{ price.per_day }}</td>
        <td class="text-right">{{ price.total }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  prices: {
    type: Array,
    required: true,
  },
})

const decoratedPrices = computed(() => {
  const maxIdx = props.prices.length - 1

  return props.prices.map(({ days, per_day, total }, idx) => {
    const totalFormatted = idx === maxIdx ? `Starting from ${total}` : total
    return {
      days,
      per_day,
      total: totalFormatted,
    }
  })
})
</script>
