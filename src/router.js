import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      meta: {
        title: ''
      },
      component: () => import('./views/detail.vue')
    },
    {
      path: '/about',
      meta: {
        title: '恒道云仓用户注册协议'
      },
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
