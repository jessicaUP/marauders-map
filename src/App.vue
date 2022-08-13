<script setup>
import { useCharacterStore } from './stores/characters'
import { RouterView } from 'vue-router';


// const { staff, students, character, loading, errors } = storeToRefs(useCharacterStore());
const { fetchCharacters } = useCharacterStore();
fetchCharacters();

// if (params) {
//   openMap();

//   updateCharacter(params)

// }


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


</template>

<style scoped>


  #open {
    position: fixed;
    bottom: 10px;
    right: 10px;
    color: maroon;
    font-size: 25px;
  }
</style>



