import { defineStore } from "pinia";

const nowDate = new Date();
const nextDate = new Date(nowDate.getTime() + 24 * 60 * 60 * 1000);

const usemainStore = defineStore('main', {
  state: () => ({
    token: '',
    startDate: nowDate,
    endDate: nextDate,
    isLoading: true
  }),
  actions: {

  }
})

export default usemainStore