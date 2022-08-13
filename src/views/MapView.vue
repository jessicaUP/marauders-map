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

const handleMenu = (group, index) => {
  console.log(index.open)
  if (index.open) {
    if (group === index.group) {
      console.log('B')
      openIndex();
    } else {
      console.log('C')
      changeIndex(group);
    }
  } else {
    console.log('A')
    openIndex();
    changeIndex(group)
  }
}

</script>


<template>


    <Map />

    <div class="show-wrap">
      <CharacterShow />
    </div>

    <button 
      class="index-btn"
      :id="index.open + '-students'"
      @click="handleMenu('students', index)"
    >Students</button>
    <button 
      class="index-btn" 
      :id="index.open + '-staff'"
      @click="handleMenu('staff', index)"
    >Staff</button>

    <!-- <button
      @click="openIndex"
      class="index-btn"
      :id="index.open + '-index'"
    >Wizard List</button> -->

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
  font-size: 20px;
  width: 125px;
  height: 30px;
  top: 60px;
}

#true-students {
  left: 175px;
  background-color: maroon;
}

#false-students {
  left: -50px;
  background-color: maroon;
}

#true-staff {
  left: 175px;
  top: 190px;
  background-color: red;
}

#false-staff {
  left: -50px;
  top: 190px;
  background-color: red;
}


</style>