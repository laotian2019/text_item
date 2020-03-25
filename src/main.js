import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入包
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css' // 引入element样式
import './style/index.less' // 引入初始化样式
import echarts from 'echarts' // 全局注册echarts
import 'font-awesome/css/font-awesome.min.css'// 引入图标

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import {
//   faUser
// } from '@fortawesome/free-solid-svg-icons'
// library.add(
//   faUser
// )

// Vue.use(library)
// Vue.component('font-awesome-icon', FontAwesomeIcon)// 图标样式
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值默认地址API
Vue.prototype.$axios = axios // 赋值全局对象
// Vue.prototype.$echarts = echarts
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
