<template>
  <div style="min-height: 30rem">
    <div v-if="loading || !detail.id" class="flex items-center" style="height: 20rem">
      <div class="col-12">
        <UiLoading />
      </div>
    </div>
    <UiSection v-else>
      <br>
      <div class="col-5">
        <UiSlideShow :slides="slides" with-thumbnail />
      </div>
      <div class="product-description col-7">
        <h1>{{ detail.name }}</h1>
        <h3>{{ detail.description }}</h3>
        <h2 class="color-danger">Rp. {{ detail.price }}</h2>
        <h3>Ukuran</h3>
        <div class="variant-container">
          <button class="variant-button" v-for="(variant, key) in detail.variant" :key="key">{{ variant }}</button>
        </div>
        <h3>Quantity</h3>
        <div class="flex items-center" style="gap: 1rem">
          <button @click="updateQty(-1)" class="btn-qty">-</button>
          <input style="width: 70px;" type="number" min="1" v-model="qty">
          <button @click="updateQty(1)" class="btn-qty">+</button>
        </div>
        <br>
        <br>
        <br>
        <br>
        <button class="button pointer"><span>Beli Sekarang</span></button>
        <br>
        <br>
        <br>
      </div>
      <br>
      <br>
    </UiSection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qty: 1,
      slides: [],
      detail: {},
      loading: false
    }
  },
  mounted() {
    this.fetchDetailProduct()
  },
  methods: {
    async fetchDetailProduct() {
      this.loading = true
      const result = await this.$axios.$get(`https://my-json-server.typicode.com/ghifari3/mockapi/data_product/${this.$route.params.id}`)
      if (result) {
        this.detail = result
        this.slides = result && result.images
        this.slides.unshift(result.main_image)
      }
      this.loading = false
    },
    updateQty(add) {
      let qty = this.qty + add

      if (qty <= 0) {
        qty = this.qty
      }

      this.qty = qty
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-qty {
  padding: 10px 12px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #054d4d;
  color: #fff;

  &:hover {
    background-color: #033333;
  }
}

.product-description {
  padding-left: 1rem;
  padding-right: 1rem;
}

.variant-button {
  padding: 5px 15px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #054d4d;
  background-color: #FFF;
  color: #054d4d;
  border-radius: 5px;
  box-shadow: 0 1px #999;
}

.variant-button:hover {
  color: #d0fa93;
  background-color: #054d4d;
}

.variant-button:active {
  background-color: #3e8e41;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}

.variant-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.button {
  border-radius: 4px;
  background-color: #054d4d;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 21px;
  padding: 15px;
  width: 100%;
  transition: all 0.5s;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

</style>
