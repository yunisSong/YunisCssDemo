<template>
  <div class="price">
    <span class="yan"></span>
    {{price}}
    <div class="original">
      <span class="yan"></span>
      {{originalPrice}}
    </div>
  </div>
</template>
<!--       :class="{'shop__content':true, 'shop__content--bordered': hiddenBorder ? false : true}"
 -->
<script>
export default {
  name: 'ProdectPrice',
  props: ['price', 'originalPrice']
}
</script>

<style lang="scss" scoped>
.price {
  display: inline-block;
  font-size: .14rem;
  color: #333;
}
.original {
  display: inline-block;
}
</style>
