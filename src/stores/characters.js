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
  // getters: {
  //   getCharacterByName: (state) => {
  //     return (name, group) => {
  //       const fixName = name.toUpperCase()
  //       return state[group].filter((character) => character.name.toUpperCase() === `${fixName}`)[0];
  //     }
  //   }
  // },
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
        students.forEach((student) => {
          // const keyName = student.name.split(' ').join('');
          final[student.name] = student;
        })
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
        staff.forEach((character) => {
          // const keyName = character.name.split(' ').join('');
          final[character.name] = character;
        })
        this.staff = final;
      }

    },
    updateCharacter(name, group) {
      this.character = this[group][name];
    }
  }
})
