import express from "express"
import { verifyInterviewer } from "../middlewares/roleChecking.js"
import authenticate from "../middlewares/verifyJwt.js"
import { createFeedback } from "../controllers/feedbackController.js"
import { createSlot, markBooked } from "../controllers/availability.controller.js"

const router = express.Router()

router.use(authenticate, verifyInterviewer)

router.post("/create-feedback/:id", createFeedback)
router.post("/create-slot", createSlot)
router.patch("/mark-booked/:id", markBooked)

export default router