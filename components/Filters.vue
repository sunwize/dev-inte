<template>
  <div class="filters">
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <nuxt-link to="/">Women</nuxt-link>
      <span>/</span>
      <nuxt-link to="/">New Collection</nuxt-link>
      <span>/</span>
      <nuxt-link to="/">Packable</nuxt-link>
    </div>

    <h1>Women's New Collection</h1>

    <p>Discover our awesome assortment of women's ...</p>

    <ul>
      <li @click.stop="selectCategory(null)" :class="{'active': category === null}">All jackets ({{ items.length }})</li>
      <li v-for="(c, index) in categories" :key="index" @click.stop="selectCategory(c)" :class="{'active': category === c}">{{ c }} ({{ amountOf(c) }})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    category: {
      type: String
    }
  },
  computed: {
    categories() {
      const categories = [];
      for (const item of this.items) {
        for (const c of item.categories) {
          if (!categories.includes(c))
            categories.push(c);
        }
      }

      return categories;
    }
  },
  methods: {
    amountOf(category) {
      return this.items.filter(i => i.categories.includes(category)).length;
    },
    selectCategory(category) {
      console.log(category);
      this.$emit('update:category', category);
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  padding: 0 2rem;

  @media screen and (max-width: 600px) {
    display: none;
  }

  a {
    font-size: 0.9rem;
    color: #4D4D4FFF;
  }

  h1 {
    font-size: 1.8rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  ul {
    margin-top: 1rem;
    list-style-type: none;
    padding-left: 0;

    li {
      text-transform: capitalize;
      border-bottom: 1px solid #E5E5E5;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &.active {
        font-weight: 700;
      }
    }
  }
}
</style>
