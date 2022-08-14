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

.moving-icon {
  position: absolute;
  offset-rotate: 0deg;
}


#HarryPotter-move {
  top: 300px;
  right: 600px;
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: loop 9000ms infinite alternate ease-in-out;

}

#AlbusDumbledore-move {
  top: 300px;
  right: 200px;
  offset-path: path('m 171 74 C 139 77 138 107 195 114 C 201 114 232 113 216 103 c -32 10 53 -39 -38 -30 z');
  animation: loop 10000ms infinite linear;
}

#SeverusSnape-move {
  bottom: 60px;
  left: 600px;
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: one-way 5000ms infinite linear;
}

@keyframes loop {
  0% {
    offset-distance: 0%;
  }

  100% {
    offset-distance: 100%;
  }
}

@keyframes one-way {
  0% {
    offset-distance: 0%;
    opacity: 0;
  }

  5% {
    opacity: 1;
  }

  95% {
    opacity: 1;
  }

  100% {
    offset-distance: 100%;
    opacity: 0;
  }
}


</style>