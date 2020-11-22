import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookies from "vue-cookies"

Vue.use(VueCookies)

Vue.$cookies.config("1d")

Vue.prototype.$http = axios

Vue.config.productionTip = false

window.Kakao.init("ac41ffe30587443b0e9e258a52870141")


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
