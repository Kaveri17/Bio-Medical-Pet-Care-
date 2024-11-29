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

//app config
dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
//middleware
app.use(express.json());

// allows us to parse the incoming cookies
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:5173' ,
    credentials: true
}));

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

app.use('/public/upload',express.static('public/upload'))

app.listen(PORT, ()=>{
   connectDB(); //db connection
   console.log("Server is running on port :",PORT )
})

