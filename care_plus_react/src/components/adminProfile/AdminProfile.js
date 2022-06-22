import React from "react";

import { Grid, Button, Typography, Divider } from "@mui/material";
import PasswordField from "../passwordField/PasswordField";
const AdminProfile = () => {
  const [error, setError] = React.useState(null);
  const oldPasswordRef = React.useRef();
  const newPasswordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const submitHandler = () => {
    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!oldPassword && oldPassword === "") {
      return setError("Old Password Can't be empty");
    } else if (!newPassword && newPassword === "") {
      return setError("New Password Can't be empty");
    } else if (!confirmPassword && confirmPassword === "") {
      return setError("Confirm Password Can't be empty");
    } else if (newPassword !== confirmPassword) {
      return setError("New Password and Confirm Password do not match");
    }

    setError(null);

    const data = { oldPassword, newPassword, confirmPassword };
  };
  return (
    <>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item marginRight="auto">
          <Typography variant="h5" component="h5">
            Admin Profile
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container direction="column">
        <Grid item>
          <PasswordField label="Old Password" fRef={oldPasswordRef} />
        </Grid>
        <Grid item>
          <PasswordField label="New Password" fRef={newPasswordRef} />
        </Grid>
        <Grid item>
          <PasswordField
            label="Confirm New Password"
            fRef={confirmPasswordRef}
          />
        </Grid>
        {error && (
          <Grid item>
            <Typography variant="caption" component="p" sx={{ color: "red" }}>
              *{error}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Button variant="contained" onClick={submitHandler}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminProfile;
