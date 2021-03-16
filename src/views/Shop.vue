<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop" />
    <ProductsGrid :productsArray="productsFromApi" />
  </div>
</template>

<script>
import TitlePage from '../components/TitlePage';
import ProductsGrid from '../components/product/ProductsGrid';
import ApiProducts from '../mixins/ApiProducts';

export default {
  components: {
    TitlePage,
    ProductsGrid,
  },
  data: function() {
    return {
      productsFromApi: [],
    };
  },
  mixins:[ApiProducts],
  created() {
    this.getProducts()
      .then((data) => {
        this.productsFromApi = data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped></style>
