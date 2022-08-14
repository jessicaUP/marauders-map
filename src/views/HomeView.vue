<script setup>
</script>

<template>
  <router-link to="students/harry potter" class="button" id="open">"I solemnly swear that I am up to no good..."
  </router-link>

  <div class="map-cover">
    <div class="cover" id="left"></div>
    <div class="cover" id="right"></div>
  </div>
</template>

<style>

.map-cover {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

.cover {
  height: 100vh;
  aspect-ratio: 823 / 2920;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: 5px 10px 10px maroon;
}

#right {
  background-image: url('../assets/images/right.png');

}

#left {
  background-image: url('../assets/images/left.png');

}

</style>
