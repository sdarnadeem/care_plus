const mongoose = require("mongoose");
const doctorModelSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },

    otp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const DoctorModel = mongoose.model("doctorModel", doctorModelSchema);

module.exports = DoctorModel;
