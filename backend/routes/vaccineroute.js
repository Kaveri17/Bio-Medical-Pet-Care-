import express from "express";
import {
  addVaccine,
  getVaccines,
  sendVaccineAlerts,
} from "../controllers/vaccine.controller.js";

const router = express.Router();

// Route to add a new vaccine
router.post("/add", addVaccine);

// Route to get all vaccines
router.get("/all", getVaccines);

// Route to send vaccine alerts
router.post("/alerts", sendVaccineAlerts);

export default router;
