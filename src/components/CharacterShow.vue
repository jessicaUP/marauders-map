<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { staff, students } = storeToRefs(useCharacterStore());
const { getCharacterByName } = useCharacterStore();

const { updateCharacter } = useMapStore();
const { character } = storeToRefs(useMapStore());

const current = getCharacterByName('Harry Potter', 'students');
updateCharacter(current);



</script>

<template>
  <div class="character-wrap" v-if="character">
    <h2 key="character.name">{{ character.name }}</h2>
  </div>
</template>

<style>


</style>