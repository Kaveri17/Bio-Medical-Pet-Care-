import express from 'express';
import { sendVaccineAcceptanceEmail, sendVaccineRejectionEmail } from '../utils/emailUtils';

const router = express.Router();

// Route to send vaccine acceptance email
router.post('/accept-vaccine', async (req, res) => {
    const { email, animalName, vaccineName } = req.body;

    if (!email || !animalName || !vaccineName) {
        return res.status(400).send({ error: 'Missing required fields' });
    }

    const mailOptions = {
        from: "your-email@example.com", // Replace with your sender email
        to: email, // Recipient email
        subject: `Vaccine Acceptance for ${animalName}`,
        text: `The vaccine '${vaccineName}' has been accepted for your animal ${animalName}.`,
        html: `<html><body><h1>Vaccine Accepted</h1><p>The vaccine '${vaccineName}' has been accepted for your animal ${animalName}.</p></body></html>`,
    };

    try {
        await sendVaccineAcceptanceEmail(mailOptions);
        res.status(200).send({ message: 'Vaccine acceptance email sent successfully.' });
    } catch (error) {
        res.status(500).send({ error: 'Error sending vaccine acceptance email' });
    }
});

// Route to send vaccine rejection email
router.post('/reject-vaccine', async (req, res) => {
    const { email, animalName, vaccineName } = req.body;

    if (!email || !animalName || !vaccineName) {
        return res.status(400).send({ error: 'Missing required fields' });
    }

    const mailOptions = {
        from: "your-email@example.com", // Replace with your sender email
        to: email, // Recipient email
        subject: `Vaccine Rejection for ${animalName}`,
        text: `The vaccine '${vaccineName}' has been rejected for your animal ${animalName}.`,
        html: `<html><body><h1>Vaccine Rejected</h1><p>The vaccine '${vaccineName}' has been rejected for your animal ${animalName}.</p></body></html>`,
    };

    try {
        await sendVaccineRejectionEmail(mailOptions);
        res.status(200).send({ message: 'Vaccine rejection email sent successfully.' });
    } catch (error) {
        res.status(500).send({ error: 'Error sending vaccine rejection email' });
    }
});

export default router;
