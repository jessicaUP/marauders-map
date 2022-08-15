<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import CharactersIndex from '../components/CharactersIndex.vue';
import CharacterShow from '../components/CharacterShow.vue';
import Map from '../components/Map.vue';
import { useRoute } from 'vue-router';


const { index, show } = storeToRefs(useMapStore());
const { openIndex, changeIndex, openShow } = useMapStore();

const { updateCharacter } = useCharacterStore();

const route = useRoute();

console.log('SHOW', route.params)
if (route.params.name !== '') {
  let { name, group } = route.params;
  updateCharacter(name, group);
  openShow();
}


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

const closeMap = () => {
  const closeBtn = document.getElementById('close');
  // openBtn.classList.add('open-move');
  setTimeout(() => { closeBtn.click() }, 2000)  
}

</script>


<template>

<div class="app-title" @click="closeMap"></div>

<Map />

<div class="show-wrap" v-if="show.open">
  <CharacterShow />
</div>

<div 
  class="index-btn"
  :id="index.open + '-students'"
  @click="handleMenu('students', index)"
>
<p>Students</p>
</div>
<div 
  class="index-btn" 
  :id="index.open + '-staff'"
  @click="handleMenu('staff', index)"
>
<p>Staff</p>
</div>

<div class="index-wrap" v-if="index.open">
  <CharactersIndex />
</div>

<router-link to="/" class="button" id="close">"...mischief managed"</router-link>

</template>

<style>

.app-title {
  position: fixed;
  top: 0;
  left: 0;
  margin: 5px;
  width: 250px;
  height: 300px;
  background-image: url('../assets/images/appTitle.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  cursor: pointer;

}

#close {
  opacity: 0;
}

.app-title:hover {
  transform: scale(1.025);
}

.map {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: scroll;
}

.map::-webkit-scrollbar {
  background-color: var(--color-maroon);
}

.map::-webkit-scrollbar-corner {
  background-color: var(--color-maroon);
}

.map::-webkit-scrollbar-thumb {
  background-color: var(--color-highlight-maroon);
  border-radius: 30px;
  border: 2px outset var(--color-gold);
}

.map::-webkit-scrollbar-track-piece {
  background-color: var(--color-maroon);
}

.character-map {
  width: 2000px;
  height: 1089px;
  /* aspect-ratio: 5460 / 2965; */
  background-image: var(--img-map-background);
  opacity: .95;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

</style>