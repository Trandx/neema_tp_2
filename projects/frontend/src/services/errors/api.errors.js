import router from "../../router"
import { useAuthStore } from "../../stores/auth"


function apiErrors(error, loginService = false){
    if(error.message == "Unauthenticated." && !loginService){
              
        useAuthStore().$reset()
        router.push({name: "Login"})
        return {
            code: 401,
            status: false, //error.networkError.response.status||
            message: "Unauthenticated"
        }

    }else{
        return {
            code: 500,
            status: false, //error.networkError.response.status||
            message: error.message
        }
    }
}

export default apiErrors