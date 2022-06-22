require("dotenv").config();
const Admin = require("../../models/admin/adminModel");
const AdminOTP = require("../../models/admin/adminOTP");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 62 * 62 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  user.password = undefined;
  res.cookie("bearerToken", token, cookieOptions);
  res.status(statusCode).json({
    status: "success",
    message: "Login Successfully",
    data: {
      user,
      token,
    },
  });
};

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).json({
        status: "success",
        message: "Enter Password Or Email",
      });
    } else {
      const admin = await Admin.findOne({ email }).select("+password");
      if (!admin || !(await admin.correctPassword(password, admin.password))) {
        res.status(403).json({
          status: "unauthorized",
          message: "Invalid Username or Password",
        });
      } else {
        // createSendToken(admin, 200, res);
        const otp =
          `${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
            Math.random() * 9 + 1
          )}${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
            Math.random() * 9 + 1
          )}` * 1;
        const checkOTP = await AdminOTP.findOne({ email });
        if (!checkOTP) {
          await AdminOTP.create({
            email,
            otp,
          });
        } else {
          checkOTP.otp = otp;
          await checkOTP.save();
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.NODEMAILER_MAIL,
            pass: process.env.NODEMAILER_PASS,
          },
        });
        const mailOptions = {
          from: process.env.NODEMAILER_MAIL,
          to: email,
          subject: "OTP Verification Email",
          text: `Your otp is ${otp}`,
        };
        console.log(otp);
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) console.log(err);
        });

        res.status(200).json({
          status: "success",
          message: "OTP Send To you Email Id",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",

      message: "Internal Server Error",
    });
  }
};

exports.otpLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = req.body.otp * 1;

    const adminOTP = await AdminOTP.findOne({ email });
    if (adminOTP) {
      const admin = await Admin.findOne({ email });
      if (admin) {
        var otpDate = new Date(adminOTP.updatedAt.getTime() + 10 * 60000);
        if (adminOTP.otp === otp && otpDate > new Date(Date.now())) {
          createSendToken(admin, 200, res);
          await AdminOTP.deleteOne({ email });
        } else if (otpDate < new Date(Date.now())) {
          res.status(401).json({
            status: "unauthorized ",
            message: "Otp Expire",
          });
        } else {
          res.status(401).json({
            status: "unauthorized ",
            message: "Incorrect OTP",
          });
        }
      } else {
        res
          .status(404)
          .json({ status: "not found", message: "user not found" });
      }
    } else {
      res.status(401).json({
        status: "unauthorized ",
        message: "Incorrect OTP",
      });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

// exports.forgetPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) {
//       res.status(401).json({
//         status: "success",
//         message: "Invalid Email Id",
//       });
//     }
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//       res.status(404).json({
//         status: "success",
//         message: "Email id not found",
//       });
//     } else {
//       const otp =
//         `${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
//           Math.random() * 9 + 1
//         )}${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
//           Math.random() * 9 + 1
//         )}` * 1;
//       const checkOTP = await AdminOTP.findOne({ email });
//       if (!checkOTP) {
//         await AdminOTP.create({
//           email,
//           otp,
//         });
//         console.log(otp);
//         res.status(200).json({
//           status: "success",
//           message: "OTP Send To you Email Id",
//         });
//       } else {
//         checkOTP.otp = otp;
//         await checkOTP.save();
//         const transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: process.env.NODEMAILER_MAIL,
//             pass: process.env.NODEMAILER_PASS,
//           },
//         });
//         const mailOptions = {
//           from: process.env.NODEMAILER_MAIL,
//           to: email,
//           subject: "OTP Verification Email",
//           text: `Your otp is ${otp}`,
//         };
//         console.log(otp);
//         transporter.sendMail(mailOptions, (err, info) => {
//           if (err) console.log(err);
//         });

//         res.status(200).json({
//           status: "success",
//           message: "OTP Send To you Email Id",
//         });
//       }
//     }
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       message: "Internal server Error",
//     });
//   }
// };

// exports.userProfileChangePassword = async (req, res) => {
//   try {
//     const { id, password, passwordConfirm } = req.body;
//     if (password === passwordConfirm) {
//       const admin = await Admin.findById(id).select("+password");
//       admin.password = req.body.password;
//       admin.passwordConfirm = req.body.password;
//       await admin.save();

//       res.status(200).json({
//         status: "success",
//         message: "Password Changed Successfully ",
//       });
//     } else {
//       res.status(409).json({
//         status: "conflict",
//         message: "Password Must Be Same",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       message: "Internal server Error",
//     });
//   }
// };

// exports.changePasswordOTP = async (req, res) => {
//   try {
//     const { email, password, passwordConfirm } = req.body;
//     const otp = req.body.otp * 1;
//     const checkEmail = await Admin.findOne({ email }).select("+password");
//     if (checkEmail) {
//       const adminOTP = await AdminOTP.findOne({ email });
//       var otpDate = new Date(adminOTP.updatedAt.getTime() + 10 * 60000);
//       if (adminOTP.otp === otp && otpDate > new Date(Date.now())) {
//         checkEmail.password = password;
//         checkEmail.passwordConfirm = passwordConfirm;
//         await checkEmail.save();

//         res.status(200).json({
//           status: "success",
//           message: "Password change Successfully",
//         });
//       } else if (otpDate < new Date(Date.now())) {
//         res.status(401).json({
//           status: "unauthorized ",
//           message: "Otp Expire",
//         });
//       } else {
//         res.status(401).json({
//           status: "unauthorized ",
//           message: "Incorrect OTP",
//         });
//       }
//     }
//     // res.status(404).json({
//     //   status: "not found ",
//     //   message: "Email not found",
//     // });
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//     });
//   }
// };

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.cookie && req.headers.cookie.startsWith("bearer")) {
      token = req.headers.cookie.split("=")[1];
    }

    if (!token) {
      res.status(401).json({
        status: "unauthorized",
        message: "you are not logged in ! please log in to get access",
      });
    } else {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

      currentUser = await Admin.findById(decoded.id);
      if (!currentUser) {
        res.status(500).json({
          status: "success",
          message: "Something went wrong",
        });
      } else {
      }

      req.admin = currentUser;

      next();
    }
    console.log("hello form auth.protect");
  } catch (error) {
    res.status(401).clearCookie("bearerToken").json({
      status: "unauthorized",
      message: "you are not logged in ! please log in to get error access",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res
      .status(200)
      .clearCookie("bearerToken")
      .json({ message: "Logout successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);
    res.status(200).json({ status: "success", message: "Successfully", admin });
  } catch (error) {
    res
      .status(401)
      .json({ status: "unauthorized", message: "unauthorized User" })
      .clearCookie("bearerToken");
  }
};

exports.changeAdminPasswords = async (req, res) => {
  try {
    const { currentPassword, password, passwordConfirm } = req.body;
    const admin = await Admin.findById(req.admin._id).select("+password");
    console.log(await admin.correctPassword(currentPassword, admin.password));
    if (!(await admin.correctPassword(currentPassword, admin.password))) {
      res.status(403).json({
        status: "unauthorized",
        message: "Invalid Current password ",
      });
    } else {
      admin.password = password;
      admin.passwordConfirm = passwordConfirm;
      await admin.save();
      res
        .status(200)
        .json({ status: "success", message: "Password successfully changed" });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
