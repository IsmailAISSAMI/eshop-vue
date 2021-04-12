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

                <table class="table table-striped products__table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="product._id">
                            <th scope="row">{{index}}</th>
                            <td>{{product.title}}</td>
                            <td>{{product.category}}</td>
                            <td>{{product.priceHT}}</td>
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
                products:[],
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
                   return fetch(`http://localhost:3080/api/v1/products`, {
                        headers: {
                            Authorization: token
                        }
                    })
               })
               .then(res => res.json())
               .then(data=>{
                   this.products = data;
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

            .products__table{
                width: 95%;
                margin: 30px auto;
            }
        }
    
    }
</style>