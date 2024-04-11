import { defineStore } from 'pinia'

const detailsStore = defineStore('details', {
  state: () => ({
    detailId: '',
  })
});

export default detailsStore;