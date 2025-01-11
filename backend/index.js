import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"

import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import contactRouter from "./routes/contactroute.js"
import animalRouter from "./routes/animalroute.js"
import vaccineRouter from "./routes/vaccineroute.js"
import userAnimalRouter from "./routes/userAnimal.route.js"
import breedRouter from "./routes/breedroute.js"
import dailyrecordRouter from "./routes/dailyrecord.route.js"
//app config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
//middleware
app.use(express.json());

// allows us to parse the incoming cookies
app.use(cookieParser())

const corsOptions = {
  origin: 'http://localhost:5173',  // Allow only this frontend URL
  credentials: true,  // Allow cookies and credentials to be sent
};

app.use(cors(corsOptions));

//api endpoints
app.get("/", (req, res) => {
  res.send("Hello Worldss");
});

app.use("/api/user", userRouter);
app.use("/api/contact",contactRouter)
app.use("/api/animal",animalRouter)
app.use("/api/vaccine", vaccineRouter)
app.use("/api/breed",breedRouter)
app.use("/api/useranimal",userAnimalRouter)
app.use("/api/daily",dailyrecordRouter)


// app.use('/public/upload',express.static('public/upload'))

app.listen(PORT, ()=>{
   connectDB(); //db connection
   console.log("Server is running on port :",PORT )
})

