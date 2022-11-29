<template>
  <div class=" max-h-max  bg-gray-500 text-white">
    
    <nav class=" px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://trandx-code.ml/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Ticket</span>
      </a>
      <div class="flex md:order-2">
          <button type="button" class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">New item</button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2   focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      </div>
    </nav>

    <div class="bg-gray-500 relative h-[200px] w-full mt-16 py-2 font-extrabold">

      <div class="flex justify-center w-max m-auto my-4">
        <button @click.prevent="openModal('New item', {}, 'NewTicket' )"  class="text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  h-[70px]  w-[100px]  text-center mx-4 bg-red-500">
          New item
        </button>
        <button @click.prevent="openModal('Import single', {}, 'ImportDataTickect' )" class=" text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-[70px]  w-[100px] p-3 text-center  bg-green-500">
          Import single
        </button>
      </div>
      <div class="flex justify-center w-max m-auto my-4">
        <button @click.prevent="openModal('Import Batch', {}, 'ImportDataTickect' )" class=" text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-[70px]  w-[100px] p-3 text-center  mx-4 bg-blue-500">
          Import Batch
        </button>
        <button @click.prevent="openModal('List', {}, 'NewTicket' )" class="text-white hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 h-[70px]  w-[100px] p-3 text-center  bg-yellow-500">
          List
        </button>
      </div>
    </div>

    <div class="p-4">
      <Tables />
    </div>
    
    
    <div ref="default-modal" tabindex="-1" :class="!modal.open?'hidden':false" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full justify-center items-center flex" >
        <div class="relative py-4 px-0 w-full max-w-2xl h-full md:h-auto">
            
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 border-2 border-primary py-1 lg:px-0">
                <button @click.prevent="closeModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <i class="fa-solid fa-x text-primary"></i>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-2 lg:px-0">
                    <h3 class="mx-4 py-2 text-xl font-medium text-gray-900 dark:text-white text-left capitalize ">
                        {{modal.title}}
                    </h3>

                </div>
                <div class=" max-h-[450px] overflow-y-scroll">
                  <component :is="view.name" :datas="modal.datas" @upsert="data=>save(data)" ></component> 
                   <!-- <NewTicket :datas="modal.datas" /> -->
                </div>
            </div>
        </div>
    </div> 

    <ModalConfirm ref="modalComfirm" @cancel="modalConfirmCallback" @confirm="modalConfirmCallback">
        <template #message>
            {{modalComfirm.message}}
        </template> 
    </ModalConfirm>

    
    <!-- <component ref="alert" :is="alert.name" >
      <template #alertMessage >
        {{alert.message}}
      </template>
    </component> -->

      <AlertDanger  ref="alert_danger" v-show="alert.name == 'AlertDanger'" >
        <template #alertMessage >
          {{alert.message}}
        </template>
      </AlertDanger>

      <AlertDanger  ref="alert_success" v-show="alert.name == 'AlertSuccess'" >
        <template #alertMessage >
          {{alert.message}}
        </template>
      </AlertDanger>
    
    <!--  -->
        
    
    <!-- <Danger  ref="alert_danger" >
      <template #alertMessage >
        {{alert.message}}
      </template>
    </Danger>

    <Success  ref="alert_success" v-show="alert.name == 'AlertSuccess'">
      <template #alertMessage >
        {{alert.message}}
      </template>
    </Success> -->

  </div>
</template>

<script>
//import Modal from "../components/modals/index.vue"
import ModalConfirm from '@/components/modals/confirm.vue'
import NewTicket from '@/components/forms/tickets/new.vue'
import ImportDataTickect from '@/components/forms/tickets/importData.vue'
import Tables from '@/components/Tables/index.vue'
import AlertDanger from '../components/alerts/danger.vue'
import AlertSuccess from '../components/alerts/success.vue'

import openModal from '@/mixins/modals'
import formMixin from '@/mixins/forms'
import ticketsService from '../services/tickets.service.js'
export default {
    name: "Ticket",
    components: {
      //Modal,
      ModalConfirm,
      NewTicket,
      ImportDataTickect,
      Tables,
      AlertDanger,
      AlertSuccess,
    },
    data(){
          return {
            alert: {
                name: null,
                message: "",
            },
            modal: {
                open: false,
                title: null,
            },
            
            modalData: {
                title: null,
                body: null,
                footer: null
            },

            modalComfirm: {
                message: null,
                cancelBtn: null,
                confirmBtn: null
            },

            view:{
                name: null,
                edit: false,
                datas: null,
            },

            keyWord: null,

            clientList: null,
            pagination: null 
  
          }
      },

      methods: {
        modalConfirmCallback(value){
            console.log(value);
        },
        save(datas){

          ticketsService.save(datas).then((datas) => {

            console.log(datas);

            if(!datas.status){

              this.alert.message += datas.data.map(value=> value.field +": "+value.message+'')
              this.alert.name = "AlertDanger"
              this.$refs.alert_danger.open =  this.alert.open = true;
              this.$refs.alert_danger.showBtnClose = true 

              setTimeout(()=>{
                if(this.$refs.alert_danger.open){
                  this.$refs.alert_danger.open = false;
                }
              
              }, 10000)
                
            }else{

              this.alert.message = datas.message
              this.alert.name = "AlertSuccess"
              this.alert.open = true
              this.$refs.alert_success.open = true;
              this.$refs.alert_success.showBtnClose = true 

              setTimeout(()=>{
                if(this.$refs.alert_success.open){
                  this.$refs.alert_success.open = false;
                }
              
              }, 10000)
              
              console.log(data);
              //save user token
              // if(this.user.remember){
              //   Cookies.saveUserToken()
              // }

              //loadPrimaryData()
              //const hist = useHistoricStore()
              
            }


          })
        
        }
      },

    mixins: [openModal, formMixin],
}
</script>

<style>

</style>