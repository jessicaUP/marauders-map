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




</style>