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