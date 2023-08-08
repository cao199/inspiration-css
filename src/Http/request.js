import axios from "axios";
import { message, Modal } from 'ant-design-vue';
import { getToken, removeToken } from "./token";


import { useRouter } from "vue-router";
import router from "../router/router";

let testApi = 'https://api.younuokeji.cloud/cloud/shield/operate/'

const service = axios.create({
    baseURL: testApi,
    // baseURL:'/api',
    timeout: 20000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = token
    }
    return config

}, function (error) {
    return Promise.reject(error)
})


// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    const { data, request, status, config } = response
    //下载文件
    if (request.responseType == 'blob') {
        if (status == '200' && data.type != 'application/json' && data.size > 100) {
            return data
        } else if (data.size < 100) {
            console.log('创建读取文件对象')
            let reader = new FileReader(); // 创建读取文件对象
            reader.readAsText(data, 'utf-8')
            reader.addEventListener("loadend", function () {
                let res = JSON.parse(reader.result)
                message.error(res.message)
            });
            return Promise.reject({})
        }
        //  else {
        //     if (data.type == 'application/json') {
        //         let reader = new FileReader(); // 创建读取文件对象
        //         reader.readAsText(data, 'utf-8')
        //         reader.addEventListener("loadend", function () { //
        //             let res = JSON.parse(reader.result); // 返回的数据
        //             message.error('下载失败')
        //             // MessageBox.confirm(res.message, '下载失败', {
        //             //     confirmButtonText: '确定 ',
        //             //     showCancelButton: false,
        //             //     type: 'warning',
        //             // })
        //         });

        //         return Promise.reject({})
        //     }
        //     // MessageBox.confirm('下载失败', '错误', {
        //     //     confirmButtonText: '确定 ',
        //     //     showCancelButton: false,
        //     //     type: 'warning',
        //     // })
        //     return Promise.reject({})
        // }

    } if (data.code != 1000) {
        message.error(data.message)
        Modal.destroyAll()
        if (data.code == 400) {
            window.localStorage.clear()
            router.push('/login')
        }

        // Modal.warning({
        //     title: '错误',
        //     content: data.message,
        //     okText:'确定',
        //     onOk(){
        //         //console.log('确定')
        //         Modal.destroyAll()
        //         if(data.code==400){
        //             localStorage.clear()
        //             router.push('/login')
        //         }
        //     }
        // })



        return Promise.reject(data)
    }


    return response.data;

}, function (error) {
    if (error.code == "ECONNABORTED" || error.message == 'Netword Error' || error.message.includes('timeout')) {
        message.error('请求超时，请稍后重试', 3)
    }

    return Promise.reject(error);
})





export default service
