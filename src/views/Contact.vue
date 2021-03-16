<template>
    <div>
        <TitlePage :title="myTitle"/>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";

    export default {
       name:"Contact",
       components: {
           TitlePage
       },
       data: function() {
           return {
               myTitle:"Page contact"
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>