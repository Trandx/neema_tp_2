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
              <h1 class=" uppercase md:text-6xl sm:text-4xl  sm:text-center font-bold text-primary slide-right-1"> T</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-white slide-left-1">p</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-primary slide-down-1">-</h1>
              <h1 class=" uppercase md:text-4xl sm:text-2xl  sm:text-center font-bold text-white slide-right-1">2</h1>
                <!-- <img src="/img/nucle-x_name.png"  type="image/png"> -->
            </div>
          </div>
    
            <div class="mt-20">
              

                <div class="flex items-center justify-center ">
    
                    <div class="bg-red-800 text-white font-bold rounded-lg border shadow-lg p-10">
                      (1) New Item
                    </div>

                    <div class="bg-green-800 text-white font-bold rounded-lg border shadow-lg p-10">
                      (2) Import Single
                    </div>
                    

                </div> <br/>

                <div class="flex items-center justify-center" >
    
                    <div class="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
                      (3) Import Batch
                    </div>

                    <div class="bg-yellow-800 text-white font-bold rounded-lg border shadow-lg p-10">
                      (4) List
                    </div> <br/>
                    

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
    
    