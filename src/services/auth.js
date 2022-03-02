import axios from "axios"

let token = window.localStorage.getItem('token') || null;

 

const registerService = async (data) => {
    const apiURL = 'https://nc-hotely.herokuapp.com/api/v1/auth/register'
    const response = await axios.post(apiURL, data)    
    const allData = await response.data
    return allData.data
}

const loginService = (data) => {
    return axios.post('https://nc-hotely.herokuapp.com/api/v1/auth/login', data)
        .then(res => {
            if (res.data.code !== 200) {
                throw new Error('response not ok')
            }
            return res
        })
        .then(res => {
            const { data: { token }, message } = res.data
            return { token, message }
        })
        .catch(err => console.log(err))
}

export {
    registerService,
    loginService
}