<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { staff, students } = storeToRefs(useCharacterStore());

const { index } = storeToRefs(useMapStore());
const { changeIndex, updateCharacter } = useMapStore();

 
</script>

<template>
  <div class="index-wrap">
    <button class="students" @click="changeIndex('students')">Students</button>
    <button class="staff" @click="changeIndex('staff')">Staff</button>
    <div class="character-wrap" v-if="index.group === 'students'">
      <p v-if="students" v-for="character in students" :key="character.name">{{ character.name }}</p>
    </div>
    <div class="character-wrap" v-if="index.group === 'staff'">
      <p v-if="staff" v-for="character in staff" :key="character.name">{{ character.name }}</p>
    </div>
  </div>
</template>