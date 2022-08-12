<script setup>
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
    <p>{{character.dateOfBirth}}</p>
    <p>{{character.house}}</p>
    <p>{{character.gender}}</p>
    <p>{{character.eyeColour}}</p>
    <p>{{character.hairColour}}</p>
  </div>
</template>

<style>


</style>