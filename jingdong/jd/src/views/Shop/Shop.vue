<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont">&#xe6ac;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6ac;</span>
        <input
        class="search__content__input"
        placeholder="请输入商品进行搜索"
        v-model="data.searchKey"
        />
      </div>
    </div>
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
    const data = reactive({
      shopItem: {},
      searchKey: ''
    })
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
.search {
  display: flex;
  line-height: .32rem;

  .search__back {
    position: relative;
    top: .02rem;
    font-size: .2rem;
    width: .4rem;
    height: .32rem;
  }
  &__content {
    flex: 1;
    margin-bottom: .16rem;
    background-color: #f5f5f5;
    border-radius: .16rem;
    padding: 0 .16rem;
    font-size: .14rem;
    color: #b7b7b7;
    &__icon {
      position: relative;
      top: .02rem;
      font-size: .2rem;
      margin-right: .04rem;
    }

    &__input {
      border: none;
      outline: none;
      background-color: #f5f5f5;
      width: calc(100% - (.2rem + .16rem));
    }
  }

}
</style>
