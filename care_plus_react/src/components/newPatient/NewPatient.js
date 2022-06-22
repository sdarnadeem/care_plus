import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";

const NewPatient = ({ open, handleClose }) => {
  const [error, setError] = React.useState(null);
  const nameRef = React.useRef();
  const ageRef = React.useRef();
  const addressRef = React.useRef();
  const phoneRef = React.useRef();
  const profileRef = React.useRef();

  const onSubmit = () => {
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const profile = profileRef.current.value;

    console.log(name);

    if (!name && name === "") {
      return setError("Name can't be empty");
    } else if (!age && age === "") {
      return setError("Age can't be empty");
    } else if (!phone && phone === "") {
      return setError("Phone Number can't be empty");
    } else if (phone.length < 10) {
      return setError("Invalid Phone Number");
    } else if (!address && address === "") {
      return setError("Address can't be empty");
    } else if (!profile && profile === "") {
      return setError("Profile can't be empty");
    }

    setError(null);

    const data = { name, age, phone, address, profile };

    nameRef.current.value = "";
    ageRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    profileRef.current.value = "";
    handleClose();
  };

  const onCancel = () => {
    nameRef.current.value = "";
    ageRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    profileRef.current.value = "";
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Create a new patient</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="text"
          fullWidth
          variant="standard"
          inputRef={nameRef}
        />
        <TextField
          margin="dense"
          id="age"
          label="Age"
          type="number"
          max="100"
          min="1"
          variant="standard"
          style={{ marginRight: "20px" }}
          inputRef={ageRef}
        />
        <TextField
          margin="dense"
          id="phone"
          label="Phone Number"
          type="text"
          variant="standard"
          inputRef={phoneRef}
        />
        <TextField
          margin="dense"
          id="addresss"
          label="Addresss"
          type="text"
          fullWidth
          variant="standard"
          inputRef={addressRef}
        />
        <TextField
          margin="dense"
          id="profile"
          label="Profile Picture"
          type="file"
          variant="standard"
          sx={{ outline: "none !important", border: "none !important" }}
          inputRef={profileRef}
        />
        {error && (
          <Typography variant="caption" sx={{ color: "red", display: "block" }}>
            *{error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="contained" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="small" variant="contained" onClick={onSubmit} autofocus>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewPatient;
