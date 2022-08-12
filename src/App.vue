<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useCharacterStore } from './stores/characters'
import { useMapStore } from './stores/map'
import CharactersIndex from './components/CharactersIndex.vue'
import CharacterShow from './components/CharacterShow.vue'


// const { staff, students, character, loading, errors } = storeToRefs(useCharacterStore());
const { fetchCharacters } = useCharacterStore();
fetchCharacters();

const { open, index, character } = storeToRefs(useMapStore());
const { openMap, openIndex, changeIndex, updateCharacter } = useMapStore();



</script>


<template>
  <header>

    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
  <!-- <div class="search">
    <input type="text"
      class="search-bar"
      placeholder="Search a Wizard..."
      v-model="query"
      @keypress="fetchCharacter"
      />
  </div> -->

  <div class="character-wrap" v-if="open">
    <CharacterShow />
  </div>

  <div class="index-wrap" v-if="open">
    <CharactersIndex />
  </div>

  <div class="open-wrap">
    <button
      class="open-button"
      @click="openMap"
    >"I solemnly swear that I am up to no good."</button>
  </div>

  <!-- <div class="character-wrap">
    <h1 class="character-name">Harry Potter</h1>
    <h3 class="character-info" id="born">31 July 1980</h3>
    <h3 class="character-info" id="house">Gryffindor</h3>
  </div> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>



