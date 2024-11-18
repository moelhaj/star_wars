import express from "express";
import characterRoutes from "./character/character.route";

const router = express.Router();

router.use("/characters", characterRoutes);

export default router;
