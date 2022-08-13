<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { useMapStore } from '../stores/map';
import { useCharacterStore } from '../stores/characters';
import CharactersIndex from '../components/CharactersIndex.vue';
import CharacterShow from '../components/CharacterShow.vue';
import Map from '../components/Map.vue';


const { open, index, character } = storeToRefs(useMapStore());
const { openMap, openIndex, changeIndex } = useMapStore();

const { liveCharacters } = storeToRefs(useCharacterStore());
const { updateCharacter } = useCharacterStore();


</script>


<template>


    <Map />

    <div class="show-wrap">
      <CharacterShow />
    </div>

    <button
      @click="openIndex"
      class="index-btn"
      :id="index.open + '-index'"
    >Wizard List</button>
    <div class="index-wrap" v-if="index.open">
      <CharactersIndex />
    </div>

    <router-link to="/" class="button" id="open">"...mischief managed"</router-link>

</template>

<style>

.index-btn {
  position: fixed;
  margin: 0;
  transform: rotate(90deg);
  background-color: maroon;
  font-size: 20px;
  width: 150px;
  height: 30px;
  top: 50vh;
}

#true-index {
  left: 160px;
}

#false-index {
  left: -61px;
}


</style>