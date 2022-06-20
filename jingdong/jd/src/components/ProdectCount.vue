<template>
  <div class="count">
    <div
    class="circular-border sub"
    :class="{'hidden':count > 0 ? false : true}"
    @click="handleSub"
    >
    -
    </div>

    <div class="num"
    :class="{'hidden':count > 0 ? false : true}"
    >
      {{ count }}
    </div>

    <div class="circular-border add" @click="handleAdd">+</div>
  </div>
</template>
<!--       :class="{'shop__content':true, 'shop__content--bordered': hiddenBorder ? false : true}"
 -->
<script>
export default {
  name: 'ProdectCount',
  props: ['count'],
  methods: {
    //             <ProdectCountVue :count="count"  @handleSub="subCount" @handleAdd="addCount" />

    showDetail (sitem) {
      console.log('jjjjj ', sitem)
      this.$router.push({ name: 'Shop', params: { item: encodeURIComponent(JSON.stringify(sitem)) } })
    },
    handleSub () {
      this.$emit('handleSub', 'Jack')
    },
    handleAdd () {
      this.$emit('handleAdd', 'Jack')
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
