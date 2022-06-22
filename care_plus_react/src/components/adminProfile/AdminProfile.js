import React from "react";

import {
  Grid,
  Button,
  Typography,
  Divider,
  Avatar,
  TextField,
} from "@mui/material";

const AdminProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePassword = () => {
    setShowPassword((prev) => !prev);
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
          <TextField
            margin="dense"
            id="old"
            label="Old Password"
            type={showPassword ? "text" : "password"}
            max="100"
            min="1"
            variant="standard"
            style={{ marginRight: "20px" }}
            inputRef={""}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="dense"
            id="new"
            label="New Password"
            type={showPassword ? "text" : "password"}
            max="100"
            min="1"
            variant="standard"
            style={{ marginRight: "20px" }}
            inputRef={""}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="dense"
            id="new"
            label="Confirm New Password"
            type={showPassword ? "text" : "password"}
            max="100"
            min="1"
            variant="standard"
            style={{ marginBottom: "20px" }}
            inputRef={""}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handlePassword}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminProfile;
