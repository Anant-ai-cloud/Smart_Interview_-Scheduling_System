import React, { useEffect, useState } from 'react'
import Input from '../components/Input.jsx'
import Btn from '../components/Button.jsx'
import { logging } from '../setup/authThunk.js'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function Login() {

    const [formData, setFormData] = useState({email: "", password: ""})


    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(logging(formData))
        

    }
    console.log("im in logging")


    

    return (
        <div>
            <form className='relative w-[40vw] h-[40vh] border border-black rounded-md text-center ml-[30vw] mt-[20vh] p-5' onSubmit={handleSubmit}>
               
                <Input id= {"email"} label={"Your email"} value={formData.email} type={"email"} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
                 <Input id={"password"} value={formData.password} label={"Your password"} type={"password"} onChange={(e)=> setFormData({...formData, password: e.target.value}) }/>


                <Btn type={"submit"} text={"login"}/>
                <span>Don't have a Account? <Link to={"/signup"} className='text-blue-400 underline'> sign in </Link></span>
     
            </form>
            
           


        </div>
    )
}

export default Login
