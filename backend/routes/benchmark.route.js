import { Router } from 'express';
import { createBenchmark, getAllBenchmarks, getBenchmarkById, updateBenchmark, deleteBenchmark, getBenchmarkData } from '../controllers/benchmark.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = Router();
router.post('/addbenchmark', createBenchmark);
router.get('/getallbenchmark', getAllBenchmarks);
router.get('/getbenchmark/:id', getBenchmarkById);
router.put('/updatebenchmark/:id',updateBenchmark);
router.delete('/deletebenchmark/:id', deleteBenchmark);
router.get("/getbenchmarkby/:animalType/:breed", getBenchmarkData);

export default router;
