export default {
    methods: {
        
        addToWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            let productObject = {
                id: product._id,
                title: product.title,
                priceHT: product.priceHT,
            }
            console.log(productObject);

            let indexOfExistingProduct = wishlist.findIndex(
                (el) => el.id === productObject.id
            )

            if (indexOfExistingProduct !== -1) {
                console.log("product exist already!")
            }
            else {
                cart.push(productObject)
            }

            localStorage.setItem('wishlist', JSON.stringify(wishlist));

        },

        getWishlist() {
            return JSON.parse(localStorage.getItem('wishlist'));
        },

        removeItemWishlist(product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist'));
            const filteredWishlist = wishlist.filter((item) => {
                return item.id !== product.id;
            });
            localStorage.setItem('wishlist', JSON.stringify(filteredWishlist));
        },

        clearWishlist() {
            localStorage.removeItem('wishlist');
        }   
    }
}