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
    <div class="goods">
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">图书</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">帽子</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">运动鞋</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">哈哈</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">共同体</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">按时</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">梵蒂冈</div>
      </div>
      <div class="goods__item">
        <div class="img"><img class="goods__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" ></div>
        <div class="title">通天塔</div>
      </div>
    </div>
    <div class="nearby">
      <h3>附近商家</h3>
      <div class="nearby__item">
        <div class="nearby__item__img"><img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt=""></div>
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享沙拉酱看到发票离开家士大夫</div>
        </div>
      </div>
      <div class="nearby__item">
        <div class="nearby__item__img"><img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt=""></div>
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享沙拉酱看到发票离开家士大夫</div>
        </div>
      </div>
      <div class="nearby__item">
        <div class="nearby__item__img"><img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt=""></div>
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享沙拉酱看到发票离开家士大夫</div>
        </div>
      </div>
      <div class="nearby__item">
        <div class="nearby__item__img"><img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt=""></div>
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享沙拉酱看到发票离开家士大夫</div>
        </div>
      </div>
      <div class="nearby__item">
        <div class="nearby__item__img"><img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt=""></div>
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享沙拉酱看到发票离开家士大夫</div>
        </div>
      </div>
      <div class="nearby__item">
        <div class="nearby__item__img"><img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt=""></div>
        <div class="nearby__item__content">
          <div class="nearby__item__content__title">沃尔玛</div>
          <div class="nearby__item__content__tags">
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
            <span class="nearby__item__content__tag">月售1万+</span>
          </div>
          <div class="nearby__item__content__highlight">VIP尊享沙拉酱看到发票离开家士大夫</div>
        </div>
      </div>
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
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  font-size: .12rem;
  padding: .08rem .18rem;
  overflow-y: auto;

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
  margin-bottom: .16rem;
  &__img {
    width: 100%;
  }
}

// .goods {
//   display: grid;
//   grid-template-columns:  25% 25% 25% 25%;
//   grid-template-rows: 100px 100px 100px 100px;
//   width: 100%;
//   &__item {
//     // height: 0;
//     // overflow: hidden;
//     // padding-bottom: 25.4%;
//     overflow: hidden;
//     padding: .16rem .16rem;

//     &__img {
//       width: 100%;
//     }
//     .title {
//       text-align: center;
//       font-size: .16rem;
//       color: $content-fontcolor;
//       @include ellipsis;
//     }
//   }
// }

.goods {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  width: 100%;
  &__item {
    flex: 25%;
    overflow: hidden;
    margin-bottom: .08rem;

    &__img {
      width: calc(100% - .32rem);
      margin-left: .16rem;
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

.nearby {
  h3 {
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
    margin: .12rem 0;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      width: .64rem;
      height: .64rem;
      margin-right: .08rem;
      margin-top: .06rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content {
      flex: 1;
      border-bottom: 1px solid $bg-layer-color;

      &__title {
        font-size: .14rem;
        font-weight: normal;
        color: $content-fontcolor;
      }
      &__tags {
        display: flex;
        margin-top: .08rem;
        font-size: .12rem;
        font-weight: normal;
        color: $content-fontcolor;
        .nearby__item__content__tag {
          flex:1;
        }
      }
      &__highlight {
        margin-top: .08rem;
        margin-bottom: .08rem;
        font-size: .12rem;
        font-weight: normal;
        color: red;
      }
    }
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
  border-top: .01rem $bg-layer-color solid;
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
.cl {
  clear: both;
}

</style>
