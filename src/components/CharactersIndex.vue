<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { staff, students, character } = storeToRefs(useCharacterStore());
const { getCharacterByName, updateCharacter } = useCharacterStore();

const { index } = storeToRefs(useMapStore());
const { changeIndex } = useMapStore();

 console
</script>

<template>
  <div class="index-wrap">
    <button class="students" @click="changeIndex('students')">Students</button>
    <button class="staff" @click="changeIndex('staff')">Staff</button>

    <div class="character-wrap" v-if="index.group === 'students'">
      <button 
        class="button list-btn"
        v-if="students" 
        v-for="character in students" 
        :key="character.name"
        @click="updateCharacter(character.name, 'students')"
      >{{ character.name }}</button>
    </div>
    <div class="character-wrap" v-else-if="index.group === 'staff'">
      <button 
        class="button list-btn"
        v-if="staff" 
        v-for="character in staff" 
        :key="character.name"
        @click="updateCharacter(character.name, 'staff')"
      >{{ character.name }}</button>
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
    right: 0;
    width: fit-content;
    overflow: scroll;
    overflow-x: hidden;
  }

  .character-wrap {
    display: flex;
    flex-direction: column;
  }

  .list-btn {
    color: lightgray;
    font-size: 20px;
    text-align: right;
  }

</style>