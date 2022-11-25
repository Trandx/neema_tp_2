import axiosClient from "../axios";


class AuthService {

     async login(user){

      return await axiosClient.post("", user).then((value) =>  value.data).catch((value) => {
        return {
            status: false,
            message: value.message,
        }
      })


        //return apollo.mutation.createUser(user)
        // const {result, loading, error} = apollo.mutation.createUser(user)
        // //store.addLoggedUserInStore(result.value)

        // return {result, loading, error}
    }


    logout() {
        localStorage.removeItem('user');
    }

    register() {
        // return axios.post(API_URL + 'signup', {
        //   lastname:user.lastname,
        //   firstname:user.firstname,
        //   phones:user.phones,
        //   speciality: user.speciality,
        //   password: user.password,
        //   password_confirmation: user.password_confirmation,
        // })
        // .then((response) => {
        //     return response.data
        // })
        // .catch((error) => {
        //     return error
        // })
    }

    forgot(){
    //    
    }
}


export default new AuthService();