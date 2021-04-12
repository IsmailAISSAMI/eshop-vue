<template>
    <div class="edit__user__container">
        <h1>Update User</h1>

        <p><router-link to="/Admin/users/all">Return</router-link></p>

        <form @submit.prevent="editUser" class="edit__user__form">
            <div class="form-group">
                <label htmlFor="emailLabel">Email address</label>
                <input type="email" name="email" v-model="email" class="form-control" placeholder="Enter email">
            </div>

            <div class="form-group">
                <label htmlFor="passwordLabel">Password</label>
                <input type="password" name="password" v-model="password" placeholder="Password" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="adminLabel">Is Admin?</label>
                <select v-model="isAdmin" name="isAdmin" class="form-control form-control">
                    <option>True</option>
                    <option>False</option>
                </select>
            </div>

            <div class="form-group">
                <label htmlFor="firstNameLabel">First Name</label>
                <input type="text" name="firstName" v-model="firstName" placeholder="First Name" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="lastNameLabel">Last Name</label>
                <input type="text" name="lastName" v-model="lastName" placeholder="Last Name" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="phoneNumberLabel">Phone Number</label>
                <input type="text" name="phoneNumber" v-model="phoneNumber" placeholder="Phone Number" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="streetrLabel">Street</label>
                <input type="text" name="street" v-model="street" placeholder="Street" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="streetrLabel">Street</label>
                <input type="text" name="street" v-model="street" placeholder="Street" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="streetrLabel">City</label>
                <input type="text" name="city" v-model="city" placeholder="City" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="countryLabel">Country</label>
                <input type="text" name="country" v-model="country" placeholder="Country" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="countryLabel">Country</label>
                <input type="text" name="country" v-model="country" placeholder="Country" class="form-control">
            </div>

            <div class="form-group">
                <label htmlFor="zipLabel">Zip</label>
                <input type="text" name="zip" v-model="zip" placeholder="Zip Code" class="form-control">
            </div>

            
            <button type="submit"  value="Sign-In" class="btn btn-primary">Submit</button>
            </form>
    </div>
</template>


<script>
    export default {
        data: function() {
            return {
                email:"",
                password:""
            }
        },
        methods: {
            editUser: function(e) {

            }
        }
    }
</script>


<style lang="scss" scoped>

    .edit__user__container{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .edit__user__form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    
</style>