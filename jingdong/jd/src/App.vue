<template>
<!--
  BEM 命名规则 b：block e：element m：Modifier
  docker 后面跟两个底部下划线(__)表示子节点，两个中横线(--)表示的是节点的状态。
  -->
  <div class="wrapper">
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
    <div>12222</div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe7a7;</div>
      <div class="title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe6af;</div>
      <div class="title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe713;</div>
      <div class="title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe78b;</div>
      <div class="title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/variable.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  font-size: .12rem;
  padding: .08rem .18rem;

}
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
  &__img {
    width: 100%;
  }
}

.docker {
  display: flex;
  padding: 0 .18rem;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem #f1f1f1 solid;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: green;
    }
    .iconfont {
      margin-top: .07rem;
      font-size: .2rem;

    }
    .title {
      font-size: .2rem;
      text-align: center;
      transform: scale(0.5, 0.5);
      transform-origin: top center ;

    }
  }
}

</style>
