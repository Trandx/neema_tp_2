<template>
  <div class="bg-white text-black p-4">
    <form class=" capitalize text-[13px]" action="#">
      <div class="space-y-2 mb-6">
        <div class="w-full flex">
            <div class="w-[20%] flex justify-start text-right pr-2">
                <label for="clientName" class=" text-right w-full my-auto pr-1 font-medium text-primary">
                  Ticket No
                </label>
            </div>
            <div class=" w-[80%] flex justify-start">
              <div class="flex space-x-1 w-full">
                <input type="text" v-model="formData.airline" class="self-center w-16 bg-gray-50 border text-gray-900 text-sm rounded-lg  block p-2.5  border-gray-500 placeholder-gray-400 " placeholder=" 057" required="" />

                <input type="text" v-model="formData.ticket_number" class="self-center bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-500 placeholder-gray-400 " placeholder="4589521039" required="" />
              </div>
                
            </div>
        </div>

        <div class="w-full flex">
            <div class="w-[20%] flex justify-start pr-2">
                <label for="clientName" class=" text-right w-full my-auto pr-1 font-medium text-primary">
                  Passenger Name
                </label>
            </div>
            <div class="w-[80%] flex justify-start">
              <div class="flex space-x-1 w-full">

                <input type="text" v-model="formData.passenger_name" class="self-center bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-500 placeholder-gray-400 " placeholder="KKOUOPTCHA/ ANITA MRS" required="" />
              </div>
                
            </div>
        </div>

        <div class="w-full flex">
            <div class="w-[20%] flex justify-start pr-2">
                <label for="clientName" class=" text-right w-full my-auto pr-1 font-medium text-primary">
                  Issuing Date
                </label>
            </div>
            <div class="w-[80%] flex justify-start">

                <div class="relative space-x-1 w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input  v-model="formData.issuing_date"  type="date" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Select date">
                </div>
                
            </div>
        </div>

        <div class="w-full flex">
            <div class="w-[20%] flex justify-start pr-2">
                <label for="clientName" class=" text-right w-full my-auto pr-1 font-medium text-primary">
                  Travel Type
                </label>
            </div>
            <div class="w-[80%] flex justify-start">

                <div class="relative space-x-1 w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    
                  </div>
                  <input  v-model="formData.airline" type="text" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Flight">
                </div>
                
            </div>
        </div>

        <div class="w-full flex">
            <div class="w-[20%] flex justify-start pr-2">
                <label for="clientName" class=" text-right w-full my-auto pr-1 font-medium text-primary">
                  Intinerary
                </label>
            </div>
            <div class="w-[80%] flex justify-start">

                <div class="relative space-x-1 w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    
                  </div>
                  <input  v-model="formData.itinerary" type="text" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="ACC TML ACC">
                </div>
                
            </div>
        </div>

        <div class="w-full flex">
            <div class="w-[20%] flex justify-start pr-2">
                <label for="clientName" class=" text-right w-full my-auto pr-1 font-medium text-primary">
                  Amount
                </label>
            </div>
            <div class="w-[80%] flex justify-start">

                <div class="relative space-x-1 w-full">
                  <div class="flex rounded-l-lg absolute inset-y-0 left-0 items-center ml-1 p-2.5 pointer-events-none bg-green-500 text-white font-semibold">
                    XAF
                  </div>
                  <input v-model="formData.amount" type="number" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full pl-12 p-2.5" placeholder="Select date">
                </div>
                
            </div>
        </div>
      </div>
        
       <div class="justify-between flex px-4 p-2 border-t-2 ">
            <button @click.prevent="save" class="mx-5 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary focus:ring-primary text-white ">
                Save
            </button>
            <button @click.prevent="resetForm" type="submit" class=" mx-5 w-full text-gray-500 border border-gray-500 bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                Cancel
            </button>

            
       </div>
        
        
    </form>
  </div>
</template>

<script>
import formMixin from '../../../mixins/forms/index'

export default {
    name: "New",

    props:["datas",],

    data(){
        return {
          formData: {},
          
        }
    },
    computed: {
        
        updateFormData(){
            //console.log(this.datas?.type);
            return {
              passenger_name: this.datas?.passenger_name,
              issuing_date: this.datas?.issuing_date,
              itinerary: this.datas?.itinerary,
              currency: this.datas?.currency,
              amount: this.datas?.amount,
              airline: this.datas?.airline,
              ticket_number: this.datas?.ticket_number,
                // permisions: this.datas?.permisions?.map((permision) => { return permision.id}),
                // roles: this.datas?.roles?.map((role) => { return role.id})
            }
            
        }
    },
   
    methods:{
        
      save () {
          this.$emit('upsert', this.formData)
      },

    },
    mounted() {
      
    },

    mixins:[formMixin]
}
</script>

<style>

</style>