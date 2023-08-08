<template>
  <page-wrapper>
    <div class="container s-blur">
      <div class="g-header">Header</div>
      <div class="g-content">
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
      </div>
      <div class="g-footer">Footer</div>
      <div class="g-wrap">
        利用:not()伪类使除了弹窗之外的所有元素都进行模糊
      </div>
    </div>
  </page-wrapper>
</template>

<script setup>

</script>

<style scoped lang="less">
.s-blur > :not(.g-wrap){
  filter: blur(2px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: rgba(0,0,0,.3);
    filter: blur(2px);
    z-index: 2;
  }
}

.g-wrap {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 30vh;
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 30vh;
  font-size: 30px;
}

.g-container {
  position: relative;
}

.g-header,
.g-content,
.g-footer{
  padding: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  box-sizing: border-box;
  color: #362d2d;
  overflow: hidden;
}

.g-header,
.g-footer{
  //height: 20vh;
  background: #646cff;
}

.g-content {
  //height: 60vh;
  background: #fae0e4;
}
</style>
