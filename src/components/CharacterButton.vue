<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { updateCharacter } = useCharacterStore();

const { show } = storeToRefs(useMapStore());
const { openShow } = useMapStore();

const handleClick = (name, group, show) => {
  if (!show.open) {
    openShow();
  }
  updateCharacter(name, group);
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
        @click="handleClick(props.name, props.group, show)">
        <router-link 
          class="button list-btn" 
          :to="{ path: '/' + props.group + '/' + props.name }" 
          :key="props.name"
        >{{props.name}}</router-link>
      </div>
</template>

<style>

</style>