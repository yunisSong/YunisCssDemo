<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="back">&#xe6ac;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6ac;</span>
        <input
        class="search__content__input"
        placeholder="请输入商品进行搜索"
        v-model="searchKey"
        />
      </div>
    </div>
    <ShopInfoVue :item="shopItem" :hiddenBorder="true" />
    <div class="shopList">
      <div class="shopList__category">
        <div
        v-for="category in categoryList"
        :key="category.title"
        :class="{'shopList__category__title':true, 'shopList__category__title--active':category.show}"
        @click="showCategory(category)"
        >
          {{category.title}}
        </div>
      </div>

      <div class="goods" >
        <div class="shopList__goodsinfo"
             v-for="prodectItem in prodectItems"
             :key="prodectItem.title">
          <img class="shopList__goodsinfo__img" :src="prodectItem.imageURL"/>
          <div class="shopList__goodsinfo__content">
            <div class="shopList__goodsinfo__content__title">{{prodectItem.title}}</div>
            <div class="shopList__goodsinfo__content__sale">月售{{prodectItem.sales}}份</div>
            <ProdectPriceVue :price="prodectItem.price" :originalPrice="prodectItem.originalPrice" />
            <div class="shopList__goodsinfo__content__bottomNumView">
              <ProdectCountVue :item='prodectItem'  @handleSub="subCount" @handleAdd="addCount" />
            </div>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from 'vue'
import ShopInfoVue from '../../components/ShopInfo.vue'
import ProdectCountVue from '../../components/ProdectCount.vue'
import ProdectPriceVue from '../../components/ProdectPrice.vue'
export default {
  name: 'Shop',
  components: { ShopInfoVue, ProdectCountVue, ProdectPriceVue },
  data () {
    return {
      shopItem: {},
      searchKey: '',
      count: 0,
      categoryList: [
        { title: '百货1', show: true },
        { title: '百货2', show: false },
        { title: '百货3', show: false },
        { title: '百货4', show: false },
        { title: '百货5', show: false },
        { title: '百货6', show: false },
        { title: '百货7', show: false },
        { title: '百货8', show: false },
        { title: '百货9', show: false },
        { title: '百货10', show: false }
      ],
      currentShow: {},
      prodectItems: [
        {
          imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          title: '的盛世嫡妃',
          sales: '100',
          price: '100.1',
          originalPrice: '230.5',
          sycount: 1
        },
        {
          imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          title: '的盛世嫡妃',
          sales: '300',
          price: '500.1',
          originalPrice: '230.5',
          sycount: 1
        },
        {
          imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          title: '的盛世嫡妃',
          sales: '66',
          price: '90',
          originalPrice: '230.5',
          sycount: 2
        },
        {
          imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          title: '的盛世嫡妃',
          sales: '34',
          price: '178.1',
          originalPrice: '230.5',
          sycount: 1
        },
        {
          imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
          title: '的盛世嫡妃',
          sales: '78',
          price: '100.1',
          originalPrice: '230.5',
          sycount: 4
        }
      ]
    }
  },
  methods: {
    showDetail (sitem) {
      console.log('jjjjj ', sitem)
      this.$router.push({ name: 'Shop', params: { item: sitem } })
    },
    back () {
      this.$router.back()
    },
    subCount (item) {
      console.log('减去')
      item.sycount -= 1
      console.log(item.sycount)
    },
    addCount (item) {
      console.log('加上')
      item.sycount += 1
      console.log(item.sycount)
    },
    showCategory (category) {
      if (category.show) {
        this.currentShow = category
        return -1
      }
      category.show = true
      this.currentShow.show = false
      this.currentShow = category
      // request prodectItems data
    }
  },
  created () {
    this.currentShow = this.categoryList[0]
  },
  mounted () {
    this.shopItem = JSON.parse(decodeURIComponent(this.$route.params.item))
    console.log('传值为： ', this.shopItem)
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';

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
  display: flex;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
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
    height: 1.0rem;
    padding-left: .12rem;
    &__img {
      margin-top: .08rem;
      margin-right: .12rem;
      width: .64rem;
      height: .64rem;
    }
    &__content {
      flex: 1;
      height: 100%;
      border-bottom: 1px #F1F1F1 solid;
      position:relative;
      margin-right: .16rem;
      overflow: hidden;

          //   <div class="shopList__goodsinfo__content__title"></div>
          // <div class="shopList__goodsinfo__content__sale"></div>
          // <div class="shopList__goodsinfo__content__bottomNumView"></div>
      &__title {
        padding-top: .08rem;
        font-size: .14rem;
        color:#333;
        line-height: .22rem;
         overflow: hidden;
        @include ellipsis;
      }
      &__sale {
        font-size: .12rem;
        line-height: .22rem;
      }
      &__bottomNumView {
        position: absolute;
        right: 0;
        bottom: 0;
        // font-size: .14rem;
        // line-height: .22rem;
      }
    }
  }
}
</style>
