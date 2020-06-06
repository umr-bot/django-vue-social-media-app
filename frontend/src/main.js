import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/index.js'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
