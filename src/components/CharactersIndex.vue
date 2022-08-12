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
        v-if="students" 
        v-for="character in students" 
        :key="character.name"
        @click="updateCharacter(character.name, 'students')"
      >{{ character.name }}</button>
    </div>
    <div class="character-wrap" v-else-if="index.group === 'staff'">
      <button 
        v-if="staff" 
        v-for="character in staff" 
        :key="character.name"
      >{{ character.name }}</button>
    </div>
  </div>
</template>