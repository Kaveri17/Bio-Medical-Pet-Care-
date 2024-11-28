import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
//app config
const app = express()
 
dotenv.config()
app.use(cors())
const PORT  = process.env.PORT || 8000;
//middleware
app.use(express.json())
app.use(cors());
//db connection
connectDB()

//api endpoints
app.use("/api/user",userRouter)
 app.get("/", (req, res) => {
    res.send("Hello Worldss")
 });
 app.listen(PORT, () => {
    console.log(`Connected Successfully at port ${PORT}`)
 })
