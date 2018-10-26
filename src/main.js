import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
// import Mint from 'mint-ui'
import { Toast, Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'

// 路由钩子
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
// Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.$Toast = Toast
Vue.prototype.$Indicator = Indicator
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
