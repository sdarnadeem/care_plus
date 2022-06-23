import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const NewPatient = ({ open, handleClose, data }) => {
  const [openTime, setOpenTime] = React.useState(new Date(data.open));
  const [closeTime, setCloseTime] = React.useState(new Date(data.close));
  const [error, setError] = React.useState(null);
  const nameRef = React.useRef();
  const descriptionRef = React.useRef();
  const addressRef = React.useRef();
  const phoneRef = React.useRef();
  const logoRef = React.useRef();

  const onSubmit = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const logo = logoRef.current.value;

    console.log(name);

    if (!name && name === "") {
      return setError("Name can't be empty");
    } else if (!description && description === "") {
      return setError("description can't be empty");
    } else if (!phone && phone === "") {
      return setError("Phone Number can't be empty");
    } else if (phone.length < 10) {
      return setError("Invalid Phone Number");
    } else if (!address && address === "") {
      return setError("Address can't be empty");
    } else if (!logo && logo === "") {
      return setError("logo can't be empty");
    }

    setError(null);

    const data = { name, description, phone, address, logo };

    nameRef.current.value = "";
    descriptionRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    logoRef.current.value = "";
    handleClose();
  };

  const onCancel = () => {
    nameRef.current.value = "";
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
      <DialogTitle id="alert-dialog-title">Create a new clinic</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
        {console.log(data.name)}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Clinic Name"
          type="text"
          fullWidth
          value={data.name}
          variant="standard"
          inputRef={nameRef}
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
          style={{ marginBottom: "30px" }}
          fullWidth
          variant="standard"
          inputRef={addressRef}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Open Time"
            value={openTime}
            onChange={setOpenTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Close Time"
            value={closeTime}
            onChange={setCloseTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <br />
        <TextField
          fullwidth
          margin="dense"
          id="logo"
          label="Logo"
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
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewPatient;
