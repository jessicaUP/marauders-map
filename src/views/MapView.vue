<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView, useRoute } from 'vue-router';
// import { useCharacterStore } from './stores/characters';
import { useMapStore } from '../stores/map';
import CharactersIndex from '../components/CharactersIndex.vue';
import CharacterShow from '../components/CharacterShow.vue';


const { open, index, character } = storeToRefs(useMapStore());
const { openMap, openIndex, changeIndex } = useMapStore();

const route = useRoute();
let params = route.params.character;
console.log('ROUTE', route.params) 

</script>

<template>
  <main>
    <!-- <RouterView /> -->
    <!-- <div class="search">
    <input type="text"
      class="search-bar"
      placeholder="Search a Wizard..."
      v-model="query"
      @keypress="fetchCharacter"
      />
  </div> -->

    <div class="character-wrap">
      <CharacterShow />
    </div>

    <div class="index-wrap">
      <CharactersIndex />
    </div>




  </main>
</template>
