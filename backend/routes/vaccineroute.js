import express from 'express';
import { getAllVaccines, getVaccineById, getVaccineByName, recommendVaccines } from '../controllers/vaccine.controller.js';

const router = express.Router();

// Routes for vaccines
router.get('/getallvaccines', getAllVaccines);
router.get('/getvaccine/:id', getVaccineById);
router.get('/getvaccinename/:name', getVaccineByName); 
router.get('/recommend', recommendVaccines);

export default router;
