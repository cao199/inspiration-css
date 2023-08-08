<template>
  <page-wrapper>
    <p>这是一段背景描述</p>
    <div class="card">Hover Me</div>
    <div class="card2">全屏遮罩</div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.card {
  //position: absolute;
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #666;
  cursor: pointer;
  margin: 200px auto;
  transition: all .1s;
}

.card:hover {
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .5);
}

.card2 {
  position: absolute;
  width: 200px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #666;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .1s;
}

.card2:hover {
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .5);
}
</style>
