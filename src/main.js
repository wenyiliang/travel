import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/styles/border.css"
import "./assets/styles/reset.css"
import fastClick from "fastclick"
import "./assets/font/iconfont.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/index.js'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
