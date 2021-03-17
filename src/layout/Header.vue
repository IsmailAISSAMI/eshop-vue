<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Shop Logo" width="100px">
        </div>
        <div class="header__nav">
            <router-link class="nav__link" to="/">Home</router-link> 
            <router-link class="nav__link" to="/shop">Shop</router-link>
            <router-link class="nav__link" to="/about">About</router-link>
            <router-link class="nav__link" to="/contact">Contact</router-link>
            <router-link class="nav__link" to="/account">Account</router-link>
            <router-link class="nav__link" to="/login">Login</router-link>
        </div>
    </header>
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>
    .header__main {
        height: 60px;
        width: 100vw;
        display: flex;
        align-items: center;
        background-color: #131921;
        position: sticky;
        top: 0;
        z-index: 100;

        .header__logo {
            object-fit: contain;
            margin: 0 20px;
            margin-top: 18px;
        }

        .header__nav {
            display: flex;
            flex:1;
            justify-content: space-evenly;
            
            .nav__link {
                display: block;
                padding: .5rem 1rem;
                color: #fff;
                font-weight: 700;
                font-size: 15px;
                text-decoration: none;
            }

            .nav__link:hover {
                border: 1px solid #fff;
                border-radius: .25rem; 
            }
        }   
    }

</style>