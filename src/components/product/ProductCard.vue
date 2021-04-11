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
      <button @click="() => addItemToCart(productObject)" class="add__to__cart__button">
        <i class="fas fa-cart-plus"></i>
        Add to Cart
      </button>	
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
  $main-color:#131921;
  $yellow-color:#f0c14b;
  $hover-color:#ebb120;
  .product__card{
    width: 30%;
    height: 300px;
    margin: 30px 0;
    background-color: $lightgray;
    border-radius: 5px;
    border: 1px solid $main-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .add__to__cart__button {
      background: $yellow-color;
      border-radius: 2px;
      width: 120px;
      height: 30px;
      border: 1px solid;
      margin-top: 10px;
      border-color: #a88734 #9c7e31 #846a29;
    }

    .add__to__cart__button:hover {
      background: $hover-color;
    }
  }
  .product__card:hover{
    border-color: $hover-color;
  }
</style>
