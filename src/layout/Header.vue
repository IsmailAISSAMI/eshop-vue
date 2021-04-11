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
            <button v-if="isLogged" class="nav__link logout__link" @click="logout">Logout</button>
            <router-link v-else class="nav__link" to="/login">Login</router-link>
            <router-link class="nav__link" to="/cart">
                <i class="fas fa-shopping-cart icon__color"></i>
            </router-link>
        </div>
    </header>
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    export default {
        data: function() {
            return {
                isLogged:false
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
                window.location.href = 'http://10.188.211.84:8080/#/login';
            }
        },
        created() {
            const token = localStorage.getItem('token');
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
               fetch(`http://localhost:3080/api/v1/users/${decodedToken.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                //    console.log(data)
                   this.isLogged = true;
                   console.log("isLogged",  this.isLogged)
               })
               .catch(err => console.log(err))
            }
        }
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

            .logout__link{
                background-color:#131921;
                border: none;
            }

            .nav__link:hover {
                border: 1px solid #fff;
                border-radius: .25rem; 
            }

            .icon__color{
                color:#f0c14b !important;
                font-size: 20px;
            }

            
        }   
    }
</style>