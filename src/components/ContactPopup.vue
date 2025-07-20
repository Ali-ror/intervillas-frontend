<template>
  <div v-if="isOpen" class="contact-popup-overlay" @click="closePopup">
    <div class="contact-popup" @click.stop>
      <button class="close-button" @click="closePopup">×</button>
      <div class="popup-content">
        <!-- Left side - Contact Form -->
        <div class="form-section">
          <h2>Wir beraten Sie gerne persönlich</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <input type="text" placeholder="Name" v-model="form.name" class="form-input" required>
              <input type="email" placeholder="E-Mail" v-model="form.email" class="form-input" required>
              <input type="tel" placeholder="Telefonnummer" v-model="form.phone" class="form-input">
            </div>
            <textarea placeholder="Ihre Nachricht" v-model="form.message" class="form-textarea" required></textarea>
            <button type="submit" class="submit-button">Absenden</button>
          </form>
        </div>

        <!-- Right side - Contact Info & Image -->
        <div class="info-section">
          <div class="contact-info-overlay">
            <div class="contact-details">
              <h3>Kontakt</h3>
              
              <div class="contact-info-item">
                <MapPinIcon class="contact-icon" />
                <div>
                  <p>4929 SW 26th Ave</p>
                  <p>Cape Coral, FL 33914, USA</p>
                </div>
              </div>

              <div class="contact-info-item">
                <PhoneIcon class="contact-icon" />
                <div class="contact-numbers">
                  <div class="contact-number">
                    <span>US:</span>
                    <a href="tel:+12392687053">+1 (239) 268-7053</a>
                  </div>
                </div>
              </div>

              <div class="contact-info-item">
                <EnvelopeIcon class="contact-icon" />
                <a href="mailto:info@intervillas-florida.com" class="contact-email">
                  info@intervillas-florida.com
                </a>
              </div>

              <div class="social-links">
                <a href="#" class="social-link">
                  <InstagramIcon class="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { FacebookIcon, InstagramIcon } from '@/components/icons/index.jsx'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const closePopup = () => {
  emit('close')
}

const submitForm = async () => {
  console.log('Form submitted:', form.value)
  const response = await axios.post('/api/contacts', form.value)
  if(response) {
    closePopup()
  }

}
</script>

<style scoped>
.contact-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.contact-popup {
  background: white;
  width: 95%;
  max-width: 1400px;
  position: relative;
  max-height: 95vh;
  overflow-y: auto;
}

.popup-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 700px;
}

.close-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: white;
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.close-button::before,
.close-button::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}

.close-button::before {
  transform: rotate(45deg);
}

.close-button::after {
  transform: rotate(-45deg);
}

.close-button:hover {
  background-color: var(--primary-color);
  transform: rotate(180deg);
}

.close-button:hover::before,
.close-button:hover::after {
  background-color: white;
}

/* Form Section */
.form-section {
  padding: 3rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  color: var(--primary-color);
  font-family: var(--font-heading);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.form-input,
.form-textarea {
  padding: 1rem 1.5rem;
  border: 1px solid var(--primary-color);
  border-radius: 14px;
  background-color: transparent;
  font-family: var(--font-body);
  font-size: 1rem;
  width: 100%;
  color: var(--primary-color);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  padding: 1.25rem 3rem;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  width: fit-content;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #1d4f4c;
}

/* Info Section */
.info-section {
  position: relative;
  background-image: url('../assets/xandau-7.jpg');
  background-size: cover;
  background-position: center;
}

.contact-info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-details h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 400;
  font-family: var(--font-heading);
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.contact-numbers {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-number {
  display: flex;
  gap: 0.5rem;
}

.contact-number span {
  font-weight: 500;
}

.contact-email {
  color: white;
  text-decoration: none;
}

.contact-email:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  color: white;
  text-decoration: none;
}

.social-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .popup-content {
    grid-template-columns: 1fr;
  }

  .form-section {
    padding: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .info-section {
    min-height: 500px;
  }
}
</style> 