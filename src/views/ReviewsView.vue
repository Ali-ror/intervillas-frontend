<template>
  <div class="review-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>{{t('pages.reviwes_title')}}</h1>
      </div>
    </section>

    <section class="reviews-section">
      <div class="reviews-container">
        <div class="reviews-slider">
          <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
            <div v-for="(review, index) in reviews" :key="index" class="review-slide">
              <div class="review-content">
                <div class="review-background" :style="{ backgroundImage: `url(${review.main_image})` }">
                  <div class="review-card">
                    <div class="review-header">
                      <a :href="review.villa_path"><h3>{{ review.villa_name }}</h3></a>
                      <div class="review-meta">
                        <span class="review-author">{{ review.name }} - {{ review.city }}</span>
                        <span class="review-date">{{ review.published_on }}</span>
                      </div>
                      <div class="review-rating">
                        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= review.rating }">★</span>
                      </div>
                    </div>
                    <p class="review-text" v-html="review.text"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="slider-arrow prev" @click="prevSlide" :disabled="currentSlide === 0">
          <div class="arrow-circle">
            <ChevronLeftIcon class="arrow-icon" />
          </div>
        </button>
        <button class="slider-arrow next" @click="nextSlide" :disabled="currentSlide >= reviews.value?.length - 2">
          <div class="arrow-circle">
            <ChevronRightIcon class="arrow-icon" />
          </div>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import backgroundImage from '../assets/background-intervillas.jpg'
import xandau1 from '../assets/xandau-1.jpg'
import xandau2 from '../assets/xandau-2.jpg'
import xandau3 from '../assets/xandau-3.jpg'
import xandau4 from '../assets/xandau-4.jpg'
import xandau5 from '../assets/xandau-5.jpg'
import xandau6 from '../assets/xandau-6.jpg'

const currentSlide = ref(0)
const reviews = ref([]);

onMounted(async () => {
  const response = await axios.get('http://localhost:3000/reviews.json', {params: {page: 1}});
  if(response) {
    reviews.value = response.data
    console.log(reviews.value,'review')
  }
})
// const reviews = [
//   {
//     title: 'Villa Penelope',
//     author: 'E.Thompson',
//     date: 'Pittsburgh/PA 08.12.2024',
//     rating: 5,
//     text: 'We stayed at Penelope for 5 nights. It\'s a beautiful house. It\'s very nice clean the villa. The interior is very thoughtfully designed and the furniture and bedding is excellent. The owners have really thought of everything and spared no expense. The pool and outdoor space is perfect for entertaining a family or group. It really is a wonderful place to stay and we highly recommend it. If we return to Cape Coral it will be to stay here again.',
//     backgroundImage: xandau1
//   },
//   {
//     title: 'Villa Incredible',
//     author: 'Lopez',
//     date: 'Sydney/AU 12.10.2024',
//     rating: 5,
//     text: 'we loved villa incredible the house matched the pictures and the description and for the most part we felt right at home. we were a bit surprised when a property manager visited us to check on us and make sure everything was OK which interrupted the family breakfast.',
//     backgroundImage: xandau2
//   },
//   {
//     title: 'Villa Bermuda',
//     author: 'M.Schmidt',
//     date: 'Berlin/DE 15.11.2024',
//     rating: 5,
//     text: 'Traumhafte Villa mit perfekter Ausstattung. Der Pool und die Terrasse sind ein absolutes Highlight. Die Betreuung vor Ort war ausgezeichnet und sehr professionell. Wir kommen definitiv wieder!',
//     backgroundImage: xandau3
//   },
//   {
//     title: 'Villa Laguna',
//     author: 'R.Johnson',
//     date: 'London/UK 03.01.2024',
//     rating: 5,
//     text: 'Exceptional property with stunning water views. The villa exceeded our expectations in every way. Perfect for a family vacation with plenty of space and all amenities you could need.',
//     backgroundImage: xandau4
//   },
//   {
//     title: 'Villa Serenity',
//     author: 'A.Dubois',
//     date: 'Paris/FR 22.12.2024',
//     rating: 5,
//     text: 'Une villa magnifique avec une vue imprenable. Le service était impeccable et l\'emplacement parfait. Nous avons passé des vacances inoubliables.',
//     backgroundImage: xandau5
//   },
//   {
//     title: 'Villa Paradise',
//     author: 'H.Müller',
//     date: 'München/DE 05.01.2024',
//     rating: 5,
//     text: 'Ein wahres Paradies! Die Villa ist perfekt ausgestattet und die Lage direkt am Wasser ist einmalig. Der Service war erstklassig und sehr zuvorkommend.',
//     backgroundImage: xandau6
//   }
// ]

const nextSlide = () => {
  if (currentSlide.value < reviews.value?.length - 2) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
.review-view {
  padding-top: 0;
}
a {
  text-decoration: none;
}
.hero {
  height: 110vh;
  min-height: 800px;
  background-color: var(--primary-color);
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: end;
  margin-top: -80px;
  padding-bottom: 120px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--white);
  margin: 0;
  font-weight: 300;
  line-height: 1.2;
  position: relative;
  text-align: center;
}

.reviews-section {
  padding: 6rem 0;
  background-color: white;
  overflow: hidden;
}

.reviews-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  padding: 0 70px;
}

.reviews-slider {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.review-slide {
  min-width: 50%;
  padding: 0 1rem;
}

.review-content {
  width: 100%;
}

.review-background {
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
}

.review-card {
  background: white;
  padding: 2rem;
  width: 65%;
  margin-right: -5rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.review-header {
  margin-bottom: 1.5rem;
}

.review-header h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.review-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.review-rating {
  margin-bottom: 1rem;
}

.star {
  color: #ddd;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffd700;
}

.review-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--primary-color);
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
}

.arrow-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #D4CAC1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.arrow-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.slider-arrow:hover .arrow-circle {
  transform: scale(1.1);
}

.slider-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-arrow:disabled .arrow-circle {
  background: rgba(212, 202, 193, 0.5);
}

.slider-arrow.prev {
  left: 0;
}

.slider-arrow.next {
  right: 0;
}

@media (max-width: 1440px) {
  .reviews-container {
    max-width: 100%;
    padding: 0 50px;
  }
}

@media (max-width: 1024px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .review-card {
    width: 75%;
    margin-right: -2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 600px;
    padding-top: 100px;
  }

  .container {
    padding: 0 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .reviews-section {
    padding: 3rem 0;
  }

  .reviews-container {
    padding: 0 1rem;
  }

  .reviews-slider {
    overflow: visible;
  }

  .slider-track {
    flex-direction: column;
    transform: none !important;
    gap: 2rem;
  }

  .review-slide {
    min-width: 100%;
    padding: 0;
  }

  .review-background {
    height: auto;
    min-height: 400px;
  }

  .review-card {
    width: 90%;
    margin-right: -1rem;
    padding: 1.5rem;
  }

  .review-header h3 {
    font-size: 1.25rem;
  }

  .review-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .review-text, .review-text-en {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .slider-arrow {
    display: none;
  }
}

@media (max-width: 480px) {
  .reviews-container {
    padding: 0 1rem;
  }

  .review-background {
    min-height: auto;
  }

  .review-card {
    width: 100%;
    margin-right: 0;
    padding: 1.25rem;
  }

  .review-texts {
    gap: 1rem;
  }

  .review-text, .review-text-en {
    font-size: 0.9rem;
  }
}
</style> 