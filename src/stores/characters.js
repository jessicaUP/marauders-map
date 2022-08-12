import { defineStore } from 'pinia'

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    characters: [],
    character: null,
    loading: false,
    error: null

  }),
  getters: {
    getCharacterByName: (state) => {
      return (name) => state.characters.filter((character) => character.name === `%${character.toUpperCase()}%`)
    }
  },
  actions: {

  }
})
