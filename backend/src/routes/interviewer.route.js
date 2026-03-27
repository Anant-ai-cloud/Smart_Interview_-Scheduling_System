import express from "express"
import { verifyInterviewer } from "../middlewares/roleChecking.js"
import authenticate from "../middlewares/verifyJwt.js"
import { createFeedback } from "../controllers/feedbackController.js"

const router = express.Router()

router.use(authenticate, verifyInterviewer)

router.post("/create-feedback/:id", createFeedback)

export default router