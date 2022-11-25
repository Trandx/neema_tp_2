 import { useHistoricStore } from "../../stores/historic";

import { useAuthStore } from "../../stores/auth";


const auth = {


    authenticaded: ({to, next}) => {

        const hist = useHistoricStore()

        if(!auth.isLoggedIn()){
          
            hist.setHistoric(to)

            next({name: 'Login'}); 

            //next({name: 'Login', params: {lang: to.params.lang}});        
            return false
        }else{
            next()
        }
        
    },

    redirectIfAuthenticated: function({from,next}){
        //console.log(isLoggedIn (store)(), to, next)
        //console.log(from);

        if(auth.isLoggedIn ()){    
            //next(from);
            next( {name: 'Scan'});
            //next( {name: 'Dashboard', params: {lang: to.params.lang}});        
            return true
        }else{
            next()
        }
    },

    // redirectToGoodView: ({to,next}) =>{

    //     if(!auth.isLoggedIn()){

    //         next({name: 'Login', params: {lang: to.params.lang}});        
    //         return false
    
    //     }else{
            
    //         let user = getUserDatas()
    //         user = JSON.parse(user)
            
    //         let role = user.role.charAt(0).toUpperCase()+ user.role.substring(1) // capitalize
    //         console.log(role)
    //         next({name: role+'Home', params: {lang: to.params.lang}});    
    //     }
    // },

    isLoggedIn: () => { 

        const {authenticated, renewSessionTime} = useAuthStore()

      //console.log(Date.now(), store.getters['Auth/authenticated'])
        //console.log(authenticated());
        if(authenticated()){
            
            renewSessionTime()
            //console.log( renewSessionTime(), sessionExpireAt());
            return true
            
        }else{
            return false
        }

    }
}

export default auth