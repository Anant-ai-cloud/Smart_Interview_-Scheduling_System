import toast from "react-hot-toast";
import { login, setLogging, logout } from "../store/authSlice.js";
import axiosInstance from "./axiosInstance.js";

export const signup = (credentials)=> async(dispatch)=>{
    try {

        const res = await axiosInstance.post("/auth/register", credentials)

        if(!res) console.log("error in signup thunk")
        dispatch(login({userData: res.data}))
        toast.success(" Signedup successfully ")
     
        
    } catch (error) {
        toast.error(error.response?.data?.message || "Error in Signing up")
        
    }finally{
        dispatch(setLogging(false))
    }
}

export const login = (credentials)=> async(dispatch)=>{
    try {
        const res = await axiosInstance.post("/auth/login", credentials)
        if(!res) console.log("error in login thunk")
        
        dispatch(login({userData: res.data}))
        toast.success("Logged in successfully")
        
    } catch (error) {
        toast.error(error.response?.data?.message || "Error in Logging")
        
    }finally{
        dispatch(setLogging(false))
    }
}