<template>
    <div class="product__page">
        <div class="product__content" v-if="productItem">
            <TitlePage :title="productItem.title"/>
            <p>
                {{productItem.price | formatPrice }}
            </p>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";

    export default {
        name:"Product",
        components:{
            TitlePage
        },
        data: function() {
            return {
                productItem:{}
            }
        },
        created() {
            fetch(`http://localhost:3030/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.productItem = data;
            })
            .catch(err=> console.log(err));
        }
    }
</script>

<style lang="scss" scoped>

</style>