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

.map::-webkit-scrollbar {
  background-color: var(--maroon-color);
}

.map::-webkit-scrollbar-corner {
  background-color: var(--maroon-color);
}

.map::-webkit-scrollbar-thumb {
  background-color: var(--maroon-highlight);
  border-radius: 30px;
  border: 2px outset var(--gold-color);
}

.map::-webkit-scrollbar-track-piece {
  background-color: var(--maroon-color);
}

.character-map {
  width: 2000px;
  height: 1089px;
  /* aspect-ratio: 5460 / 2965; */
  background-image: var(--map-background);
  opacity: .95;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}


</style>