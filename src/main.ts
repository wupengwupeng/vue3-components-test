import { createApp, Directive } from 'vue'
import App from './App.vue'
import { store, key } from './store'

import router from './router'
// 国际化
import i18n from './locales/index'
import element from 'element-plus'
import './scss/app.scss'

// TODO
import 'virtual:svg-icons-register'

import AppSvgIcon from './components/app/AppSvgIcon.vue'
import * as directives from './directives/index'
import vue3Cron from 'vue3-cron'
import 'vue3-cron/lib/vue3Cron.css'
const app = createApp(App);
app.use(i18n).use(vue3Cron)
  .use(element, {
    i18n: (k: string, v: string) => i18n.global.t(k, v),
  })
  .use(store, key).use(router)
  .mount('#app')
// 自定义指令
Object.keys(directives).forEach(key => {
  console.log(key);
  app.directive(key, (directives as { [key: string]: Directive })[key])
})
app.component(AppSvgIcon.name, AppSvgIcon)
