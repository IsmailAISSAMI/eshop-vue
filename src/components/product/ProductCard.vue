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
    <p>	
      <button @click="() => addItemToCart(productObject)">Add to cart</button>	
    </p>
  </div>
</template>

<script>
import Cart from "../../mixins/Cart";	

export default {
  name: "ProductCard",
  mixins:[Cart],	
  props: {
    productObject: Object,
  },
  filters: {
    formatPriceDecimal: function(value) {
      return value.toFixed(2);
    },
  },
  methods:{	
    addItemToCart: function(product) {	
      this.addTocart(product)	
    }	
  }
};
</script>

<style lang="scss" scoped>
  $lightgray: #F5F5F5;
  
  .product__card{
    width: 30%;
    height: 300px;
    background-color: $lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
