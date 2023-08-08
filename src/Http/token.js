const tokenKey = "Authorization"


// 获取token
export function getToken(){
    return window.localStorage.getItem(tokenKey)
}

// 设置token

export function setToken(token){

    return window.localStorage.setItem(tokenKey,token)
}

// 移除token

export function removeToken(){

    return window.localStorage.removeItem(tokenKey)
}
