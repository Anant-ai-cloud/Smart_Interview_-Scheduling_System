import express from "express"
import { gethrUsers } from "../controllers/userController.js"
import authenticate from "../middlewares/verifyJwt.js"
import { verifyHr } from "../middlewares/roleChecking.js"
import { createInterview, getInterviews, deleteInterview } from "../controllers/interviewController.js"

const router = express.Router()

router.use(authenticate, verifyHr)

router.get("/users", gethrUsers)
router.post("/interview", createInterview)
router.get("/get/interviews", getInterviews)
router.delete("/remove/:id", deleteInterview)

export default router