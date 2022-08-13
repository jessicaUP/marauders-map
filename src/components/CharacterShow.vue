<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import { RouterLink, RouterView, useRoute } from 'vue-router';


const { staff, students, character } = storeToRefs(useCharacterStore());
const { updateCharacter } = useCharacterStore();


const route = useRoute();
let { name, group } = route.params;
console.log('ROUTE', route.params)

updateCharacter(name, group);

// updateCharacter('Harry Potter', 'students');

console.log(character._object.character)
</script>

<template>
  <div class="pentagon"></div>
  <div class="card-wrap">
    <div class="character-img" :style="{ backgroundImage: `url(${character.image})` }"></div>
    <div class="info">
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

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 0;
    top: 95px;
    width:315px
  }

  .character-img {
    position: fixed;
    top: 45px;
    right: 132px;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-size: cover;
  }


</style>