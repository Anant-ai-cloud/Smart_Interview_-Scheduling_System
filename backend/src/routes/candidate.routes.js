import express from "express"
import { getCandidateFeedback } from "../controllers/feedbackController.js"
import authenticate from "../middlewares/verifyJwt.js"
import { verifyCandidate } from "../middlewares/roleChecking.js"

const router = express.Router()

router.use(authenticate)

router.get("/feedbacks", verifyCandidate, getCandidateFeedback )



export default router