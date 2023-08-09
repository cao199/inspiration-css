<template>
  <page-wrapper bgColor="#000">
    <div class="box">
      <div class="text">Hello Mask</div>
      <div class="radial text">Hello Mask</div>
    </div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Reggae+One&display=swap');

.box {
  width: 100%;
  height: 500px;
  display: flex;
  background: #000;
}

.text {
  margin: auto;
  font-family: 'Reggae One', cursive;
  font-size: 48px;
  color: #fff;
  -webkit-mask-size: 100%;
  //-webkit-mask: -webkit-gradient(circle at 0 50%, #000, transparent 10%, transparent 0);
  -webkit-mask: radial-gradient(circle at 0 50%, #000, transparent 10%, transparent 0);
  animation: scale 5s infinite;

}

.radial {
  -webkit-mask: radial-gradient(circle at 50% 0, #000, transparent 20%, transparent 0);
  -webkit-mask-size: 100% 100%;
  animation: scale2 5s infinite;
}

@keyframes scale {
  0% {
    -webkit-mask-size: 100%;
  }
  50%,
  100% {
    -webkit-mask-size: 2000%;
  }
}

@keyframes scale2 {
  0% {
    -webkit-mask-size: 100% 100%;
  }
  50%,
  100% {
    -webkit-mask-size: 100% 2000%
  }
}

</style>
