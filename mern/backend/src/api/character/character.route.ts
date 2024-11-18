import express from "express";
import * as controller from "./character.controller";

const router = express.Router();

router.get("/:page", controller.getAll);

export default router;
