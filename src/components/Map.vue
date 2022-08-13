<script setup>
import { useCharacterStore } from '../stores/characters';
import { useMapStore } from '../stores/map';
import { storeToRefs } from 'pinia';

const { liveCharacters } = storeToRefs(useCharacterStore());




</script>

<template>

<div class="map">



</div>

</template>

<style>

</style>