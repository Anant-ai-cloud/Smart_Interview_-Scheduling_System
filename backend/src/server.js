import express from "express"
import "dotenv/config"
import dbcon from "./dbconn/dbcon.js"
import cookieparser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import adminRouter from "./routes/admin.routes.js"
import hrRouter from "./routes/hr.routes.js"


const app = express()
dbcon()

const { PORT } = process.env

app.use(express.json({ limit: "5mb" }))
app.use(cookieparser())
app.use(cors({ origin: "http://localhost:5173", credentials: true}))

app.listen(PORT , (req, res)=>{

    console.log(`server is listening on ${PORT}`)
})

app.use("/api/auth", authRouter)
app.use("/api/admin", adminRouter)
app.use("/api/hr", hrRouter)