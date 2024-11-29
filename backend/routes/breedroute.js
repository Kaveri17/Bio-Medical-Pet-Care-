import express from "express";
import { createBreed } from "../controllers/breedcontroller.js";

const router = express.Router();

router.post("/addbreed", createBreed);

export default router;
