import {createRouter,createWebHashHistory} from "vue-router";
import login from '../views/login.vue'
const routes = [
    {
        path: '/login',
        component: login,
        // redirect: '/login',
        meta: {
            title: '登录'
        }

    },
    {
        path:'/',
        component:() => import('../views/template.vue'),
        children:[
            {
                //进入首页
                path: '',
                redirect: '/layout'
            },

            {
                // 布局,
                path: 'layout',
                name: 'layout',
                redirect: '/layout/center',
                component:()=>import('../views/layout/template.vue'),
                children:[
                    {
                        path:'center',
                        meta:{
                            title:'grid 布局配合 clip-path 实现 GTA5 封面'
                        },
                        component: () => import('../views/layout/center.vue')
                    },
                    {
                        path:'falls',
                        meta:{
                            title:'CSS实现瀑布流布局（column-count）'
                        },
                        component: () => import('../views/layout/falls.vue')
                    },
                    {
                        path:'columnLayout',
                        meta:{
                            title:'多方案实现跨行或跨列布局'
                        },
                        component: () => import('../views/layout/columnLayout.vue')
                    }
                ]
           },
            {
                // 阴影
                path: 'shadow',
                name: 'shadow',
                redirect: '/shadow/progress',
                component: () => import('../views/shadow/template.vue'),
                children: [
                    {
                        path: 'progress',
                        meta:{
                            title:'box-shadow实现圆环进度条动画'
                        },
                        component: () => import('../views/shadow/progress.vue'),

                    },
                    {
                        path: 'gradient',
                        meta:{
                            title:'使用box-shadow/渐变实现内切角'
                        },
                        component: () => import('../views/shadow/gradient.vue'),

                    },
                    {
                        path: '3Dtext',
                        meta:{
                            title:'使用阴影实现文字的 3D 氖灯效果'
                        },
                        component: () => import('../views/shadow/3Dtext.vue'),
                    },
                    {
                        path: '3Dtext2',
                        meta:{
                            title:'box-shadow实现霓虹氖灯文字效果'
                        },
                        component: () => import('../views/shadow/3Dtext2.vue'),

                    },
                    {
                        path: 'translucent',
                        meta:{
                            title:'使用 box-shadow 实现半透明遮罩'
                        },
                        component: () => import('../views/shadow/translucent.vue'),

                    },
                    {
                        path: 'stripeText',
                        meta:{
                            title:'线性渐变配合阴影实现条纹立体阴影条纹字'
                        },
                        component: () => import('../views/shadow/stripeText.vue'),

                    },
                    {
                        path: 'reliefStyle',
                        meta:{
                            title:'浮雕风格按钮'
                        },
                        component: () => import('../views/shadow/reliefStyle.vue'),

                    },
                    {
                        path: 'tiktolk',
                        meta:{
                            title:'单标签实现抖音LOGO'
                        },
                        component: () => import('../views/shadow/tiktolk.vue'),

                    },
                    {
                        path: 'fork',
                        meta:{
                            title:'单标签实现 AE浏览器 叉子 图形 '
                        },
                        component: () => import('../views/shadow/fork.vue'),

                    },

                ]
            },
            {
                //伪类
                path: 'pseudoClass',
                name: 'pseudoClass',
                redirect: '/pseudoClass/hoverStop',
                component:()=>import('../views/pseudoClass/template.vue'),
                children:[
                    {
                        path:'hoverStop',
                        meta:{
                            title:'伪元素 hover 实现纯 CSS 方式控制动画的暂停与播放'
                        },
                        component: () => import('../views/pseudoClass/hoverStop.vue')
                    },
                    {
                        path:'mindMove',
                        meta:{
                            title:'伪元素实现边界智能判断移动'
                        },
                        component: () => import('../views/pseudoClass/mindMove.vue')
                    },
                    {
                        path:'loading',
                        meta:{
                            title:'伪元素实现打点 loading 效果'
                        },
                        component: () => import('../views/pseudoClass/loading.vue')
                    },
                    {
                        path:'vague',
                        meta:{
                            title:'使用:not()伪类实现弹窗背景元素模糊'
                        },
                        component: () => import('../views/pseudoClass/vague.vue')
                    },


            ]
            },
            {
                // 滤镜
                path: 'filter',
                name: 'filter',
                redirect: '/filter/loading',
                component:()=>import('../views/filter/template.vue'),
                children:[
                    {
                        path:'loading',
                        meta:{
                            title:'小球穿梭放大loading动画'
                        },
                        component: () => import('../views/filter/loading.vue')
                    },
                    {
                        path:'ghost',
                        meta:{
                            title:'单标签纯CSS实现幽灵动画'
                        },
                        component: () => import('../views/filter/ghost.vue')
                    },
                    {
                        path:'hueRotate',
                        meta:{
                            title:'使用 hue-rotate 实现渐变背景动画'
                        },
                        component: () => import('../views/filter/hueRotate.vue')

                    },
                    {
                        path:'drip',
                        meta:{
                            title:'单标签实现滴水效果'
                        },
                        component: () => import('../views/filter/drip.vue')

                    },

                ]
            },
            {
                //边框
                path: 'border',
                name: 'border',
                redirect: '/border/charge',
                component:()=>import('../views/border/template.vue'),
                children:[
                    {
                        path:'charge',
                        meta:{
                            title:' border-radius, 实现充电动画'
                        },
                        component: () => import('../views/border/charge.vue')
                    },
                    {
                        path:'dynamicBorder',
                        meta:{
                            title:'利用 border-image 实现动态边框'
                        },
                        component: () => import('../views/border/dynamicBorder.vue')
                    },
                    {
                        path:'line',
                        meta:{
                            title:'使用 border-radius 的变化模拟绳子下坠'
                        },
                        component: () => import('../views/border/line.vue')
                    },
                    {
                        path:'radiusLoading',
                        meta:{
                            title:'border-radius变换实现loading效果'
                        },
                        component: () => import('../views/border/radiusLoading.vue')
                    },
                    {
                        path:'wave',
                        meta:{
                            title:' border-radius, 实现波浪百分比图'
                        },
                        component: () => import('../views/border/wave.vue')
                    },
                ]
            },
            {
                // loading
                path: 'loading',
                name: 'loading',
                redirect: '/loading/loading1',
                component:()=>import('../views/loading/template.vue'),
                children:[
                    {
                        path:'loading1',
                        meta:{
                            title:'加载动画集合...'
                        },
                        component: () => import('../views/loading/loading1.vue')
                    },
                    {
                        path:'bar',
                        meta:{
                            title:'角向渐变实现纯 CSS 圆环进度图'
                        },
                        component: () => import('../views/loading/bar.vue')
                    },
                    {
                        path:'emergenceText',
                        meta:{
                            title:'mask-image 实现文字的渐现'
                        },
                        component: () => import('../views/loading/emergenceText.vue')
                    },
                    {
                        path:'progressBar',
                        meta:{
                            title:'进度条集合...'
                        },
                        component: () => import('../views/loading/progressBar.vue')
                    },
                    {
                        path:'inputStyle',
                        meta:{
                            title:'多重背景单标签实现气泡按钮点击效果'
                        },
                        component: () => import('../views/loading/inputStyle.vue')
                    },
                    {
                        path:'spotlight',
                        meta:{
                            title:'径向渐变实现舞台灯光聚焦效果'
                        },
                        component: () => import('../views/loading/spotlight.vue')
                    },
                    {
                        path:'colorText',
                        meta:{
                            title:'基于混合模式让文字智能适配背景颜色'
                        },
                        component: () => import('../views/loading/colorText.vue')
                    },
                    {
                        path:'translateZ',
                        meta:{
                            title:'使用 translateZ 实现滚动视差'
                        },
                        component: () => import('../views/loading/translateZ.vue')
                    },
                    {
                        path:'block',
                        meta:{
                            title:' clip-path 实现边框线条动画'
                        },
                        component: () => import('../views/loading/block.vue')
                    },
                    {
                        path:'breakText',
                        meta:{
                            title:'文字断裂效果....'
                        },
                        component: () => import('../views/loading/breakText.vue')
                    },

                    {
                        path:'daultText',
                        meta:{
                            title:'光影按钮'
                        },
                        component: () => import('../views/loading/daultText.vue')
                    },
                    {
                        path:'svgButton',
                        meta:{
                            title:'SVG feTurbulence 滤镜实现故障按钮点击效果'
                        },
                        component: () => import('../views/loading/svgButton.vue')
                    },
                    {
                        path:'Alipay',
                        meta:{
                            title:' SVG 支付宝AR扫福动画'
                        },
                        component: () => import('../views/loading/Alipay.vue')
                    },
            ]
            },
            {
                //渐变
                path: 'anamorphism',
                name: 'anamorphism',
                redirect: '/anamorphism/attachment',
                component:()=>import('../views/anamorphism/template.vue'),
                children:[
                    {
                        path:'attachment',
                        meta:{
                            title:'使用 background-attachment 实现毛玻璃效果'
                        },
                        component: () => import('../views/anamorphism/attachment.vue')
                    },
                    {
                        path:'drain',
                        meta:{
                            title:'background-clip 实现流光文字效果'
                        },
                        component: () => import('../views/anamorphism/drain.vue')
                    },
                    {
                        path:'dynamicBorder',
                        meta:{
                            title:'角向渐变实现光影 border 效果'
                        },
                        component: () => import('../views/anamorphism/dynamicBorder.vue')
                    },
                ]
            }

        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router
