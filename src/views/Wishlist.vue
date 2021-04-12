<template>
    <div class="shopping__wishlist">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price HT</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in wishlistArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{ item.priceHT | formatPriceDecimal | formatPrice }}</td> 
                    <td>
                        <button @click="removeProductCart(item)">Remove product</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="clearShopWishlist">Remove all</button>
    </div>
</template>

<script>
import Wishlist from "../mixins/Wishlist";

export default {
        mixins:[Wishlist],
        data: function() {
            return {
                wishlistArray:[],
            }
        },
        created() {
            this.wishlistArray = this.getWishlist();
            console.log(this.wishlistArray);
        },
        filters: {
            formatPriceDecimal: function(value) {
            return value.toFixed(2);
            },
        },
        methods: {
            removeProductWishlist: function(product) {
                this.removeItemWishlist(product);
                this.wishlistArray = this.getWishlist();
            },
            clearShopWishlist: function() {
                this.clearWishlist();
                this.wishlistArray = this.getWishlist();
                window.location.href = "http://localhost:8080/#/shop";
            }
        }
    }
</script>

<style lang="scss" scoped>
.shop__table {
    width:50%;
    margin:50px auto;
}
</style>