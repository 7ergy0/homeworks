import axios from "axios";



export const requestsApi={
    request(success:boolean){
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test",{body:success})
            .then(response=> alert(response))

            .catch(error=>alert(error.response?error.response.data.errorText:error.message))
    },
}


