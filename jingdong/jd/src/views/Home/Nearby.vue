<template>
  <div class="nearby">
    <h3>附近商家</h3>
    <div
      class="nearby__item"
      v-for='item in nearbyList'
      :key="item.id"
    >
      <div class="nearby__item__img"><img :src="item.imageURL" alt=""></div>
      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{ item.title }}</div>
        <div class="nearby__item__content__tags">
          <span
            class="nearby__item__content__tag"
            v-for="(innerItem, index) in item.tags"
            :key="index"
          >{{ innerItem }}</span>

        </div>
        <div class="nearby__item__content__highlight">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
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
</style>
