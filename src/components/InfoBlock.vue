<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <div class="info-block" :class="{ reverse }">
    <div class="text-content">
      <h2>{{ title }}</h2>
      <p v-for="(paragraph, index) in content" :key="index">{{ paragraph }}</p>
      <a v-if="buttonText" :href="buttonLink" class="btn">{{ buttonText }}</a>
    </div>
    <div class="image-content">
      <img :src="image" :alt="imageAlt">
    </div>
  </div>
</template>

<style scoped>
.info-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.info-block:last-child {
  margin-bottom: 0;
}

.info-block.reverse {
  direction: rtl;
}

.info-block.reverse .text-content,
.info-block.reverse .image-content {
  direction: ltr;
}

.text-content {
  padding: 2rem;
}

.text-content h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: left;
  line-height: 1.2;
  font-family: var(--font-heading);
}

.text-content p {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--primary-color);
  font-family: var(--font-body);
  margin-bottom: 1.5rem;
}

.text-content .btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 14px;
  transition: opacity 0.3s;
  font-family: var(--font-body);
  font-size: 1.1rem;
}

.text-content .btn:hover {
  opacity: 0.9;
}

.image-content {
  height: auto;
  overflow: hidden;
}

.image-content img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

@media (max-width: 1024px) {
  .info-block {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .info-block.reverse {
    direction: ltr;
  }

  .text-content {
    padding: 1rem;
  }

  .text-content h2 {
    font-size: 2rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .info-block {
    margin-bottom: 3rem;
  }

  .text-content h2 {
    font-size: 1.8rem;
  }
}
</style> 