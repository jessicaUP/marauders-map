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

#LordVoldemort-move {
  top: 645px;
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

#RubeusHagrid-move {
  bottom: 90px;
  right: 260px;
  offset-path: path('M 320.5 -411.5 C 276 -228.5 220 -419.5 223 -238 C 46 -23.375 251.5 -122.5 188.5 -82 C 137.5 -112 226 -90 187.5 -85.5 L 176 -93.5 L 191 -93.5 C 169.5 -35 319 -397.5 249.5 48.5');
  animation: one-way 100000ms infinite linear;
}

#FredWeasley-move {
  top: 550px;
  left: 120px;
  offset-path: path('M 0 0 L 0 88 L 3 -3 C 6 -103 127.4219 -267.9688 387 -293 L 475 -321 C 446.7969 -357.6563 458 -397 494 -405 C 546 -428 589 -305 482 -324 L 382 -281 C 127.4219 -251.0156 33.9063 -97.8906 8.75 6.0156');
  animation: one-way 70000ms infinite linear;
}

#GeorgeWeasley-move {
  top: 550px;
  left: 120px;
  offset-path: path('M 0 1 L 1 1 C 39 -102 127.4219 -267.9688 376 -268 L 490 -343 C 477 -351 491 -381 499 -377 C 531 -386 549 -341 489 -347 L 382 -281 C 127.4219 -251.0156 33.9063 -97.8906 8.75 6.0156');
  animation: one-way 70000ms infinite linear;
}

#LunaLovegood-move {
  top: 510px;
  right: 550px;
  offset-path: path('M 0 0 C -25 -5 -40 -8 -28 -34 L -10 -86 L -39 -140 L -69 -208 C 10 -228 -52 -354 -132 -296 L -135 -297 L -135 -296 L -134 -297 L -130 -299');
  animation: loop 70000ms infinite alternate linear;
}

#ArgusFilch-move {
  bottom: 400px;
  left: 700px;
  offset-path: path('M 0 0 C -217 -3 -256 310 0 337');
  animation: one-way 80000ms infinite linear;
}

#MrsNorris-move {
  bottom: 420px;
  left: 690px;
  offset-path: path('M 0 0 C -165 31 -251 197 -117 282 L -106 273 C -104 338 -145 154 -178 143 L -192 140 L -188 160 L -179 160 C -200 219 -152 353 1 361 L 1 334 L 0 361');
  animation: one-way 80000ms infinite linear;
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