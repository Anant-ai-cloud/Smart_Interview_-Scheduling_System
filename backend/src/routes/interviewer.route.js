import express from "express"
import { verifyInterviewer } from "../middlewares/roleChecking.js"
import authenticate from "../middlewares/verifyJwt.js"
import { createFeedback } from "../controllers/feedbackController.js"
import { createSlot, markBooked, getInterviewerSlots, deleteSlot } from "../controllers/availability.controller.js"
import { getInterviewerInterviews, markCompleted } from "../controllers/interviewController.js"

const router = express.Router()

router.use(authenticate, verifyInterviewer)

router.post("/create-feedback/:id", createFeedback)
router.post("/create-slot", createSlot)
router.patch("/mark-booked/:id", markBooked)
router.get("/getslots", getInterviewerSlots)
router.delete("/deleteslot/:id", deleteSlot)
router.get("/getinterviews", getInterviewerInterviews)
router.patch("/updateinterview/:id", markCompleted)
export default router