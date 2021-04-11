<template>
    <div class="user__lambda__main">

        <SidebarNav :user="connectedUser"/>

        <div class="user__lambda__content">
            <Alert className="alert__success" errorMessage="I am an admin!!"/>
        </div>
        <!-- <div class="user__info">
                <p>Nom :{{user.firstName}}</p>
                <p>Prénom :{{user.lastName}}</p>
                <p>Email :{{user.email}}</p>
                <button @click="logout">Se déconnecter</button>
        </div> -->
    </div>
</template>

<script>
    import Alert from "../../components/Alert";
    import SidebarNav from "../../layout/SidebarNav";
    export default {
        components: {
            Alert,
            SidebarNav
        },
        props: {
            user: Object
        },
        data: function() {
            return {
                connectedUser:this.user
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
        
        .user__lambda__content{
            width: 98%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
    }


</style>