import { defineStore } from 'pinia'

export const useMainStore = defineStore('useMainStore', {
  state: () => {
    return {
      loginStatus: true,
    }
  },

  actions: {
    login(){
      this.loginStatus = true;
    },
    signUp(){
      this.loginStatus = false;  
    }
  }
})
