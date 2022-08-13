<script setup>
import { storeToRefs } from 'pinia';
import { useCharacterStore } from '../stores/characters';


const { staff, students } = storeToRefs(useCharacterStore());

const { index } = storeToRefs(useMapStore());
const { changeIndex } = useMapStore();

</script>

<template>

</template>

<style>

</style>