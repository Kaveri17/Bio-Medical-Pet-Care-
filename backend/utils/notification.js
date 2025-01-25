import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

async function sendNotification(notificationOptions) {
    try {
        const info = await transporter.sendMail({
            from: notificationOptions.from,
            to: notificationOptions.to,
            subject: notificationOptions.subject,
            text: notificationOptions.text,
            html: notificationOptions.html,
        });

        console.log("Notification sent: %s", info.messageId);
        return info; // Optionally return the info object for further processing
    } catch (error) {
        console.error("Error sending notification: %s", error.message);
        throw new Error(`Failed to send notification: ${error.message}`);
    }
}

export default sendNotification;
