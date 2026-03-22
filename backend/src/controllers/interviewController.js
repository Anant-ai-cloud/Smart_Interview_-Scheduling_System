import Interview from "../models/interview.model.js";

const createInterview = async(req, res)=>{
    try {

        const { candidate, interviewer, date, time, meetingurl, status } = req.body
        const hr = req.user._id
        if(!candidate || !interviewer || !date  || !time || !meetingurl) return res.status(400).json({message: "All fields are required"})
        
       const isInterviewPresent =  await Interview.findOne({candidate: candidate, interviewer: interviewer, date: new Date(date), time: time})
         if(isInterviewPresent) return res.status(400).json({message: "Already interview is scheduled"})

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
        return res.status(500).json({message: "internal server error"})
    }
}