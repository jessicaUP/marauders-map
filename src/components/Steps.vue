<script setup>

</script>

<template>
  <div class="steps-wrap">
    <div class="right-group">
      <div class="foot foot-right" id="right-1"></div>
      <div class="foot foot-right" id="right-2"></div>
      <div class="foot foot-right" id="right-3"></div>
      <div class="foot foot-right" id="right-4"></div>
      <div class="foot foot-right" id="right-5"></div>
      <!-- <div class="foot foot-right" id="right-6"></div>
      <div class="foot foot-right" id="right-7"></div>
      <div class="foot foot-right" id="right-8"></div> -->
    </div>
    <div class="left-group">
      <div class="foot foot-left" id="left-1"></div>
      <div class="foot foot-left" id="left-2"></div>
      <div class="foot foot-left" id="left-3"></div>
      <div class="foot foot-left" id="left-4"></div>
      <div class="foot foot-left" id="left-5"></div>
      <!-- <div class="foot foot-left" id="left-6"></div>
      <div class="foot foot-left" id="left-7"></div>
      <div class="foot foot-left" id="left-8"></div> -->
    </div>
  </div>
</template>

<style>

.steps-wrap {
  position: relative;
  top: 300px;
  
}

.left-group, .right-group {
  display: flex;
  width: 500px;
  justify-content: space-between;
}

.right-group {
  margin-left: 65px;
  position: relative;
  top: 0px;
}

.foot {
  background-image: url('../assets/images/shoePrintRight.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  opacity: 0;
  animation: fadeOut, fadeIn;
  animation-duration: 9s, 9s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}

.foot-right {
  /* animation: stepRight 30000s steps(4, end) infinite; */
}

.foot-left {
  transform: scaleX(-1);
  /* animation: stepLeft 6s steps(4, end) infinite; */
}

@keyframes fadeOut {
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  10% {
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