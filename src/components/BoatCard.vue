<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  id: {
    type: Number,
    required:true
  },
  model: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
  },
  horse_power: {
    type: String,
    required: true
  },
  teaser_price: {
    type:Array
  }
})
</script>

<template>
  <div class="boat-card">
    <div class="boat-image">
      <img :src="images?.length ? images[0].url : ''" :alt="model">
      <div class="boat-info">
        <h2>{{ model }}</h2>
        <div class="price">$ {{ teaser_price?.length ? teaser_price[1].value : '' }} / Tag</div>
        <div class="specs">{{ horse_power }} • {{ length }} • bis zu {{ capacity }} Personen</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boat-card {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.boat-card:hover {
  transform: translateY(-5px);
}

.boat-image {
  position: relative;
  padding-top: 85%;
  overflow: hidden;
}

.boat-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.boat-info {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.75rem 1rem;
  max-width: calc(100% - 30px);
  text-align: left;
}

.boat-info h2 {
  font-size: 0.95rem;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.price {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.specs {
  font-size: 0.8rem;
  color: #666;
}
</style> 