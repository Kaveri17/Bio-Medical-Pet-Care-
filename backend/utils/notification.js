import nodemailer from "nodemailer";

export const sendAlertNotification = async ({ message, email }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "kaveripunu@gmail.com",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "animalhealthcare@example.com",
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
