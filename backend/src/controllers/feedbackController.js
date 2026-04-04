import Feedback from "../models/feedback.model.js";

export const createFeedback = async (req, res) => {
    try {

        const { rating, comment, result } = req.body
        if (!comment) return res.status(400).json({ message: "comment is neccessary" })

        const interviewerId = req.user._id
        const interviewId = req.params.id
        const feedbackExist = await Feedback.findOne({ interview: interviewId })
        if (feedbackExist) return res.status(400).json({ message: "Feedback already exist" })

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
        return res.status(500).json({ message: "internal server error" })
    }
}

export const updateFeedback = async (req, res) => {
    try {

        const { publiccomment, isvisible } = req.body
        if (!publiccomment || !isvisible) return res.status(400).json({ message: "All fields are required with valid values" })
        const feedbackId = req.params.id
        const myId = req.user._id
        const feedback = await Feedback.findById(feedbackId).populate("interview")
        if(!feedback) return res.status(400).json({message: "There is no feedback present"})

       if (!(feedback.interview.hr.equals(myId))) return res.status(401).json({ message: "You can only update your own interview's feedback" })

        feedback.publiccomment = publiccomment
        feedback.isvisible = isvisible

        await feedback.save()
        const updatedFeedback = await Feedback.findById(feedbackId)
        return res.status(200).json(updatedFeedback)



    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const getHrFeedback = async (req, res) => {
    try {
        const myid = req.user._id
        const feedbacks = await Feedback.find().populate("interview")
        if(!feedbacks) return res.status(400).json({message: "There is no feedback present"})

        const sendFeedbacks = new Array()
        feedbacks.forEach((feedback) => {
            if (!(feedback.interview.hr.equals(myid))) return

            sendFeedbacks.push(feedback.depopulate("interview"))
        })

        if (!sendFeedbacks) return res.status(400).json({ message: "There is no feedback of yours" })

        return res.status(200).json(sendFeedbacks)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const getCandidateFeedback = async(req, res)=>{
    try {
        const myId = req.user._id
        const feedbacks = await Feedback.find().select("-comment").populate("interview")
        if(!feedbacks) return res.status(400).json({message: "There is no feedback present"})
        const sendFeedbacks = new Array()
        feedbacks.forEach((feedback)=>{
            if(!(feedback.interview.candidate.equals(myId)) || !(feedback.isvisible) ) return
            sendFeedbacks.push(feedback.depopulate("interview"))
        
        })
        if(!sendFeedbacks) return res.status(400).json({message: "You don't have any feedback"})
        return res.status(200).json(sendFeedbacks)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json("internal server error")
    }
}

export const getAllFeedbacks = async(req,res)=>{
    try {
        const feedbacks = await Feedback.find()
        if(!feedbacks) return res.status(400).json({message: "No feedback present"})
        
        return res.status(200).json(feedbacks)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: " internal server error "})
    }
}

export const deleteFeedback = async(req,res)=>{
    try {
        const feedbackId = req.params.id
     
        const feedback = await Feedback.findByIdAndDelete(feedbackId)
        if(!feedback) return res.status(400).json({message: "There is no feedback present"})

        return res.status(200).json({feedback: feedback._id, message: "Deleted successfully"})
    
        } catch (error) {
        console.log(error)
        return res.status(500).json({message: "internal server error"})
    }
}