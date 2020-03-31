<template>
    <div class="mt-10 p-3 w-50 mx-auto bg-blue-300">
        <h1>Welcome, dear</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, aspernatur assumenda, at beatae corporis enim iusto laborum molestias neque nesciunt similique unde voluptates? Assumenda distinctio harum minus modi voluptate?</p>
        <div class="text-center" style="display: flex; justify-content: space-around;">
            <a v-if="!isLoggedIn"><router-link :to="{name: 'login'}">Login</router-link></a>
            <a v-if="!isLoggedIn"><router-link :to="{name: 'register'}">Register </router-link></a>
            <a v-if="isLoggedIn"><router-link :to="{name: 'home'}">Profile </router-link></a>

        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            isLoggedIn(){
                return this.$store.getters.isLoggedIn;
            }
        }
    }
</script>
