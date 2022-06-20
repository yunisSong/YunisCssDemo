<template>
  <div class="price">
    <span class="yan">&yen;</span>
    <span> {{price}}</span>
    <div
      class="original"
      :class="{'hidden':originalPrice ? false : true}"
    >
      <span class="yan1">&yen;</span>
      <span> {{originalPrice}}</span>
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
  color: red;
  line-height: .16rem;
  .yan {
      display: inline-block;
      font-size: .2rem;
      text-align: right;;
      transform: scale(0.5, 0.5);
      transform-origin:  50% 90% ;
  }
}
.original {
  display: inline-block;
  margin-left: -0.16rem;
  color: #777;
  font-size: .2rem;
  text-align: center;
  transform: scale(0.5, 0.5);
  transform-origin: center  90% ;
  text-decoration: line-through;
}
.hidden {
  visibility:hidden;
}
</style>
