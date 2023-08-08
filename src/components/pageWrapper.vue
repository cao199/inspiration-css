<template>
  <div>
      <div class="centerContent" >
        <div class="left">
          <div class="title">
            {{pageTitle}}
          </div>
        </div>

        <div class="right">

        </div>
      </div>

      <div class="table" :style="{background: bgColor}">
        <slot></slot>
      </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, watch} from "vue";
const router = useRouter();
const pageTitle = ref('')


watch(() => router, (val) => {
  // console.log('监听路由-f', val)
  pageTitle.value = val.currentRoute.value.meta.title
}, { immediate: true })

const props =  defineProps({
  //背景色
  bgColor:{
    type: String,
    default:''
  }
})






</script>

<style scoped lang="less">
.centerContent {
  margin-bottom: 16px;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 18px;
      color: #262626;
      font-weight: bold;
    }
    .line {
      margin: 0 22px 0 24px;
      width: 1px;
      height: 24px;
      background: #e1e4eb;
    }
    .switch {
      padding: 0 10px;
      position: relative;
      margin-right: 46px;
      font-size: 14px;
      line-height: 30px;
      color: #595959;
      cursor: pointer;
    }
    .select {
      color: #0968fc;
      font-weight: bold;
    }
    .select::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -18px;
      margin: 0 auto;
      width: 32px;
      height: 4px;
      border-radius: 2px;
      background: #0968fc;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .refresh {
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 32px;
      font-size: 14px;
      color: #595959;
      border: 1px solid #d9dce2;
      border-radius: 4px;
      cursor: pointer;
    }

    img {
      margin-right: 4px;
      width: 16px;
      height: 16px;
    }
    .release {
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      color: #fff;
      background: #0968fc;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}

.table {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;

}
</style>
