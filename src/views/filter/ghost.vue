<template>
  <page-wrapper >
    <div class="box">
      <div class="ghost"></div>
    </div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">

.box{
    width: 100%;
    height: 50vh;
    display: flex;
    background: #000;
    filter: blur(3px) contrast(10);
}

.ghost {
  position: relative;
  width: 80px;
  height: 120px;
  background:
      radial-gradient(circle at 60px 40px, #000, #000 7px, transparent 7px),
      radial-gradient(circle at 40px 40px, #000, #000 7px, transparent 7px),
      radial-gradient(circle at 50px 50px, #fff, #fff);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: auto;
  border-radius: 40px 40px 60px 20px;
  transform: skewX(-10deg);
  animation: moveMain 2s infinite ease-out;
}

.ghost::before,
.ghost::after {
  content: "";
  position: absolute;
  background: #fff;
  border-radius: 50%;
}

.ghost::before {
  width: 20px;
  height: 20px;
  top: 50px;
  left: -10px;
  box-shadow: 0 0 0 1px #fff;
  animation: move 2s infinite ease-in;
}

.ghost::after {
  width: 30px;
  height: 25px;
  top: 95px;
  left: -10px;
  box-shadow: 0 0 0 1px #fff;
  animation: move2 2s infinite ease-in;
}

@keyframes move {
  80%,
  100% {
    box-shadow: -60px 0 0 .5px rgba(255, 255, 255, .5);
  }
}

@keyframes move2 {
  80%,
  100% {
    box-shadow: -100px 0 0 .5px rgba(255, 255, 255, .2);
  }
}

@keyframes moveMain {
  42% {
    transform: skewX(-10deg) translate(40px, 0);
  }
}
</style>
