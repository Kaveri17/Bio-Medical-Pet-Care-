import express from "express"
import { addUsersAnimal, getUserAnimals } from "../controllers/userAnimal.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.post("/newuseranimal", verifyToken,addUsersAnimal)
router.get("/alluseranimals", verifyToken, getUserAnimals);

export default router