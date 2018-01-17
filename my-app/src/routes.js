import VueRouter from 'vue-router'
import firebase from 'firebase'

import Todo from './components/todo'
import Login from './components/login'
import SignUp from './components/signup'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/', redirect: 'login'
        },
        {
            path:'/todo', name:'Todo', component: Todo,
            meta: {
                requiresAuth: true
            }
        },
        {
            path:'/signup', name: 'SignUp', component: SignUp
        },
        {
            path: '*', redirect: '/login'
        },
        {
            path:'/login', name:'Login', component:Login
        }
    ]
});

router.beforeEach( (to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('todo')
    else next()
})

export default router; 