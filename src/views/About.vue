<template>
  <div class="about">
    <TitlePage title="Page about"/>
    <Button btnClass="btn btn-black" btnText="Click Me" v-bind:btnFunction="clickMe" />
    <!-- <ProductCard :ProductObject="myObject"/> -->
  </div>
</template>
<script>

import TitlePage from "../components/TitlePage";
import Button from "../components/Button";
import ProductCard from "../components/product/ProductCard";

export default {
  name:"About",
  components:{
    TitlePage, Button,ProductCard
  },
  data: function() {
    return {
      myObject:{title:"dsdsd", price:"20"}
    }
  },
  methods: {
    clickMe: function() {
      console.log("its clicked");
    }
  }
}
</script>
