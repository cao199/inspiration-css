<template>
  <page-wrapper bgColor="linear-gradient(90deg, #fff, #bbb)" style="height: 100%">
    <div class="linear">使用径向渐变实现内切圆角</div>
    <div class="linear2">径向渐变实现内切圆角可以是4边</div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">


div {
  position: relative;
  width: 20vw;
  height: 8vw;
  margin: 1vw auto;
  border-radius: 1vmin;
  // background: #e91e63;
  overflow: hidden;
  line-height: 8vw;
  color: #fff;
  text-align: center;
}




@keyframes shadowmove {
  0%{
    background: #e91e63;
    box-shadow: 0 0 0 0 #e91e63;
  }

  10% {
    background: transparent;
    box-shadow: 0 0 0 0 #e91e63;
  }

  50% {
    background: transparent;
    box-shadow: 0 0 0 25vw #e91e63;
  }
}

.linear {
  background-size: 100% 100%;
  background-image: radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw);
  background-repeat: no-repeat;
}

.linear2 {
  filter: drop-shadow(0 0 3px #666);
  background-size: 70% 70%;
  background-image:
      radial-gradient(circle at 100% 100%, transparent 0, transparent 2vw, #03A9F5 2vw),
      radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw),
      radial-gradient(circle at 100% 0, transparent 0, transparent 2vw, #03A9F5 2vw),
      radial-gradient(circle at 0 100%, transparent 0, transparent 2vw, #03A9F5 2vw);
  background-repeat: no-repeat;
  background-position: right bottom, left top, right top, left bottom;
}
</style>
