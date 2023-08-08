<template>

  <page-wrapper>

    <div class="parent">
      <div class="child" >
        <img src="https://img2.baidu.com/it/u=916384025,1039721723&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
      </div>
      <div class="child">
        <img src="https://img1.baidu.com/it/u=375688355,2872812935&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=639" alt="">
      </div>
      <div class="child">
        <img src="https://img0.baidu.com/it/u=3258364840,3648848971&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="">
      </div>
      <div class="child">
        <img src="https://img2.baidu.com/it/u=2602740989,3930066572&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
      </div>
      <div class="child">
        <img src="https://img2.baidu.com/it/u=1218567492,412478756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281" alt="">
      </div>
      <div class="child">
        <img src="https://img0.baidu.com/it/u=3753646450,2019806340&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
      </div>
      <div class="child">
        <img src="https://img1.baidu.com/it/u=1286457833,56365084&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
      </div>
      <div class="child">
        <img src="https://img2.baidu.com/it/u=980041949,4293332847&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=250" alt="">
      </div>
      <div class="child">
        <img src="https://img0.baidu.com/it/u=3310780607,1034573556&fm=253&fmt=auto&app=138&f=JPEG?w=890&h=500" alt="">
      </div>
    </div>

  </page-wrapper>


</template>

<script setup>







</script>



<style scoped lang="less">
*{
  box-sizing: border-box;
}
body{
  padding:0;
  margin: 0;
  background: #23232a;
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;//保持内容的原有宽高比例进行缩放，让图片的内容能够完全覆盖元素容器，图片可能会被剪切掉一部分
  object-position: 70% 20%;//指定内容在容器中的具体位置，第一个值指定内容在x轴上的位置，第二个值指定内容在y轴上的位置，默认都是50%，两个值之间通过空格隔开。第二个值可以省略，如果省略则取默认值为居中。
  transition: .25s;
  cursor: pointer;

  &:hover {
    transform: scale(120%);
  }
}

.parent{
  padding: .8rem;
  background: black;
  height: 100%;
  min-height: 500px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 2.5vh;
  border: 1px solid #c9b473;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr .7fr .3fr 1fr;
  grid-template-rows: 20% 40% 20% 20%;
  grid-template-areas:
    'one two two three'
    'four five five five'
    'six five five five'
    'six seven eight eight';
}


// For clipping I used mozilla's inspect element.
.child{
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3){
    img{
      width:120%;
      height: 120%;
    }
  }
  &:first-child{
    grid-area: one;
    clip-path: polygon(0% 0%, 93.24% 0%, 105.04% 110.16%, 0% 90%);
  }
  &:nth-child(2){
    grid-area: two;
    clip-path: polygon(0% 0%, 108.28% 0%, 96.45% 110.13%, 10.55% 110.93%);
  }
  &:nth-child(3){
    grid-area: three;
    clip-path:polygon(15.05% 0%, 100% 0%, 99.35% 91.7%, 3.08% 108.48%);
  }
  &:nth-child(4){
    grid-area: four;
    clip-path: polygon(0% -0.85%, 106.34% 9.98%, 121.32% 65.63%, 99.66% 109.89%, 1.86% 124.41%);

    img {
      width: 135%;
      height: 135%;
    }
  }
  &:nth-child(5){
    grid-area: five;
    clip-path: polygon(6.4% 6.48%, 47.24% 5.89%, 100% 0%, 98.41% 96.85%, 53.37% 100%, 53% 63.21%, 3.23% 73.02%, 14.30% 44.04%);
  }
  &:nth-child(6){
    grid-area: six;
    clip-path:  polygon(2.14% 29.3%, 99.34% 15.42%, 98.14% 100.82%, 1.57% 101.2%);
  }
  &:nth-child(7){
    grid-area: seven;
    clip-path: polygon(7.92% 33.47%, 96.31% 23.39%, 95.38% 100%, 5.30% 100.85%);
  }
  &:nth-child(8){
    grid-area: eight;
    clip-path: polygon(2.5% 22.35%, 100% 0%, 100% 100%, 1.55% 100%);
  }
  &:nth-child(9){
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;

    clip-path:polygon(5.94% 28.66%, 100.61% -0.67%, 101.1% 108.57%, 5.4% 126.28%);

    img{
      object-position: 30% 50%;
      height: 135%;
    }
  }
}

</style>
