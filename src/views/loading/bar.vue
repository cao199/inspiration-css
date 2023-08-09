<template>
  <page-wrapper bgColor="#000">
    <div class="box">
      <div class="g-container">
        <div class="g-circle"></div>
      </div>
    </div>


  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.box{
  width: 100%;
  height: 500px;
  //margin:200px auto;
  display: flex;
  align-items: center;
}
.g-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  border: 6px solid #444;
}
.g-circle {
  position: absolute;
  top: -6px;
  left: -6px;
  bottom: -6px;
  right: -6px;
  border-radius: 50%;
  background: conic-gradient(#fc0 0%, transparent 40%, transparent);
  animation: rotate 3s ease-in-out infinite;
  transition-origin: 50% 50%;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: #333;
    border-radius: 50%;
    // z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -3px);
    border-radius: 50%;
    background: #fc0;
    box-shadow: 0 0 4px 2px #fc0;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(-360deg);
  }
}

</style>
