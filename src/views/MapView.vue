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

    <router-link to="/" class="button" id="open">"...mischief managed"</router-link>

</template>

<style>

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

.index-btn {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  position: fixed;
  margin: 0;
  width: 110px;
  height: 80px;
  bottom: 120px;
  border: none;
  text-align: center;
}

.index-btn > p {
  color: var(--color-white);
  font-size: 19px;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
}

#true-students {
  background-image: url('../assets/images/ribbon-m.png');
  left: 214px;
  bottom: 105px;
}

#false-students {
  background-image: url('../assets/images/ribbon-m.png');
  left: -10px;
  bottom: 105px;
}

#true-staff {
  background-image: url('../assets/images/ribbon-r.png');
  left: 214px;
  bottom: 45px;
}

#false-staff {
  background-image: url('../assets/images/ribbon-r.png');
  left: -10px;
  bottom: 45px;
}


</style>