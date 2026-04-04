import User from "../models/user.modal.js";

export const getAllUsers = async (req, res) => {
    try {

        const userId = req.user._id
        const users = await User.find({ _id: { $ne: userId } }).sort({ createdAt: 1 }).select("-password")
        if (!users) return res.status(400).json({ message: "There is no user present" })

        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const gethrUsers = async (req, res) => {
    try {
        const { role } = req.query
        if (!role) return res.status(400).json({ message: "role is required" })

        if (role === "candidate") {
            const candidates = await User.find({ role: "candidate" }).sort({ createdAt: 1 }).select("-password")
            if (!candidates) return res.status(400).json({ message: "There is no candidate present" })
            return res.status(200).json(candidates)
        }

        const interviewers = await User.find({ role: "interviewer" }).sort({ createdAt: 1 }).select("-password")

        if (!interviewers) return res.status(400).json({ message: "There is no interviewer present" })

        return res.status(200).json(interviewers)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }

}

export const deleteUser = async(req, res)=>{
    try {
        
        const userId = req.params.id
        const deleted = await User.findByIdAndDelete(userId)
        if(!deleted) return res.status(400).json({message: "User not exist"})
        return res.status(200).json({user:  deleted._id,message: "User deleted successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}
