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
    class="button"
    id="open"
    @click="openMap"
  >{{ open ? "mischief managed." : "I solemnly swear that I am up to no good."}}</button>

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



