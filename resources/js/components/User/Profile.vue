<template>
    <div class="page-content-inner">



        <h2>Account</h2>

        <div uk-grid>
            <div class="uk-width-2-5@m">

                <div class="uk-card-default rounded text-center p-4">

                    <div class="user-profile-photo  m-auto">
                        <img src="assets/images/avatars/home-profile.jpg" alt="">
                    </div>

                    <h4 class="mb-2 mt-3">{{user.name}}</h4>
                    <p class="m-0"> Member since {{user.created_at}} </p>

                </div>

            </div>
            <div class="uk-width-expand@m">

                <div class="uk-card-default rounded">
                    <div class="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
                        <h5 class="mb-0"> Account details </h5>
                            <a href="#" uk-tooltip="title:Edit Account; pos: left"> <i
                                class="icon-feather-settings"></i> </a>
                    </div>
                    <hr class="m-0">
                    <div class="uk-child-width-1-2@s uk-grid-small p-4" uk-grid>
                        <div>
                            <h6 class="uk-text-bold"> Name </h6>
                                <p> {{user.name}} </p>
                        </div>
                        <div>
                            <h6 class="uk-text-bold"> Age </h6>
                                <p> {{user.age}} </p>
                        </div>
                        <div>
                            <h6 class="uk-text-bold"> Your email address </h6>
                                <p> {{user.email}} </p>
                        </div>
                        <div>
                            <h6 class="uk-text-bold"> Phone </h6>
                                <p>{{user.phone}} </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'UserProfile',
        data(){
            return {
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    created_at: '',
                    age: ''
                },
            }
        },
        created(){
            this.setUserData();
        },
        methods: {
            setUserData(){
                this.user = this.$store.getters.getUser;
            },
        }

    }
</script>
