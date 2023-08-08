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
  selectedKeys: "/pseudoClass/hoverStop",
  menu: [
    {
      title: "hover控制动画",
      router: "/pseudoClass/hoverStop",
    },
    {
      title: "边界智能判断移动",
      router: "/pseudoClass/mindMove",
    },
    {
      title: "loading 效果",
      router: "/pseudoClass/loading",
    },
    {
      title: "弹窗背景元素模糊",
      router: "/pseudoClass/vague",
    },
  ],
});

watch(
    () => router.currentRoute.value,
    (path) => {
      if (path.matched[1].path == "/pseudoClass") {
        state.selectedKeys = path.matched[2].path || "/pseudoClass/hoverStop";
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
