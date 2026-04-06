import User from "../models/user.modal.js";
import bcrypt from "bcryptjs"
import { ENV } from "../env.js";
import jwt from "jsonwebtoken"


 const generateToken = (id, role) => {

    return jwt.sign(
        {
            _id: id,
            role: role
        },

        ENV.TOKEN_SECRET,

        {
            expiresIn: ENV.TOKEN_EXPIRY
        }
    )




}


export const register = async (req, res) => {
    try {

        const { name, email, password, role } = req.body

        if (!name || !email || !password) return res.status(400).json({ message: "All fields are required with valid values" })

        if(role === "hr" || role === "interviewer") return res.status(401).json({message: "You are not authorized,Only Admin can create hr and Interviewer's account"})

        if (!(name.trim()) || !(password.trim()) || !(email.trim())) return res.status(400).json({ message: "Values should be valid" })

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "user already exists with same emailid" })

        if (password.length < 6) return res.status(400).json({ message: "password should be of 6 char long" })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role

        })

        return res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "internal server error" })
    }
}

export const login = async (req, res) => {
    try {

        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ message: "All fields are required with valid values" })

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "invalid credentials" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" })

        const token = generateToken(user._id, user.role)

        return res.status(200)
        .cookie("token", token, {

            httpOnly: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000

        }).json({
            _id: user._id,
             name: newUser.name,
            email: user.email,
            role: user.role
        })

    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: "internal server error" })

    }
}

export const logout = ( _, res)=>{

    const options = {

        httpOnly:true,
        sameSite: "strict"
    }

    return res.status(200).clearCookie("token", options).json({message: "User logged out Successfully"})

        
    

}

export const registerByAdmin = async(req, res)=>{
    try {
        const {name, email, password, role } = req.body

        if(!name || !password || !email) return res.status(400).json({message: " All fields are required"})
        
        if(!(name.trim()) || !(password.trim()) || !email.trim()) return res.status(400).json({message: "All values should be valid"})

        const userExist = await User.findOne({email: email}).select("-password")
        if(userExist) return res.status(400).json({message: "User already exist"})
        
        if(password.length < 6) return res.status(400).json({message: "password should be of 6 char long"})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        })

        return res.status(200).json({
            _id: user._id,
            email: user.email,
            role: user.role
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: " internal server error "})
    }
}

