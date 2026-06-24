import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({
        success: false,
        message: "Not authorized, Login again",
      });
    }

    const decoded_token = jwt.verify(atoken, process.env.JWT_SECRET);

    if (
      decoded_token !==
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res.json({
        success: false,
        message: "Invalid Admin Credentials, Login again !",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;
