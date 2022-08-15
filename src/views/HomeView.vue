<script setup>
import { onBeforeUnmount } from 'vue';
import Steps from '../components/Steps.vue';

// onBeforeUnmount(() => {
//   setTimeout(() => {}, 60000)
//   const openBtn = document.getElementById('open');
//   openBtn.classList.add('open-move');
  
// })

const openMapMove = () => {
  const openBtn = document.getElementById('open');
  const coverRight = document.getElementById('right');
  const coverLeft = document.getElementById('left');
  // document.getElementById('home-steps').style['opacity'] - 0;
  openBtn.classList.add('open-move');
  coverLeft.classList.add('live-left');
  coverRight.classList.add('live-right');
  setTimeout(() => { openBtn.click() }, 3000);
}
</script>

<template>
  <div class="button open" id="click-open" @click="openMapMove"></div>
  <router-link to="map" class="button open" id="open">"I solemnly swear that I am up to no good..."</router-link>

  <div class="map-cover">
    <div class="cover" id="left"></div>
    <div class="cover" id="right"></div>
  </div>
  <Steps id="home-steps" />
</template>

<style>

.open {
  font-family: var(--font-title);
  position: relative;
  bottom: 10px;
  right: 10px;
  color: var(--color-maroon);
  font-size: 5vw;
  white-space: nowrap;
  z-index: 0;
}

#click-open {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
}


#right {
  background-image: var(--img-map-cover-right-2);
}

#left {
  background-image: var(--img-map-cover-left-2);

}



.live-right {
  animation: fadeR 1s ease-in 1 normal forwards;
}

.live-left {
  animation: fadeL 1s ease-in 1 normal forwards;

}

@keyframes fadeR {
  100% {
    background-image: var(--img-map-cover-right);
  }
}

@keyframes fadeL {
  100% {
    background-image: var(--img-map-cover-left);
    }
}

#home-steps {
  position: fixed;
  top: 55vh;
  transform: scale(3);
  z-index: -3;
}

.open-move {
  animation: zoom 2s ease-in 1 normal forwards;
}

@keyframes zoom {
  0% {
    font-size: 5vw;
  }
  95% {
    font-size: 60vw;
  }
  100% {
    opacity: 0;
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
  z-index: -2;
}

.cover {
  height: 100vh;
  aspect-ratio: 823 / 2920;
  background-size: contain;
  background-color: white;
  background-repeat: no-repeat;
  box-shadow: 5px 10px 10px var(--color-maroon);
}



</style>
