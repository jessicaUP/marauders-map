<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { staff, students } = storeToRefs(useCharacterStore());
const { updateCharacter } = useCharacterStore();

const { changeIndex } = useMapStore();

const handleClick = (e) => {
  return (name, group) => {
    updateCharacter(name, group);
    changeIndex(group);
  }
}

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  }
})


</script>

<template>
      <div 
        :id="props.name + '-button'" 
        class="character-name"
        @click="updateCharacter(props.name, props.group)">
        <router-link 
          class="button list-btn" 
          :to="{ path: '/' + props.group + '/' + props.name }" 
          :key="props.name"
        >{{props.name}}</router-link>
      </div>
</template>

<style>

</style>