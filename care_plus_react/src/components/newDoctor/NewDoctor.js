import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";

const NewDoctor = ({ open, handleClose, data }) => {
  const [error, setError] = React.useState(null);
  const fNameRef = React.useRef();
  const lNameRef = React.useRef();
  const descriptionRef = React.useRef();
  const addressRef = React.useRef();
  const phoneRef = React.useRef();
  const logoRef = React.useRef();
  const clinicRef = React.useRef();

  const onSubmit = () => {
    const fName = fNameRef.current.value;
    const lName = lNameRef.current.value;
    const description = descriptionRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const clinic = clinicRef.current.value;
    const logo = logoRef.current.value;

    if (!fName && fName === "") {
      return setError("First Name can't be empty");
    } else if (!lName && lName === "") {
      return setError("Last Name can't be empty");
    } else if (!description && description === "") {
      return setError("description can't be empty");
    } else if (!phone && phone === "") {
      return setError("Phone Number can't be empty");
    } else if (phone.length < 10) {
      return setError("Invalid Phone Number");
    } else if (!address && address === "") {
      return setError("Address can't be empty");
    } else if (!clinic && clinic === "") {
      return setError("Clinic can't be empty");
    } else if (!logo && logo === "") {
      return setError("logo can't be empty");
    }

    setError(null);

    const data = { fName, lName, description, phone, address, logo, clinic };

    fNameRef.current.value = "";
    descriptionRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    logoRef.current.value = "";
    handleClose();
  };

  const onCancel = () => {
    fNameRef.current.value = "";
    descriptionRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    logoRef.current.value = "";
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{data.text}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="fName"
          label="First Name"
          type="text"
          style={{ marginRight: "10px" }}
          value={data.name}
          variant="standard"
          inputRef={fNameRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="lName"
          label="Last Name"
          type="text"
          value={data.name}
          variant="standard"
          inputRef={lNameRef}
        />

        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          value={data.description}
          fullWidth
          variant="standard"
          inputRef={descriptionRef}
        />
        <TextField
          fullwidth
          margin="dense"
          id="phone"
          label="Contact Details"
          type="text"
          value={data.contact}
          variant="standard"
          inputRef={phoneRef}
        />
        <TextField
          margin="dense"
          id="addresss"
          label="Addresss"
          type="text"
          value={data.address}
          fullWidth
          variant="standard"
          inputRef={addressRef}
        />
        <TextField
          margin="dense"
          id="clinic"
          label="Clinic"
          type="text"
          value={data.clinic}
          style={{ marginBottom: "10px" }}
          fullWidth
          variant="standard"
          inputRef={clinicRef}
        />

        <TextField
          fullwidth
          margin="dense"
          id="logo"
          label="Profile"
          type="file"
          variant="standard"
          sx={{ outline: "none !important", border: "none !important" }}
          inputRef={logoRef}
        />
        {error && (
          <Typography variant="caption" sx={{ color: "red", display: "block" }}>
            *{error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="standard" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="small" variant="contained" onClick={onSubmit} autofocus>
          {data.btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewDoctor;
