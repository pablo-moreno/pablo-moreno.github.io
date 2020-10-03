import Vue from "vue"
import VueI18n from 'vue-i18n'
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import formatDate from './filters/date'

Vue.config.productionTip = false

Vue.use(VueI18n)

Vue.filter('formatdate', formatDate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
