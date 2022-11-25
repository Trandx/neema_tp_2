import {defineStore} from "pinia"



export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth:{
            authenticated:false,
            user:{},
            token: null,
            sessionExpireAt: null,
        }
        
    }),
    persist: true,
    getters: {
        // check if user is authenticated
        authenticated:(state)=>{ 
            return () => (state.auth.authenticated && (state.auth.sessionExpireAt >= Date.now()) ) // uncached version
            //return (state.auth.authenticated && (state.auth.sessionExpireAt >= Date.now()) ) // cached version
            
        },
        
        // get user datas
        user:() => () => this.auth.user,

        // get session expire date
        sessionExpireAt: (state) => () => state.auth.sessionExpireAt,

        //get user token
        token(){
            return () => this.auth.token
        }
        
    },
    actions: {

        setAuthenticated(data){
            this.auth.authenticated = data

            return data
        },
        setToken (tk) {
             this.auth.token = tk
            return tk
        },

        setSessionExpireAt(time){
            this.auth.sessionExpireAt = time
            return time    
        },

        createSessionTime(value = false){

            const add_time = value?import.meta.env.VITE_APP_SESSION_TIME_REMEMBER : import.meta.env.VITE_APP_SESSION_TIME

            const date = parseInt(Date.now()) + parseInt(add_time);
    
            this.auth.sessionExpireAt = date

            return date
        },

        renewSessionTime(){
       
            // update session time 
            const add_time = import.meta.env.VITE_APP_SESSION_TIME_ADD
            const date = parseInt(Date.now()) + parseInt(add_time);
            this.auth.sessionExpireAt = date
            return date
        },

        addAuth (datas) {

            this.auth = {
                user: datas.data,
                token: datas.token,
                authenticated:true,
            }

            this.createSessionTime()
            
            return this.auth
        },
       
        resetAuth() { 
            this.auth = { 
                authenticated:false, 
                user:{}, 
                sessionExpireAt: null, 
            } 
            return this.auth 
        } 
    }
})