<template>
  <div class="nearby">
    <h3>附近商家</h3>
    <ShopInfoVue v-for="item in nearbyList" :key="item.id" :item="item" />
    <!-- </div> -->
  </div>
</template>

<script setup>
import ShopInfoVue from '../../components/ShopInfo.vue'
const nearbyList = [
  {
    id: 1,
    title: '沃尔玛-Yunis',
    imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
    tags: ['月售1万+', '月售1万+', '月售1万+'],
    description: 'VIP尊享沙拉酱看到发票离开家士大夫'
  },
  {
    id: 2,
    title: '沃尔玛2',
    imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
    tags: ['月售1万+', '月售1万+', '月售1万+'],
    description: 'VIP尊享沙拉酱看到发票离开家士大夫'
  },
  {
    id: 3,
    title: '沃尔玛3',
    imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
    tags: ['月售1万+', '月售1万+', '月售1万+'],
    description: 'VIP尊享沙拉酱看到发票离开家士大夫'
  },
  {
    id: 4,
    title: '沃尔玛4',
    imageURL: 'http://www.dell-lee.com/imgs/vue3/超市.png',
    tags: ['月售1万+', '月售1万+', '月售1万+'],
    description: 'VIP尊享沙拉酱看到发票离开家士大夫'
  }
]
</script>

<style lang="scss">
@import '../../style/variable.scss';
h3 {
  font-size: 0.18rem;
  font-weight: normal;
  color: $content-fontcolor;
  margin: 0.12rem 0;
}
</style>
