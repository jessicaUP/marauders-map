<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import { useRoute } from 'vue-router';


const { character } = storeToRefs(useCharacterStore());
const { updateCharacter } = useCharacterStore();

const { show } = storeToRefs(useMapStore());
const { openShow, changeShow } = useMapStore();


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
        {{character.eyeColour ? 'Eye: ' + character.eyeColour : ''}}<br v-if="character.eyeColour">
        {{ character.hairColour ? 'Hair: ' + character.hairColour : '' }}</p>
    </div>
  </div>
</template>

<style>

  .wizard-card {
    position: fixed;
    background-size: contain;
    top: 20px;
    right: 40px;
    width: 360px;
    height: 360px;
    pointer-events: none;
  }

  #front {
    background-image: var(--img-card-front);
  }

  #back {
    background-image: var(--img-card-back);
    z-index: 1;
  }

  .card-wrap {
    display: flex;
    position: fixed;
    top: 45px;
    right: 25px;
    width: 360px;
    height: 300px;
    pointer-events: none;
  }

  .show-btn {
    position: fixed;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    font-size: 18px;
    color: tan;
    background-color: var(--color-blue);
    border: 2px outset var(--color-gold);
    z-index: 2;

  }

  #close {
    top: 335px;
    right: 60px;

  }

  #flip {
    top: 295px;
    right: 45px;
    font-size: 22px;
    transform: rotate(-40deg);
    
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 93px;
    top: 118px;
    width: 150px;
    height: 150px;

  }

  .info > h1 {
    font-family: var(--font-title);
    font-size: 20px;
    color: var(--color-white);
    text-align: center;
  }

  .info > p {
    font-family: var(--font-title);    
    line-height: 19px;
    padding: 0;
    color: var(--color-gold);
    text-align: center;
  }

  .character-img {
    position: fixed;
    top: 119px;
    right: 145px;
    width: 150px;
    height: 215px;
    background-size: cover;
    background-position: center;
  }


</style>