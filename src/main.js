import { createApp } from 'vue'
import App from './App.vue'
// import './style.css'
import './permission'
import router from './router/router'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/reset.css';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn')

import PageWrapper from './components/pageWrapper.vue'
const app = createApp(App)
app.use(Antd)
app.use(router)
app.component('page-wrapper',PageWrapper)
app.mount('#app')
