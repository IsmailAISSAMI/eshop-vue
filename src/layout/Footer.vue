<template>
    <footer class="footer__main">
        <div class="footer__nav">
            <div class="footer__col">
                <h3 class="footer__col__head">Get to Know Us</h3> 
                <router-link class="nav__link" to="/about">About Us</router-link>
            </div>
            <div class="footer__col">
                <h3 class="footer__col__head">Let Us Help You</h3>
                <router-link class="nav__link" to="/account">Your Account</router-link>
                <router-link class="nav__link" to="/#">Your Orders</router-link>
                <router-link class="nav__link" to="/policy">Refund&amp; Privacy Policies</router-link>
            </div>
        </div>
        
        <div class="footer__copyright">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Shop Logo" width="100px">
                <p>Copyright © 2021</p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .footer__main{
        background-color: #232F3E;
        
        .footer__nav{
            display: flex;
            flex-direction: row;
            justify-content: center;
            .footer__col{
                height: 100%;
                width: 25%;
                padding: 20px 0;
                .footer__col__head{
                    color: #fff;
                    font-size: 16px;
                    margin: 6px 0 14px 0;
                }
                .nav__link {
                    display: block;
                    color: #fff;
                    text-decoration: none;
                    font-size: 14px;
                    line-height: 25px;
                    font-family: Arial,sans-serif;
                }
            }
        }
        

        .footer__copyright{
            padding: 20px 0;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #131A22;

            img{
                object-fit: contain;
                margin-bottom: 15px;
            }
        }
    }
</style>