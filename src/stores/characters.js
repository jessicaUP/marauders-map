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
  actions: {
    async fetchCharacters() {
      this.staff = [];
      this.students = [];
      this.errors = [];
      let loadCount = 0;
      let students, staff;

      this.loading = true;

      try {
        students = await fetch('http://hp-api.herokuapp.com/api/characters/students')
          .then((res) => res.json())
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;

        const final = {};
        students.forEach((student) => final[student.name] = student)
        this.students = final;
      }

      try {
        staff = await fetch('http://hp-api.herokuapp.com/api/characters/staff')
          .then((res) => res.json());
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;

        const final = {};
        staff.forEach((character) => final[character.name] = character)
        this.staff = final;
      }

    },
    updateCharacter(name, group) {
      this.character = this[group][name];
    }
  }
})
