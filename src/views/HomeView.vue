<script setup>
import { storeToRefs } from 'pinia';
import { useMapStore } from '../stores/map';

const { openMap, openIndex, changeIndex } = useMapStore();

</script>

<template>
  <router-link
    to="students/harry potter"
    class="button"
    id="open"
  >"I solemnly swear that I am up to no good..."</router-link>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
