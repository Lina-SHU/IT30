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
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../views/IconView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('../views/SelectView.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/AccordionView.vue'),
      children: [
        {
          path: 'page1',
          name: 'page1',
          component: () => import('../views/A1View.vue')
        },
        {
          path: 'page2',
          name: 'page2',
          component: () => import('../views/A2View.vue')
        }
      ]
    }
  ]
})

export default router
