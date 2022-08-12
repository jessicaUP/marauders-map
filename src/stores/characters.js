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
    getCharacterByName: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
