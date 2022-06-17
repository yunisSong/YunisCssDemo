<template>
  <div class="count">
    <div class="sub"></div>
    <div class="num"></div>
    <div class="add"></div>
  </div>
</template>

<script>
export default {
  name: 'ProdectCount',
  props: ['item', 'hiddenBorder'],
  methods: {
    showDetail (sitem) {
      console.log('jjjjj ', sitem)
      this.$router.push({ name: 'Shop', params: { item: encodeURIComponent(JSON.stringify(sitem)) } })
    }
  }
}
</script>

<style lang="scss" scoped>
.count {
  font-size: .14rem;
}
</style>
