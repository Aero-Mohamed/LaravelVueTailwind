<template>
    <div class="mt-10 p-3 w-50 mx-auto">
        <h1>Welcome, dear</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, aspernatur assumenda, at beatae corporis enim iusto laborum molestias neque nesciunt similique unde voluptates? Assumenda distinctio harum minus modi voluptate?</p>
        <div class="text-center">
            <router-link :to="{name: 'login'}"><a>Login</a></router-link> -
            <router-link :to="{name: 'register'}"><a>Register</a></router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
