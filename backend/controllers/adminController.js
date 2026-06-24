import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

import doctorModel from "../models/doctorModel.js";

// Api for login Admin
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// Api for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    // checking if any missing data
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "Data missing",
      });
    }

    // Validating email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    // Validating password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password length is small",
      });
    }

    // Generating hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Uploading image to cloudinary and getting it's URL
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
      folder: `mediconnect/doctors/${speciality}`,
    });
    const imageUrl = imageUpload.secure_url;

    // Creating new Doctor
    const doctorData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience: Number(experience),
      about,
      fees: Number(fees),
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    console.log("Doctor Added");
    res.json({ success: true, message: "Doctor Added successfully" });
  } catch (error) {
    console.log("Doctor not added:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { addDoctor, login };
