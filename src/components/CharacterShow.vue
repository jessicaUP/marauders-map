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
  <button v-if="character.image" class="show-btn" id="flip" @click="changeShow()">⤻</button>

  <button class="show-btn" id="close" @click="openShow(true)">✕</button>

  <!-- <div class="pentagon"></div> -->
  <div class="wizard-card" id="front" v-if="show.side === 'info'"></div>
  <div class="wizard-card" id="back" v-else></div>

  <div class="card-wrap">
    <div v-if="show.side === 'picture'" class="character-img" :style="{ backgroundImage: `url(${character.image})` }">
    </div>
    <div v-else class="info">
      <h1 key="character.name">{{ character.name }}</h1>
      <p>{{character.dateOfBirth}}<br v-if="character.dateOfBirth">
        {{character.house}}<br v-if="character.house">
        {{character.gender}}<br v-if="character.gender">
        Eye: {{character.eyeColour}}<br v-if="character.eyeColour">
        Hair: {{character.hairColour}}</p>
    </div>
  </div>
</template>

<style>

  .wizard-card {
    position: fixed;
    background-size: contain;
    top: 20px;
    right: 25px;
    width: 360px;
    height: 360px;
  }

  #front {
    background-image: url('../assets/images/cardFront.png');
  }

  #back {
    background-image: url('../assets/images/cardBack.png');
    z-index: 1;
  }

  .card-wrap {
    display: flex;
    position: fixed;
    top: 45px;
    right: 25px;
    width: 360px;
    height: 300px;
  }

  .show-btn {
    position: fixed;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    font-size: 18px;
    color: tan;
    background-color: rgb(30, 58, 110);
    border: none;
    z-index: 2;

  }

  #close {
    top: 335px;
    right: 41px;

  }

  #flip {
    top: 290px;
    right: 25px;
    font-size: 25px;
    transform: rotate(-40deg);
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 0;
    top: 118px;
    width: 360px;

  }

  .info > h1 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    color: white;
  }

  .info > p {
    font-family: 'Barlow Condensed', sans-serif;    
    line-height: 19px;
    padding: 0;
    color: tan;
    text-align: center;
  }

  .character-img {
    position: fixed;
    top: 119px;
    right: 130px;
    width: 150px;
    height: 215px;
    background-size: cover;
    background-position: center;
  }


</style>