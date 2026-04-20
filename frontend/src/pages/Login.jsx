import React, { useEffect, useState } from 'react'
import Input from '../components/Input.jsx'
import Btn from '../components/Button.jsx'
import { logging } from '../setup/authThunk.js'
import { useDispatch } from 'react-redux'


function Login() {

    const [formData, setFormData] = useState({email: "", password: ""})


    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)

    }


    

    return (
        <div>
            <form className='w-[40vw] h-[40vh] border border-black rounded-md text-center ml-[30vw] mt-[20vh] p-5' onSubmit={handleSubmit}>
               
                <Input id= {"email"} label={"Your email"} type={"email"} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
                 <Input id={"password"} label={"Your password"} type={"password"} onChange={(e)=> setFormData({...formData, password: e.target.value}) }/>


                <Btn type={"submit"} text={"login"}/>
     
            </form>
           


        </div>
    )
}

export default Login
