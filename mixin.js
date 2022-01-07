export default {
  computed: {
    items() {
      return require('./assets/products.json').data;
    }
  }
}
