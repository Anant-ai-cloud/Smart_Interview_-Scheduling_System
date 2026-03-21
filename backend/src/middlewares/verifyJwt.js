import User from "../models/user.modal.js";
import { ENV } from "../env.js";
import jwt from "jsonwebtoken"

const authenticate = async(req, res, next)=>{
    try {
        const token = req.cookies?.token
        if(!token) return res.status(400).json({ message: "Unauthorized, Token is required" })
        const decodedToken = jwt.verify(token, ENV.TOKEN_SECRET)
        if(!decodedToken) return res.status(400).json({ message: "invalid token provided" })

        const user = await User.findOne({_id: decodedToken._id}).select("-password")
      
        if(!user) return res.status(400).json("user not found")
        req.user = user
        next()
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Sorry we can't process your request"})
    }
}

export default authenticate