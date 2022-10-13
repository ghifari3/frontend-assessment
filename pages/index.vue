<template>
  <div>
    <UiSection>
      <br>
      <div>
        <UiSlideShow :slides="$store.state.slideList" />
      </div>
      <br>
      <div>
        <h2>Produk Terlaris</h2>
        <div v-if="$store.state.listProducts.length" class="product-container">
          <div class="product-container__item" v-for="(item, key) in $store.state.listProducts" :key="key">
            <UiCardProduct :data="item" :key="item.id" />
          </div>
        </div>
        <UiLoading v-else />
      </div>
      <br>
    </UiSection>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$store.dispatch('fetchListProduct')
  }
}
</script>

<style lang="scss" scoped>
/* Float four columns side by side */
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  .product-container__item {
    width: calc(25% - 24px);
  }
}

@media screen and (max-width: 90rem) {
  .product-container__item {
    width: calc(50% - 16px) !important;
  }
}
</style>
