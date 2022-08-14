<script setup>

</script>

<template>
<div class="loader"><div class="inner-load"></div></div>
</template>

<style>
.loader {
  transform: rotate(-45deg);
  width: 200px;
  height: 200px;
  background-color: var(--maroon-color);
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