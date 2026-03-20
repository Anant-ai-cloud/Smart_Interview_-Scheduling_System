import User from "../models/user.modal.js";

const viewAllUsers = async(req, res)=>{
    try {

        const userId = req.user._id
        const users = await User.find({_id: {$ne: userId}}).sort({createdAt: 1}).select("-password")
        if(!users) console.log("error in viewAllUsers")
        return res.status(200).json({users})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}
export {
    
    viewAllUsers
}