import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Order from '../views/Order/Order.vue'
import Login from '../views/Login/Login.vue'
// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// const Order = () => import(/* webpackChunkName: "about" */ '../views/Order/Order.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  const login = localStorage.isLogin
  if (login || to.name === 'Login') {
    console.log('已登录')
    next()
  } else {
    console.log('未登录')
    next({ name: 'Login' })
  }
})

export default router
