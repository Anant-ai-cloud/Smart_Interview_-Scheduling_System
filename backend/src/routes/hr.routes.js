import express from "express"
import { gethrUsers } from "../controllers/userController.js"
import authenticate from "../middlewares/verifyJwt.js"
import { verifyHr } from "../middlewares/roleChecking.js"

const router = express.Router()

router.use(authenticate)

router.get("/users", verifyHr, gethrUsers)

export default router