import React from 'react'
import Input from '../components/Input.jsx'
import Btn from '../components/Button.jsx'

function Signup() {
  return (
    <div>
       <form className=' relative w-[40vw] h-[45vh] border border-black rounded-md ml-[30vw] mt-[20vh] p-5'>

               <Input id={"full name"} label={"Your full name"} type={"text"}/>
                <Input id= {"email"} label={"Your email"} type={"email"}/>
                 <Input id={"password"} label={"Your password"} type={"password"}/>
                 


                <Btn type={"submit"} text={"login"}/>
     
            </form>
           
    </div>
  )
}

export default Signup
