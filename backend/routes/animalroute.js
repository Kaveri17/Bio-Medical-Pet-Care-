import express from "express";
import {
  addanimal,
  deleteAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
} from "../controllers/animalcontroller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();


router.post("/addanimal", addanimal);
router.get("/getallanimal",getAllAnimals);
router.get("/getanimals/:id", verifyToken,getAnimalById);
router.put("/update/:id",verifyToken, updateAnimal);
router.delete("/delete/:id",verifyToken, deleteAnimal);

export default router;
