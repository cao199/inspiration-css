<template>
  <div class="loginLayout">
    <div class="content">
      <!-- 标题 -->
      <div class="header">
        <img
            src="https://img-1305253719.cos.ap-nanjing.myqcloud.com/60f80f1e16eb3360247ed4a404cbca22.png"
            class="logo"
            alt="logo"
        />
        <span class="title">CSS</span>
        <span class="iconString">样式</span>
      </div>
      <div class="white">
        <div
            style="text-align: center; font-size: 18px; color: #2d2d2d"
        >
          账号密码登录
        </div>
        <div class="tab-box" style="padding-top: 30px">
          <a-form autocomplete="off">
            <a-form-item>
              <a-input
                  size="large"
                  type="text"
                  v-model:value="state.formState.username"
                  placeholder="账号"
                  @pressEnter="loginSubmit"
              >
                <template #prefix>
                  <UserOutlined style="color: #1890ff" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-input-password
                  size="large"
                  placeholder="密码"
                  v-model:value="state.formState.password"
                  @pressEnter="loginSubmit"
              >
                <template #prefix>
                  <LockOutlined style="color: #1890ff" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item style="margin-top: 24px">
              <a-button
                  size="large"
                  type="primary"
                  style="width: 100%"
                  @click="loginSubmit"
                  :loading="state.loginBtn"
                  :disabled="state.loginBtn"
              >确定</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

import { reactive, ref, toRefs } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
// import * as API from "../views/Http/Api";
import { message, notification } from "ant-design-vue";
// import { Login } from "../views/Http/Api";
import {setToken} from "../Http/token";
import { useRouter } from "vue-router";
const state = reactive({
  formState: {
    username: "",
    password: "",
  },
  loginBtn: false,
});

//确定按钮
const router = useRouter();
const loginSubmit =  () => {
  if (state.formState.username == "") {
    message.error("请输入账号");
    return;
  } else if (state.formState.password == "") {
    message.error("请输入密码");
    return;
  }
  state.loginBtn = true;
  if (state.formState.username == 'laoliu' && state.formState.password == '123456'){
    setToken('Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlvbl9pZCI6Im9uV1NlNnJPT0ViTXk5SUtrU3owSFYyaTdJMmMifQ.e-a0-zVF0-6DMr7pxJ6_f5az5YZvux1m17e50NEmzK4')
    // let  userInfo = {
    //       nickName:'老六'
    //     }
    // localStorage.setItem("userInfo",userInfo);
    router.push("/");
          setTimeout(() => {
            notification.success({
              message: "欢迎",
              description: `老六，欢迎回来`,
            });
          }, 500);
  }else {
    if(state.formState.username !== 'laoliu'){
      message.error('请输入正确的账号')
      state.loginBtn = false
      return;
    }
    if (state.formState.password !== '123456'){
      message.error('请输入正确的密码')
      state.loginBtn = false
      return;
    }


  }


};
</script>

<style lang="less" scoped>
.loginLayout {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #229bfb;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    position: relative;
    top: -25px;
    width: 360px;

    .header {
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 48px;
      font-size: 32px;
      .logo {
        height: 38px;
        margin-right: 16px;
        border-radius: 6px;
      }
      .title {
        color: #fff;
        font-family: Avenir, "Helvetica Neue", Arial, Helvetica,
        sans-serif;
      }
    }
    // 清除线
    .ant-tabs-nav::before {
      border-bottom: 0px;
    }
    .tab-box {
      height: 260px;
      overflow: hidden;
    }

    .user-layout-login {
      label {
        font-size: 14px;
      }

      .getCaptcha {
        display: block;
        width: 100%;
        height: 40px;
      }

      .forge-password {
        font-size: 14px;
      }

      button.login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }

      .user-login-other {
        text-align: left;
        margin-top: 24px;
        line-height: 22px;

        .item-icon {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 16px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: #1890ff;
          }
        }

        .register {
          float: right;
        }
      }
    }
  }
}
.white {
  width: 360px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 32px;
  padding: 0 64px;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  a {
    color: #eee;
    font-size: 14px;
  }
}
.iconString {
  margin-top: -10px;
  margin-left: 10px;
  background: hsla(0, 0%, 100%, 0.2);
  color: #fff;
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 3px;
}
// #code-wrapper {
//     transform: scale(0.9);
//     margin-top: -55px;
// }
</style>
