import express from "express"
import { addanimal, getAllAnimals, getAnimalById } from "../controllers/animalcontroller.js";



const router = express.Router();

router.post("/addanimal", addanimal);
router.get("/getallanimal",getAllAnimals);
router.get("/getanimals/:id",getAnimalById)

export default router;