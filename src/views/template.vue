<template>
  <div class="layoutContent">
    <a-layout>
      <!-- 头部 -->
      <a-layout-header class="header">
        <div class="logoContent">
          <img style="border-radius: 50%"
               src="https://img1.baidu.com/it/u=245473763,4033266682&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1691514000&t=6745126b8a55f6835f9ce7d627039c85"
               alt=""/>
          CSS<span class="line"/>样式
          <!-- v-show="item.status" -->
          <div class="menuContent">
            <router-link
                v-for="item in state.menu"
                :key="item.title"
                :to="item.router"
                :class="item.router == state.selectedKeys? 'isSelect': ''"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>

        <a-dropdown
            :overlayStyle="{ minWidth: '150px' }"
            placement="bottomRight"
        >
          <div class="userContent" @click.prevent>
            {{ state.userInfo.nickName }}
            <span style="margin-left: 4px"
            ><caret-down-outlined
            /></span>
          </div>
          <template #overlay>
            <a-menu>
<!--              <a-menu-divider/>-->
              <a-menu-item>
                <div @click="exit">退出</div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>
      <!-- 内容 -->
      <a-layout-content class="detail">
        <router-view v-slot="{ Component }">
          <transition mode="out-in" name="fade-slide" appear>
            <keep-alive>
              <component :is="Component"/>
            </keep-alive>
          </transition>
        </router-view>

      </a-layout-content>
    </a-layout>
  </div>


</template>

<script setup>
import {watch, ref, reactive, onMounted, createVNode} from "vue";
// import * as API from "../views/Http/Api";
import {useRouter} from "vue-router";
import {message, Modal} from "ant-design-vue";
import {CaretDownOutlined} from "@ant-design/icons-vue";
import {ExclamationCircleOutlined} from "@ant-design/icons-vue";
import {removeToken} from "../Http/token";

const router = useRouter();
const includeList = ref([]);
const state = reactive({
  // zhCN,
  // userInfo: JSON.parse(localStorage.getItem("userInfo")) || {},
  selectedKeys: "/",
  menu: [
    {
      title: "布局",
      router: "/layout",
      // status: true,
    },
    {
      title: "阴影",
      router: "/shadow",
    },
    {
      title: "伪类",
      router: "/pseudoClass",
    },
    {
      title: "滤镜",
      router: "/filter",
    },
    {
      title: "边框",
      router: "/border",
    },
  ],
  // 设置密码
  setAccount: {
    username: "",
    password: "",
  },
  setAccountVisible: false,
  setAccountLoading: false,
  userInfo: {
    nickName:'老六'
  },
});

onMounted(() => {
  // console.log(localStorage.getItem('userInfo') )
  // state.userInfo = localStorage.getItem("userInfo");
});

// 关闭修改
const closeSetAccount = () => {
  state.setAccount = {
    username: "",
    password: "",
  };
  state.setAccountVisible = false;
};

const submitSetAccount = () => {
  console.log(111);
};

watch(
    () => router.currentRoute.value,
    (path) => {
      // console.log(path);
      state.selectedKeys = path.matched[1].path;
    },
    {deep: true, immediate: true}
);

//退出登录
const exit = () => {
  removeToken();
  router.push("/login");
  // state.userInfo = window.localStorage.clear();
};
</script>


<style scoped lang="less">
.layoutContent {
  height: 100vh;
  overflow: hidden;

  .header {
    position: relative;
    z-index: 1;
    padding: 0 24px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0 3px 6px rgba(145, 145, 145, 0.16);

    .logoContent {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 1;
      font-weight: bold;
      color: #262626;

      img {
        margin-right: 10px;
        width: 36px;
        height: 36px;
      }

      .line {
        margin: 0 8px;
        display: block;
        width: 2px;
        height: 20px;
        background: #262626;
      }

      .menuContent {
        margin-left: 85px;
        height: 56px;
        display: flex;
        align-items: center;

        a {
          display: block;
          margin-right: 16px;
          padding: 0 16px;
          line-height: 36px;
          font-size: 14px;
          color: #262626;
          font-weight: normal;
        }

        .isSelect {
          color: #0968fc;
          font-weight: bold;
        }
      }
    }

    .userContent {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 1;
      color: #262626;

      .userHeader {
        margin-right: 9px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #333;
      }

      .dropDown {
        margin-left: 4px;
        width: 16px;
        height: 16px;
      }

      .iconfont {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }

  .detail {
    padding: 16px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    background: #eef0f5;
  }
}


</style>
