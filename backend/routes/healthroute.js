import express from 'express';
import { generateHealthReport } from '../controllers/healthreportcontroller';

const router = express.Router();

// Route to generate a health report
router.post('/generate-report', async (req, res) => {
  try {
    const userData = req.body; // Get user data from the request body
    const report = await generateHealthReport(userData); // Pass user data to the controller for processing
    await report.save(); // Save the health report to MongoDB
    res.status(200).json({ message: 'Health report generated successfully', report });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
