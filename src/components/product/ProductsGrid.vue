<template>
  <div class="products__grid">
    <ProductCard
      v-for="product in productsArray"
      :key="product._id"
      :productObject="product"
    />
  </div>
</template>

<script>

import ProductCard from './ProductCard';

export default {
  name: 'ProductsGrid',
  components: {
    ProductCard,
  },
  props: {
    productsArray: Array,
  },
};
</script>

<style lang="scss" scoped>
  .products__grid{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
</style>