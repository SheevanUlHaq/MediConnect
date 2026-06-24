import express from "express";
import { addDoctor, login } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", adminAuth, upload.single("image"), addDoctor);
adminRouter.post("/login", login);

export default adminRouter;
