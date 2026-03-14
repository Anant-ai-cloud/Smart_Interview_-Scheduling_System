import mongoose, { Schema } from "mongoose";

const availabilitySchema = new Schema({
    
    interviewer: {

        type: Schema.Types.ObjectId,
        ref: "User",
        required: true

    }, 
    
    date: {
        type: Date,
        required: true
    },

    starttime: {
        type: String,
        required: true
    },

    endtime: {
        type: String,
        required: true
    },

    isbooked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Available = mongoose.model("Available", availabilitySchema)

export default Available