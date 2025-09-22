import express from "express";
import { createSistema, getAllSistemas, getSistemasById } from "../controllers/RPGcontroller.js";

const router = express.Router();
router.get("/", getAllSistemas);
router.get("/:id", getSistemasById);
router.post("/", createSistema);

export default router;