<template>
    <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle">
        <div class="uk-width-1-3@m uk-width-1-2@s m-auto">
            <div class="uk-card-default p-5 rounded">
                <div class="mb-4 uk-text-center">
                    <h3 class="mb-0"> Create new Account</h3>
                    <p class="my-2">Login to manage your account.</p>
                </div>
                <form class="uk-child-width-1-1 uk-grid-small" uk-grid @submit.prevent="register">

                    <div>
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Name</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-user"></i>
                                </span>
                                <input class="uk-input" type="text" v-model="name" placeholder="Full name">
                            </div>

                        </div>
                    </div>
                    <div>
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Email</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="email" v-model="email" placeholder="name@example.com">
                            </div>

                        </div>
                    </div>

                    <div class="uk-width-1-2@s">
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Password</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" v-model="password" placeholder="********">
                            </div>

                        </div>
                    </div>
                    <div class="uk-width-1-2@s">
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Confirm password</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" v-model="password_confirmation" placeholder="********">
                            </div>

                        </div>
                    </div>

                    <div>
                        <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                            <div class="uk-width-expand@s">
                                <p> Already have account <router-link :to="{name: 'login'}"><a>Login</a></router-link></p>
                            </div>
                            <div class="uk-width-auto@s">
                                <input type="submit" class="btn btn-default" value="Get Started"></input>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Register',
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        },
        methods: {
            register(){
                this.$store.dispatch('registerNewUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }).then(res=> {
                    if(res.status == 201){
                        this.$router.push({name: 'login'});
                    }else{
                        UIkit.notification({
                            message: 'something bad happend !',
                            status: 'danger',
                            pos: 'top-right',
                            timeout: 5000
                        });
                    }
                }).catch(error => {
                    if(error.response.status == 422){
                        var msg = 'something bad happend !';
                        if(error.response.data.errors.hasOwnProperty('password')){
                            var msg = error.response.data.errors.password[0];
                        }
                        if(error.response.data.errors.hasOwnProperty('email')){
                            var msg = error.response.data.errors.email[0];
                        }
                        if(error.response.data.errors.hasOwnProperty('name') > 0){
                            var msg = error.response.data.errors.name[0];
                        }

                        UIkit.notification({
                            message: msg,
                            status: 'danger',
                            pos: 'top-right',
                            timeout: 5000
                        });
                    }
                });
            }
        }
    }
</script>
