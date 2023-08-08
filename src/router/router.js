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
                // 布局,
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
                path: 'border',
                name: 'border',
                redirect: '/border/charge',
                component:()=>import('../views/border/template.vue'),
                children:[
                    {
                        path:'charge',
                        meta:{
                            title:'活用 border-radius, 实现充电动画'
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
