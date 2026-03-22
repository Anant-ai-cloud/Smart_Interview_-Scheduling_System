import express from "express"
import { verifyAdmin } from "../middlewares/roleChecking.js"
import authenticate from "../middlewares/verifyJwt.js"
import { getAllUsers } from "../controllers/userController.js"

const router = express.Router()

router.get("/allusers", authenticate, verifyAdmin, getAllUsers)

export default router