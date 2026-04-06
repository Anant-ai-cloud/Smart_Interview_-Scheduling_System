import express from "express"
import { register, login, logout } from "../controllers/authController.js"
import authenticate from "../middlewares/verifyJwt.js"

const router = express.Router()

router.post("/register",  register)
router.post("/login", login)
router.post("/logout", authenticate, logout)
router.get("/check", authenticate, (req, res)=>{ const user = req.user; return res.status(200).json(user) })


export default router