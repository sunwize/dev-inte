<template>
  <div>
    <div class="main-content">
      <filters :category.sync="categorySelected"></filters>
      <items-grid :category="categorySelected" style="flex: 1"></items-grid>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Lëlo Life',
      meta: [
        {hid: 'description', name: 'description', content: 'Some content...'},
        {
          hid: 'author',
          name: 'author',
          content: 'Colin Clisson'
        },
        {hid: 'og:title', property: 'og:title', content: 'Lëlo Life'},
        {hid: 'og:image', property: 'og:image', content: this.items[0].image},
        {hid: 'twitter:title', property: 'twitter:title', content: 'Lëlo Life'}
      ]
    }
  },
  data() {
    return {
      categorySelected: null
    }
  }
}
</script>

<style lang="scss">
.main-content {
  display: flex;
  padding-top: 2rem;
}
</style>
