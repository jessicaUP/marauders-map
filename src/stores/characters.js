import { defineStore } from 'pinia'

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    staff: {},
    students: {},
    liveCharacters: [],
    character: null,
    loading: false,
    errors: []

  }),
  actions: {
    async fetchCharacters() {
      this.staff = {};
      this.students = {};
      this.liveCharacters = [];
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
        let count = 15;
        students.forEach((student) => final[student.name] = student)

        for (let character in final) {
          if (count < 0) break;
          this.liveCharacters.push({ name: character, group: 'students' })
          count--;
        }
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
        let count = 11;
        staff.forEach((character) => final[character.name] = character)

        for (let character in final) {
          if (count < 0) break;
          this.liveCharacters.push({ name: character, group: 'staff' })
          count--;
        }
        this.staff = final;
      }

    },
    updateCharacter(name, group) {
      let key = name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

      console.log('KEY', this[group][key])
      this.character = this[group][key];
    }
  }
})
