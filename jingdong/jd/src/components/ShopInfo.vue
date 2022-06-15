<template>
  <div
      class="shop"
    >
      <div class="shop__img"><img :src="item.imageURL" alt=""></div>
      <div class="shop__content"
      :class="{'shop__content':true, 'shop__content--bordered': hiddenBorder ? false : true}"
      >
        <div class="shop__content__title">{{ item.title }}</div>
        <div class="shop__content__tags">
          <span
            class="shop__content__tags__tag"
            v-for="(innerItem, index) in item.tags"
            :key="index"
          >{{ innerItem }}</span>

        </div>
        <div class="shop__content__highlight">{{ item.description }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hiddenBorder']
}
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
.shop {
  width: 100%;
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
    &--bordered {
      border-bottom: 1px solid $bg-layer-color;
    }
    &__title {
      font-size: .14rem;
      font-weight: normal;
      color: $content-fontcolor;
    }
    &__tags {
      display: flex;
      // justify-content: space-between;
      margin-top: .08rem ;
      font-size: .12rem;
      font-weight: normal;
      color: $content-fontcolor;
      &__tag {
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
</style>
