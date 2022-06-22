import React from "react";
import { useSearchParams } from "react-router-dom";

import Doctors from "./doctors/Doctors.jsx";
import Analytics from "./analytics/Analytics";
import Clinics from "./clinics/Clinics";
import Fees from "./fees/Fees.js";
import Payments from "./payments/Payments.js";
import Commission from "./commission/Commission";
import AdminProfile from "./adminProfile/AdminProfile.js";

import { Stack } from "@mui/material";
import Patient from "./patient/Patient.js";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";

const MiddleSide = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const renderTab = () => {
    switch (tab) {
      case "doctors":
        return <Doctors />;
      case "patient":
        return <Patient />;
      case "clinics":
        return <Clinics />;
      case "fees":
        return <Fees />;
      case "payments":
        return <Payments />;
      case "commission":
        return <Commission />;
      case "admin-profile":
        return <AdminProfile />;
      default:
        return <Analytics />;
    }
  };
  return (
    <Stack spacing={3}>
      {/* <TextField
        elevation={2}
        id="input-with-icon-textfield"
        width="30%"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      /> */}
      {renderTab()}
    </Stack>
  );
};

export default MiddleSide;
