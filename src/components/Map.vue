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

#NevilleLongbottom-move {
  bottom: 60px;
  left: 450px;
  offset-path: path('m -1 1 C -209 -172 -123 -423 98 -438 L 129 -362 C 125 -305 46 -357 93 -378 C 104 -385 134 -378 119 -349 C 73 -311 81 -388 118 -390 L 96 -443 C 132 -478 177 -522 242 -509');
  animation: one-way 30000ms infinite linear;
}

#AlbusDumbledore-move {
  top: 290px;
  right: 200px;
  offset-path: path('m 171 74 C 139 77 138 107 195 114 C 201 114 232 113 216 103 c -32 10 53 -39 -38 -30 z');
  animation: loop 20000ms infinite linear;
}

#QuirinusQuirrel-move {
  top: 620px;
  left: 300px;
  offset-path: path('M 0.5 0.5 L 82.5 -84 C 90.5 -89.5 82.5 -102 72.5 -95.5 L -3.5 -17 C -14.5 -9.5 -5 4.5 0 -1 L 82 -84.5 C 88.5 -95.5 55 -99 51 -93.5 L -10.5 -28 C -13 -7.5 -10.5 0.5 2 -11.5 L 0 -64 C -2.5 -96.5 83.5 -108 0 -1 Z');
  animation: loop 15000ms infinite linear;
  }

#SeverusSnape-move {
  bottom: 490px;
  left: 185px;
  offset-path: path('m 556 185 L 618 96 L 779 230 L 617 410');
  animation: one-way 25000ms infinite linear;
}

#MadamHooch-move {
  bottom: 80px;
  right: 500px;
  offset-path: path('m 0 -15 C 22.5 -15.75 -21 -116 66 -57 C 92 -46.75 118 -56 92 -72 C 57 -91 31.25 -93.75 60 -108 C 97 -110.75 145.75 -107 108 7 L 196 -52 L 394 -74 C 433 -69 393 -187 563 -134');
  animation: one-way 70000ms infinite linear;
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

  85% {
    opacity: 1;
  }
  
  90% {
    offset-distance: 100%;
    opacity: 0;
  }
  
  100% {
    opacity: 0;
  }

  
}


</style>