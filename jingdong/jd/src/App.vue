<template>
<!--
  BEM 命名规则 b：block e：element m：Modifier
  docker 后面跟两个底部下划线(__)表示子节点，两个中横线(--)表示的是节点的状态。
  -->
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__adress">&#xe7f1;</span>
      <span class="">圣诞快乐sadfsadf啥撒打发士大夫撒打发斯蒂芬地方撒的发生大方姐</span>
      <span class="iconfont position__notice">&#xe60b;</span>
    </div>
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
  background-color: gainsboro;
  position: relative;
  line-height: .16rem;

  &__adress {
    line-height: .16rem;
    margin-right: .05rem;
  }
  &__notice {
    position: absolute;
    right: 0;
    top: 0;
    line-height: .16rem;
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
