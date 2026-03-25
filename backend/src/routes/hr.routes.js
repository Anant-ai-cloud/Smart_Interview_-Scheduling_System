import express from "express"
import { gethrUsers } from "../controllers/userController.js"
import authenticate from "../middlewares/verifyJwt.js"
import { verifyHr } from "../middlewares/roleChecking.js"
import { createInterview } from "../controllers/interviewController.js"

const router = express.Router()

router.use(authenticate)

router.get("/users", verifyHr, gethrUsers)
router.post("/interview", verifyHr, createInterview)

export default router