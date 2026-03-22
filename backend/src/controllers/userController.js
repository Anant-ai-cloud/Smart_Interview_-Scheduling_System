import User from "../models/user.modal.js";

const getAllUsers = async(req, res)=>{
    try {

        const userId = req.user._id
        const users = await User.find({_id: {$ne: userId}}).sort({createdAt: 1}).select("-password")
        
        return res.status(200).json(users)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}

const gethrUsers = async(req, res)=>{
    try {
        const { role } = req.query
        if(!role) return res.status(400).json({message: "role is required"})
        
            if(role === "candidate"){
                const candidates = await User.find({role: "candidate"}).sort({createdAt: 1}).select("-password")
                if(!candidates) console.log("candidates didn't fetched due to some issue")
                   
                
                    return res.status(200).json(candidates, "this is some thing")
            }
            
            const interviewers = await User.find({role: "interviewer"}).sort({createdAt: 1}).select("-password")
           

            return res.status(200).json(interviewers)

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }

}
export {
    
    getAllUsers,
    gethrUsers
}