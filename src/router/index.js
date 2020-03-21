import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    // 强制调转
    path: '/',
    redirect: '/home'
  }, {
    // 主页
    path: '/home',
    name: 'home',
    component: Home
  }, {
    // 登录页
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
