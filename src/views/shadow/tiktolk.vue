<template>
  <page-wrapper bgColor="#000">
    <div class="tiktolk"></div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.tiktolk{
  position: relative;
  width: 37px;
  height: 218px;
  margin: 100px auto;
  z-index: 1;
  background: #fff;
  filter: drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(110%);
  box-shadow: 11.6px 10px 0 0 #fe2d52;
  z-index: 10;
  animation: move 5s infinite ease-in;
  top: -60px;
  &::before{
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    border: 37px solid #fff;
    border-top: 37px solid transparent;
    border-radius: 50%;
    top: 123px;
    left: -143px;
    transform: rotate(45deg);
    filter: drop-shadow(16px 0px 0 #fe2d52);
  }
  &::after{
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border: 37px solid #fff;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
    border-left: 30px solid transparent;
    top: -92px;
    right: -166px;
    border-radius: 100%;
    transform: rotate(45deg);
    z-index: -10;
    filter:drop-shadow(14px 0 0 #fe2d52);

  }



}

@keyframes move {
  4% {
    transform: skewX(7deg) translate(-30px);
  }
  7% {
    transform: skewX(-6deg) translate(18px);
  }
  9% {
    transform: skewX(5deg) translate(-8px);
  }
  10% {
    transform: skewX(-4deg) translate(6px);
  }
  11% {
    transform: skewX(3deg) translate(-4px);
  }
  12% {
    transform: skewX(-2deg) translate(2px);
  }
  13% {
    transform: skewX(1deg) translate(0px);
    filter: drop-shadow(-10px -10px 0 #24f6f0) contrast(120%) brightness(110%) blur(3px);
  }
  30% {
    filter: drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(120%) blur(0px);
  }
}







</style>
