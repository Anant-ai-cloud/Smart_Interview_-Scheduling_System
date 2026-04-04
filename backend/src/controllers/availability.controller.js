import Available from "../models/availability.model.js"

export const createSlot = async (req, res) => {
    try {

        const interviewer = req.user._id
        const { date, starttime, endtime, isbooked } = req.body
        if (!date || !starttime || !endtime) return res.status(400).json({ message: "All fields are Neccessary" })

        const slotExist = await Available.findOne({ date, starttime, endtime })
        if (slotExist) return res.status(400).json({ message: "Slot already Exist" })

        const slot = await Available.create({
            interviewer,
            date,
            starttime,
            endtime,
            isbooked
        })

        return res.status(200).json(slot)




    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const markBooked = async (req, res) => {
    try {

        const slotId = req.params.id
        const interviewerId = req.user._id

        const slot = await Available.findById(slotId)
        if (!slot) return res.status(400).json({ message: "No slot found" })

        if (!(slot.interviewer.equals(interviewerId))) return res.status(401).json({ message: "You can mark only your slot" })

        slot.isbooked = true
        await slot.save()
        const updated = await Available.findById(slotId)

        return res.status(200).json(updated)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const getInterviewerSlots = async (req, res) => {
    try {

        const interviewer = req.user._id
        const slots = await Available.find({ interviewer })
        if (!slots) return res.status(400).json({ message: "No slots found" })

        return res.status(200).json(slots)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const getHrSlots = async (req, res) => {
    try {
        const interviewer = req.params.id
        const slots = await Available.find({ interviewer })
        if (!slots) return res.status(400).json({ message: "Slots not found" })

        return res.status(200).json(slots)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const deleteSlot = async(req, res)=>{
    try {
        const interviewer = req.user._id
        const slotid = req.params.id
         
        const slot = await Available.findOneAndDelete({
            _id: slotid,
            interviewer
        })

        if(!slot) return res.status(400).json({message: "No slot found"})
       return res.status(200).json({slot: slot._id, message: "slot deleted successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}