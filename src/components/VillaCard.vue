<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  id: {
    type: [Number, String],
  },
  name: {
    type: String,
    required: true
  },
  locality: {
    type: String,
    default: 'Cape Coral'
  },
  price_from: {
    type: String,
    required: true
  },
  mainimage: {
    type: String,
    required: true
  },
  bedrooms: {
    type: String,
    required: true
  },
  bathrooms: {
    type: String,
    required: true
  },
  living_area: {
    type: String,
    required: true
  },
  pool_orientation: {
    type: String,
    required: true
  },
  search_url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'villa-detail', params: { id: search_url }}" class="villa-card">
    <div class="villa-image">
      <img :src="mainimage" :alt="name">
      <div class="location">{{ locality }} </div>
      <div class="rating">
        <span v-for="n in 5" :key="n" class="star">★</span>
      </div>
    </div>
    <div class="villa-info">
        <div class="info-header">
          <h2>{{ name }}</h2>
          <div class="price-section">
            <div class="price-amount">ab {{ price_from.toLocaleString('de-CH') }} pro Woche</div>
          </div>
        </div>
        <div class="amenities">
          <div class="amenity">
            <div class="amenity-text">{{ bedrooms }}</div>
          </div>
          <div class="amenity">
            <div class="amenity-text">{{ bathrooms }}</div>
          </div>
          <div class="amenity">
            <div class="amenity-text">{{ living_area }}</div>
          </div>
          <div class="amenity">
            <div class="amenity-text">{{ pool_orientation }}</div>
          </div>
        </div>
      </div>
  </RouterLink>
</template>

<style scoped>
.villa-card {
  position: relative;
  width: 100%;
  background: white;
  margin-bottom: 180px;
  border-radius: 0px !important;
  overflow: visible !important;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.villa-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(23, 60, 58, 0.1);
}

.villa-image {
  position: relative;
  width: 100%;
  padding-top: 60%;
  overflow: visible;
}

.villa-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.villa-card:hover .villa-image img {
  transform: scale(1.03);
}

.location {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  z-index: 2;
}

.rating {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 1rem;
  z-index: 2;
}

.star {
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.villa-info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1.75rem;
  width: 100%;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(23, 60, 58, 0.1);
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.75rem;
}

.villa-info h2 {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
  max-width: 60%;
  font-family: var(--font-heading);
}

.price-section {
  text-align: right;
}

.price-amount {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
  font-family: var(--font-heading);
}

.price-note {
  font-size: 0.8rem;
  color: #666;
  font-family: var(--font-body);
}

.amenities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.amenity {
  position: relative;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
}

.amenity-text {
  color: #666;
  font-size: 0.85rem;
  line-height: 1.2;
  text-align: center;
  font-family: var(--font-body);
}

.amenity:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  width: 1px;
  background-color: #e5e5e5;
}

@media (max-width: 1200px) {
  .villa-info {
    padding: 1.5rem;
  }
  
  .villa-info h2 {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .villa-card {
    margin-bottom: 200px;
  }

  .villa-info {
    width: 94%;
  }
  
  .info-header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .villa-info h2 {
    max-width: 100%;
  }
  
  .price-section {
    text-align: left;
  }
  
  .amenities {
    grid-template-columns: repeat(2, 1fr);
  }

  .amenity:nth-child(2n)::after {
    display: none;
  }

  .amenity:nth-child(-n+2) {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
  }
}
</style> 