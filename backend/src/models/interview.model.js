import mongoose, {Schema } from "mongoose";


const interviewSchema = new Schema({

    candidate: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 

    interviewer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    hr: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    date: {
        type: Date,
        required: true

    },

    time: {
        type: String,
        required: true

    }, 

    status: {
        type: String,
        enum: ["completed", "not completed"],
        default: "not completed"
    },

    meetinglink: {
        type: String,
        required: true
    }


}, { timestamps: true })

const Interview = mongoose.model("Interview", interviewSchema)

export default Interview