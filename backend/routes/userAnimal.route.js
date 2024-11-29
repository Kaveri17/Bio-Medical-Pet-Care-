import express from "express"
import { addUsersAnimal } from "../controllers/userAnimal.controller.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router()

router.post("/newuseranimal", verifyToken,addUsersAnimal)

export default router