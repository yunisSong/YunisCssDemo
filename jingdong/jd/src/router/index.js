import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Order from '../views/Order/Order.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
