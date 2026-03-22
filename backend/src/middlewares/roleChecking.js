
const verifyAdmin = (req, res, next)=>{

    const { role } = req.user
    if((role !== "admin")) return res.status(401).json({message: "Unauthorized, You are not allowed to access admin functionalities"})
    
    next()

}

const verifyHr = (req, res, next)=>{

    const { role } = req.user
    if(role !== "hr") return res.status(401).json({message: "Unauthorized, Only hr can access this route"})
    
    next()

}
const verifyInterviewer = ()=>{}

export {
    
    verifyAdmin,
    verifyHr,
    verifyInterviewer
}