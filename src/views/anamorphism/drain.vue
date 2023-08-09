<template>
  <page-wrapper>
    <div class="box">
      <p data-text="This is Old Six" class="text"> This is Old Six </p>
    </div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

.box{
  width: 100%;
  height: 500px;
  background-image: radial-gradient(ellipse farthest-side at 40% 0%, #455A64 0%, #263238 60%, #1a2327 100%);
  display: flex;
  font-family: 'Krona One', sans-serif;
}

.text {
  position: relative;
  margin: auto;
  font-size: 5rem;
  word-spacing: 0.2em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  color: transparent;
  background-color: #646cff;
  //background-clip: text;//不支持则使用下方前缀-webkit-
  -webkit-background-clip:text;
  background-size:cover;
}

.text::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-image: linear-gradient(120deg, transparent 0%, transparent 6rem, white 11rem, transparent 11.15rem, transparent 15rem, rgba(255, 255, 255, 0.3) 20rem, transparent 25rem, transparent 27rem, rgba(255, 255, 255, 0.6) 32rem, white 33rem, rgba(255, 255, 255, 0.3) 33.15rem, transparent 38rem, transparent 40rem, rgba(255, 255, 255, 0.3) 45rem, transparent 50rem, transparent 100%);
  //background-clip: text;//不支持则使用下方前缀-webkit-
  -webkit-background-clip:text;
  //background-size:cover;
  background-size: 150% 100%;
  background-repeat: no-repeat;
  animation: shine 5s infinite linear;
}

@keyframes shine {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -190% 0;
  }
}
</style>
