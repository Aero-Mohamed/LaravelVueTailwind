<template>
    <div>

        <div class="side-nav uk-animation-slide-left-medium">


            <div class="side-nav-bg"></div>

            <!-- logo -->
            <div class="logo uk-visible@s">
                <router-link :to="{name: 'welcome'}">
                    <a>
                        <i class=" uil-graduation-hat"></i>
                    </a>
                </router-link>
            </div>


            <ul class="uk-position-bottom">
                <li>
                    <!-- Lunch information box -->
                    <a href="#">
                        <i class="uil-paint-tool"></i>
                    </a>
                    <div uk-drop="pos: right-bottom ;mode:click ; offset: 10;animation: uk-animation-slide-right-small">
                        <div class="uk-card-default rounded p-0">
                            <h5 class="mb-0 p-3 px-4  bg-light"> Night mode</h5>
                            <div class="p-3 px-4">
                                <p>Turns the light surfaces of the page dark, creating an experience ideal for night.
                                </p>
                                <div class="uk-flex">
                                    <p class="uk-text-small text-muted">DARK THEME </p>
                                    <!-- night mode button -->
                                    <span href="#" id="night-mode" class="btn-night-mode">
                                        <label class="btn-night-mode-switch">
                                            <span class="uk-switch-button"></span>
                                        </label>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </li>

            </ul>
        </div>


        <!-- content -->
        <div class="page-content" style="min-height: 100vh; padding-top: 20px;">

            <!-- Content Container
            ================================================== -->

            <router-view></router-view>

        </div>

    </div>
</template>

<script>
    import UserProfile from '../../User/Profile';
    import UserFooter from '../../Layouts/UserLayout/Footer';

    export default {
        name: 'UserLayout',
        components: {
            UserProfile,
            UserFooter,
        },
    }
</script>
