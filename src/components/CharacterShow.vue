<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { staff, students, character } = storeToRefs(useCharacterStore());
const { updateCharacter } = useCharacterStore();

updateCharacter('Harry Potter', 'students');

console.log(character._object.character)
</script>

<template>
  <div class="pentagon">
    <div class="show-wrap" v-if="character">
    <!-- <img :src="{character.image}" alt="" :style="{'background-color':Your_Variable_Name}"> -->
    
    <div 
      class="character-img"
      :style="{ backgroundImage: `url(${character.image})` }"
    ></div>
      <h2 key="character.name">{{ character.name }}</h2>
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
    position: relative;
    top: 150px;
    width: 189px;
    box-sizing: content-box;
    border-width: 175px 63px 0;
    border-style: solid;
    border-color: rgb(10, 88, 93) transparent;
  }

  .pentagon:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -297.5px;
    left: -63px;
    border-width: 0 157.5px 122.5px;
    border-style: solid;
    border-color: transparent transparent rgb(10, 88, 93);
    
    
  }

  .show-wrap {
    position: relative;
    top: -200px;
  }

  .character-img {
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-size: cover;
  }


</style>