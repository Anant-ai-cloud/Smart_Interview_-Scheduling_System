import Feedback from "../models/feedback.model.js";

export const createFeedback = async(req, res)=>{
    try {

        const {rating, comment, result} = req.body
        if(!comment) return res.status(400).json({message: "comment is neccessary"})
        
        const interviewerId = req.user._id
        const interviewId = req.params.id
        const feedbackExist = await Feedback.findOne({interview: interviewId})
        if(feedbackExist) return res.status(400).json({message: "Feedback already exist"})
        
        const feedback = await Feedback.create({

            interview: interviewId,
            interviewer: interviewerId,
            rating,
            comment,
            result
        })

        return res.status(200).json(feedback)

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}

export const updateFeedback = async(req, res)=>{
    try {

        const { publiccomment, isvisible } = req.body
        if(!publiccomment || !isvisible) return res.status(400).json({message: "All fields are required with valid values"})
        const id = req.params.id
        const myid = req.user._id
        const feedback = await Feedback.findById(id).populate("interview")

        const hrid = (feedback.interview.hr).toString()

        if(hrid !== myid) return res.status(401).json({message: "You can only update your own interview's feedback"})

        return res.status(200).json(feedback)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}