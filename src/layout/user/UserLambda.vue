<template>
    <div class="user__lambda__main">
        <div class="user__info" v-if="user">
            <p>First Name :{{user.firstName}}</p>
            <p>Last Name :{{user.lastName}}</p>
            <p>Email :{{user.email}}</p>
            <button @click="logout">LOGOUT</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                user:{}
            }
        }
    }
</script>

<style lang="scss" scoped>



</style>