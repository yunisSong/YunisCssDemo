<template>
  <div class="position">
    <span class="iconfont position__adress">&#xe7f1;</span>
    <span class="">深圳市南山区高西南11道国实大厦</span>
    <span class="iconfont position__notice">&#xe60b;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe6ac;</span>
    <input class="search__input" type="text" placeholder="撒打发士大夫撒打发斯蒂芬地方撒">
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" >
  </div>
  <div class="goods">
    <div
      class="goods__item"
      v-for="(item,index) in goodsList"
      :key="index"
    >
      <!-- <div class="img"></div> -->
      <img class="goods__item__img" :src="item.imageURL" alt="" />
      <div class="title"> {{ item.title + index }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaticArea',
  setup () {
    const goodsList = [
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' },
      { imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png', title: '图书' }
    ]
    return { goodsList }
  }
}
</script>

<style lang="scss">
@import '../../style/variable.scss';
@import '../../style/mixins.scss';

.position {
  position: relative;
  line-height: .22rem;
  padding: .16rem;
  padding-left: 0;
  font-size: .16rem;
  color: $content-fontcolor;
  @include ellipsis;

  &__adress {
    margin-right: .05rem;
    font-size: .2rem;
  }
  &__notice {
    position: absolute;
    right: 0;
    font-size: .2rem;
  }
}

.search {
  margin-bottom: .16rem;
  line-height: .32rem;
  background-color: #f5f5f5;
  border-radius: .16rem;
  padding: 0 .16rem;
  font-size: .14rem;
  color: #b7b7b7;
  .iconfont {
    position: relative;
    top: .02rem;
    font-size: .2rem;
  }
  &__input {
    border: none;
    outline: none;
    background-color: #f5f5f5;
    width: calc(100% - (.2rem + .16rem));
  }
}

.banner {
  // 下面这三行是给 图片一个默认的占位高度，防止图片下面的视图，在图片未加载出来之前出现页面跳动的情况。
  // 其中  height: 0;overflow: hidden;padding-bottom: 25.4%; 的意思就是给定一个高度为宽度 25.4%的约束。
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  margin-bottom: .16rem;
  &__img {
    width: 100%;
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  width: 100%;
  &__item {
    flex: 25%;
    position: relative;
    overflow: hidden;
    margin-bottom: .08rem;
    text-align: center;

    &__img {
      width: .36rem;
      height: .36rem;
      // margin: 0 auto;
      // width: calc(100% - .32rem);
      // margin-left: .16rem;
    }
    .title {
      text-align: center;
      font-size: .14rem;
      font-weight: normal;
      color: $content-fontcolor;
      @include ellipsis;
    }
  }
}

.cl {
  clear: both;
}
</style>
