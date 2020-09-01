import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.prototype.$axios=axios; // 把一个变量变成一个属性使用

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
