<template>
 
    <div ref="default-modal" tabindex="-1" :class="!open?'hidden':false" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center flex" >
        <div class="relative p-4 w-auto h-auto ">
            
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 border-2 border-primary py-2 px-2 lg:px-4">
                <button @click.prevent="closeModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <i class="fa-solid fa-x text-primary"></i>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-2 lg:px-4">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white text-left capitalize ">
                        <slot name="modalTitle" ></slot>
                    </h3>

                </div>
                <div class=" h-full overflow-y-scroll">
                    <slot name="modalBody"></slot>
                </div>
                    <slot name="modalFooter"></slot>
            </div>
        </div>
    </div> 
</template>

<script>
export default {

    name: "Modal",
    data(){
        return {
            //show: this.$props.open || false
            open: false
        }
    },
    // props: {
    //     modalOpen:{
    //         type: Boolean
    //     }
    // },

    // watch: { 
    //     modalOpen: {
    //         handler(newValue) {
    //             this.open = newValue
    //         },
    //        // deep: true
    //      },
    // },

    methods:{
        closeModal(){
            this.open = false
            this.$emit('closed', false) 
        },
    }
}
</script>

<style>

</style>