<template>
  <div id="app">

    <Header/>

    <main>
      <router-view/>
    </main>
  
    <Footer/>
  
  </div>
</template>

<script>

import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-flow: column;
    height: 100vh;

    main{
      flex-grow : 1;
    }
  }
  
</style>
