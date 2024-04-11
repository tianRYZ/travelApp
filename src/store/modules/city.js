import { defineStore } from 'pinia'
import { cityList } from '@/api/city'

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: 'Cheng`Du',
    },
    searchObj: {
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await cityList();
      this.allCities = res.data;
    }
  }
})

export default useCityStore