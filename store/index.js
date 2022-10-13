export const state = () => ({
  slideList: [
    'https://d2k52l910ymyzx.cloudfront.net/home/wp-content/uploads/2022/03/11172406/Extra-Komisi-30rb_Promo-Dekstop-Ver.png',
    'https://evermos.com/impact/wp-content/uploads/2022/01/kiat-membaca-tren-dan-menangkap-peluang-usaha.jpg',
    'https://evermos.com/impact/wp-content/uploads/2022/01/Berjualan-di-Evermos-Dengan-Halal-Sesuai-Syariah.jpeg'
  ],
  listProducts: []
})

export const mutations = {
  setListProduct(state, res) {
    return state.listProducts = res
  }
}

export const actions = {
  async fetchListProduct({ commit }) {

    const result = await this.$axios.$get('https://my-json-server.typicode.com/ghifari3/mockapi/data_product')
    if (result) {
      commit('setListProduct', result)
    }
  }
}

export const getters = {

}
