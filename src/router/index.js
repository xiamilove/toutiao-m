import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件

const routes = [{
    path: '/login',
    name: 'login',
    component: () =>
        import ('@/views/login')
}, {
    path: '/',
    redirect: '/home',
    component: () =>
        import ('@/views/layout'),
    children: [{
        path: 'home',
        name: 'Home',
        component: () =>
            import ('@/views/Home')
    }, {
        path: 'qa',
        name: 'Qa',
        component: () =>
            import ('@/views/Qa')
    }, {
        path: 'video',
        name: 'Video',
        component: () =>
            import ('@/views/Video')
    }, {
        path: 'my',
        name: 'My',
        component: () =>
            import ('@/views/My')
    }]
}]

const router = new VueRouter({
    routes
})

export default router