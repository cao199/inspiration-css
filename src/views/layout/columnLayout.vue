<template>
  <page-wrapper>
    <div class="g-container" >


      <h2>flex 实现</h2>
      <div class="g-flex">
        <div class="g-item" v-for="(item,index) in 3" :style="{background:index==0?'gold':'pink'}"> <span >hover Me</span></div>
      </div>

      <h2>grid 实现</h2>

      <div class="g-grid">
        <div class="g-item" v-for="(item,index) in 3" :style="{background:index==0?'cornflowerblue':'skyblue'}"><span v-show="index==0">hover Me</span></div>
      </div>

      <h2>float 实现</h2>
      <div class="g-float">
        <div class="g-item" v-for="(item,index) in 3" :style="{background:index==0?'salmon':'sandybrown'}"> <span v-show="index==0">hover Me</span> </div>
      </div>

    </div>
  </page-wrapper>
</template>

<script setup>








</script>

<style scoped lang="less">
.g-container {
  margin: 20px auto;
  width: 400px;
}

.g-grid {
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);

  .g-item {
    width: unset;
    height: unset;

  }

  .g-item:first-child {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
}

.g-grid:hover {
  .g-item:first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 3;

  }
}


.g-item {
  width: 190px;
  height: 190px;
  box-sizing: border-box;
  border: 1px solid #666;
  border-radius: 10px;
  line-height: 190px;
  font-size: 32px;
  text-align: center;
  cursor:pointer;
  margin: 5px;
  transition: .3s all;

}
//float

.g-float {
  overflow: hidden;

.g-item {
  float: left;
}

.g-item:first-child {
  height: 390px;
}

.g-item:first-child:hover {
  height: 190px;
  width: 390px;
  transition: 1s all;
}
}

h2 {
  font-size: 28px;
  text-align: center;
  margin: 30px auto
}

//flex

.g-flex {
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  .g-item:first-child {
    height: 390px;
  }
}

.g-flex:hover {
  flex-direction: row;

  .g-item:first-child {
    height: 190px;
    width: 390px;
  }
}


</style>
