import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    },
});

async function sendVaccineAcceptanceEmail(mailOptions) {
    try {
        const info = await transporter.sendMail({
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject,
            text: mailOptions.text,
            html: mailOptions.html,
        });
        console.log("Vaccine acceptance email sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending vaccine acceptance email", error);
    }
}

async function sendVaccineRejectionEmail(mailOptions) {
    try {
        const info = await transporter.sendMail({
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject,
            text: mailOptions.text,
            html: mailOptions.html,
        });
        console.log("Vaccine rejection email sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending vaccine rejection email", error);
    }
}

export { sendVaccineAcceptanceEmail, sendVaccineRejectionEmail };
