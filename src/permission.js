import {message} from "ant-design-vue";
import router from "./router/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from "./Http/token";


// 全局前置守卫
router.beforeEach((to,from,next)=>{
    const token = getToken()
    if(!token && to.path !="/login"){
        message.error('请先登录')
        return next({path:"/login"})

    }

    // 防止重复登录
    if(token && to.path == "/login"){
        return next({path:from.path?from.path:"/"})
    }
    NProgress.start()//开启进度条
    next()
})

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

router.afterEach((to,from)=>{
    // document.title= to.meta.title
    NProgress.done()//关闭进度条


})
