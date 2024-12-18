import nodemailer from "nodemailer";

export const sendAlertNotification = async ({ message, email }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "vitalvets@gmail.com",
      to: email,
      subject: "Vaccine Alert Notification",
      text: message,
    };


    await transporter.sendMail(mailOptions);
    console.log("Notification sent to:", email);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};


// Sample endpoint to trigger email notifications (could be scheduled as well)
app.get('/send-reminder', async (req, res) => {
    const { message, email } = req.query;
    await sendAlertNotification({ message, email });
    res.send('Email sent');
  });
  
  // Example of a cron job to send email notifications daily at 9 AM
  cron.schedule('0 9 * * *', async () => {
    // Here, you'd fetch users from your database and send a reminder for vaccines
    const users = [
      { email: 'user1@example.com' },
      { email: 'user2@example.com' },
    ];
  
    users.forEach(user => {
      sendAlertNotification({
        message: "Reminder: Time for your pet's vaccine!",
        email: user.email,
      });
    });
  });
  
