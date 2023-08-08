<template>
  <page-wrapper>
    <div class="title">从不同方向移入鼠标</div>
    <div class="box">
      <div class="box_right">从右往左</div>
      <div class="box_left">从左往右</div>
      <div class="box_top">从上往下</div>
      <div class="box_bottom">从下往上</div>
      <div class="box_center"></div>
    </div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.title{
  width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: 30px;
  font-family: 华文新魏;
}
.box {
  margin: 5rem auto;
  position: relative;
  width: 500px;
  height: 500px;
  line-height: 500px;
  overflow: hidden;
  background: pink;
  border-radius: 20px;
}

.box_right,
.box_left,
.box_top,
.box_bottom,
.box_center {
  position: absolute;
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: inherit;
  transition: transform 0.4s ease;
  font-size: 28px;
}

.box_right:before,
.box_left:before,
.box_top:before,
.box_bottom:before,
.box_center:before {
  position: absolute;
  content: "";
  width: 70.71%;
  height: 70.71%;
  transform: rotate(45deg);
}

.box_right:hover,
.box_left:hover,
.box_top:hover,
.box_bottom:hover,
.box_center:hover {
  transform: translateX(0);
  z-index: 1;
}

.box_right:hover:before,
.box_left:hover:before,
.box_top:hover:before,
.box_bottom:hover:before,
.box_center:hover:before {
  width: 100%;
  height: 100%;
  transform: none;

}

.box_right {
  background: skyblue;
  transform: translateX(100%);
}

.box_right:before {
  right: 100%;
  bottom: 0;
  transform-origin: 100% 100%;
}

.box_right:hover ~ .box_center {
  transform: translateX(-100%);
}

.box_left {
  background: #6ebb2e;
  transform: translateX(-100%);
}

.box_left:before {
  left: 100%;
  transform-origin: 0 0;
}

.box_left:hover ~ .box_center {
  transform: translateX(100%);
}

.box_top {
  background: #dc3030;
  transform: translateY(-100%);
}

.box_top:before {
  top: 100%;
  right: 0;
  transform-origin: 100% 0;
}

.box_top:hover ~ .box_center {
  transform: translateY(100%);
}

.box_bottom {
  background: goldenrod;
  transform: translateY(100%);
}

.box_bottom:before {
  bottom: 100%;
  left: 0;
  transform-origin: 0 100%;
}

.box_bottom:hover ~ .box_center {
  transform: translateY(-100%);
}

.box_center {
  background: orange;
  z-index: -1;
}
</style>
