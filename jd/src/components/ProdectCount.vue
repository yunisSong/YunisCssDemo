<template>
  <div class="count">
    <div
    class="circular-border sub"
    :class="{'hidden':item.sycount > 0 ? false : true}"
    @click="handleSub"
    >
    -
    </div>

    <div class="num"
    :class="{'hidden':item.sycount > 0 ? false : true}"
    >
      {{ item.sycount }}
    </div>

    <div class="circular-border add" @click="handleAdd">+</div>
  </div>
</template>
<!--       :class="{'shop__content':true, 'shop__content--bordered': hiddenBorder ? false : true}"
 -->
<script>
export default {
  name: 'ProdectCount',
  props: ['item'],
  methods: {
    handleSub () {
      console.log(this.item.count)
      this.$emit('handleSub', this.item)
    },
    handleAdd () {
      this.$emit('handleAdd', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
  font-size: .14rem;
  color: #333;
}
.circular-border {
  display: inline-block;
  width: .24rem;
  height: .24rem;
  border-radius: 50%;
  border: 1px solid #777;
  text-align: center;
}
.sub {
 color: #888;
 margin-right: .08rem;
}
.num {
  display: inline-block;
  color: red;
}
.add {
  margin-left: .08rem;
  color: #fff;
  background: green;

}
.hidden {
  visibility:hidden;
}
</style>
