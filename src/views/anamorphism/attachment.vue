<template>
  <page-wrapper >
    <div class="box">
      <div class="box-text">
        <p class="text">
          毛玻璃效果
          <br/>
          <br/>
          就这一块地方模糊
        </p>
      </div>
    </div>

  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">
@img: 'https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=';

html,
.box {
  width: 100%;
  height: 500px;
  background-image: url(@img);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  overflow: hidden;
  display: flex;
}

.box-text {

  position: relative;
  width: 500px;
  height: 200px;
  margin: auto;
  padding: 5vmin;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, .5);

  .text {
    position: relative;
    color: #fff;
    z-index: 10;
    font-size: 1.5vmax;
    line-height: 1.5;

  }

  &::after {
    position: absolute;
    content: "";
    background-image: url(@img);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(10px);
    z-index: 0;
  }
}

</style>
