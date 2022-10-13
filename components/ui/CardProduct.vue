<template>
  <div class="card pointer" @click="goToProductDetail(data.id)">
    <img :src="data.main_image" alt="Avatar" height="240px" width="100%">
    <div class="container">
      <h4 class="text-overflow"><b>{{ data.name }}</b></h4>
      <p class="text-overflow">{{ data.description }}</p>
      <h3>Rp {{ data.price }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push(`/product/${productId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.text-overflow {
  max-height: 45px;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
}
</style>
