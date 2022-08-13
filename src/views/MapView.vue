<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { useMapStore } from '../stores/map';
import { useCharacterStore } from '../stores/characters';
import CharactersIndex from '../components/CharactersIndex.vue';
import CharacterShow from '../components/CharacterShow.vue';
import Map from '../components/Map.vue';


const { open, index, character } = storeToRefs(useMapStore());
const { liveCharacters } = storeToRefs(useCharacterStore());
const { openMap, openIndex, changeIndex } = useMapStore();

console.log('LIVE', liveCharacters)

const { updateCharacter } = useCharacterStore();

// const route = useRoute();
// let { name, group } = route.params;
// console.log('ROUTE', route.params) 

// updateCharacter(name, group);

</script>

<template>
  <main>


    <Map />

    <div class="character-wrap">
      <CharacterShow />
    </div>

    <button
      @click="openIndex"
    >Wizard List</button>
    <div class="index-wrap" v-if="index.open">
      <CharactersIndex />
    </div>






    <router-link to="/" class="button" id="open">"...mischief managed"</router-link>
  </main>
</template>
