<template>
    <div class="login__main">
        <h1>Sign-in</h1>

        <form @submit.prevent="login" class="login__form">
            <div class="form__group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" v-model="email"/>
            </div>
            <div class="form__group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" v-model="password"/>
            </div>
            <div class="form__group">
               <input type="submit" value="Sign-In" class="signin__button">
            </div>
            <p>
                By signing-in you agree to the <span>FAKE SHOP</span> Conditions of Use &amp; Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function(e) {

                const body = {
                        email : this.email,
                        password: this.password
                }
                
                const requestOptions = {
                   method: "POST",
                   headers: {
                       "Content-Type":"application/json"
                   },
                   body : JSON.stringify(body)
                }
                fetch("http://localhost:3080/api/v1/users/login",requestOptions)
                .then (res => res.json())
                .then((data) => {
                        if(!data.auth) {
                            this.messageError = data.message;
                        }
                        else {
                            let token = data.token;
                            localStorage.setItem('token',token);
                            this.$router.push('/account');
                            window.location.reload();
                        }
                    }
                )
                .catch(
                    err => console.log(err)
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login__main {
        background-color: white;
        margin: 15vh 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-weight: 500;
            margin-bottom: 15px;
        }
        
        .login__form {
            width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid lightgray;
            border-radius: 5px;
            padding: 20px;

            .form__group {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                
                input {
                    height: 30px;
                    margin-bottom: 10px;
                }

                .signin__button {
                    background: #f0c14b;
                    border-radius: 2px;
                    width: 100%;
                    height: 30px;
                    border: 1px solid;
                    margin-top: 10px;
                    border-color: #a88734 #9c7e31 #846a29;
                }

                .signin__button:hover {
                    background: #ebb120;
                }
            }

            p {
                margin-top: 15px;
                font-size: 12px;
                text-align: justify;

                span {
                    font-weight: 700;
                    color: red;
                }
            }

        }
    }
</style>