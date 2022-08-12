import { defineStore } from 'pinia'

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    staff: [],
    students: [],
    character: null,
    loading: false,
    errors: []

  }),
  getters: {
    getCharacterByName: (state) => {
      return (name) => state.characters.filter((character) => character.name === `%${character.toUpperCase()}%`)
    }
  },
  actions: {
    async fetchCharacters() {
      this.staff = [];
      this.students = [];
      this.errors = [];
      let loadCount = 0;

      this.loading = true;
      try {
        this.staff = await fetch('http://hp-api.herokuapp.com/api/characters/staff')
          .then((res) => res.json());
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;
      }

      try {
        this.students = await fetch('http://hp-api.herokuapp.com/api/characters/students')
          .then((res) => res.json());
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;
      }
    }
  }
})
