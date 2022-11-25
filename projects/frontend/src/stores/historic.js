import {defineStore} from "pinia"

export const useHistoricStore = defineStore('historic', {
    state: () => ({
        lastHistoric: null,  
    }),

    getters: {
        historic(state){
            return state.lastHistoric
        },
    },
    actions: {
        setHistoric(route){
            this.lastHistoric = route
            return route;
        }
    }
})