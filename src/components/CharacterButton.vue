<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';

const { updateCharacter } = useCharacterStore();

const { show } = storeToRefs(useMapStore());
const { openShow, changeShow } = useMapStore();

const handleClick = (name, group, show) => {
  if (!show.open) {
    openShow();
  }
  if (show.side !== 'info') {
    changeShow();
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
.moving-icon {
  width: fit-content;
}

.moving-icon>.character-name {
  font-family: var(--title-font);
  margin: 2px;
  padding: 1px 35px 1px 10px;
  background-color: var(--maroon-color);
  width: fit-content;
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - 20px) 50%, 100% 100%, 0% 100%);
}

.moving-icon>.character-name>.list-btn {
  color: var(--gold-color);
} 

</style>