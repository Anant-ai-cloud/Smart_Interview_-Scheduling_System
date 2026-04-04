import express from "express"
import { gethrUsers } from "../controllers/userController.js"
import authenticate from "../middlewares/verifyJwt.js"
import { verifyHr } from "../middlewares/roleChecking.js"
import { createInterview, getInterviews, deleteInterview } from "../controllers/interviewController.js"
import { updateFeedback } from "../controllers/feedbackController.js"
import { getHrFeedback } from "../controllers/feedbackController.js"
import { getHrSlots } from "../controllers/availability.controller.js"

const router = express.Router()

router.use(authenticate, verifyHr)

router.get("/users", gethrUsers)
router.post("/interview", createInterview)
router.get("/get/interviews", getInterviews)
router.delete("/remove/:id", deleteInterview)
router.patch("/update-feedback/:id", updateFeedback)
router.get("/feedbacks", getHrFeedback)
router.get("/getslots/:id", getHrSlots)
export default router