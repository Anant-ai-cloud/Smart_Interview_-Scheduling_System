import toast from "react-hot-toast";
import { login, setLogging, logout, setCheckingAuth } from "../store/authSlice.js";
import axiosInstance from "./axiosInstance.js";
import { useSelector } from "react-redux";

export const signup = (credentials)=> async(dispatch)=>{
    try {

        const res = await axiosInstance.post("/auth/register", credentials)

        
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
       
        dispatch(login({userData: res.data}))
    
     } catch (error) {
        console.log(error.response?.data?.message)
        toast.error("Login to your account")
        
    }finally{

        setTimeout(()=>{
        dispatch(setCheckingAuth(false))

        },500)
    }
}

export const Logout = ()=> async(dispatch)=>{
    console.log("Reached logout thunk")
    try {
        dispatch(logout())
   
        const res = await axiosInstance.post("/auth/logout")
         toast.success(res.data?.message)
    } catch (error) {
        toast.error(error.response?.data?.message || "Error in Logout thunk")
        console.log(error)
    }
}
