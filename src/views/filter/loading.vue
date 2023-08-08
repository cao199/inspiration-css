<template>
  <page-wrapper bgColor="#000">
    <div class="box">
      <div class="ball"></div>

      <div class="g-wall"></div>
      <div class="g-wall"></div>
      <div class="g-wall"></div>
      <div class="g-wall"></div>
    </div>

  </page-wrapper>

</template>

<script>

</script>

<style scoped lang="less">
.box{
  position: relative;
  height: 50vh;
  background: #000;
  filter: blur(20px) contrast(10);
  overflow: hidden;
}
.ball {
  position: absolute;
  left: 0;
  top: 20vh;
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  background: #fff;
  animation: move 10s infinite;

}

.g-wall {
  position: absolute;
  left: 20%;
  top: 10vh;
  height: 40vh;
  width: 15vh;
  border-radius: 50%;
  background: rgba(0, 0, 0, .5);
}

.g-wall:nth-child(2) {
  left: 40%;
  border-radius: 50%;
}

.g-wall:nth-child(3) {
  left: 60%;
  border-radius: 50%;
}

.g-wall:nth-child(4) {
  left: 80%;
  border-radius: 50%;
}

@keyframes move {

  20% {
    transform: translate(20vw, 0);
    background: #ddd;
  }

  100% {
    transform: translate(100vw, 0);
    background: #ddd;
  }
}




</style>
