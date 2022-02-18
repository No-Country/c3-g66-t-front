import axios from "axios"
const registerService = (data) => {
    const apiURL = 'https://nc-hotely.herokuapp.com/api/v1/auth/register'
    return axios.post(apiURL,data)
        .then(res => res.data.data)
        .then(res => {
            if(res.token){
                return true
            }
            return false
        } )
        .catch(err => console.log(err))
}
export default registerService