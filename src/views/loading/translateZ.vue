<template>
  <page-wrapper>
    <div class="box">
      <div class="g-container">
        <div class="section-one">translateZ(-1)</div>
        <div class="section-two">translateZ(-2)</div>
        <div class="section-three">translateZ(-3)</div>
      </div>
    </div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">

.box {
  margin: 0;
  padding: 0;
  perspective: 2px;
  transform-style: preserve-3d;
  transform-origin: center center;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.g-container {
  position: relative;
  transform-style: preserve-3d;
  height: 150%;

  & > div {
    font-size: 5vw;
    position: absolute;
    top: 20%;
  }

  .section-one {
    left: 0%;
    background: rgba(10, 10, 10, .2);
    transform: translateZ(-1px);
  }

  .section-two {
    left: 40%;
    background: rgba(30, 130, 30, .2);
    transform: translateZ(-2px);
  }

  .section-three {
    left: 90%;
    background: rgba(200, 100, 130, .2);
    transform: translateZ(-3px);
  }
}
</style>
