import express from "express"
import { getCandidateFeedback } from "../controllers/feedbackController.js"
import authenticate from "../middlewares/verifyJwt.js"
import { verifyCandidate } from "../middlewares/roleChecking.js"
import { getCandidateInterviews } from "../controllers/interviewController.js"

const router = express.Router()

router.use(authenticate)

router.get("/feedbacks", verifyCandidate, getCandidateFeedback )
router.get("/interviews", verifyCandidate, getCandidateInterviews)


export default router