import User from "../models/user.modal.js";
import bcrypt from "bcryptjs"

const register = async(req, res)=>{
    try {

        const {name, email, password, role } = req.body

        if(!name || !email || !password) return res.status(400).json({message: "All fields are required with valid values"})
        
            if(!(name.trim()) || !(password.trim())) return res.status(400).json({message: "Values should be valid"})

                const user = await User.findOne({email})
                if(user) return res.status(400).json({message: "user already exists with same emailid"})

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
                email: newUser.email,
              })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "internal server error"})
    }
}

const login = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}


export {
    register,
    login
}