import axios from "axios";




export const requestsApi={
    request(success:boolean){
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test",{success})
            .then(response=> alert(JSON.stringify(response.data)))

            .catch(error=>alert(error.response?error.response.data.errorText:error.message))
    },
}


