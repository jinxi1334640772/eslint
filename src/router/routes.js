import home from '../components/nav/home.vue'
import blog from '../components/nav/blog.vue'
import forum from '../components/nav/forum.vue'
import activity from '../components/nav/activity.vue'
import message from '../components/nav/message.vue'
import login from '../components/nav/login.vue'
import register from '../components/nav/register.vue'
import messageSub from '../components/nav/messageSub.vue'
import noFonund from '../components/nav/noFonund.vue'
import other from '../components/nav/other.vue'



const routes = [
    {
        path: '/', name: 'home', components: {
            default: home,
            other: other,
        }
    },
    { path: '/blog', name: 'blog', component: blog, alias: '/blogg' },
    {
        path: '/forum', name: 'forum', component: forum
        // , beforeEnter: (to, from, next) => {
        //     // 
        //     console.log(to, from)
        //     // next('/login')
        //     // next({path:'login'})
        //     // next({path:'/login'})
        //     alert('路由内导航守卫，跳转到login')
        //     next({ name: 'login' })
        // }
    },
    { path: '/shoping', name: 'shoping', component: () => import('../components/nav/shoping.vue'), redirect: 'activity' },//异步组件
    { path: '/activity', name: 'activity', component: activity },
    {
        path: '/message', name: 'message', component: message, children: [
            { path: ':id', name: 'messageSub', component: messageSub, meta: { name: '张进喜', age: 22 }, props: true }
        ]
    },
    { path: '/login', name: 'login', component: login },
    { path: '/register', name: 'register', component: register },
    { path: '*', name: '404', component: noFonund },
];
export default routes;