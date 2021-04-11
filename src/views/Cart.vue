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
        <button @click="checkout">payement</button>
    </div>
</template>

<script>
import Cart from "../mixins/Cart";
import {loadStripe} from '@stripe/stripe-js';
// public key
const stripePromise = loadStripe('pk_test_51IYAy4EMn5LU6PTL0lp2KxEvyqlaMoQ5ASLz8NrN7DZBRF3Foo4q86s2tIN1OXXT08rtL3hIZx1UPqZhYZKqpQ1400scdPmFdA');

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
            },
            checkout: async function(){
                const stripe = await stripePromise;
                const response = await fetch('http://localhost:3080/api/v1/create-checkout-session', {
                    method:"POST",
                    headers : {
                    "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        amount:30000
                    })
                });
                console.log(response);
                const session = await response.json()
                console.log(session);
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id,
                });

                if (result.error) {
                    console.log(result.error)
                }
                
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