import { defineStore } from 'pinia';
import SecureLS from 'secure-ls';

// import persistedState from 'pinia-plugin-persistedstate';

export const useCounterStore = defineStore('counter', {

  state: () => ({ 
    count: 0,
    isActive: true,
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++;
    }
  },

  /* persist: {
    // storage: persistedState.localStorage,
    storage: piniaPluginPersistedstate.localStorage(),
    key: 'my-counter-store',
  } */

    persist: {
      storage: {
        getItem:(key:string)=>{
          return new SecureLS({
            isCompression: false,
            encodingType: 'des',
            encryptionSecret: '@#987asdui@'
          }).get(key)
        },
        setItem:(key:string,value:any)=>{
          new SecureLS({
            isCompression: false,
            encodingType: 'des',
            encryptionSecret: '@#987asdui@'
          }).set(key,value)
        },
      },
      key: 'my-counter-store',
    }

});