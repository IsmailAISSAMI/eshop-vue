<template>
    <div>
        <TitlePage title="Mon compte"/>
        <div v-if="isLogged">
            <div class="user__info" v-if="user">
                <p>Nom :{{user.firstName}}</p>
                <p>Prénom :{{user.lastName}}</p>
                <p>Email :{{user.email}}</p>
                <button @click="logout">Se déconnecter</button>
            </div>
        </div>
        <div v-else>
            <p>Vous n'êtes pas connecté</p>
        </div>
    </div>
</template>

<script>

import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{},
                isLogged:false
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
               fetch(`http://localhost:3030/api/v1/users/${decodedToken.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                   this.isLogged = true;
                   this.user = data;
               })
               .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>