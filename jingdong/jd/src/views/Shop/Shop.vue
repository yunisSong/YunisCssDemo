<template>
  <div class="wrapper">
    <ShopInfoVue :item="data.shopItem" :hiddenBorder="true" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import ShopInfoVue from '../../components/ShopInfo.vue'
export default {
  name: 'Shop',
  components: { ShopInfoVue },
  setup () {
    // 这样修改 shopItem 才能做到响应式修改。
    const data = reactive({ shopItem: {} })
    return { data }
  },
  methods: {
    showDetail (sitem) {
      console.log('jjjjj ', sitem)
      this.$router.push({ name: 'Shop', params: { item: sitem } })
    }
  },
  mounted () {
    this.data.shopItem = JSON.parse(decodeURIComponent(this.$route.params.item))
    console.log('传值为： ', this.data.shopItem)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: .08rem .18rem;
}
</style>
