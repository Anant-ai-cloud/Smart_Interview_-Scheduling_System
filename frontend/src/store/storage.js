import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice.js"

const storage = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default storage