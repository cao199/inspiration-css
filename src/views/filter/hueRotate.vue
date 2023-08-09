<template>
  <page-wrapper>
     <div class="bg" :style="{background: `linear-gradient(45deg,${state.color1}, ${state.color2}, ${state.color3})`}"></div>
  </page-wrapper>
</template>

<script setup>
import {onMounted, reactive} from "vue";

const state = reactive({
  bgList:[],
  color1:'',
  color2:'',
  color3:'',
})

onMounted(()=>{
  colorList()
})
//随机颜色
const randomColor = () => {
  var i = 0;
  var str = "#";
  var random = 0;
  var aryNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  for(i = 0; i < 6; i++)
  {
    random = parseInt(Math.random() * 16);
    str += aryNum[random];
  }
  return str
  // alert(str);
  // console.log(str);
}

const colorList = () =>{
  let bgList = state.bgList
  for (let i =0; i<3; i++){
    bgList.push(randomColor())
  }
  // console.log(state.bgList)
  state.color1 = state.bgList[0]
  state.color2 = state.bgList[1]
  state.color3 = state.bgList[2]
}

// setInterval(()=>{
//   state.bgList = []
//   colorList()
// },3000)

</script>

<style scoped lang="less">

.bg {
  width: 100%;
  height: 500px;
  margin: auto;
  //background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
  animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
