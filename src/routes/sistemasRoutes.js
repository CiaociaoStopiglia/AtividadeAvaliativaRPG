import express from "express";
import { createSistema, getAllSistemas, getSistemasById, deleteSistema, updateSistema } from "../controllers/RPGcontroller.js";

const router = express.Router();
router.get("/", getAllSistemas);
router.get("/:id", getSistemasById);
router.post("/", createSistema);
router.delete("/:id", deleteSistema);
router.put("/:id", updateSistema);

export default router;