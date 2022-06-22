const mongoose = require("mongoose");
const clinicModelSchema = new mongoose.Schema(
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

const ClinicModel = mongoose.model("clinicModel", clinicModelSchema);

module.exports = ClinicModel;
