<script setup>
import CharacterButton from './CharacterButton.vue';
import { movingCharacters } from '../assets/movingCharacters'


</script>

<template>

<div class="map">
  <div class="character-map">
    <div 
      class="moving-icon" 
      v-for="character of movingCharacters"
      :id="character.name.split(' ').join('') + '-move'"
    >
      <CharacterButton 
        :name="character.name"
        :group="character.group"

      />
    </div>
  </div>


</div>

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

.character-map {
  width: 2000px;
  height: 1089px;
  /* aspect-ratio: 5460 / 2965; */
  background-image: url('../assets/images/map.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

.moving-icon {
  width: fit-content;
}

.moving-icon > .character-name {
  font-family: 'Barlow Condensed', sans-serif;
  margin: 2px;
  padding: 1px 35px 1px 10px;
  background-color: white;
  width: fit-content;
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - 20px) 50%, 100% 100%, 0% 100%);
}

.moving-icon > .character-name > .list-btn {
  color: maroon;
}

</style>