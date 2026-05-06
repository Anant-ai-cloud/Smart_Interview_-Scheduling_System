import React, { useState } from 'react'
import Input from '../components/Input.jsx'
import Btn from '../components/Button.jsx'
import { Link } from 'react-router-dom'

function Signup() {
  const [details, setDetails] = useState({ name: "", email: "", password: "", role: ""})

  const handleSubmit = ()=>{

  }
  return (
    <div>
       <form className=' relative w-[40vw] min-h-[45vh] border border-black rounded-md ml-[30vw] mt-[20vh] p-5' onSubmit={handleSubmit}>

               <Input id={"full name"} label={"Your full name"} type={"text"} onChange ={(e)=> setDetails({...details, name: e.target.value})} />
                <Input id= {"email"} label={"Your email"} type={"email"} onChange={(e)=> setDetails({...details, email: e.target.value})}/>
                 <Input id={"password"} label={"Your password"} type={"password"} onChange={(e)=> setDetails({...details, password: e.target.value})}/>

                 <label htmlFor="role" className=' m-1 ml-2'>Choose your role:</label>
                 <select name="" id="role">
                 <option value="candidate">Candidate</option>
                 <option value="hr">Hr</option>
                 <option value="admin">Admin</option>
                 <option value="interviewer">Interviewer</option>
                 </select>

                 <div className='flex gap-11'>
                <Btn type={"submit"} text={"login"} polish='left-2 top-2'/>
                 <span className='mt-2'>Already have a Account? <Link to={"/"} className='text-blue-400 underline'> Log in </Link></span>
                 </div>
     
            </form>
           
    </div>
  )
}

export default Signup
