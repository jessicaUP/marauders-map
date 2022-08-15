import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      mode : 'hash'
    },
    {
      path: '/map/:group?/:name?',
      name: 'character',
      component: MapView,
      mode : 'hash'
    }

  ]
})

export default router
