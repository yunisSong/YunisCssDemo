<template>
  <div class="docker">
    <div
      v-for="(item,index) in dockerList"
      :class="{ 'docker__item': true, 'docker__item--active': showIndex === index}"
      :key="item.text"
      v-on:click="goToDashboard(index)"

      >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="title">{{ item.text }}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Docker',
  data () {
    return {
      showIndex: 0
    }
  },
  setup () {
    const dockerList = [
      { icon: '&#xe7a7;', text: '首页' },
      { icon: '&#xe6af;', text: '购物车' },
      { icon: '&#xe713;', text: '订单' },
      { icon: '&#xe78b;', text: '我的' }
    ]
    return { dockerList }
  },
  methods: {
    goToDashboard (index) {
      this.showIndex = index
      console.log(index)
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="scss">
@import '../../style/variable.scss';

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
</style>
