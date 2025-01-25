import express from 'express';
import { getAllVaccines, getVaccineById, getVaccineByName, recommendVaccines,addVaccine } from '../controllers/vaccine.controller.js';
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router();

// Routes for vaccines
router.get('/getallvaccines',getAllVaccines);
router.post('/addvaccine', addVaccine);

// router.get('/getvaccine/:id',verifyToken, getVaccineById);
router.get('/getvaccine/:id', getVaccineById);
router.get('/getvaccinename/:name', verifyToken,getVaccineByName); 
router.get('/recommend', recommendVaccines);

export default router;
