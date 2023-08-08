<template>
  <page-wrapper>
    <div class="g-container">
      <div class="g-item" v-for="(item,index) in info" :style="{background:item.color,height:item.height,}">{{index}}</div>
    </div>

  </page-wrapper>
</template>

<script setup>
import {onMounted, reactive, toRefs} from "vue";

const state = reactive({
  info:[]
})
const {info} = toRefs(state)




//随机颜色
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);
  // 拼接返回
  return `rgb(${r},${g},${b})`;
}
//随机高度
const randomHeight = ()=>{
  let h = Math.floor(Math.random() * 500)
  return `${h}px`
}

const randomInfo = ()=>{
  // let info = state.info
  for (let i =0; i<100; i++){
    let obj = {}
     state.info.push(obj)
  }
  state.info.forEach(item=>{
    item.color = randomColor()
    item.height = randomHeight()
  })

  // console.log(state.info)
}

randomInfo()


</script>

<style scoped>
.g-container{
  column-count: 4;
  column-gap: .5vw;
  padding-top: .5vw;
}
.g-item{
  position: relative;
  /*width: 24vw;*/
  margin-bottom: 1vw;
  break-inside: avoid;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 30px;
}
</style>
