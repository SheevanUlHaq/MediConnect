import express from "express";
import cors from "cors";
import "dotenv/config";
import cloudinary from "cloudinary";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import adminRouter from "./routes/adminRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/admin", adminRouter);

// start server
app.listen(port, () => {
  console.log("Server is listening on port", port);
});
