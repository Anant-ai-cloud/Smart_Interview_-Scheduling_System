import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({

    interview: {
        type: Schema.Types.ObjectId,
        ref: "Interview",
        required: true,
        unique: true
    },

    interviewer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    rating: {
        types: Number,
    },

    comment: {
        type: String,
        required: true
    },

    publiccomment: {
         type: String,
    },

    result: {
        type: String,
        enum: ["pass", "fail", "hold"],
        default: "hold"
    },

    isvisible:{
        type: Boolean,
        default: false
    }


}, {timestamps: true})

const Feedback = mongoose.model("Feedback", feedbackSchema)

export default Feedback