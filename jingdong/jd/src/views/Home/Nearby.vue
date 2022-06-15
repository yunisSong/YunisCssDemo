<template>
  <div class="nearby">
    <h3>附近商家</h3>
    <div
      class="nearby__item"
      v-for='item in nearbyList'
      :key="item.id"
    >
      <ShopInfoVue :item="item" />
    </div>
  </div>
</template>

<script>
import ShopInfoVue from '../../components/ShopInfo.vue'
export default {
  name: 'Nearby',
  components: { ShopInfoVue },
  setup () {
    const nearbyList = [
      {
        id: 1,
        title: '沃尔玛1',
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
    return { nearbyList }
  }
}
</script>

<style lang="scss">
@import '../../style/variable.scss';
h3 {
  font-size: .18rem;
  font-weight: normal;
  color: $content-fontcolor;
  margin: .12rem 0;
}
</style>
