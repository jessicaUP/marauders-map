<script setup>

</script>

<template>
  <div class="steps-wrap">
    <div class="left-group">
      <div class="foot foot-left" id="left-1"></div>

    </div>
    <div class="right-group">
      <div class="foot foot-right" id="right-1"></div>

    </div>
  </div>
</template>

<style>

.steps-wrap {
  position: relative;
  top: 0;
  width: fit-content;
  height: fit-content;
  
}

.left-group, .right-group {
  display: flex;
  width: 100px;
  justify-content: space-between;
}

.right-group {
  margin-left: 65px;
  position: relative;
  top: 0px;
}

.foot {
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  opacity: 0;
  animation: fadeOut, fadeIn;
  animation-duration: 6s, 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation: walk 7s steps(7, end) infinite;
}

.foot-right {
  background-image: url('../assets/images/shoePrintRight.png');
  transform: rotate(90deg);
  /* animation: stepRight 30000s steps(4, end) infinite; */
}

.foot-left {
  background-image: url('../assets/images/shoePrintLeft.jpg');
  transform: rotate(90deg);
  /* animation: stepLeft 6s steps(4, end) infinite; */
}

@keyframes fadeIn {
  15% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes walk {
  to {
    transform: translateX(50px);
  }
}

</style>