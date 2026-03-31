import express from "express"
import { verifyAdmin } from "../middlewares/roleChecking.js"
import authenticate from "../middlewares/verifyJwt.js"
import { getAllUsers } from "../controllers/userController.js"
import { deleteFeedback, getAllFeedbacks } from "../controllers/feedbackController.js"
import { getAllInterviews } from "../controllers/interviewController.js"
import { deleteUser } from "../controllers/userController.js"
import { registerByAdmin } from "../controllers/authController.js"

const router = express.Router()

router.use(authenticate, verifyAdmin)

router.post("/register", registerByAdmin)
router.get("/allusers", getAllUsers)
router.delete("/delete-user/:id", deleteUser)
router.get("/allfeedbacks", getAllFeedbacks)
router.get("/allinterviews", getAllInterviews)
router.delete("/delete-feedback/:id", deleteFeedback)


export default router