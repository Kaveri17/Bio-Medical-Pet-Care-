import { Router } from 'express';
import { createBenchmark, getAllBenchmarks, getBenchmarkById, updateBenchmark, deleteBenchmark, getBenchmarkData } from '../controllers/benchmark.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = Router();
router.post('/addbenchmark', verifyToken,createBenchmark);
router.get('/getallbenchmark', verifyToken,getAllBenchmarks);
router.get('/getbenchmark/:id',verifyToken, getBenchmarkById);
router.put('/updatebenchmark/:id', verifyToken,updateBenchmark);
router.delete('/deletebenchmark/:id',verifyToken, deleteBenchmark);
router.get("/getbenchmarkby/:animalType/:breed", getBenchmarkData);

export default router;
