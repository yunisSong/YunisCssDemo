<template>
<!--
  BEM 命名规则 b：block e：element m：Modifier
  docker 后面跟两个底部下划线(__)表示子节点，两个中横线(--)表示的是节点的状态。
  -->
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
.docker {
  display: flex;
  padding: 0 18px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  border-top: 1px #f1f1f1 solid;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: green;
    }
    .iconfont {
      margin-top: 7px;
      font-size: .2rem;

    }
    .title {
      font-size: .2rem;
      text-align: center;
      // transform: scale(0.5 0.5);
      transform: scale(0.5, 0.5);
      transform-origin: top center ;

    }
  }
}

</style>
