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
                  <Multiselect class= "multiselect
                    [--ms-dropdown-bg:rgb(var(--color-primary))] 
                  [--ms-group-label-bg-selected-pointed:white]
                  [--ms-option-color-pointed:black]
                  [--ms-option-bg-selected:white]
                  [--ms-option-color-selected-po:black]
                  [--ms-option-bg-selected-pointed:white]
                  [--ms-option-bg-pointed:white]
                  bg-white text-black
                  [--ms-caret-color:rgb(53,47,47)]
                  [--ms-option-color-selected:rgb(53,47,47)]
                  [--ms-clear-color:black]
                  [--ms-clear-color-hover:rgb(var(--color-primary))]
                 font-medium"
                 v-model="formData.travel_type"
                  mode="single"
                  :taggable="true"
                  placeholder="select travel type"
                  :close-on-select="true"
                  :options="options.travel_type"
                  label="name"
                />
                  
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

              <Multiselect class= "multiselect absolute z-50 
                [--ms-dropdown-bg:rgb(var(--color-primary))] 
              [--ms-group-label-bg-selected-pointed:white]
              [--ms-option-color-pointed:black]
                [--ms-option-bg-selected:rgb(34,197,94)]
                [--ms-option-bg-selected-pointed:rgb(34,197,94)]
              [--ms-option-bg-pointed:white]
              bg-green-500 text-white font-semibold w-[140px]"
                v-model="formData.currency"
                  mode="single"
                  :taggable="true"
                  placeholder=""
                  :close-on-select="true"
                  :options="options.currency"
                  label="name"
                  
              />

                <div class="relative space-x-1 w-full ml-[145px]">
                  <input v-model="formData.amount" type="number" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full pl-12 p-2.5" placeholder="Select date">
                </div>
                
            </div>
        </div>
      </div>
        
       <div class="justify-between flex px-4 p-2 border-t-2 ">
            <button @click.prevent="save" class="mx-5 w-full hover:bg-white hover:text-gray-800 hover:border  hover:border-gray-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary focus:ring-primary text-white ">
                Save
            </button>
            <button @click.prevent="resetForm" type="submit" class=" mx-5 w-full text-gray-500 border border-gray-500 bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 hover:bg-primary hover:text-white">
                Cancel
            </button>

            
       </div>
        
        
    </form>
  </div>
</template>

<script>
import formMixin from '../../../mixins/forms/index'
import Multiselect from '@vueform/multiselect'

export default {
    name: "Edit",

    props:{
      datas: Object,
    },

    components:{
      Multiselect,
    },

    data(){
        return {
          formData: {
            currency: 'xaf',
            travel_type: 'flight',
          },
          
          options:{
            currency: [
              { name: 'XAF', value: 'xaf' },
              { name: 'GHS', value: 'ghs' },
              { name: 'EUR', value: 'eur' },
              { name: '$', value: '$' }
            ],
            travel_type: [
              { name: 'Flight', value: 'flight' },
              { name: 'Hotel', value: 'hotel' },
              { name: 'Car', value: 'car' },
              { name: 'Mix', value: 'mix' }
            ]
          } 
          
        }
    },
    watch: { 
      datas: {
        handler(newval, oldval) { // watch it
          //console.log(newval.id, oldval.id );
          if(newval.id != undefined){
            this.formData = {
              ...this.formData,
              ...this.datas
            } //this.updateFormData()

            console.log(this.formData);
          }
          
          //alert()
        },
        deep: true,
      },
    },
    computed: {
        
        
    },
   
    methods:{
      updateFormData(){
            //console.log(this.datas?.passenger_name);

            return {
              passenger_name: this.datas?.passenger_name,
              issuing_date: this.datas?.issuing_date,
              travel_type: this.datas?.travel_type,
              itinerary: this.datas?.itinerary,
              currency: this.datas?.currency,

              amount: this.datas?.amount,
              airline: this.datas?.airline,
              ticket_number: this.datas?.ticket_number,
                // permisions: this.datas?.permisions?.map((permision) => { return permision.id}),
                // roles: this.datas?.roles?.map((role) => { return role.id})
            }
            
        },
        
      save () {
          this.$emit('upsert', this.formData)
          this.formData = {}
      },

    },
    mounted() {
      this. updateFormData
    },

    mixins:[formMixin]
}
</script>

<style>

</style>