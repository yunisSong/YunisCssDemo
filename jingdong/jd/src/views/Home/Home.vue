
<template>
<!--
  BEM 命名规则 b：block e：element m：Modifier
  docker 后面跟两个底部下划线(__)表示子节点，两个中横线(--)表示的是节点的状态。
  -->
  <div class="wrapper">
    <StaticArea />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Nearby from './Nearby.vue'
import StaticArea from './StaticArea.vue'
import Docker from './Docker.vue'

export default {
  name: 'Home',
  components: { Nearby, StaticArea, Docker }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
@import '../../style/mixins.scss';
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
</style>
