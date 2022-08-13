<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';


// const { staff, students } = storeToRefs(useCharacterStore());

// const { index } = storeToRefs(useMapStore());
// const { changeIndex } = useMapStore();

</script>

<template>
<div class="loader"><div class="inner-load"></div></div>
</template>

<style>
.loader {
  transform: rotate(-45deg);
  width: 200px;
  height: 200px;
  background-color: maroon;
  animation: loader 5s infinite linear;

}

@keyframes loader {
  from {
    transform: rotateY(0deg) rotate(-45deg);
  } to {
    transform: rotateY(360deg) rotate(-45deg);
  }
}




</style>