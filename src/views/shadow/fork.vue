<template>
  <page-wrapper bgColor="#fff">
    <div class="fork"></div>
    <div class="IE"></div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.fork{
  position: relative;
  width: 140px;
  height: 140px;
  margin: 200px auto;
  border-radius: 50%;
  background: #000;
  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 200px;
    left: 50%;
    top: 100%;
    background: #000;
    border-radius: 20px;
    transform: translate(-50%, -50%);

  }
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    border-radius: 15px;
    height: 100px;
    background: #000;
    left: 0;
    top: -20px;
    box-shadow: 20px 0 0 0 #fff,
    40px 0 0 0 #000,
    60px 0 0 0 #fff,
    80px 0 0 0 #000,
    100px 0 0 0 #fff,
    120px 0 0 0 #000;
  }

}

.IE {
  position: absolute;
  top: 50%;
  left: 30%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-image: radial-gradient(#fff 38%, transparent 38%),
  radial-gradient(#09c 0%, #09c 100%);
}
.IE:before {
  content: "";
  width: 285px;
  height: 122px;
  background: none;
  border-radius: 100%;
  position: absolute;
  top: 33px;
  left: -45px;
  margin: auto;
  box-shadow: inset 0 12px 0 13px #09c, -35px -8px 0 -5px #fff;
  transform: rotate(-35deg);
}
.IE:after {
  content: "";
  width: 120px;
  height: 25px;
  background: #09c;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 50px 23px 0 -2px #fff;
}

</style>
