import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import('../views/ThemeView.vue')
    },
    {
      path: '/pt',
      name: 'pt',
      component: () => import('../views/PTView.vue')
    }
  ]
})

export default router
