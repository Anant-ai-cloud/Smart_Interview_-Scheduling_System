import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogging: true,
    isCheckingAuth: true,
    status: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login: (state, action) => {

            state.status = true
            state.user = action.payload.userData

        },

        setLogging: (state, action) => {
            state.isLogging = action.payload
        },
        setCheckingAuth: (state, action)=>{
            state.isCheckingAuth= action.payload

        },

        logout: (state) => {

              state.status = false,
                state.user = null
        }
    }

})

export const { login, setLogging, logout, setCheckingAuth } = authSlice.actions
export default authSlice.reducer