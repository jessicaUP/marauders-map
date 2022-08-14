<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import CharacterButton from './CharacterButton.vue';

const { staff, students } = storeToRefs(useCharacterStore());
const { index } = storeToRefs(useMapStore());

</script>

<template>
  <div class="index-wrap">
    <div class="character-wrap" v-if="index.group === 'students'">
      <CharacterButton 
        v-for="character in students" 
        :name="character.name"
        group="students"
      />
    </div>
    <div class="character-wrap" id="staff-wrap" v-else-if="index.group === 'staff'">
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
    background-color: var(--color-maroon);
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

  #staff-wrap {
    background-color: var(--color-highlight-maroon);
  }

  .list-btn {
    color: var(--color-white);
    font-size: 20px;
    text-align: left;
  }



</style>