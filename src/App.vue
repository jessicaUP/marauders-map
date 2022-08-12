<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useCharacterStore } from './stores/characters'
import { useMapStore } from './stores/map'
import CharactersIndex from './components/CharactersIndex.vue'
import CharacterShow from './components/CharacterShow.vue'


// const { staff, students, character, loading, errors } = storeToRefs(useCharacterStore());
const { fetchCharacters } = useCharacterStore();
fetchCharacters();

const { open, index, character } = storeToRefs(useMapStore());
const { openMap, openIndex, changeIndex, updateCharacter } = useMapStore();



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
  <!-- <div class="search">
    <input type="text"
      class="search-bar"
      placeholder="Search a Wizard..."
      v-model="query"
      @keypress="fetchCharacter"
      />
  </div> -->

  <div class="character-wrap" v-if="open">
    <CharacterShow />
  </div>

  <div class="index-wrap" v-if="open">
    <CharactersIndex />
  </div>

   <button
      v-if="!open"
     class="open-button"
     @click="openMap"
   >"I solemnly swear that I am up to no good."</button>
   <button
     v-else
     class="open-button"
     @click="openMap"
   >“mischief managed.”</button>

  <!-- <div class="character-wrap">
    <h1 class="character-name">Harry Potter</h1>
    <h3 class="character-info" id="born">31 July 1980</h3>
    <h3 class="character-info" id="house">Gryffindor</h3>
  </div> -->
</template>

<style scoped>
  .open-button {
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: transparent;
    color: maroon;
    border: none;
    cursor: pointer;
    font-size: 25px;
  }
</style>



