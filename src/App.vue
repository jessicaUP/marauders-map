<script setup>
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCharacterStore } from './stores/characters'
import Loading from './components/Loading.vue';


const { fetchCharacters } = useCharacterStore();
fetchCharacters()

const { loading } = storeToRefs(useCharacterStore());

</script>


<template>
  <header>
  </header>
  <main>
    <div class="load-wrap" v-if="loading">
      <Loading />
    </div>
    <div class="content-wrap" v-else >
      <RouterView />
    </div>
  </main>


</template>

<style scoped>

.content-wrap {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}

.load-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}


</style>



