<template>
  <div class="product__card">
    <router-link :to="{ name: 'Product', params: { id: productObject._id } }">
      <h2>
        {{ productObject.title }}
      </h2>
    </router-link>
    <p>
      {{ productObject.priceHT | formatPriceDecimal | formatPrice }}
    </p>
    <!-- <p><img :src="productObject.image"></p> -->
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productObject: Object,
  },
  filters: {
    formatPriceDecimal: function(value) {
      return value.toFixed(2);
    },
  }
};
</script>

<style lang="scss" scoped></style>
