export const createSlot = async(req, res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}