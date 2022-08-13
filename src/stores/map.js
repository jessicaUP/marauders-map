import { defineStore } from 'pinia'

export const useMapStore = defineStore({
  id: 'map',
  state: () => ({
    open: false,
    index: { 
      open: false, 
      group: null, 
    },
    show: {
      open: false,
      side: 'info',
    }
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
      if (this.index.open) {
        this.index.open = false;
      } else {
        this.index.open = true;
      }
    },
    changeIndex(group) {
      this.index.group = group;
    },
    openShow() {
      if (this.show.open) {
        this.show.open = false;
      } else {
        this.show.open = true;
      }
    },
    changeShow(side) {
      this.show.side = side;
    },
  }
})
