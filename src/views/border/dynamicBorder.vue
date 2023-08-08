<template>
  <page-wrapper>
    <div class="box">
      <div class="skulls"></div>
    </div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.box{
  width: 100%;
  height: 500px;
  margin: auto;
  display: flex;
  background: #000;
}
.skulls {
  position: relative;
  width: 600px;
  height: 200px;
  margin: auto;
  border: 24px solid;
  border-image: url(https://skullctf.com/images/skull-border.svg);
  border-image-slice: 32;
  border-image-repeat: round;
}
</style>
