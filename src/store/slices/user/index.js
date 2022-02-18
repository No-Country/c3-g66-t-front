import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
    name:"user",
    initialState: {
        user:{            
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user= action.payload
        }
    }
})
export const {setUser} = userSlice.actions
export default userSlice.reducer

export const getUser =(data) =>(dispatch)=>{
    return axios.post('https://nc-hotely.herokuapp.com/api/v1/auth/login',data)
        .then(res => dispatch(setUser(res.data.data)))
        .catch(err => console.log(err))
}