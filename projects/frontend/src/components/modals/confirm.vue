<template>
    <div ref="confirm-modal" tabindex="-1" :class="!open?'hidden':false" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 md:h-full justify-center items-center flex">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto ">
            <div class=" border-b-8 border border-primary rounded-lg shadow ">
                <div class=" w-full  bg-gray-700 h-10 relative border-b-4  border-primary ">
                    <button @click.prevent="closeModal" type="button" class="absolute top-2 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <i class="fa-solid fa-x"></i>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                
                <div class="p-6 text-center bg-white">
                    <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div class="bg-white">
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <slot name="message">
                                Are you sure you want to delete ?
                            </slot>
                        
                        </h3>
                        <div class="w-full justify-between flex px-4 bg-white">
                            <button  @click.prevent="confirm" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium
                            rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                <slot name="confirmBtn">Yes, I'm sure</slot>   
                            </button>
                            <button @click.prevent="cancel" type="button" class=" text-gray-500 border border-gray-500 bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 hover:bg-primary hover:text-white">
                                <slot name="cancelBtn"> No, cancel</slot>
                            </button>
                        </div>
                    </div>
                  

                    
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ModalConfirm",
    data(){
        return {
            open: false
        }
    },

    methods:{
        closeModal(){

            this.open = false
            //this.$refs["default-modal"].classList.add('hidden')
        },

        openModal(){
            this.open = true
        },

        confirm(){
            this.$emit("cancel", true)
            this.closeModal()
        },

        cancel(){
            this.$emit("cancel", false)
            this.closeModal()
        }
    }
}
</script>

<style>

</style>