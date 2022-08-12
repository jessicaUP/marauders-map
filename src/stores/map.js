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
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
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
