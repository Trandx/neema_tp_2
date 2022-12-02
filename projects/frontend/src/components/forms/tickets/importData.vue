<template>
  <div class="bg-white text-black p-4">
    <form class=" capitalize text-[13px]" action="#">

      <div class="flex items-center justify-center w-full mb-4">
          <label for="dropzone-file"  @dragover="dragover" @dragleave="dragleave" @drop="drop" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">AIR (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" multiple accept=".air"   @change="onChange" ref="file"
                /> 
                <!-- accept=".air" -->
          </label>
      </div>

      <div v-if="!isDragging">
        <div class="preview-container mt-4" v-if="files.length">
          <div v-for="file in files" :key="file.name" class="flex">
            <div class="flex">
              <p class="">
                {{ file.name }}
              </p>
              <div>
                <div class="ml-2 font-semibold cursor-pointer px-1.5 bg-red-500 rounded-lg"  @click="remove(files.indexOf(file))" title="Remove file">
                  x
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
        
       <div class=" justify-end flex px-4 p-2 border-t-2 ">
          <label for="dropzone-file" class="mx-5 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary focus:ring-primary text-white ">
            Open
          </label>

            <button @click.prevent="cancel" type="submit" class=" mx-5  text-gray-500 border border-gray-500 bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                Cancel
            </button>
            
       </div>
        
        
    </form>
  </div>
</template>

<script>
import formMixin from '../../../mixins/forms/index'

import extractData from '../../../mixins/Files'

export default {
    name: "ImportData",

    props:["datas",],

    data(){
        return {
           // formData: {},
          options: {},
          isDragging: false,
          files: [],
      }
    },
    computed: {
        
      formData(){
          //console.log(this.datas?.type);
          return {
              // name: this.datas?.name,
              // description: this.datas?.description,
              // type: this.datas?.type,
              // revoked: this.datas?.revoked,
              // redirect: this.datas?.redirect,
              // permisions: this.datas?.permisions?.map((permision) => { return permision.id}),
              // roles: this.datas?.roles?.map((role) => { return role.id})
          }
          
      }
    },
   
    methods:{
        
      save () {
          this.$emit('upsert', this.formData)
      },

      cancel(){
        this.files = []
      },

      onChange() {
        this.files = [...this.$refs.file.files];

        //let datas = []

        this.files.map((value,) => {
          var reader = new FileReader();
            
          reader.readAsText(this.files[0], "UTF-8");

          reader.onload = (evt) => {

              const content = evt.target.result

              //datas.push(extractData(content))

              this.$emit("airData",extractData(content))

          }
        })

        
        //const data = Airfile(this.$refs.file.files[0])

        
      },
      dragover(e) {
        e.preventDefault();
        this.isDragging = true;
      },
      dragleave() {
        this.isDragging = false;
      },
      drop(e) {
        e.preventDefault();
        this.$refs.file.files = e.dataTransfer.files;
        console.log(e.dataTransfer)
        this.onChange();
        this.isDragging = false;
      },
      remove(i) {
        this.files.splice(i, 1);
      },

    },
    mounted() {
      
    },

    mixins:[formMixin]
}
</script>

<style>

</style>