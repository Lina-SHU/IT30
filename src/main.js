/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import AnimateOnScroll from 'primevue/animateonscroll';
import Aura from '@primevue/themes/aura'
import zhTWLocale from '@/locale/zh-TW.json'

import './assets/main.scss'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { all } from '@vee-validate/rules'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule)
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true,
  locale: zhTWLocale['zh-TW'],
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-dark-style',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
})

app.use(ToastService)
app.use(ConfirmationService)
app.directive('animateonscroll', AnimateOnScroll);

app.use(createPinia())
app.use(router)

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
