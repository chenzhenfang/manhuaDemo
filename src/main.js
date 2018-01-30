import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from '../Vuex/Store'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
Vue.use(Vuex)
Vue.config.productionTip = false
var devUrl = 'http://127.0.0.1:3000'
Vue.prototype.baseUrl = devUrl
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
