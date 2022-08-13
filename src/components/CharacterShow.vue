<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import { useRoute } from 'vue-router';


const { character } = storeToRefs(useCharacterStore());
const { updateCharacter } = useCharacterStore();

const { show } = storeToRefs(useMapStore());
const { openShow, changeShow } = useMapStore();

const route = useRoute();
let { name, group } = route.params;

updateCharacter(name, group);

</script>

<template>
  <button 
    v-if="character.image"
    class="show-btn" 
    id="flip"
    @click="changeShow()"
  >⤻</button>

  <button 
    class="show-btn" 
    id="close"
    @click="openShow(true)"
  >✕</button>

  <div class="pentagon"></div>
  <div class="card-wrap">
    <div 
      v-if="show.side === 'picture'"
      class="character-img" 
      :style="{ backgroundImage: `url(${character.image})` }"
    ></div>
    <div v-else class="info">
      <h1 key="character.name">{{ character.name }}</h1>
      <p>{{character.dateOfBirth}}</p>
      <p>{{character.house}}</p>
      <p>{{character.gender}}</p>
      <p>{{character.eyeColour}}</p>
      <p>{{character.hairColour}}</p>
    </div>
  </div>
</template>

<style>

  .pentagon {
    display: flex;
    position: fixed;
    top: 145px;
    right: 25px;
    width: 189px;
    box-sizing: content-box;
    border-width: 175px 63px 0;
    border-style: solid;
    border-color: rgb(10, 88, 93) transparent;
  }

  .pentagon:before {
    content: "";
    top: -297.5px;
    left: -63px;
    border-width: 0 157.5px 122.5px;
    border-style: solid;
    border-color: transparent transparent rgb(10, 88, 93);
    
    
  }

  .card-wrap {
    display: flex;
    position: fixed;
    top: 45px;
    right: 25px;
    width: 315px;
    height: 300px;
  }

  .show-btn {
    position: fixed;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    font-size: 18px;
    color: white;
    background-color: darkcyan;
    border: none;
    z-index: 1;
  }

  #close {
    top: 285px;
    right: 35px;

  }

  #flip {
    top: 240px;
    right: 17px;
    font-size: 25px;
    transform: rotate(-40deg);
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 0;
    top: 85px;
    width:315px
  }

  .character-img {
    position: fixed;
    top: 80px;
    right: 70px;
    border-radius: 100%;
    width: 225px;
    height: 225px;
    background-size: cover;
  }


</style>