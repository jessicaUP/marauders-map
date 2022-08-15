<script setup>
import { onBeforeUnmount } from 'vue';
import Steps from '../components/Steps.vue';

onBeforeUnmount(() => {
  const openBtn = document.getElementById('open');
  openBtn.classList.add('open-move');
  
})
</script>

<template>
  <router-link to="map" class="button" id="open">"I solemnly swear that I am up to no good..."
  </router-link>

  <div class="map-cover">
    <div class="cover" id="left"></div>
    <div class="cover" id="right"></div>
  </div>
</template>

<style>

#open {
  font-family: var(--font-title);
  position: relative;
  bottom: 10px;
  right: 10px;
  color: var(--color-maroon);
  font-size: 5vw;
  animation: zoom 10s ease-out 1 normal forwards;
}

@keyframes {
  0% {
    font-size: 5vw;
  }
  100% {
    
  }
}

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
  box-shadow: 5px 10px 10px var(--color-maroon);
}

#right {
  background-image: var(--img-map-cover-right-2);

}

#left {
  background-image: var(--img-map-cover-left-2);

}

</style>
