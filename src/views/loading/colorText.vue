<template>
  <page-wrapper>
    <div class="colorText"></div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
.colorText {
  height: 500px;
  background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
&::before {
   content: "OLD SIX SIX";
   position: absolute;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: #fff;
   font-size: 120px;
   white-space: nowrap;
   mix-blend-mode: difference;
   animation: move 3s infinite linear alternate;
 }
}

@keyframes move {
  0% {
    transform: translate(-30%, -50%);
  }
  100% {
    transform: translate(-60%, -50%);
  }
}
</style>
