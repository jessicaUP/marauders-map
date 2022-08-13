import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:group/:name',
      name: 'character',
      component: MapView
    },
    {
      path: '/:group',
      name: 'group',
      component: MapView
    }
  ]
})

export default router
