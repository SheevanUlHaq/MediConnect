import express from "express";

import { doctorsList } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/doctors-list", doctorsList);

export default doctorRouter;
