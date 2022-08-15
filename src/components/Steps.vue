<script setup>
</script>

<template>
  <div class="steps-wrap">
    <div class="left-group">
      <div class="foot foot-left" id="left-1"></div>
      <div class="foot foot-left" id="left-2"></div>
      <div class="foot foot-left" id="left-3"></div>
      <div class="foot foot-left" id="left-4"></div>
      <div class="foot foot-left" id="left-5"></div>
    </div>
    <div class="right-group">
      <div class="foot foot-right" id="right-1"></div>
      <div class="foot foot-right" id="right-2"></div>
      <div class="foot foot-right" id="right-3"></div>
      <div class="foot foot-right" id="right-4"></div>
      <div class="foot foot-right" id="right-5"></div>
    </div>
  </div>
</template>

<style>

.steps-wrap {
  position: relative;
  top: 0;
  
}

.left-group, .right-group {
  display: flex;
  width: 430px;
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
  width: 90px;
  height: 40px;
  opacity: 0;
  animation: fadeOut, fadeIn;
  animation-duration: 10s, 10s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
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

#left-1 {
  animation-delay: 0.5s, 3.5s;
}

#right-1 {
  animation-delay: 1s, 4s;
}

#left-2 {
  animation-delay: 1.5s, 4.5s;
}

#right-2 {
  animation-delay: 2s, 5s;
}

#left-3 {
  animation-delay: 2.5s, 5.5s;
}

#right-3 {
  animation-delay: 3s, 6s;
}

#left-4 {
  animation-delay: 3.5s, 6.5s;
}

#right-4 {
  animation-delay: 4s, 7s;
}

#left-5 {
  animation-delay: 4.5s, 7.5s;
}

#right-5 {
  animation-delay: 5s, 8s;
}

</style>