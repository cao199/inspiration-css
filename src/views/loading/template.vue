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
  selectedKeys: "/loading/loading1",
  menu: [
    {
      title: "加载动画",
      router: "/loading/loading1",
    },
    {
      title: "环形进度条",
      router: "/loading/bar",
    },
    {
      title: "各种进度条",
      router: "/loading/progressBar",
    },
    {
      title: "渐现文字",
      router: "/loading/emergenceText",
    },
    {
      title: "弹性过度",
      router: "/loading/inputStyle",
    },
    {
      title: "聚光灯",
      router: "/loading/spotlight",
    },
    {
      title: "智能背景颜色",
      router: "/loading/colorText",
    },
    {
      title: "滚动视差",
      router: "/loading/translateZ",
    },
    {
      title: "边框线条",
      router: "/loading/block",
    },
    {
      title: "断裂文字",
      router: "/loading/breakText",
    },
    {
      title: "文字故障",
      router: "/loading/daultText",
    },
    {
      title: "SVG按钮",
      router: "/loading/svgButton",
    },
    {
      title: "支付宝扫福 ",
      router: "/loading/Alipay",
    },

  ],
});

watch(
    () => router.currentRoute.value,
    (path) => {
      if (path.matched[1].path == "/loading") {
        state.selectedKeys = path.matched[2].path || "/loading/loading1";
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
