import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import A1View from '../views/A1View.vue'
import A2View from '../views/A2View.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/selectbutton',
      name: 'selectbutton',
      component: () => import('../views/SelectButtonView.vue')
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('../views/ToastView.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmView.vue')
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: () => import('../views/DatatableView.vue')
    },
    {
      path: '/datatable2',
      name: 'datatable2',
      component: () => import('../views/Datatable2View.vue')
    },
    {
      path: '/datatable3',
      name: 'datatable3',
      component: () => import('../views/Datatable3View.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('../views/InputView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/DialogView.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('../views/EditorView.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/MediaView.vue')
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('../views/SliderView.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/AccordionView.vue'),
      children: [
        {
          path: 'page1',
          name: 'page1',
          component: A1View
        },
        {
          path: 'page2',
          name: 'page2',
          component: A2View
        }
      ]
    },
    {
      // 未對應的路由重新導向到首頁
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: {
        name: 'home',
        params: {}
      }
    }
  ]
})

export default router
