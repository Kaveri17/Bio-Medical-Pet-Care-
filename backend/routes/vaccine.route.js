import express from 'express';
// import { getAllVaccines, getVaccineById, getVaccineByName, recommendVaccines,addVaccine } from '../controllers/vaccine.controller.js';
import {
  createVaccine,
  getAllVaccines,
  getVaccineById,
  updateVaccine,
  deleteVaccine,
  recommendVaccines,
  acceptVaccine,
  rejectVaccine,
 

  getAcceptedVaccines,
  getRejectedVaccines
} from "../controllers/vaccine.controller.js";
import { verifyToken } from "../middleware/verifyToken.js"


const router = express.Router();

// Routes for vaccines
// router.get('/getallvaccines',getAllVaccines);
// router.post('/addvaccine', addVaccine);

// // router.get('/getvaccine/:id',verifyToken, getVaccineById);
// router.get('/getvaccine/:id', getVaccineById);
// router.get('/getvaccinename/:name', verifyToken,getVaccineByName); 
// router.get('/recommend', recommendVaccines);

router.get('/recommend/:userAnimalId',verifyToken, recommendVaccines);


router.post("/addvaccine", createVaccine); // Create a new vaccine
router.get("/getallvaccine",getAllVaccines); // Get all vaccines
router.get("/getbyid/:id",verifyToken, getVaccineById); // Get a specific vaccine by ID
router.put("/update/:id",verifyToken, updateVaccine); // Update a vaccine by ID
router.delete("/delete/:id", deleteVaccine); // Delete a vaccine by ID

// vaccine accept
router.post("/accept-vaccine", verifyToken,acceptVaccine);
router.post("/reject-vaccine",verifyToken, rejectVaccine);
router.get("/getacceptedvaccine/:userAnimalId",verifyToken,getAcceptedVaccines)
router.get("/getrejectedvaccine/:userAnimalId",verifyToken,getRejectedVaccines)


export default router;
