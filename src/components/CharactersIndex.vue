<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

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
      <div 
        v-for="character in students" 
        :id="character.name + '-button'"
        class="character-name"
        @click="updateCharacter(character.name, 'students')"
        >
        <router-link 
          class="button list-btn"
          :to="{ path: '/students/' + character.name}"
          :key="character.name"
        >{{ character.name }}</router-link>
      </div>
    </div>
    <div class="character-wrap" v-else-if="index.group === 'staff'">
      <div 
        v-for="character in staff" 
        :id="character.name + '-button'"
        class="character-name"
        @click="updateCharacter(character.name, 'staff')"
        >
        <router-link 
          class="button list-btn"
          :to="{ path: '/staff/' + character.name}"
          :key="character.name"
        >{{ character.name }}</router-link>
      </div>
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
    width: fit-content;
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