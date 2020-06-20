import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // 如果用户访问的是登陆页，放行
    if (to.path === '/login') {
        next()
    } else {
        // 如果用户访问的不是登陆页，看有没有token
        const tokenStr = window.sessionStorage.getItem('token')
        // 没有token，强制跳转到登陆页
        if (!tokenStr) {
            next('/login')
        } else {
            // 有token，放行
            next()
        }
    }
})

export default router
