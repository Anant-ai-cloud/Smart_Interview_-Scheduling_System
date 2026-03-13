import mongoose from "mongoose"
import { ENV } from "../env.js"

const dbcon = async()=>{
    try {

        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log(`MongoDb connected successfully ${conn.connection.host}`)
        
    } catch (error) {
        console.log(error)
    }
}

export default dbcon