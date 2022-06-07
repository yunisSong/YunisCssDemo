<template>
  <!-- <Home /> -->
  <router-view />
  <Docker />
</template>

<script>
// import Home from './views/Home/Home.vue'
import Docker from './views/Home/Docker.vue'
export default {
  name: 'App',
  components: { Docker }
}
</script>
