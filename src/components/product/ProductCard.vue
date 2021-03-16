<template>
    <div class="product__card">
        <router-link :to="{name:'Product',params:{id:productObject._id}}">
            <h2>
                {{productObject.title}}
            </h2>
        </router-link>
        <p>            
            {{productObject.price}}
        </p>
    </div>
</template>

<script>
    export default {
        name:"ProductCard",
        props:{
            productObject: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>