import vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes'
// import state from '../store/state'
vue.use(vueRouter);
const router = new vueRouter({
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     alert('跳转到新的路由时呈现的位置设置scrollBehavior()，滚动行为即将发生。。。savedPosition是原始位置，只有点击浏览器的前进和后退才会有原始位置信息')
    //     //点击浏览器的前进和后退按钮时，滚到原始位置
    //     if (savedPosition) {
    //         return savedPosition;
    //     }
    //     //滚动到某个锚点
    //     if(to.hash){
    //         return {selector:to.hash};
    //     }
    //     console.log(to, from,'滚动行为即将发生。。。');
    //     return { x: 200, y: 300 }
    // },
    routes
})
//全局前置导航守卫,在每个导航进入之前触发，可用于验证是否登录状态，如果没有，引导他登录或者注册
// router.beforeEach((to, from, next) => {
//     console.log(to, from, '1111111');
//     if (!state.hasLogin) {
//         console.log(router, 'router')
//         alert('全局前置守卫，请先登录')
//         // next('/login')
//         return;
//     }
//     next()
// })

// //全局解析导航,在导航完成之前，同时在所有组件内守卫和异步路由组件被解析之后执行
// router.beforeResolve((to, from, next) => {
//     console.log(to, from);
//     alert('全军解析导航守卫，路由进行中')
//     next()
// })

// //全局后置钩子，在导航完成之后执行，没有next，不会改变路由，因为此时路由已经完成之后了
// router.afterEach((to, from) => {
//     console.log(to, from);
//     alert('恭喜你，这里是全局后置钩子，出现此信息，说明路由已经完成了，接下来为你展示新路由的内容')
//     console.log('此时路由已经完成了，afterEach');
// })

export default router;
