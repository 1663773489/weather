import Vue from 'vue'
import Router from 'vue-router'
import Today from './views/Today.vue'
import All from './views/All.vue'
import Future from './views/Future.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },
    {
      path: '/today',
      name: 'today',
      component:Today
    },
    {
      path: '/future',
      name: 'future',
      component: Future
    }
  ]
})
