import react, {useState, useEffect} from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Authprotect({ children, authentication = true }){
const status  = useSelector(state=> state.auth.status)
console.log(status)
const user = useSelector(state=> state.auth.user)
const navigate = useNavigate()
const [loader, setLoader] = useState(true)

useEffect(()=>{
    console.log(user?.role)
  if(authentication && status !== authentication){
    navigate("/")
  }else if(!authentication && status !== authentication){
    if(user?.role === "admin"){
        
        navigate("/admindashboard")

    }else if(user?.role === "hr"){
        console.log("Im hr")
        navigate("/hrdashboard")

    }else if(user?.role === "interviewer"){
        navigate("/interviewerdashboard")
    }else{
        navigate("/dashboard")
    }
  }
        setLoader(false)

},[status, navigate,  authentication])


    return loader ? <h1>Loading...</h1> :<>{children} </>
}
export default Authprotect