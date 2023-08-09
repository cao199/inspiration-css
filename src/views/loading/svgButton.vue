<template>
  <page-wrapper>
    <div class="box">
      <div class="fe1 item">Button</div>
      <div class="fe1 item hover">Button</div>
      <div class="fe2 item">Button</div>
      <div class="fe2 item hover">Button</div>
      <svg>
        <defs>
          <filter id="fe1">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="0.00001 9.9999999" numOctaves="1" result="warp">
              <animate attributeName="baseFrequency" from="0.00001 9.9999" to="0.00001 0.001" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
          </filter>
          <filter id="fe2">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="9.9999999 0.00001" numOctaves="1" result="warp">
              <animate attributeName="baseFrequency" from="9.9999999 0.00001" to="0.009 0.00001" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </div>
  </page-wrapper>
</template>

<script>

</script>

<style scoped lang="less">

 .box{
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.item {
  width: 200px;
  height: 64px;
  margin: 10px;
  line-height: 64px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  background: #673ab7;
  cursor: pointer;
  transform: translateZ(0);
  outline: 200px solid transparent;
  // filter: url(#filter-turbulence);
}

.fe1:hover {
  filter: url(#fe1);
}

.fe2 {
  border-radius: 64px;
}

.fe2:hover {
  filter: url(#fe2);
}

.fe1.hover {
  filter: url(#fe1);
}
.fe2.hover {
  filter: url(#fe2);
}

svg {
  position: absolute;
}
</style>
