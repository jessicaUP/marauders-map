<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';

const { staff, students } = storeToRefs(useCharacterStore());
let currentPage = 'students';

</script>

<template>
  <main>
    <div class="character-wrap">
      <p v-if="students" v-for="character in students" :key="character.name">{{ character.name }}</p>


    </div>
  </main>
</template>