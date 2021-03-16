<template>
    <div class="login__form">
        <form @submit.prevent="login">
            <div class="form__group">
                <label htmlFor="email">Mail</label>
                <input type="email" name="email" v-model="email"/>
            </div>
            <div class="form__group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" v-model="password"/>
            </div>
            <div class="form__group">
               <input type="submit" value="se connecter">
            </div>
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
                fetch("http://localhost:3030/api/v1/users/login",requestOptions)
                .then (res => res.json())
                .then((data) => {
                        if(!data.auth) {
                            this.messageError = data.message;
                        }
                        else {
                            let token = data.token;
                            localStorage.setItem('token',token);
                            this.$router.push('/account');
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

</style>