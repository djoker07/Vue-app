import Todo from './components/todo'
import Login from './components/login'
import SignUp from './components/signup'

export default [
    {
        path:'/',
        components: Login
    },
    {
        path:'/todo',
        components: Todo
    },
    {
        path:'/sing-up',
        components: SignUp
    }
]