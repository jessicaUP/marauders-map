import { defineStore } from 'pinia'

export const useMapStore = defineStore({
  id: 'map',
  state: () => ({
    open: false,
    index: { 
      open: false, 
      group: 'students' 
    },
    character: null,
    

  }),
  actions: {
    openMap() {
      this.open = true;
    },
    openIndex() {
      this.index.open = true;
    },
    changeIndex(group) {
      this.index.group = group;
    },
    updateCharacter(name) {
      this.character = name;
    }
  }
})
