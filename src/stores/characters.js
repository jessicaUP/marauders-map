import { defineStore } from 'pinia'
import { movingCharacters } from '../assets/movingCharacters';

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    staff: {},
    students: {},
    character: null,
    loading: false,
    errors: []

  }),
  actions: {
    async fetchCharacters() {
      this.staff = {};
      this.students = {};
      this.errors = [];
      let loadCount = 0;
      this.loading = true;

      let students, staff;


      try {
        students = await fetch('http://hp-api.herokuapp.com/api/characters/students')
          .then((res) => res.json())
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;
 
        students.forEach((student) => this.students[student.name] = student)
      }

      try {
        staff = await fetch('http://hp-api.herokuapp.com/api/characters/staff')
          .then((res) => res.json());
      } catch (error) {
        this.errors.push(error);
      } finally {
        loadCount++;
        if (loadCount === 2) this.loading = false;

        staff.forEach((character) => this.staff[character.name] = character)
      }

    },
    updateCharacter(name, group) {
      let key = name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

      this.character = this[group][key];
    }
  }
})
