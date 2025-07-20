<template>
  <div class="boats-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>{{ t('pages.boats_title') }}</h1>
      </div>
    </section>
    <ClientOnly>
    <div>
      <div id="fh-embed-container" ref="fhContainer" v-if="mounted"></div>
      <div v-if="loading" class="loading-state">Loading booking system...</div>
    </div>
  </ClientOnly>
      
  </div>
</template>

<script setup>
import dockImage from '../assets/background-intervillas.jpg'
import {onMounted, ref, onBeforeUnmount, nextTick} from 'vue'
import {useI18n} from 'vue-i18n'

const loading = ref(true);
const fhContainer = ref(null);
const observer = ref(null);
const mounted = ref(false);
const {t} = useI18n()

onMounted(() => {
  mounted.value = true;
  nextTick(() => {
    initializeFareHarbor();
  });
});

onBeforeUnmount(() => {
  cleanupFareHarbor();
});

function cleanupFareHarbor() {
  if (observer.value) {
    observer.value.disconnect();
    observer.value = null;
  }
  
  document.querySelectorAll('[data-fh-element]').forEach(el => el.remove());
}

async function initializeFareHarbor() {
  try {
    if (!fhContainer.value) {
      throw new Error('Container not available');
    }

    const sandbox = document.createElement('div');
    sandbox.style.display = 'none';
    sandbox.dataset.fhElement = 'true';
    document.body.appendChild(sandbox);

    const originalWrite = document.write;
    const originalWriteln = document.writeln;

    document.write = (html) => {
      sandbox.innerHTML += html;
    };
    document.writeln = (html) => {
      sandbox.innerHTML += html + '\n';
    };

    const script = document.createElement('script');
    script.src = 'https://fareharbor.com/embeds/script/items/mcs-florida/?full-items=yes&fallback=simple&flow=811707';
    script.async = true;
    script.dataset.fhElement = 'true';

    observer.value = new MutationObserver((mutations) => {
      if (sandbox.children.length > 0) {
        transferContentToContainer(sandbox);
      }
    });
    observer.value.observe(sandbox, { childList: true, subtree: true });

    document.body.appendChild(script);

    await new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (sandbox.querySelector('[data-fh-widget-loaded]')) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
      
      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 5000);
    });

    transferContentToContainer(sandbox);

  } catch (error) {
    console.error('FareHarbor initialization error:', error);
    loading.value = false;
  } finally {
    if (typeof originalWrite !== 'undefined') {
      document.write = originalWrite;
      document.writeln = originalWriteln;
    }
  }
}

function transferContentToContainer(source) {
  if (!fhContainer.value) return;
  
  fhContainer.value.innerHTML = '';
  
  Array.from(source.children).forEach(node => {
    fhContainer.value.appendChild(node.cloneNode(true));
  });
  
  loading.value = false;
  
  if (window.FH && typeof window.FH.init === 'function') {
    try {
      window.FH.init({
        url: 'mcs-florida',
        container: fhContainer.value
      });
    } catch (initError) {
      console.error('FH.init error:', initError);
    }
  }
}
</script>

<style scoped>

#fh-embed-container {
  padding: 30px 50px;
}
.boats-view {
  padding-top: 0;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--white);
  margin: 0;
  font-weight: 300;
  line-height: 1.2;
}

.featured-boats {
  padding: 4rem 0;
  margin: 3rem 0;
  position: relative;
  width: 100%;
}

.boats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 1rem;
}

@media (max-width: 1024px) {
  .boats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .boats-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero {
    height: 100vh;
    min-height: 600px;
    padding-top: 100px;
    padding-bottom: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .featured-boats {
    padding: 2rem 0;
  }
}
</style> 