import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
 import nodemailer from "nodemailer"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import contactRouter from "./routes/contactroute.js"
import animalRouter from "./routes/animalroute.js"
import vaccineRouter from "./routes/vaccineroute.js"
import userAnimalRouter from "./routes/userAnimal.route.js"
import breedRouter from "./routes/breedroute.js"
import dailyrecordRouter from "./routes/dailyrecord.route.js"
import reportRouter from "./routes/healthroute.js"
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
app.use("/api/report",reportRouter)


// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user:process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    },
})

// Function to send a vaccine notification email
const sendVaccineNotification = async (recipientEmail, vaccineName, dueDate) => {
  const mailOptions = {
    from: `"Vaccine Alerts" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: `Vaccine Alert: ${vaccineName}`,
    text: `Dear User,

This is a reminder that your animal is scheduled for the ${vaccineName} vaccine on ${dueDate}. 

Please ensure timely vaccination to maintain your animal's health.

Best regards,
Vaccine Alert System`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send vaccine notification');
  }
};
// API endpoint to send vaccine notifications
app.post('/send-notification', async (req, res) => {
  const { recipientEmail, vaccineName, dueDate } = req.body;

  // Validate request body
  if (!recipientEmail || !vaccineName || !dueDate) {
    return res.status(400).json({ error: 'Missing required fields: recipientEmail, vaccineName, dueDate' });
  }

  try {
    await sendVaccineNotification(recipientEmail, vaccineName, dueDate);
    res.status(200).json({ message: 'Vaccine notification sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send vaccine notification' });
  }
});
// app.use('/public/upload',express.static('public/upload'))

app.listen(PORT, ()=>{
   connectDB(); //db connection
   console.log("Server is running on port :",PORT )
})

