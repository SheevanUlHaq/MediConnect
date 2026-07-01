import express from "express";
import upload from "../middlewares/multer.js";

import {
  loginUser,
  registerUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";
import userAuth from "../middlewares/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", userAuth, getProfile);
userRouter.post(
  "/update-profile",
  userAuth,
  upload.single("image"),
  updateProfile,
);

export default userRouter;
