<template>
  <div class="contact-sidebar">
    <div class="contact-wrapper">
      <a href="https://wa.me/+41435430542" target="_blank" class="contact-item">
        <span class="contact-text">WhatsApp</span>
        <div class="icon-container">
          <WhatsappIcon class="contact-icon" />
        </div>
      </a>
    </div>
    <div class="contact-wrapper">
      <a href="tel:+41435430542" class="contact-item">
        <span class="contact-text">+41 43 543 05 42</span>
        <div class="icon-container">
          <PhoneIcon class="contact-icon" />
        </div>
      </a>
    </div>
    <div class="contact-wrapper">
      <a href="mailto:info@intervillas-florida.com" class="contact-item">
        <span class="contact-text">info@intervillas-florida.com</span>
        <div class="icon-container">
          <EnvelopeIcon class="contact-icon" />
        </div>
      </a>
    </div>
    <div class="contact-wrapper">
      <a href="https://www.facebook.com/IntervillasFlorida" target="_blank" class="contact-item">
        <span class="contact-text">Facebook</span>
        <div class="icon-container">
          <FacebookIcon class="contact-icon" />
        </div>
      </a>
    </div>
    <div class="contact-wrapper">
      <a href="https://www.instagram.com/intervillas_florida" target="_blank" class="contact-item">
        <span class="contact-text">Instagram</span>
        <div class="icon-container">
          <InstagramIcon class="contact-icon" />
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { WhatsappIcon, PhoneIcon, EnvelopeIcon, FacebookIcon, InstagramIcon } from '@/components/icons/index.jsx'
</script>

<style scoped>
.contact-sidebar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 1000;
}

.contact-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
}

.contact-item {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  background-color: var(--primary-color);
  color: white;
  height: 48px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 48px;
}

.icon-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon {
  width: 24px;
  height: 24px;
}

.contact-text {
  padding: 0 16px;
  white-space: nowrap;
  font-size: 0.9rem;
  font-family: var(--font-body);
  font-weight: 300;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-wrapper:hover .contact-item {
  width: max-content;
  background-color: #1d4f4c;
}

.contact-wrapper:hover .contact-text {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .contact-sidebar {
    display: none;
  }
}
</style> 