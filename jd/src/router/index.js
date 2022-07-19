import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home/Home.vue'
// import Order from '../views/Order/Order.vue'
// import Login from '../views/Login/Login.vue'
// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// const Order = () => import(/* webpackChunkName: "about" */ '../views/Order/Order.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue')
const Order = () => import(/* webpackChunkName: "Order" */ '../views/Order/Order.vue')
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login/Login.vue')
const Shop = () => import(/* webpackChunkName: "Login" */ '../views/Shop/Shop.vue')

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
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
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
