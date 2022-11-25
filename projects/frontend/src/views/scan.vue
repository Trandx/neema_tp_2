
<template>
  <div class="h-screen bg-gray-600 ">
    <div class="md:p-10 sm:px-0.5 mx-2">
      <div class="md:p-10 sm:py-5">
          <form class="space-y-6 pt-4" @submit.prevent="login">
            <div>
              <div class="w-full flex flex-wrap md:justify-around">
                <div class="md:w-3/6 sm:w-full px-1">
                  <div class=" w-full">
                    <div class=" flex justify-start -p-0 m-0">
                      <label for="" class="block mb-2 text-sm font-medium w-1/2  sm:text-gray-800 md:text-white text-left capitalize">select patient</label>
                      
                    </div>

                    <!-- <input type="email" @blur="isGoodFormat" v-model="user.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$" id="email" class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required> -->
                    <!-- <input type="text"  v-model="user.login"   class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="email/phone/username" required> -->
                    <div class="w-full flex justify-start">
                      <Multiselect
                        v-model="patient.id"
                        placeholder="choose patient"
                        :filter-results="false"
                        :min-chars="1"
                        :resolve-on-load="false"
                        :delay="0"
                        :searchable="true"
                        :options="async (keyword) =>  await fetchPatients(keyword) "
                        @select="getFiles"
                      />
                    </div>
                  </div>
                  
                </div>
                <div class="md:w-2/6 sm:w-full px-1 pt-7 flex flex-wrap">
                  
                  <!-- our custom upload button -->
                  <label class="w-full bg-indigo-600 text-white text-center p-2 rounded-lg" for="actual-btn">Choose File</label>

                  <div class="w-full py-3">
                   
                    <!-- Allowed user to choose either from album or camera -->
                    <!-- <input @change="getFile"  type="file" id="actual-btn" accept="image/*; capture=camera" hidden/> -->

                    <input @change="selectFile"  type="file" id="actual-btn" accept="image/*" capture="camera" hidden/>

                    <!-- name of file chosen -->
                    <span id="file-chosen">{{patient.file?.name || "No file chosen"}}</span> <br/>
                    <span id="file-chosen">{{patient.file?.size}}</span>


                  </div>
                  
                </div>

                <div class="md:w-1/6 sm:w-full px-1 flex ">
                  <div class="w-full pt-7">
                    <button class="bg-primary text-white p-2  rounded-lg w-full" @click="save">save</button>
                  </div>
                </div>
                
              </div>
              <div class="w-full">
                <div class="mb-1 text-base font-medium capitalize text-white">Progress Bar</div>
                <div class="w-full bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
                  <div class="bg-blue-600 h-5 rounded-full text-center text-white" :style="'width: '+progress+'%'"> {{progress+"%"}}</div>
                </div>
              </div>
              <!-- <progress max="100" :value.prop="progress"></progress> -->

            </div>
        </form>

      </div>

      <div class="bg-white min-h-[420px] mx-10 rounded-lg">
        <div class="w-full bg-slate-500 text-white h-[40px] font-bold font-sans px-5 text-lg rounded-t-lg pt-1 ">Nom du patient</div>
        <div class="flex flex-wrap">
          <div v-for="file in files" :key="file?.id" class="w-[200px] m-2 ">
            <img class="w-[200px] h-[150px]" :src="basuri+file?.link"  @click="zoom(basuri+file?.link)">
            <button class="bg-red-700 rounded-lg w-full mt-2 text-white capitalize" @click.prevent="e => deleteFile(e,file.id)">delete</button>
            
          </div>
        </div>
        
        

      </div>
    </div>
    
    <Modal ref="modal">
      <template #modalTitle>
        oview View
      </template>
      <template #modalBody >
        <div class="flex justify-center items-center">
          <img class="" :src="zoomUrl"  >
        </div>
      </template>
    </Modal>
    
  </div>
  
</template>

<script>
import Modal from '@/components/modals/index.vue'
import Multiselect from '@vueform/multiselect'
import patientService from '../services/patient.service';
import { useAuthStore } from "../stores/auth"; 
import { mapActions } from 'pinia';

export default {
  name: "Scan",
  components: {
    Multiselect,
    Modal
  },
  data(){
    return {
      zoomUrl: null,
      patient: {},
      progress: 0, 
      files: [],
      basuri: import.meta.env.VITE_API_BASE_URI
    }
  },
  methods: {
    ...mapActions(useAuthStore, {resetAuth: "resetAuth"}),

    selectFile(e) {
      const files = e.target.files || e.dataTransfer.files;

      this.patient.file = files[0]
    },

    fetchPatients: async function(keyword){
      
      return patientService.search(keyword).then((val) => {
        
        if(!val.status){
          
          if(val.message == "unauthenticated"){
            this.resetAuth()

            this.$router.push(/*hist.historic || */{name: "Login"})
          }else{
            console.log(val.message);
          }
        }else{

          return val.data.map((val) => {
            return {
                    value: val.id,
                    label: val.nom+ " "+ val.prenom,
                  }
          })

        }
      })

    },

    save(){
      if( this.patient.id && this.patient.file ){
        this.progress = 0
        
        patientService.upload(this.patient, e => {
          this.progress =  parseInt( Math.round( ( e.loaded / e.total ) * 100 ) );
        }).then((val) => {
          if(val.status || val[0]){
            this.files.push(...val.data) // this.files = this.files.concat(val.data)
          }else{
            if(val.message != undefined && val.message == "unauthenticated"){
              this.resetAuth()

              this.$router.push(/*hist.historic || */{name: "Login"})

            }else{
              alert(val.message || val.resp)
              //this.files = [];
            }
          }
        })
      }else{
        alert("select user or file")
      }
      
    },

    getFiles(){
      patientService.getFiles(this.patient.id).then((val) => {
          if(val.status){
            this.files = val.data
          }else{
            if(val.message == "unauthenticated"){
              this.resetAuth()

              this.$router.push(/*hist.historic || */{name: "Login"})
              
            }else{
              //alert(val.message)
              this.files = false;
              console.log(val.message);
            }
          }
      })
    },

    deleteFile(e, id){
      patientService.deleteFile(id).then((val) => {
          if(val.status){
            e.target.parentNode.remove();
          }else{
            if(val.message == "unauthenticated"){
              this.resetAuth()

              this.$router.push(/*hist.historic || */{name: "Login"})
              
            }else{
              alert(val.message)
              
              //console.log(val.message);
            }
          }
      })
    },

    zoom(link){
      this.zoomUrl = link
      this.$refs.modal.open = true;
    }
    
  },
}
</script>

<style scoped>


.capture {
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}

#file-chosen{
  margin-left: 0.3rem;
  font-family: sans-serif;
}



</style>
