<template>
    <div>
        <div v-if="loading">
            <p>loading page</p>
        </div>
        <div v-else>
            <div v-if="isLogged">
                <div v-if="user.isAdmin">
                    <UserLambda :user="user" />
                </div>
                <div v-else>
                    <Alert className="alert__danger" errorMessage="je suis pas admin!"/>
                </div>
            </div>
            <div v-else>
                <Alert className="alert__danger" errorMessage="You are not connected!"/>
            </div>
        </div>
        
    </div>
</template>

<script>

import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
import Alert from "../components/Alert";
import UserLambda from '../layout/user/UserLambda.vue';


    export default {
        components: {
            TitlePage,
            Alert,
            UserLambda
        },
        data: function() {
            return {
                user:{},
                isLogged:false,
                loading: true
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
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
                   this.user = data.user;
                   this.isLogged = true;
                   this.loading = false;
               })
               .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>