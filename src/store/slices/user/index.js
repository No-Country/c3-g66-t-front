import { createSlice } from "@reduxjs/toolkit";
import { loginService, registerService } from "../../../services/auth";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            message: '',
            user: localStorage.getItem('token')?.toString() || '',
            loading: false,
            logged: !!localStorage.getItem('token')?.toString()
        },
        signUp: {
            loading: false,
            errors: [],
            message: '',
            status: ''
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user.user = action.payload
        },
        setMessage: (state, action) => {
            state.user.message = action.payload
        },
        setLoading: (state, action) => {
            state.user.loading = action.payload
        },
        setLogged: (state, action) => {
            state.user.logged = action.payload
        },
        setLoggedOut: (state, action) => {
            state.user.logged = action.payload
        },
        setSignUpStatus: (state, action) => {
            state.signUp.status = action.payload
        },
        setSignUpErrors: (state, action) => {
            state.signUp.errors = action.payload
        },
        setSignUpMessage: (state, action) => {
            state.signUp.message = action.payload
        },
        resetUserSignUp(state, action) {
            state.signUp.message = '';
            state.signUp.errors = [];
            state.signUp.status = '';
        }
    }
})
export const { setUser, setLoading, setMessage, setLogged, setLoggedOut, setSignUpStatus, setSignUpErrors,setSignUpMessage,resetUserSignUp } = userSlice.actions
export const getUser = (data) => {
    return async (dispatch) => {
        const userLogged = await loginService(data)
        if (userLogged) {
            //dispatch(setMessage(userLogged.message))
            dispatch(setLoading(true))
            dispatch(setLoading(false))
            dispatch(setLogged(true))
            dispatch(setUser(userLogged.token))
            window.localStorage.setItem("token", userLogged.token)
        }
        else {
            dispatch(setMessage('Credenciales incorrectas'))
            dispatch(setLogged(false))
        }
    }
}
export const logout = () => {
    return (dispatch) => {
        window.localStorage.removeItem("token")
        dispatch(setUser(''))
        dispatch(setMessage(''))
        dispatch(setLoading(false))
        dispatch(setLogged(false))
    }
}
export const register = (data) => {
    return async (dispatch) => {
        try {
            await registerService(data)
            dispatch(setSignUpStatus('ok'))
            dispatch(setSignUpErrors([]))
            dispatch(setSignUpMessage(null))

        } catch (error) {
            dispatch(setSignUpStatus('fail'))
            dispatch(setSignUpErrors(error.response.data.data))
            dispatch(setSignUpMessage(error.message))
        }
    }

}
export default userSlice.reducer