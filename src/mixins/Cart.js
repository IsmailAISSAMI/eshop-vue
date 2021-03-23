export default {
    methods: {
        
        addTocart(product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let productObject = {
                id: product._id,
                title: product.title,
                priceHT: product.priceHT,
                qty: 1
            }
            console.log(productObject);

            let indexOfExistingProduct = cart.findIndex(
                (el) => el.id === productObject.id
            )

            if (indexOfExistingProduct !== -1) {
                cart[indexOfExistingProduct].qty += 1
            }
            else {
                cart.push(productObject)
            }

            localStorage.setItem('cart', JSON.stringify(cart));

        },

        getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        },

        removeItemCart(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            const filteredCart = cart.filter((item) => {
                return item.id !== product.id;
            });
            localStorage.setItem('cart', JSON.stringify(filteredCart));
        },

        clearCart() {
            localStorage.removeItem('cart');
        },

        removeOneQty(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            if (product.qty > 1) {
                let productObject = {
                    id: product.id,
                    title: product.title,
                    priceHT: product.priceHT,
                    qty: 1
                }
                let indexOfExistingProduct = cart.findIndex((el) => el.id === productObject.id);
                console.log(indexOfExistingProduct);
                if (indexOfExistingProduct != -1) {
                    cart[indexOfExistingProduct].qty--;
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        },

        addOneQty(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let productObject = {
                id: product.id,
                title: product.title,
                priceHT: product.priceHT,
                qty: 1
            }
            let indexOfExistingProduct = cart.findIndex((el) => el.id === productObject.id);
            console.log(indexOfExistingProduct);
            if (indexOfExistingProduct != -1) {
                cart[indexOfExistingProduct].qty++;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        },

        getCartTotal(card) {
            let total = card.reduce(
                (total, item) => total + (item.qty * item.priceHT), 0
            );
            return total;
        },

        getCartCount(card) {
            let total = card.reduce(
                (total, item) => total + item.qty, 0
            );
            return total;
        }
        
    }
}