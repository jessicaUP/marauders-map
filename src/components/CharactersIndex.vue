<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import CharacterButton from './CharacterButton.vue';


const { staff, students, character } = storeToRefs(useCharacterStore());
const { getCharacterByName, updateCharacter } = useCharacterStore();

const { index } = storeToRefs(useMapStore());
const { changeIndex } = useMapStore();

const handleClick = (e) => {
  return (name, group) => {
    updateCharacter(name, group);
    changeIndex(group);
  }
}



</script>

<template>
  <div class="index-wrap">
    <button class="students" @click="changeIndex('students')">Students</button>
    <button class="staff" @click="changeIndex('staff')">Staff</button>

    <div class="character-wrap" v-if="index.group === 'students'">
      <CharacterButton 
        v-for="character in students" 
        :name="character.name"
        group="students"
      />
    </div>
    <div class="character-wrap" v-else-if="index.group === 'staff'">
      <CharacterButton 
        v-for="character in staff" 
        :name="character.name"
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
    background-color: maroon;
    width: 225px;
    overflow: scroll;

  }

  .index-wrap::-webkit-scrollbar {
    display: none;
  }

  .character-wrap {
    display: flex;
    flex-direction: column;
  }

  .list-btn {
    color: lightgray;
    font-size: 20px;
    text-align: left;
  }

</style>