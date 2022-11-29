
export default {
    methods: {
        openCredentialClient(client){
            // this.$refs.modal.open = true;
            // this.modalData.title = "Credentiels of "+client.name
            // this.view.name = "CredentialClient"
            // this.view.datas = client

        },
        openCreate(title){
            this.modal = {
                open: true,
                title:  "create new "+title,
                datas: {}
            }
            // this.$refs.modal.open = true;
            // this.modalData.title = "create new "+title
            // this.view.name = componentName
            //  this.view.datas = {}
        },

        openEdit({title, datas}){

            this.modal = {
                open: true,
                title: title,
                datas: datas
            }
            
            // this.$refs.modal.open = true;
            // this.modalData.title = "edit "+title
            // this.view.name = componentName
            // this.view.datas = datas

        },

        openDelete(name){
            this.$refs.modalComfirm.open = true;
            this.modalComfirm.message = `Are you sure to delete ${name} ?`
        },

        openModal(title, datas, componentName){
            this.modal = {
                open: true,
                title: title ,
                datas: datas
            }
            // this.$refs.modal.open = true;
            // this.modalData.title = "create new "+title
             this.view.name = componentName
            //  this.view.datas = {}
        },

        closeModal(){
            this.modal= {
                open: false,
                title: null,
                datas: {}
            }
        },

    }
}