<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import CharacterButton from './CharacterButton.vue';

const { staff, students } = storeToRefs(useCharacterStore());
const { index } = storeToRefs(useMapStore());

let studentsAlph = Object.keys(students).sort();
let staffAlph = Object.keys(staff).sort();

</script>

<template>
  <div class="index-wrap">
    <div class="character-wrap" v-if="index.group === 'students'">
      <CharacterButton 
        v-for="character of Object.keys(students).sort()" 
        :name="students[character].name"
        group="students"
      />
    </div>
    <div class="character-wrap" id="staff-wrap" v-else-if="index.group === 'staff'">
      <CharacterButton 
        v-for="character of Object.keys(staff).sort()" 
        :name="staff[character].name"
        group="staff"
      />
    </div>
  </div>
</template>

<style>
  .index-wrap {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-maroon);
    width: 255px;
    overflow: scroll;
    z-index: 2;

  }

  .index-wrap::-webkit-scrollbar {
    display: none;
  }

  .character-wrap {
    height: fit-content;
    display: flex;
    flex-direction: column;
  }

  #staff-wrap {
    background-color: var(--color-highlight-maroon);
  }

  .character-name {
    margin: 5px;
    margin-left: 16px;
  }

  .list-btn {
    color: var(--color-white);
    font-size: 20px;
    text-align: left;
  }


.index-btn {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  position: fixed;
  margin: 0;
  width: 110px;
  height: 80px;
  bottom: 120px;
  border: none;
  text-align: center;
}

.index-btn>p {
  color: var(--color-white);
  font-size: 19px;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
}

#true-students {
  background-image: url('../assets/images/ribbon-m.png');
  left: 244px;
  bottom: 105px;
}

#false-students {
  background-image: url('../assets/images/ribbon-m.png');
  left: -10px;
  bottom: 105px;
}

#true-staff {
  background-image: url('../assets/images/ribbon-r.png');
  left: 244px;
  bottom: 45px;
}

#false-staff {
  background-image: url('../assets/images/ribbon-r.png');
  left: -10px;
  bottom: 45px;
}



</style>