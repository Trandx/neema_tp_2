import axiosClient from "../axios";


class TicketsService {

    async save(data){
        return await axiosClient.post("/add", data, {
            // headers: {
            //   'Content-Type': 'multipart/form-data'
            // },
            }).then((value) =>  value.data).catch((value) => {
                console.log(value)
            return {
                status: false,
                message: value.message,
                data: value.response?.data?.errors
            }
        })
    }

    async search(keyword){

      return await axiosClient.post("", {keyword: keyword, search: true}).then((value) =>  value.data).catch((value) => {
        return {
            status: false,
            message: value.message,
        }
      })


        //return apollo.mutation.createUser(user)
        // const {result, loading, error} = apollo.mutation.createUser(user)
        // //store.addLoggedUserInStore(result.value)

        // return {result, loading, error}
    }

    async upload(data,  onUploadProgress){

      const formData = new FormData();

      formData.append('doc', data.file)
      formData.append('id_patient', data.id)
      formData.append('scan_doc', true)

      return await axiosClient.post("", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress
      }).then((value) =>  value.data).catch((value) => {
        return {
            status: false,
            message: value.message,
        }
      })


        //return apollo.mutation.createUser(user)
        // const {result, loading, error} = apollo.mutation.createUser(user)
        // //store.addLoggedUserInStore(result.value)

        // return {result, loading, error}
    }

    async getFiles(id){
      return await axiosClient.get("?id_patient="+id+"&get_files=true&", {
        headers: {
          //"Content-type": "application/json"
        },
      }).then((value) =>  value.data).catch((value) => {
        return {
            status: false,
            message: value.message,
        }
      })
    }

    async deleteFile(id){
      return await axiosClient.post("", {id:id, delete: true}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then((value) =>  value.data).catch((value) => {
        return {
            status: false,
            message: value.message,
        }
      })
    }
}


export default new TicketsService();