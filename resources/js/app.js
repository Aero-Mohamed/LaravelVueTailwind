/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';

/**
 * VueRoute
 */
import VueRouter from 'vue-router';
import {routes} from './routes';

/**
 * Vuex
 */
import Vuex from 'vuex';
import {store} from './store/index';
/**
 * Import Components
 */
import UserLayout from './components/Layouts/UserLayout/Layout';


// use VueRouter & Vuex
Vue.use(VueRouter);
axios.defaults.baseURL = 'http://localhost/LaravelVueTailwind/public/api';


/**
 * init VueRouter
 * @type {VueRouter}
 */
const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'active',
    routes: routes,

});
/**
 * Route Guards ..
 * [requiresVisitor, requiresAuth ]
 */

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                name: 'login'
            })
        }else{
            next();
        }
    }  else if(to.matched.some(record => record.meta.requiresVisitor)) {
        if(store.getters.isLoggedIn){
            next({
                name: 'welcome',
            })
        }else{
            next();
        }
    }else{
        next();
    }
})


const app = new Vue({
    el: '#app',
    components: {
        UserLayout,
    },
    store: store,
    router: router
});
