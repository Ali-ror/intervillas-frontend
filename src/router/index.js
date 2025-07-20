import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FerienhausView from '../views/FerienhausView.vue'
import CapeCoralView from '../views/CapeCoralView.vue'
import LastMinuteView from '../views/LastMinuteView.vue'
import VillaMietenView from '../views/VillaMietenView.vue'
import MietwagenView from '../views/MietwagenView.vue'
import SkipperView from '../views/SkipperView.vue'
import BootMietenView from '../views/BootMietenView.vue'
import FerienhausMitBootView from '../views/FerienhausMitBootView.vue'
import IntervillasMietenView from '../views/IntervillasMietenView.vue'
import EinreiseView from '../views/EinreiseView.vue'
import VersicherungView from '../views/VersicherungView.vue'
import VillaDetailView from '../views/VillaDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ferienhaus-cape-coral',
      name: 'ferienhaus',
      component: FerienhausView
    },
    {
      path: '/boote',
      name: 'boats',
      component: () => import('../views/BoatsView.vue')
    },
    {
      path: '/last-minute',
      name: 'last-minute',
      component: LastMinuteView
    },
    {
      path: '/karte',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/cape-coral',
      name: 'cape-coral',
      component: CapeCoralView
    },
    {
      path: '/bewertungen',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/impressum',
      name: 'imprint',
      component: () => import('../views/ImprintView.vue')
    },
    {
      path: '/agb',
      name: 'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/villa-mieten',
      name: 'villa-mieten',
      component: VillaMietenView
    },
    {
      path: '/mietwagen',
      name: 'mietwagen',
      component: MietwagenView
    },
    {
      path: '/skipper',
      name: 'skipper',
      component: SkipperView
    },
    {
      path: '/boot-mieten',
      name: 'boot-mieten',
      component: BootMietenView
    },
    {
      path: '/ferienhaus-mit-boot',
      name: 'ferienhaus-mit-boot',
      component: FerienhausMitBootView
    },
    {
      path: '/intervillas-mieten',
      name: 'intervillas-mieten',
      component: IntervillasMietenView
    },
    {
      path: '/einreise',
      name: 'einreise',
      component: EinreiseView
    },
    {
      path: '/versicherung',
      name: 'versicherung',
      component: VersicherungView
    },
    {
      path: '/villa/:id',
      name: 'villa-detail',
      component: VillaDetailView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router 