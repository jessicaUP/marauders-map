<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView, useRoute } from 'vue-router';
// import { useCharacterStore } from './stores/characters';
import { useMapStore } from '../stores/map';
import { useCharacterStore } from '../stores/characters';
import CharactersIndex from '../components/CharactersIndex.vue';
import CharacterShow from '../components/CharacterShow.vue';


const { open, index, character } = storeToRefs(useMapStore());
const { openMap, openIndex, changeIndex } = useMapStore();

const { updateCharacter } = useCharacterStore();

// const route = useRoute();
// let { name, group } = route.params;
// console.log('ROUTE', route.params) 

// updateCharacter(name, group);

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

    <router-link to="/" class="button" id="open">"...mischief managed"</router-link>




  </main>
</template>
