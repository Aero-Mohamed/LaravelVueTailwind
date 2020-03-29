
import Welcome from './components/General/Welcome';
import UserLogin from './components/Auth/Login';
import UserRegister from './components/Auth/Register';
import UserProfile from './components/User/Profile';



export const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/login',
        name: 'login',
        component: UserLogin
    },
    {
        path: '/register',
        name: 'register',
        component: UserRegister
    },
    {
        path: '/home',
        name: 'home',
        component: UserProfile
    },

    // bad required ..
    {
        path: '*',
        redirect: { name: 'welcome' }
    }
];
