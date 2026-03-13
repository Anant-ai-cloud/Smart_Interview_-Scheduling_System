import express from "express"
import "dotenv/config"
import dbcon from "./dbconn/dbcon.js"


const app = express()
dbcon()

const { PORT } = process.env
app.listen(PORT , (req, res)=>{

    console.log(`server is listening on ${PORT}`)
})