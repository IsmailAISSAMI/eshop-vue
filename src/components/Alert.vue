<template>
    <div class="alert">
        <p :class="className"> {{ errorMessage }} </p>
    </div>
</template>

<script>
    export default {
        name: 'Alert',
        props: {
            errorMessage: String,
            className: String
        }
    }
</script>

<style lang="scss" scoped>
    .alert{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15vh 0;

        p {
            background-color: #fff;
            border: 2px solid #fff;
            border-radius: .25rem;
            width: 40vw;
            height: 10vh;
            display: flex;
            justify-content: center; 
            align-items: center;
            
        }

        .alert__success{
            color: #155724;
            background-color: #d4edda;
            border: 2px solid #c3e6cb;
        }

        .alert__danger{
            color: #721c24;
            background-color: #f8d7da;
            border: 2px solid #fda7af;
        }

        
    }
</style>