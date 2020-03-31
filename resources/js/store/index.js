import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        user: {
            id: '',
            name: 'Mohamed Ahmed',
            email: 'mrgeek.mohamed@gmail.com',
        }

    },
    getters: {
        getUser(state){
            return state.user;
        },
        isLoggedIn(state){
            return state.token != null;
        }
    },
    mutations: {
        setUserData(state, user){
            state.user = user;
        },
        setToken(state, token){
            state.token = token;
        },
        clearToken(state){
            state.token = null;
        }
    },
    actions: {
        retrieveToken({status, commit}, key){
            return new Promise((resolve, reject)=>{
                axios.post('/login', {
                    email: key.email,
                    password: key.password
                }).then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('access_token', token); // store at storage
                    commit('setToken', token); // update store state
                    resolve(response); // sync

                }).catch(error => {
                    console.log(error);
                    UIkit.notification({
                        message: 'Email or Password is wrong !',
                        status: 'danger',
                        pos: 'top-right',
                        timeout: 5000
                    });
                    reject(error);
                });
            });

        },
        getUser({state,commit,getters}){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ state.token;
            return new Promise((resolve, reject) => {
                if(getters.loggedIn){
                    axios.get('/user')
                        .then(response => {
                            commit('setUserData', response.data);
                            resolve(response.data);
                        }).catch(error => {
                        console.log(error);
                        reject(error);
                    });
                }else{
                    reject();
                }

            });

        },
        Logout({state, commit, getters}){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ state.token;
            return new Promise((resolve, reject) => {
                axios.get('/logout')
                    .then(response => {
                        localStorage.removeItem('access_token');
                        commit('clearToken');
                        resolve();
                    }).catch(error => {
                        console.log(error);
                        reject(error);
                });
            });

        },
        registerNewUser({state, commit, getters}, data){
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    },
    modules:{

    },
});
