<template>
    <div>
        <div v-if="loading" id="admin__spinner">
            <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div v-if="isLogged">
                <div v-if="user.isAdmin">
                    <AdminDashboard :user="user" />
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
import AdminDashboard from './AdminVues/AdminDashboard';


    export default {
        components: {
            TitlePage,
            Alert,
            AdminDashboard
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
    #admin__spinner{
        height: 80vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>