<template>
  <!-- <Home /> -->
  <router-view />
  <Docker v-show="isLogin()"/>
</template>

<script>
import { reactive } from '@vue/reactivity'
// import Home from './views/Home/Home.vue'
import Docker from './views/Home/Docker.vue'
export default {
  name: 'App',
  components: { Docker },
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
