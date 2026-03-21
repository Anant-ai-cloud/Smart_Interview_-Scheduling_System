
const verifyAdmin = (req, res, next)=>{

    const role = req.user.role
    if((role !== "admin")) return res.status(401).json({message: "You are not allowed to access admin functionalities"})
    
    next()

}

const verifyHr = ()=>{}
const verifyInterviewer = ()=>{}

export {
    
    verifyAdmin,
    verifyHr,
    verifyInterviewer
}