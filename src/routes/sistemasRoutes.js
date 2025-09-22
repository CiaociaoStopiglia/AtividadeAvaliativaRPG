import express from "express";
import { getAllSistemas, getSistemaById } from "../controllers/RPGcontroller.js";

const router = express.Router();
router.get("/", getAllSistemas);
router.get("/:id", getSistemaById);

export default router;