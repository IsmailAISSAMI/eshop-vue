<template>
    <div class="shopping__cart">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price HT</th>
                    <th></th>
                     <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{ item.priceHT | formatPriceDecimal | formatPrice }}</td> 
                    <td>
                        <button @click="removeItemCart(item)">-</button>
                        <button @click="addItemCart(item)">+</button>
                    </td>
                    <td>
                        {{item.qty *item.priceHT | formatPriceDecimal | formatPrice }}
                    </td>
                    <td>
                        <button @click="removeProductCart(item)">Remove product</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            Total quantity: {{calcQty}}
        </div>
        <div>
            Total price: {{calcTotal | formatPriceDecimal | formatPrice}}
        </div>
        <button @click="clearShopCart">Remove basket</button>
    </div>
</template>

<script>
import Cart from "../mixins/Cart";
    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[],
            }
        },
        created() {
            this.cartArray = this.getCart();
            console.log(this.cartArray);
        },
        computed: {
            calcQty: function() {
                return this.getCartCount(this.cartArray);
            },
            calcTotal: function() {
                return this.getCartTotal(this.cartArray);
            }
        },
        filters: {
            formatPriceDecimal: function(value) {
            return value.toFixed(2);
            },
        },
        methods: {
            removeProductCart: function(product) {
                this.removeItemCart(product);
                this.cartArray = this.getCart();
            },
            addItemCart: function(product) {
                this.addOneQty(product);
                this.cartArray = this.getCart();
            },
            removeItemCart: function(product) {
                this.removeOneQty(product);
                this.cartArray = this.getCart();
            },
            clearShopCart: function() {
                this.clearCart();
                this.cartArray = this.getCart();
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