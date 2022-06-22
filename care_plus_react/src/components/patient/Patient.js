import React from "react";
import { Grid, Button, Typography, Stack, Avatar, Paper } from "@mui/material";
import NewPatient from "../newPatient/NewPatient";

const SinglePatient = ({
  src,
  name,
  address,
  age,
  phone,
  reg,
  lastAppointment,
}) => {
  return (
    <Paper elevation={3} width="100%" style={{ padding: "15px" }}>
      <Stack direction="column" alignItems="start" spacing={1}>
        <Stack
          sx={{ width: "100%" }}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            alt={name}
            src={src}
            sx={{ width: "100px", height: "100px" }}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="caption">
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant="caption">({age})</Typography>
        </Stack>
        <Typography variant="caption">
          <strong>Address:</strong> {address}
        </Typography>
        <Typography variant="caption">
          <strong>Phone: </strong> {phone}
        </Typography>
        <Typography variant="caption">
          <strong>Registration:</strong> {reg}
        </Typography>
        <Typography variant="caption">
          <strong>Last Appointment:</strong> {lastAppointment}
        </Typography>
      </Stack>
    </Paper>
  );
};

const Patient = () => {
  const [open, setOpen] = React.useState(false);
  const handleAddNew = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container justifyContent="end">
        <Button variant="contained" size="small" onClick={handleAddNew}>
          Add New Patient
        </Button>
      </Grid>
      <Typography variant="h4">Patients List</Typography>

      <Grid container spacing={2}>
        {/* <Header /> */}
        <Grid item>
          <SinglePatient
            name="Nasyx Nadeem"
            src="https://images.unsplash.com/photo-1655693487557-be52fd36955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            age={20}
            address={"Sagipora Sopore"}
            phone="9149575307"
            reg="02-October-2020"
            lastAppointment="08-March-2022"
          />
        </Grid>
        <Grid item>
          <SinglePatient
            name="Nasyx Nadeem"
            src="https://images.unsplash.com/photo-1655693487557-be52fd36955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            age={20}
            address={"Sagipora Sopore"}
            phone="9149575307"
            reg="02-October-2020"
            lastAppointment="08-March-2022"
          />
        </Grid>
        <Grid item>
          <SinglePatient
            name="Nasyx Nadeem"
            src="https://images.unsplash.com/photo-1655693487557-be52fd36955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            age={20}
            address={"Sagipora Sopore"}
            phone="9149575307"
            reg="02-October-2020"
            lastAppointment="08-March-2022"
          />
        </Grid>
        <Grid item>
          <SinglePatient
            name="Nasyx Nadeem"
            src="https://images.unsplash.com/photo-1655693487557-be52fd36955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            age={20}
            address={"Sagipora Sopore"}
            phone="9149575307"
            reg="02-October-2020"
            lastAppointment="08-March-2022"
          />
        </Grid>
      </Grid>
      <NewPatient open={open} handleClose={handleClose} />
    </>
  );
};

export default Patient;
