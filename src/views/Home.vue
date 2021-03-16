<template>
  <div class="home">
   <h1>{{ myTitle }}</h1>
   <p>
    J'ai {{ myAge }} ans
   </p>
   <p>
    {{ myAge > 30 ? "je suis vieux" : "Je suis jeune" }}
   </p>
   <p>
    {{ percentCa /100 }} %
   </p>
   <p v-if="myAge > 30">
    Je suis vieux
   </p>
   <p v-else>
    Je suis jeune
   </p>
   <div class="visible__block" v-if="!isVisible">
    <p>Je suis invisible</p>
   </div>
   <div class="visible__block" v-else-if="isVisible">
    <p>Je suis visible</p>
   </div>
   <div class="unvisible__block" v-else>
    <p>Je suis ni visible ni invisible</p>
   </div>
   <div class="font-bold" v-html="textStyling">
   </div>
   <div class="google__logo">
    <img :src="googleLogo" alt="logo google">
   </div>
   <div class="link">
    <a target="_blank" :href="link">Link to google</a>
    <a target="_blank" v-bind:href="link">Link to google</a>
   </div>
   <div class="products__grid" v-for="(product,index) in productsArray" v-bind:key="product.id">
      {{ index }}
      {{ product.id}}
      {{ product.title }}
      {{ product.price }} €
   </div>
   <button v-on:click="sayHello('vincent')">say Hello</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    sayHello: function(name) {
      alert(`Hello ${name}`);
    }
  },
  data: function() {
    return {
      myTitle: "Ma homepage",
      myAge: 30,
      percentCa: 2000,
      isVisible: false,
      textStyling:"<strong>This text is bold</strong>",
      link:"https://google.fr",
      googleLogo:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      productsArray:[
        {id:1,title:"product 1", price: 20},
        {id:2,title:"product 2", price: 50}
      ]
    }
  }
}
</script>

<style scoped>

</style>
