import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({

    interview: {
        type: Schema.Types.ObjectId,
        ref: "Interview",
        required: true
    },

    interviewer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    rating: {
        types: Number,
    },

    comments: {
        type: String,
        required: true
    },

    result: {
        type: String,
        enum: ["pass", "fail", "hold"],
        default: "hold"
    }


}, {timestamps: true})

const Feedback = mongoose.model("Feedback", feedbackSchema)

export default Feedback