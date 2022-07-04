import { defineStore } from 'pinia'

export const useMainStore = defineStore('useMainStore', {
  state: () => {
    return {
      login: true,
    }
  },

  actions: {
    login(){
      login = true;
    },
    signUp(){
      login = false;  
      console.log("signup")
    }
  }
})
