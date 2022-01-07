<template>
  <div class="items">
    <div v-for="item in itemsFiltered" :key="item.id" class="item">
      <div class="image-container">
        <nuxt-img :src="item.image" :alt="item.title"></nuxt-img>
      </div>
      <div class="details">
        <div class="title">{{ item.title }}</div>
        <div class="price">$ {{ item.price }}</div>
      </div>
      <div class="colors">{{ item.colors.length }} colors</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsGrid",
  props: {
    category: {
      type: String
    }
  },
  computed: {
    itemsFiltered() {
      let items = this.items.filter(i => i.image);

      if (this.category)
        items = items.filter(i => i.categories.includes(this.category));

      return items;
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 2rem 1rem;
  padding: 0 4rem 0 2rem;
  overflow-y: auto;

  .item {
    cursor: pointer;

    .image-container {
      overflow: hidden;
      height: 480px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 200ms ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .details {
      display: flex;
      font-weight: 700;
      margin-top: 0.25rem;

      .title {
        flex: 1;
        font-size: 0.9rem;
      }

      .price {
        margin-left: auto;
      }
    }

    .colors {
      margin-top: 0.25rem;
    }
  }
}
</style>
