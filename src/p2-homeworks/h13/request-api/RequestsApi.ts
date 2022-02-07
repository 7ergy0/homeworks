import axios from "axios";



export const requestsApi={
    request(success:boolean){
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test",{body:success})
            .then(response=> console.log(response.data))
            .catch(error=>console.log(error.response?error.response.data.errorText:error.message))
    },
}


