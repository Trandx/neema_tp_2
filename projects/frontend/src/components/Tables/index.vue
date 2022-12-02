<template>
  
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      
        <div class="flex items-center justify-end my-2 mx-2">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input @keyup="search" v-model="keyword" type="text" id="simple-search" class="border-4 border-primary  text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  bg-white  placeholder-gray-400 text-gray-900 " placeholder="Search" required>
            </div>
        </div>

        <table id="example" class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-white uppercase bg-primary  ">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-primary focus:ring-2 ">
                            <label for="checkbox-all" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Travel
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Amount
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            
            <tbody >
                <tr v-if="!ticketList">
                    <td colspan="4" class="text-center" >
                        <div role="status" class="p-4 w-full">
                            <svg class="inline mr-2 w-16 h-16 animate-spin text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
                <tr  v-for="ticket in ticketList" :key="ticket.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4 w-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       {{ticket.passenger_name}}
                    </td>
                    <td class="py-4 px-6">
                        {{ticket.amout}}
                    </td>
                   <td class="py-4 px-6">
                        <div class="flex text-white space-x-3">
                            <div class=" cursor-pointer" @click="onUpdate(ticket.id)">
                                <i class="fa fa-edit"></i>
                            </div>
                            <div class=" cursor-pointer" @click="onDelete({id:ticket.id, name:ticket.passenger_name})">
                                <i class="fa fa-trash text-red-500"></i>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
                
        </table>
        <div class="text-primary">
            {{pagination}}
        </div>
            
    </div>

</template>

<script>
//import datatables from '../../mixins/datatables/index.js';


export default {
    name: "TableDefault",
    props:[
        'pagination',
        'ticketList'
    ],
    data(){
        return {
            keyword: ''
        }
    },
    watch:{

    },
    methods:{
        search: function(){
            this.$emit('search', this.keyword)
        },
        onDelete(data){
            this.$emit('onDelete', data)
        },
        onUpdate(id){
            this.$emit('onUpdate', id)
        }
    },
    //mixins: [datatables],

}
</script>


<style>

</style>