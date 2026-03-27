
export const verifyAdmin = (req, res, next)=>{

    const { role } = req.user
    if((role !== "admin")) return res.status(401).json({message: "Unauthorized, You are not allowed to access admin functionalities"})
    
    next()

}

export const verifyHr = (req, res, next)=>{

    const { role } = req.user
    if(role !== "hr") return res.status(401).json({message: "Unauthorized, Only hr can access this route"})
    
    next()

}
export const verifyInterviewer = (req, res, next)=>{
    const { role } = req.user
    if(role !== "interviewer") return res.status(401).json({message: "Unauthorized, Only interviewer can access this route"})

    next()
}

