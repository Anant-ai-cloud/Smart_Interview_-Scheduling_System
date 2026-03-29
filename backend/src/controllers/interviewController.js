import Interview from "../models/interview.model.js";

export const createInterview = async (req, res) => {
    try {

        const { candidate, interviewer, date, time, meetingurl, status } = req.body
        const hr = req.user._id
        if (!candidate || !interviewer || !date || !time || !meetingurl) return res.status(400).json({ message: "All fields are required" })

        const isInterviewPresent = await Interview.findOne({candidate: candidate, interviewer: interviewer})
        if (isInterviewPresent) return res.status(400).json({ message: "Already interview is scheduled" })

        const interview = await Interview.create({

            candidate,
            interviewer,
            hr,
            date: new Date(date),
            time,
            meetingurl,
            status


        })

        return res.status(200).json(interview)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const getInterviews = async (req, res) => {
    try {
        const hrId = req.user._id
        const interviews = await Interview.find({ hr: hrId }).sort({ createdAt: 1 })
        if(!interviews) return res.status(400).json({message: "There is no interview present"})
        return res.status(200).json(interviews)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const deleteInterview = async(req, res)=> {
    try {
        const id = req.params.id
        const deleted = await Interview.findByIdAndDelete(id)
        if(!deleted) return res.status(400).json({message: "There is no interview present"})


        return res.status(200).json({message: "Interview deleted successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}