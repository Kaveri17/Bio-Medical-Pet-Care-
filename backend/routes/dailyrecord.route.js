import express from "express"
import { createDailyRecord, deleteDailyRecord, getAllDailyRecords, getDailyRecordById, updateDailyRecord } from "../controllers/dailyrecordcontroller.js";

const router = express.Router();

router.post("/dailyrecord",createDailyRecord)
router.get("/dailyrecords",getAllDailyRecords)
router.get('/dailyrecord/:id', getDailyRecordById)
router.put('/dailyrecord/:id', updateDailyRecord)
router.delete('/dailyrecord/:id', deleteDailyRecord)


export default router;