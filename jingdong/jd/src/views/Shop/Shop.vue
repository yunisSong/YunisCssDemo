<template>
  <div class="wrapper">
    <ShopInfoVue :item="data.shopItem" :hiddenBorder="true" />
  </div>
</template>

<script>
import ShopInfoVue from '../../components/ShopInfo.vue'
export default {
  name: 'Shop',
  components: { ShopInfoVue },
  setup () {
    const data = {
      shopItem: {
        id: 1,
        title: '沃尔玛',
        imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        tags: ['月售1万+', '月售1万+', '月售1万+'],
        description: 'VIP尊享沙拉酱看到发票离开家士大夫'
      }
    }
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
