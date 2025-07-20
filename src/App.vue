<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { MagnifyingGlassIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, DocumentTextIcon, ShieldCheckIcon, IdentificationIcon, LifebuoyIcon, ChatBubbleBottomCenterTextIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { FacebookIcon, InstagramIcon } from '@/components/icons/index.jsx'
import ContactPopup from './components/ContactPopup.vue'
import HeaderSearch from './components/HeaderSearch.vue'
import {useI18n} from 'vue-i18n'

const route = useRoute()
const isHomePage = computed(() => route.name === 'home')
const isContactPopupOpen = ref(false)

const isMobileMenuOpen = ref(false)
const isMoreMenuOpen = ref(false)
const isLangMenuOpen = ref(false)
const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
]
const searchQuery = ref('')
const isSearchFocused = ref(false)
const selectedLanguage = ref({ code: 'de', name: 'Deutsch', flag: '🇩🇪' })
const isScrolled = ref(false)
const {t, locale} = useI18n()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
} 

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const toggleMoreMenu = () => {
  isMoreMenuOpen.value = !isMoreMenuOpen.value
  if (isMoreMenuOpen.value) {
    isLangMenuOpen.value = false
  }
}

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value
  if (isLangMenuOpen.value) {
    isMoreMenuOpen.value = false
  }
}
const storeLang = localStorage.getItem('lang')
if(storeLang) {
  locale.value = storeLang
}
const selectLanguage = (lang) => {
  selectedLanguage.value = lang
  isLangMenuOpen.value = false
  locale.value=lang.code
  localStorage.setItem('lang', locale.value)
}

const handleClickOutside = (event) => {
  const moreDropdown = document.querySelector('.dropdown-menu')
  const langDropdown = document.querySelector('.language-dropdown')
  
  if (moreDropdown && !moreDropdown.contains(event.target)) {
    isMoreMenuOpen.value = false
  }
  
  if (langDropdown && !langDropdown.contains(event.target)) {
    isLangMenuOpen.value = false
  }
}

const openContactPopup = () => {
  isContactPopupOpen.value = true
  if (isMobileMenuOpen.value) {
    toggleMobileMenu()
  }
  if (isMoreMenuOpen.value) {
    toggleMoreMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="header-content">
      <!-- Left Menu -->
      <nav class="left-menu desktop-nav">
        <RouterLink to="/ferienhaus-cape-coral">{{ t('home.out_villas') }}</RouterLink>
        <RouterLink to="/boote">{{ t('home.boat') }}</RouterLink>
        <RouterLink to="/last-minute">{{ t('home.last_minute') }}</RouterLink>
        <RouterLink to="/karte">{{ t('home.map') }}</RouterLink>
        <RouterLink to="/bewertungen">{{ t('home.review') }}</RouterLink>
      </nav>

      <!-- Center Logo -->
      <div class="logo-container">
        <RouterLink to="/" @click="isMobileMenuOpen = false">
          <img src="./assets/intervillas-logo.png" alt="InterVillas Florida" class="logo">
        </RouterLink>
      </div>

      <!-- Right Menu -->
      <nav class="right-menu desktop-nav">
        <a href="#" @click="openContactPopup">Let's Connect</a>
        
        <!-- Mehr Dropdown -->
        <div class="dropdown-menu" @click.stop>
          <button class="dropdown-button" @click="toggleMoreMenu">
            Menu
            <ChevronDownIcon class="dropdown-arrow" :class="{ 'is-open': isMoreMenuOpen }" />
          </button>
          <div class="dropdown-content" v-if="isMoreMenuOpen">
            <RouterLink to="/cape-coral" @click="isMoreMenuOpen = false">Cape Coral</RouterLink>
            <RouterLink to="/villa-mieten" @click="isMoreMenuOpen = false">Villa Cape Coral mieten</RouterLink>
            <RouterLink to="/mietwagen" @click="isMoreMenuOpen = false">Mietwagen</RouterLink>
            <RouterLink to="/skipper" @click="isMoreMenuOpen = false">Skipper Haftpflicht</RouterLink>
            <RouterLink to="/boot-mieten" @click="isMoreMenuOpen = false">Boot mieten in Cape Coral</RouterLink>
            <RouterLink to="/ferienhaus-mit-boot" @click="isMoreMenuOpen = false">Ferienhaus Cape Coral mit Boot mieten</RouterLink>
            <RouterLink to="/intervillas-mieten" @click="isMoreMenuOpen = false">Intervillas Ferienhaus Florida mieten</RouterLink>
            <RouterLink to="/einreise" @click="isMoreMenuOpen = false">Einreisebestimmungen</RouterLink>
            <RouterLink to="/versicherung" @click="isMoreMenuOpen = false">Reiserücktrittsversicherung</RouterLink>
            <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer" @click="isMoreMenuOpen = false">ESTA</a>
            <a href="https://www.intervillas-florida.com/admin/users/sign_in" target="_blank" rel="noopener noreferrer" @click="isMoreMenuOpen = false">Eigentümer-Login</a>
          </div>
        </div>

        <!-- Language Selector -->
        <div class="language-dropdown" @click.stop>
          <button class="dropdown-button" @click="toggleLangMenu">
            {{ selectedLanguage.name }}
            <ChevronDownIcon class="dropdown-arrow" :class="{ 'is-open': isLangMenuOpen }" />
          </button>
          <div class="dropdown-content" v-if="isLangMenuOpen">
            <button 
              v-for="lang in languages" 
              :key="lang.code"
              @click="selectLanguage(lang)"
              :class="{ active: selectedLanguage.code === lang.code }"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>

        <!-- Search Box -->
        <div class="search-box">
          <!-- <input 
            type="text" 
            placeholder="Suchen..." 
            v-model="searchQuery"
            @focus="isSearchFocused = true"
            @blur="isSearchFocused = false"
          >
          <button class="search-button">
            <MagnifyingGlassIcon class="search-icon" />
          </button> -->
          <HeaderSearch />
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-button" @click="toggleMobileMenu" :class="{ 'is-active': isMobileMenuOpen }">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <nav class="mobile-nav">
        <!-- Mobile Search -->
        <div class="mobile-search">
          <form class="mobile-search-form" @submit.prevent>
            <input 
              type="text" 
              class="mobile-search-input" 
              placeholder="Suchen..." 
              v-model="searchQuery"
            >
            <button class="mobile-search-button">
              <MagnifyingGlassIcon class="mobile-search-icon" />
            </button>
          </form>
        </div>

        <!-- Language Selector -->
        <div class="mobile-language-selector">
          <h3>Sprache wählen</h3>
          <div class="mobile-language-buttons">
            <button 
              v-for="lang in languages" 
              :key="lang.code"
              @click="selectLanguage(lang)"
              class="mobile-language-button"
              :class="{ active: selectedLanguage.code === lang.code }"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>

        <!-- Main Navigation Links -->
        <RouterLink to="/ferienhaus-cape-coral" @click="toggleMobileMenu">Unsere Villen</RouterLink>
        <RouterLink to="/boote" @click="toggleMobileMenu">Boote</RouterLink>
        <RouterLink to="/last-minute" @click="toggleMobileMenu">Last Minute</RouterLink>
        <RouterLink to="/karte" @click="toggleMobileMenu">Karte</RouterLink>
        <RouterLink to="/bewertungen" @click="toggleMobileMenu">Bewertungen</RouterLink>
        <a href="#" @click.prevent="openContactPopup" class="mobile-nav-link">Let's Connect</a>
        
        <!-- Submenu -->
        <div class="mobile-submenu">
          <RouterLink to="/cape-coral" @click="toggleMobileMenu">Cape Coral</RouterLink>
          <RouterLink to="/villa-mieten" @click="toggleMobileMenu">Villa Cape Coral mieten</RouterLink>
          <RouterLink to="/mietwagen" @click="toggleMobileMenu">Mietwagen</RouterLink>
          <RouterLink to="/skipper" @click="toggleMobileMenu">Skipper Haftpflicht</RouterLink>
          <RouterLink to="/boot-mieten" @click="toggleMobileMenu">Boot mieten in Cape Coral</RouterLink>
          <RouterLink to="/ferienhaus-mit-boot" @click="toggleMobileMenu">Ferienhaus Cape Coral mit Boot mieten</RouterLink>
          <RouterLink to="/intervillas-mieten" @click="toggleMobileMenu">Intervillas Ferienhaus Florida mieten</RouterLink>
          <RouterLink to="/einreise" @click="toggleMobileMenu">Einreisebestimmungen</RouterLink>
          <RouterLink to="/versicherung" @click="toggleMobileMenu">Reiserücktrittsversicherung</RouterLink>
          <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer" @click="toggleMobileMenu">ESTA</a>
          <a href="https://www.intervillas-florida.com/admin/users/sign_in" target="_blank" rel="noopener noreferrer" @click="toggleMobileMenu">Eigentümer-Login</a>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
  
  <ContactPopup 
    :is-open="isContactPopupOpen"
    @close="isContactPopupOpen = false"
  />

  <section class="work-with-us-section" id="work-with-us">
    <div class="work-overlay"></div>
    <div class="container">
      <div class="work-content">
        <h2>WORK WITH INTERVILLAS</h2>
        <p>{{ t('home.footer_intro') }}</p>
        <div class="work-buttons">
          <button @click="openContactPopup" class="work-button">Let's Connect</button>
          <RouterLink to="/ferienhaus-cape-coral" class="work-button">{{ t('home.out_villas') }}</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h2>{{ t('home.newsletter') }}</h2>
          </div>
          <form class="newsletter-form">
            <input type="email" placeholder="E-Mail" class="newsletter-input">
            <button type="submit" class="newsletter-button">{{t('home.subscribe')}}</button>
          </form>
        </div>
      </div>
    </div>

    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="./assets/intervillas-logo.png" alt="Intervillas Florida Logo" class="footer-logo-image">
            <div class="social-links">
              <a href="#" class="social-link">
                <InstagramIcon class="social-icon" />
              </a>
            </div>
          </div>

          <div class="footer-contact">
            <h3>{{ t('home.contact') }}</h3>
            <div class="contact-info">
              <MapPinIcon class="contact-icon" />
              <div>
                <p>4929 SW 26th Ave</p>
                <p>Cape Coral, FL 33914, USA</p>
              </div>
            </div>
            <div class="contact-numbers">
              <div class="contact-info">
                <PhoneIcon class="contact-icon" />
                <div>
                  <div class="contact-number">
                    <span>US:</span>
                    <a href="tel:+12392687053">+1 (239) 268-7053</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-info">
              <EnvelopeIcon class="contact-icon" />
              <a href="mailto:info@intervillas-florida.com" class="contact-email">info@intervillas-florida.com</a>
            </div>
          </div>

          <div class="footer-links">
            <h3>{{ t('home.most_asked') }}</h3>
            <nav class="footer-nav">
              <RouterLink to="/einreise">
                <ChevronRightIcon class="nav-icon" />
                {{ t('home.entry_requirements') }}
              </RouterLink>
              <RouterLink to="/versicherung">
                <ChevronRightIcon class="nav-icon" />
                {{ t('home.travel') }}
              </RouterLink>
              <a href="https://esta.cbp.dhs.gov/" target="_blank" rel="noopener noreferrer">
                <ChevronRightIcon class="nav-icon" />
                ESTA
              </a>
              <RouterLink to="/skipper">
                <ChevronRightIcon class="nav-icon" />
                {{ t('home.skipper_title') }}
              </RouterLink>
              <a href="#" @click="openContactPopup">
                <ChevronRightIcon class="nav-icon" />
                Let's Connect
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p class="copyright">© 2025 Intervilla Corp.</p>
          <nav class="legal-nav">
            <a href="/impressum">Impressum</a>
            <a href="/agb">Allgemeine Geschäftsbedingungen</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* Global font settings */
:root {
  --primary-color: #173C3A;
  --secondary-color: #d4cac1;
  --white: #ffffff;
  --container-width: 1400px;
  
  /* Font families */
  --font-heading: 'Quicksand', sans-serif;
  --font-body: 'Quicksand', sans-serif;
}

/* Global font settings */
body {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 1.2;
}

/* Additional global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1rem;
}

/* Button styles */
.btn {
  font-family: var(--font-heading);
  font-weight: 500;
}

/* Form styles */
input, select, textarea, button {
  font-family: var(--font-body);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Base styles */
:root {
  --primary-color: #173c3a;
  --secondary-color: #d4cac1;
  --white: #fff;
  --max-width: 1400px;
  --border-radius: 14px;
  --transition: 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  line-height: 1.6;
  color: var(--primary-color);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 1000;
  padding: 1rem 0;
  transition: background-color 0.3s ease;
}

.site-header.is-scrolled {
  background-color: rgba(23, 60, 58, 0.9);
}

.logo-container {
  padding: 0 2rem;
}

.logo {
  height: 120px;
  width: auto;
}

/* Desktop Navigation */
.left-menu,
.right-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
}

.left-menu {
  flex: 1;
  justify-content: flex-start;
}

.right-menu {
  flex: 1;
  justify-content: flex-end;
}

.desktop-nav a,
.dropdown-button {
  color: var(--white);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.3s;
  white-space: nowrap;
  position: relative;
  padding: 0.5rem 0;
}

.desktop-nav a::after,
.dropdown-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--white);
  transition: width 0.3s ease;
}

.desktop-nav a:hover::after,
.dropdown-button:hover::after,
.desktop-nav a.router-link-active::after {
  width: 100%;
}

.desktop-nav a.router-link-active {
  opacity: 1;
}

/* Dropdown Menu Styles */
.dropdown-menu, 
.language-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.3s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.dropdown-arrow {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  opacity: 0.8;
  stroke-width: 2.5;
}

.dropdown-arrow.is-open {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  min-width: 220px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  z-index: 1000;
  margin-top: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.dropdown-content a, 
.dropdown-content button {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.dropdown-content a:hover, 
.dropdown-content button:hover {
  background-color: #f5f5f5;
}

.dropdown-content button.active {
  color: var(--primary-color);
  font-weight: 500;
}

/* Search Box Styles */
.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 0.25rem;
  margin-left: 1rem;
}

.search-box input {
  background: none;
  border: none;
  color: var(--white);
  padding: 0.5rem;
  width: 150px;
  font-size: 0.9rem;
  font-weight: 500;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-box input:focus {
  outline: none;
}

.search-button {
  background: none;
  border: none;
  color: var(--white);
  padding: 0.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.search-button:hover {
  opacity: 1;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: var(--white);
}

/* Mobile styles */
@media (max-width: 1024px) {
  .site-header {
    padding: 0;
    background-color: rgba(23, 60, 58, 0.9);
  }

  .logo-container {
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    flex: 0 1 auto;
  }

  .logo {
    height: 60px;
  }

  .left-menu,
  .right-menu {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .logo {
    height: 60px;
  }

  .left-menu,
  .right-menu {
    display: none;
  }

  /* Newsletter Section Mobile */
  .newsletter-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .newsletter-text {
    width: 100%;
  }

  .newsletter-text h2 {
    font-size: 1.75rem;
    text-align: left;
    margin-bottom: 0;
  }

  .newsletter-form {
    flex-direction: column;
    width: 100%;
  }

  .newsletter-input {
    width: 100%;
    margin-bottom: 1rem;
  }

  .newsletter-button {
    width: 100%;
  }

  /* Footer Bottom Mobile */
  .footer-bottom-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .legal-nav {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .legal-nav a {
    display: block;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(23, 60, 58, 0.1);
  }

  .legal-nav a:last-child {
    border-bottom: none;
  }
}

/* Hide mobile menu on larger screens */
@media (min-width: 1025px) {
  .mobile-menu-button,
  .mobile-menu {
    display: none;
  }
}

/* Footer */
.footer-main {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 6rem 0;
  font-family: var(--font-body);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 30% 30%;
  gap: 3rem;
  text-align: left;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.footer-logo-image {
  width: 150px;
  height: auto;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 150px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--white);
  transition: all 0.3s ease;
  color: var(--white);
}

.social-link:hover {
  background-color: var(--white);
  color: var(--primary-color);
}

.social-icon {
  width: 20px;
  height: 20px;
  color: currentColor;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.footer-contact h3,
.footer-links h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: var(--white);
  text-align: left;
}

.contact-info {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--white);
  opacity: 0.8;
  transition: opacity 0.3s;
  text-align: left;
}

.contact-info:hover {
  opacity: 1;
}

.contact-icon {
  width: 20px;
  height: 20px;
  margin-top: 3px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
}

.footer-nav a {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity var(--transition);
  text-align: left;
}

.footer-nav a:hover {
  opacity: 1;
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.copyright {
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-logo {
    grid-column: 1 / -1;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: left;
  }

  .contact-info,
  .footer-nav a {
    justify-content: flex-start;
  }

  .footer-contact h3,
  .footer-links h3,
  .newsletter-text h2 {
    text-align: left;
  }
}

.contact-form-section {
  padding: 6rem 0;
  background-color: #e6e3e0;
}

.contact-form-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-form-wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
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
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  width: 100%;
  color: var(--primary-color);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--primary-color);
  opacity: 0.7;
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

.contact-image {
  text-align: center;
  position: relative;
  padding-top: 3rem;
}

.contact-person-name {
  display: block;
  text-align: center;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--primary-color);
  margin-top: 1rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  width: fit-content;
  margin: 0 auto 1rem auto;
}

.contact-person-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.newsletter-section {
  background-color: var(--primary-color);
  padding: 3rem 0;
  color: white;
}

.newsletter-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.newsletter-text h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 400;
  text-align: left;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  max-width: 600px;
}

.newsletter-input {
  flex-grow: 1;
  padding: 1rem 1.5rem;
  border: 1px solid #d4cac1;
  border-radius: 14px;
  background: transparent;
  color: var(--white);
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
}

.newsletter-input::placeholder {
  color: var(--white);
  opacity: 0.7;
}

.newsletter-button {
  padding: 1rem 2rem;
  background-color: #e6e3e0;
  color: var(--primary-color);
  border: none;
  border-radius: 14px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
}

.newsletter-button:hover {
  background-color: white;
}

.footer-bottom {
  background-color: #d4cac1;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
}

.copyright {
  color: #173c3a;
  font-size: 1rem;
  text-decoration: none;
}

.legal-nav {
  display: flex;
  gap: 2rem;
}

.legal-nav a {
  color: #173c3a;
  text-decoration: none;
  transition: opacity 0.3s;
}

.legal-nav a:hover {
  opacity: 0.8;
}

/* Header responsive styles */
.desktop-nav {
  display: flex;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;
  z-index: 1001;
  margin-left: auto;
  padding: 0;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  transition: all 0.3s;
}

.hamburger-line:nth-child(1) { top: 0; }
.hamburger-line:nth-child(2) { top: 50%; transform: translateY(-50%); }
.hamburger-line:nth-child(3) { bottom: 0; }

.mobile-menu-button.is-active .hamburger-line:nth-child(1) { transform: translateY(11px) rotate(45deg); }
.mobile-menu-button.is-active .hamburger-line:nth-child(2) { opacity: 0; }
.mobile-menu-button.is-active .hamburger-line:nth-child(3) { transform: translateY(-11px) rotate(-45deg); }

.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-color);
  padding: 70px 1.5rem 1.5rem;
  z-index: 999;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.mobile-menu.is-open {
  transform: translateX(0);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 0.75rem 0;
  transition: opacity 0.3s;
  border-bottom: none;
}

.mobile-nav a:hover {
  opacity: 0.8;
}

.mobile-submenu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.75rem 0;
  padding: 0.75rem 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.mobile-submenu a {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
  padding: 0.5rem 0;
  border-bottom: none;
}

/* Mobile search and language sections */
.mobile-search {
  margin: 1rem 0;
  padding: 0.75rem 0;
  border-bottom: none;
}

.mobile-search-form {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 0.5rem;
}

.mobile-search-input {
  flex: 1;
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: var(--font-body);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.mobile-search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.mobile-search-input:focus {
  outline: none;
}

.mobile-search-button {
  background: none;
  border: none;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.mobile-search-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.mobile-language-selector {
  margin: 0.75rem 0 1rem;
  padding: 0.75rem 0;
  border-bottom: none;
}

.mobile-language-selector h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  opacity: 0.9;
}

.mobile-language-buttons {
  display: flex;
  gap: 1rem;
}

.mobile-language-button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.mobile-language-button.active {
  background: rgba(255, 255, 255, 0.2);
}

.mobile-language-button:hover {
  background: rgba(255, 255, 255, 0.15);
}

@media (max-width: 1400px) {
  .header-content {
    padding: 0 1rem;
  }

  .main-nav {
    gap: 1rem;
  }

  .main-nav a {
    font-size: 0.8rem;
  }
}

@media (max-width: 1024px) {
  .header-content {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .logo-container {
    justify-content: center;
    flex: 1;
  }

  .logo {
    height: 80px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}

@media (min-width: 1025px) {
  .mobile-menu-button {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}

.contact-info a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.contact-info a:hover {
  opacity: 1;
}

.contact-email {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.contact-email:hover {
  opacity: 1;
}

.contact-number a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.contact-number a:hover {
  opacity: 1;
}

/* Navigation and Footer Font Styles */
.main-nav,
.mobile-nav,
.dropdown-button,
.search-box input,
.footer-main,
.footer-nav a,
.footer-content p,
.footer-bottom,
.newsletter-section input,
.newsletter-section button,
.contact-form input,
.contact-form textarea,
.contact-form button {
  font-family: var(--font-body);
}

.footer-content h2,
.footer-content h3,
.newsletter-section h2 {
  font-family: var(--font-heading);
}

.contact-form-content h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: left;
  font-weight: 400;
  line-height: 1.2;
}

/* Contact Form Section */
.contact-form-section {
  padding: 6rem 0;
  background-color: #e6e3e0;
}

.contact-form-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-form-wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-image {
  text-align: center;
  position: relative;
  padding-top: 3rem;
}

@media (max-width: 768px) {
  .contact-form-section {
    padding: 3rem 0;
  }

  .contact-form-content h2 {
    margin-bottom: 2rem;
  }

  .contact-form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .contact-form {
    width: 100%;
  }

  .contact-image {
    width: 100%;
    padding-top: 2rem;
    border-top: 1px solid rgba(23, 60, 58, 0.1);
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.nav-button {
  background: none;
  border: none;
  color: var(--text-color);
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.nav-button:hover {
  color: var(--primary-color);
}

.mobile-nav-button {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: var(--text-color);
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.mobile-nav-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.nav-link {
  color: var(--white);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-family: var(--font-body);
  font-size: 1rem;
}

.nav-link:hover {
  color: var(--secondary-color);
}

.is-scrolled .nav-link {
  color: var(--text-color);
}

.is-scrolled .nav-link:hover {
  color: var(--primary-color);
}

.mobile-nav-link {
  display: block;
  padding: 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.mobile-nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.work-with-us-section {
  position: relative;
  padding: 10rem 0;
  color: white;
  text-align: center;
  min-height: 800px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.work-with-us-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: -50%;
  background-image: url('./assets/xandau-5.jpg');
  background-size: cover;
  background-position: center;
  transform: translateY(-50%);
  z-index: 0;
  height: 150%;
  width: 100%;
}

.work-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.work-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.work-content h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 400;
  font-family: var(--font-heading);
  letter-spacing: 2px;
}

.work-content p {
  font-size: 1.4rem;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.work-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.work-button {
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border-radius: 14px;
  font-family: var(--font-body);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.work-button:hover {
  background: white;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .work-with-us-section {
    padding: 6rem 0;
    min-height: 600px;
  }

  .work-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .work-content p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .work-with-us-section::before {
    background-attachment: scroll; /* Deaktiviert Parallax auf mobilen Geräten für bessere Performance */
  }

  .work-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .work-button {
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>
