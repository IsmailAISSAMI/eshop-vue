<template>
    <div class="user__lambda__main">
        <SidebarNav :user="connectedUser"/>
        <div v-if="isLoading" id="admin__spinner">
            <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div class="user__lambda__content">

                <table class="table table-striped users__table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="(account, index) in users" :key="account._id">
                            <th scope="row">{{index}}</th>
                            <td>{{account.firstName}}</td>
                            <td>{{account.lastName}}</td>
                            <td>{{account.email}}</td>
                            <td>
                                <router-link class="badge badge-dark" :to="{ name: 'AdminEditUser', params: { id: account._id }}">
                                    <i class="fas fa-angle-double-right"></i>
                                    Update
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    import SidebarNav from "../../layout/SidebarNav";

    export default {
        components: {
            SidebarNav
        },
        
        data: function() {
            return {
                connectedUser:{},
                users:[],
                isLoading: true
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
                   this.connectedUser = data.user;
                   this.isLoading = false;
                   return fetch(`http://localhost:3080/api/v1/users`, {
                        headers: {
                            Authorization: token
                        }
                    })
               })
               .then(res => res.json())
               .then(data=>{
                   console.log(data)
                   this.users = data;
               })
               .catch(err => console.log(err))
            }
        }
    }   
</script>

<style lang="scss" scoped>
$background-main-color:#2f3f53;
    $secondary-color: #475e7a;
    $link-color: #fff;
    .user__lambda__main{
        width: 100vw;        
        display: flex;
        flex-direction: row;

        #admin__spinner{
            height: 80vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .user__lambda__content{
            width: 85vw;
            display: flex;
            justify-content: center;
            align-items: center;

            .users__table{
                width: 95%;
                margin: 30px auto;
            }
        }
    
    }
</style>