import express from "express"
import { createDailyRecord, deleteDailyRecord, getAllDailyRecords, getComparisonReport, getDailyRecordById, updateDailyRecord } from "../controllers/dailyrecordcontroller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/dailyrecord",verifyToken,createDailyRecord)
router.get("/dailyrecords",verifyToken,getAllDailyRecords)
router.get('/dailyrecord/:id',verifyToken, getDailyRecordById)
router.put('/dailyrecord/:id',verifyToken, updateDailyRecord)
router.delete('/dailyrecord/:id',verifyToken, deleteDailyRecord)
router.get("/comparison-report/:userId/:animalId", getComparisonReport);

export default router;