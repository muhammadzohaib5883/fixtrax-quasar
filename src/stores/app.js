import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useAppStore = defineStore('app', {
  state: () => ({
    vehicles: LocalStorage.getItem('vehicles') ?? [],
  }),

  getters: {
    get_vehicles (state) {
      return state.vehicles;
    }
  },

  actions: {
    increment () {
      this.counter++
    },

    addVehicles(formData) {
      this.vehicles.push(formData);
      LocalStorage.set('vehicles', this.vehicles);
    },

    addDataToArray(arr_name, formData) {
      this[arr_name].push(formData);
      LocalStorage.set(arr_name, this[arr_name])
    },

    deleteDataToArray(array_name, index) {
      this[array_name].splice(index, 1)
      LocalStorage.set(array_name, this[array_name])
    },

    editDataToArray(array_name, form_data, index) {
      this[array_name][index] = form_data
    },

    updateDataToArray(array_name, form_data, index) {
      this[array_name][index] = form_data
    }

  }
})
