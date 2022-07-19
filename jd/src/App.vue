<template>
  <!-- <Home /> -->
  <router-view />
</template>

<script>
import { reactive } from '@vue/reactivity'
// import Home from './views/Home/Home.vue'
export default {
  name: 'App',
  setup () {
    const data = reactive({
      isLogin: true
    })
    const isLogin = () => {
      return localStorage.isLogin
    }
    return { data, isLogin }
  }
}
</script>
