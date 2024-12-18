import express from "express";
import {
  addanimal,
  deleteAnimal,
  getAllAnimals,
  getAnimalById,
  updateAnimal,
} from "../controllers/animalcontroller.js";

const router = express.Router();


router.post("/addanimal", addanimal);
router.get("/getallanimal", getAllAnimals);
router.get("/getanimals/:id", getAnimalById);
router.put("/update/:id", updateAnimal);
router.delete("/delete/:id", deleteAnimal);

export default router;
