<template>
  <page-wrapper>
    <div class="loading">加载中</div>
    <div class="loading2"></div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.loading {
  position: relative;
  font-size: 50px;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  text-align: center;
  line-height: 500px;
}

.loading::after {
  content: "";
  position: absolute;
  top: 0%;
  bottom: 0;
  animation: dot 3s infinite steps(3, start);
  line-height: 500px;
}

@keyframes dot {
  33.33% {
    content: ".";
  }
  66.67% {
    content: "..";
  }
  100% {
    content: "...";
  }
}
//loading2
.loading2 {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 50px auto;
  transform: rotate(360deg);
  animation: rotate 45s infinite linear;
}

.loading2::before {
  position: absolute;
  content: "";
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  transform: rotate(720deg);
  animation: rotate 3s infinite ease-out;
}

.loading2::after {
  position: absolute;
  content: "";
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  box-sizing: border-box;
  border-radius: 50%;
  border-bottom: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #fff;
  border-left: 7px solid #fff;
  transform: rotate(720deg);
  animation: rotate 3s infinite ease-in-out;
}

@keyframes rotate {
  100% {
    transform: rotate(0deg);
  }
}


</style>
