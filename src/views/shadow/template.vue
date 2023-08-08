<template>
  <div class="content">
    <div class="side">
      <router-link
          v-for="item in state.menu"
          :key="item.router"
          :to="item.router"
          :class="state.selectedKeys == item.router ? 'select' : ''"
      >
        {{ item.title }}
      </router-link>
    </div>
    <router-view class="view" />
  </div>
</template>
<script setup>
import { watch, ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// reactive数据
const state = reactive({
  // userInfo: JSON.parse(localStorage.getItem("userInfo")),
  selectedKeys: "/shadow/progress",
  menu: [
    {
      title: "圆环进度条动画",
      router: "/shadow/progress",
    },
    {
      title: "渐变实现内切角",
      router: "/shadow/gradient",
    },
    {
      title: "文字的 3D 氖灯效果",
      router: "/shadow/3Dtext",
    },
    {
      title: "霓虹氖灯文字效果",
      router: "/shadow/3Dtext2",
    },
    {
      title: "半透明遮罩",
      router: "/shadow/translucent",
    },
    {
      title: "条纹立体阴影条纹字",
      router: "/shadow/stripeText",
    },
    {
      title: "浮雕风格按钮",
      router: "/shadow/reliefStyle",
    },
    {
      title: "单标签实现抖音LOGO",
      router: "/shadow/tiktolk",
    },
    {
      title: "AE浏览器 叉子",
      router: "/shadow/fork",
    },
  ],
});

watch(
    () => router.currentRoute.value,
    (path) => {
      if (path.matched[1].path == "/shadow") {
        state.selectedKeys = path.matched[2].path || "/shadow/progress";
      }
    },
    { immediate: true }
);
</script>
<style lang="less" scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  .side {
    position: relative;
    padding: 20px;
    width: 200px;
    margin-right: 16px;
    background: #fff;
    border-radius: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    a {
      margin-bottom: 5px;
      padding-left: 5px;
      display: flex;
      align-items: center;
      height: 42px;
      color: #262626;
      font-size: 14px;
      border-radius: 6px;
      transition: all 0.25s linear;
    }
    .select {
      color: #fff;
      background: #0968fc;
    }
  }
  .view {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
