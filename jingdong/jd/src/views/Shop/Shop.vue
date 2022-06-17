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
    <div class="shopList">
      <div class="shopList__category">
        <div class="shopList__category__title shopList__category__title--active">全部</div>
        <div class="shopList__category__title">百货</div>
        <div class="shopList__category__title">蔬菜</div>
        <div class="shopList__category__title">烟酒</div>
        <div class="shopList__category__title">考拉</div>
        <div class="shopList__category__title">水电费</div>
      </div>
      <div class="goods">
        <div class="shopList__goodsinfo">
          <img class="shopList__goodsinfo__img" :src="data.shopItem.imageURL"/>
          <div class="shopList__goodsinfo__content">
          <div class="shopList__goodsinfo__content__title">番茄250g/份</div>
          <div class="shopList__goodsinfo__content__sale">月售100份</div>
          <div class="shopList__goodsinfo__content__bottomNumView">
            <span>￥</span>
            <span>33.6</span>
            <span>￥</span>
            <span>46.8</span>
            <span>-</span>
            <span>88</span>
            <span>+</span>
          </div>
          </div>
         </div>
         <div class="shopList__goodsinfo">
          <img class="shopList__goodsinfo__img" :src="data.shopItem.imageURL"/>
          <div class="shopList__goodsinfo__content">
          <div class="shopList__goodsinfo__content__title">番茄250g/份</div>
          <div class="shopList__goodsinfo__content__sale">月售100份</div>
          <div class="shopList__goodsinfo__content__bottomNumView">
            <span>￥</span>
            <span>33.6</span>
            <span>￥</span>
            <span>46.8</span>
            <span>-</span>
            <span>88</span>
            <span>+</span>
          </div>
          </div>
         </div>
         <div class="shopList__goodsinfo">
          <img class="shopList__goodsinfo__img" :src="data.shopItem.imageURL"/>
          <div class="shopList__goodsinfo__content">
          <div class="shopList__goodsinfo__content__title">番茄250g/份</div>
          <div class="shopList__goodsinfo__content__sale">月售100份</div>
          <div class="shopList__goodsinfo__content__bottomNumView">
            <span>￥</span>
            <span>33.6</span>
            <span>￥</span>
            <span>46.8</span>
            <span>-</span>
            <span>88</span>
            <span>+</span>
          </div>
          </div>
         </div>
         <div class="shopList__goodsinfo">
          <img class="shopList__goodsinfo__img" :src="data.shopItem.imageURL"/>
          <div class="shopList__goodsinfo__content">
          <div class="shopList__goodsinfo__content__title">番茄250g/份</div>
          <div class="shopList__goodsinfo__content__sale">月售100份</div>
          <div class="shopList__goodsinfo__content__bottomNumView">
            <span>￥</span>
            <span>33.6</span>
            <span>￥</span>
            <span>46.8</span>
            <span>-</span>
            <span>88</span>
            <span>+</span>
          </div>
          </div>
         </div>
      </div>
    </div>
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
  padding: .08rem .18rem 0 .18rem;
}
.search {
  display: flex;
  line-height: .32rem;

  .search__back {
    position: relative;
    top: .02rem;
    font-size: .2rem;
    width: .4rem;
    line-height: .32rem;
  }
  &__content {
    flex: 1;
    // margin-bottom: .16rem;
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
.shopList {
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
  display: flex;
  &__category {
    overflow-y: auto;
    height: 100%;
    width: 1.2rem;
    background-color: #b7b7b7;
    &__title {
      text-align: center;
      font-size: .14rem;
      color: #333;
      line-height: .42rem;
      width: 100%;
      &--active {
        background: #f5f5f5;
      }
    }
  }
  .goods {
    display: block;
     flex: 1;
  }
  &__goodsinfo {
    // flex: 1;
    display: flex;
    // background-color: #f5f5f5;
    height: .80rem;
    padding-left: .12rem;
    &__img {
      margin-top: .08rem;
      margin-right: .12rem;
      width: .64rem;
      height: .64rem;
    }
    &__content {
      flex: 1;
      height: .80rem;
      border-bottom: 1px #F1F1F1 solid;

          //   <div class="shopList__goodsinfo__content__title"></div>
          // <div class="shopList__goodsinfo__content__sale"></div>
          // <div class="shopList__goodsinfo__content__bottomNumView"></div>
      &__title {
        padding-top: .08rem;
        font-size: .14rem;
        color:#333;
        line-height: .22rem;
      }
      &__sale {
        font-size: .12rem;
        line-height: .22rem;
      }
      &__bottomNumView {
        font-size: .14rem;
        line-height: .22rem;
      }
    }
  }
}
</style>
