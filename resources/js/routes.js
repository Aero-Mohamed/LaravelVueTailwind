
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
        component: UserLogin,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: UserRegister,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/home',
        name: 'home',
        component: UserProfile,
        meta: {
            requiresAuth: true,
        }
    },

    // bad required ..
    {
        path: '*',
        redirect: { name: 'welcome' }
    }
];


