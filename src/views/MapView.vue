<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
import { useMapStore } from '../stores/map';
import CharactersIndex from '../components/CharactersIndex.vue';
import CharacterShow from '../components/CharacterShow.vue';
import Map from '../components/Map.vue';


const { index, show } = storeToRefs(useMapStore());
const { openIndex, changeIndex } = useMapStore();

const handleMenu = (group, index) => {
  if (index.open) {
    if (group === index.group) {
      openIndex();
    } else {
      changeIndex(group);
    }
  } else {
    openIndex();
    changeIndex(group)
  }
}

</script>


<template>

    <Map />

    <div class="show-wrap" v-if="show.open">
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