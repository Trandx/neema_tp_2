<template>
    <div>
      <div class="flex bg-gray-800 ">
        <div class="m-auto  w-full">
          <div class="flex justify-around">
            <div class=" sm:px-4 sm:py-2 md:w-1/2 flex justify-center items-end">
              <h1 class=" uppercase md:text-6xl sm:text-4xl  sm:text-center font-bold text-primary slide-down-1 "> W</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-white slide-up-1">elcome</h1>
    
            </div>
    
            <div class=" sm:px-4 sm:py-2  md:w-1/2 flex justify-center items-end  ">
              <h1 class=" uppercase md:text-6xl sm:text-4xl  sm:text-center font-bold text-primary slide-right-1"> N</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-white slide-left-1">ucle</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-primary slide-down-1">-</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-white slide-right-1">x SSO</h1>
                <!-- <img src="/img/nucle-x_name.png"  type="image/png"> -->
            </div>
          </div>
    
            <div class=" h-28">
              <div class=" md:flex md:justify-around md:items-center ">
    
                <div class="md:mt-20 md:w-1/3 sm:h-52 sm:flex sm:justify-center sm:items-center fade-in-3">
                    <ComputerSecure class="sm:w-72 md:w-full"/>
                  <!-- <img class="sm:w-72 md:w-full" src="@/assets/images/Secure_Server.svg"/> -->
                </div>
    
                <div class="md:w-auto sm:w-full slide-up-1">
                  <div class=" w-[450px]  max-w-full relative m-auto">
                    <div class="  w-full">
                      <div class=" p-4 ">
                        
                        <Danger  ref="alert" v-show="alert.name == 'AlertDanger'">
                          <template #alertMessage >
                            {{alert.message}}
                          </template>
                        </Danger>
    
    
                          <div class="w-full  rounded-lg shadow-gray-800 shadow-md bg-secondary border border-white">
    
                              <div class="py-6 px-6 lg:px-8">
                                <div class="border-b md:border-gray-100 sm:border-gray-500">
                                  <h3 class="mb-1 text-4xl font-extrabold  sm:text-gray-800 md:text-white">Login</h3>
                                </div>
                                  <form class="space-y-6 pt-4" @submit.prevent="login">
                                      <div>
                                        <div class="flex justify-start p-0 m-0">
                                          <label for="email" class="block mb-2 text-sm font-medium w-1/2  sm:text-gray-800 md:text-white text-left">Your email</label>
                                          <span :class="goodFormat&&'hidden'" class=" text-red-500 text-sm text-right block mt-1 w-1/2" > Email isn't on good format</span>
                                        </div>
    
                                        <!-- <input type="email" @blur="isGoodFormat" v-model="user.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$" id="email" class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required> -->
                                        <input type="text"  v-model="user.login"   class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="email/phone/username" required>
    
                                      </div>
                                      <div>
                                          <label for="password" class="block mb-2 text-sm font-medium  sm:text-gray-800 md:text-white">Your password</label>
                                          <input type="password" v-model="user.password" id="password" placeholder="••••••••" class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required>
                                      </div>
                                      <div class="flex justify-between">
                                        
                                          <!-- <div class="flex items-start">
                                              <div class="flex items-center h-5">
                                                  <input id="remember" v-model="user.remember" type="checkbox" value="" class="w-4 h-4 text-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
                                              </div>
                                              <label for="remember" class="ml-2 text-sm font-medium text-gray-600">Remember me</label>
                                          </div> -->
                                          <a href="#" class="text-sm text-primary hover:underline ">Lost Password?</a>
                                      </div>
                                      <button type="submit" class="w-full text-white  focus:ring-4 focus:outline-none font-medium
                                        rounded-lg text-sm px-5 py-2.5 text-center bg-primary hover:bg-gray-600 focus:ring-gray-700">
                                        Login
                                      </button>
                                      <div class="text-sm font-medium text-gray-500 ">
                                          Not registered? <a href="#" class=" hover:underline text-primary">Create account</a>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
    
    
        </div>
      </div>
      <div class="w-full h-2 -z-10 relative">
        <BgCurve/>
        <!-- <svg class="absolute left-0 right-0" viewBox="0 0 1080 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1080 0H0V98C0 98 182.847 36.6178 320.291 33.2135C453.058 29.9251 512.559 73.37 645.078 78.2179C818.1 84.5474 1080 37.6645 1080 37.6645V0Z" fill="#1F2937"/>
        </svg> -->
    
        <!-- <img class="w-full h-2 " src="/img/bg.svg" > -->
      </div>
    </div>
    
</template>
<script >

    
  import formValidate from "../mixins/forms";
  import BgCurve from '../components/icons/BgCurve.vue';
  import ComputerSecure from '../components/icons/ComputerSecure.vue';
  import Danger from '../components/alerts/danger.vue';

  import { mapActions } from 'pinia'
    
  import { useAuthStore } from "../stores/auth"; 
  //import { useHistoricStore } from "../stores/historic";

  //import Cookies from "../cookies";

  // loard auth service
  import authService from '../services/auth.service'


    export default{
    name: "Login",
    data() {
        return {
            user: {},
            goodFormat: true,
            alert: {
                name: null,
                message: null,
            }
        };
    },
    methods: {
        // ...mapActions({
        //     "addLoggedUserInStore": "Auth/loginUserInStore",
        // }),
        ...mapActions(useAuthStore, { addAuthUserInStore: 'addAuth' }),

        login(){

          //show spinner*****

          const datas = authService.login(this.user)

          datas.then((datas) => {

          if(!datas.status){
            this.alert.message = datas.message
            this.alert.name = "AlertDanger"
            this.$refs.alert.open = true;
            this.$refs.alert.showBtnClose = false 

            setTimeout(()=>{
              if(this.$refs.alert.open){
                this.$refs.alert.open = false;
              }
            
            }, 10000)
              
          }else{
            this.addAuthUserInStore({data:datas.data, token: datas.token})

            //save user token
            // if(this.user.remember){
            //   Cookies.saveUserToken()
            // }

            //loadPrimaryData()
            //const hist = useHistoricStore()
            this.$router.push(/*hist.historic || */{name: "Scan"})
          }


          })



        },

        isGoodFormat(e) {
            const val = e.target.value;
            const pattern = e.target.getAttribute("pattern");
            this.goodFormat = formValidate.formatVerify(pattern, val);
        }
    },
    mounted() {
        useAuthStore().$reset()
    },
    mixins: [formValidate],
    components: { BgCurve, ComputerSecure, Danger }
}
    </script>
    
    