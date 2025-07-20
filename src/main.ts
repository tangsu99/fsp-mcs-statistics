import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// 日期语言
import DateFnsAdapter from '@date-io/date-fns'
import { enUS, zhCN } from 'date-fns/locale'
// icon
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  // 日期语言
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      zh: zhCN,
    },
  },
  // 语言
  locale: {
    locale: 'zh',
  },
  // icon
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
