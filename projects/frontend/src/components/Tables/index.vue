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
            <tbody>
                <tr v-for="ticket in ticketList" :key="ticket.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                            <div class=" cursor-pointer" @click="update(ticket.id)">
                                <i class="fa fa-edit"></i>
                            </div>
                            <div class=" cursor-pointer" @click="delete(ticket.id)">
                                <i class="fa fa-trash text-red-500"></i>
                            </div>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
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
        delete(id){
            console.log(id);
        },
        update(id){
            console.log(id);
        }
    },
    //mixins: [datatables],

}
</script>


<style>

</style>