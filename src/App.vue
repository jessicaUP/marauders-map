<script setup>
import { useCharacterStore } from './stores/characters'
import { RouterView } from 'vue-router';
import Loading from './components/Loading.vue';


// const { staff, students, character, loading, errors } = storeToRefs(useCharacterStore());
const { fetchCharacters } = useCharacterStore();
fetchCharacters();



</script>


<template>
  <header>

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
  <Loading />


</template>

<style scoped>



</style>



