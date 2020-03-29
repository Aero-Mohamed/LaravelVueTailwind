import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            name: 'Mohamed Ahmed',
            email: 'mrgeek.mohamed@gmail.com',
            phone: '01102068860',
            created_at: 'Jun 1 2020',
            age: 20
        }

    },
    getters: {
        getUser(state){
            return state.user;
        },
    },
    mutations: {

    },
    actions: {

    },
    modules:{

    },
});
