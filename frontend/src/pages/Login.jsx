import React, { useEffect, useState } from 'react'
import Input from '../components/Input.jsx'
import Btn from '../components/Button.jsx'
import { login } from '../store/authSlice.js'
import { useDispatch } from 'react-redux'


function Login() {

    const dispatch = useDispatch()

    

    return (
        <div>
            <form className='w-[40vw] h-[40vh] border border-black rounded-md text-center ml-[30vw] mt-[20vh] p-5'>
               
                <Input id= {"email"} label={"Your email"} type={"email"}/>
                 <Input id={"password"} label={"Your password"} type={"password"}/>


                <Btn type={"submit"} text={"login"}/>
     
            </form>
           


        </div>
    )
}

export default Login
