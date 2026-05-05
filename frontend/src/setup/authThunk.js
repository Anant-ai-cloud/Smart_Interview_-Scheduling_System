import toast from "react-hot-toast";
import { login, setLogging, logout, setCheckingAuth } from "../store/authSlice.js";
import axiosInstance from "./axiosInstance.js";
import { useSelector } from "react-redux";

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

export const logging = (credentials)=> async(dispatch)=>{
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

export const isLoggedIn = ()=> async(dispatch)=>{
    
try {
        
       const res = await axiosInstance.get("/auth/check")
       if(!res) console.log("error in isLoggedIn")
        dispatch(login({userData: res.data}))
    
     } catch (error) {
        console.log(error.response?.data?.message)
        toast.error(error.response?.data?.message || "Cannot keep you logged in")
        
    }finally{
        dispatch(setCheckingAuth(false))
    }
}