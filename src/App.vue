<script setup>
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from './stores/characters'
import Loading from './components/Loading.vue';


const { fetchCharacters } = useCharacterStore();
fetchCharacters()

const { staff, students, character, loading, errors } = storeToRefs(useCharacterStore());


</script>


<template>
  <header>
  </header>

  <div class="load-wrap" v-if="loading">
    <Loading />
  </div>
  <div class="content-wrap" v-else >
    <RouterView />
  </div>


</template>

<style scoped>



</style>



