import React, { useMemo, useCallback, useRef } from "react";
import { Box, Tabs, Tab, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { columns, rows } from "./ClinicsData";
import Dialog from "../dialog/Dialog";
import NewClinic from "../newClinic/NewClinic";
import { AgGridReact } from "ag-grid-react";

const Clinics = () => {
  const gridRef = useRef();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState();
  const [selected, setSelected] = React.useState();
  const [showNewClinicDialog, setShowNewClinicDialog] = React.useState(false);
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );
  const rowClickedListener = useCallback(({ data }) => {
    console.log("cellClicked", data);
    setSelected(data);
  }, []);

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
  }, []);

  const handleRowDoubleClicked = (row) => {
    setOpenDialog(true);
    setDialogDetails({
      title: `${selected.name} `,
      content: `  ${selected.name}  is a popular heart-clinic based in San Fransico`,
      noText: "Delete",
      yesText: "Know More",
      yesFun: () => {
        navigate(`admin/clinic/${selected.id}`);
        setOpenDialog(false);
      },
      noFun: () => {
        setOpenDialog(false);
      },
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleButtonClick = (text) => {
    if (text === "newClinic") {
      setShowNewClinicDialog(true);
    } else if (selected) {
      if (text === "update") {
        setShowNewClinicDialog(true);
        setData({
          name: selected.name,
          description: selected.description,
          address: selected.officeAddress,
          contact: selected.contact,
          open: selected.open,
          close: selected.close,
        });
      } else if (text === "delete") {
        setOpenDialog(true);
        setDialogDetails({
          title: `Delete ${selected.name} clinic`,
          content: `Are you sure you want to delete ${selected.name} clinic`,
          noText: "Cancel",
          yesText: "Confirm",
          yesFun: () => {
            setOpenDialog(false);
          },
          noFun: () => {
            setOpenDialog(false);
          },
        });
      } else if (text === "block") {
        setDialogDetails({
          title: `Block ${selected.name} clinic`,
          content: `Are you sure you want to block ${selected.name} clinic`,
          noText: "Cancel",
          yesText: "Confirm",
          yesFun: () => {
            setOpenDialog(false);
          },
          noFun: () => {
            setOpenDialog(false);
          },
        });
      }
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* <Grid item>
          <TextField
            size="small"
            elevation={2}
            id="input-with-icon-textfield"
            style={{ height: "10px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid> */}
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "newClinic")}
          >
            Add Clinic
          </Button>
        </Grid>
        {selected && (
          <>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "update")}
              >
                Update Clinic
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "delete")}
              >
                Delete Clinic
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="medium"
                onClick={handleButtonClick.bind(null, "block")}
              >
                Block Clinic
              </Button>
            </Grid>
          </>
        )}
        <Grid item>
          <Button variant="outlined" size="medium" onClick={clearFilters}>
            Clear Filters
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All Clinics" />
          <Tab label="Online Clinics" />
          <Tab label="Blocks Clinics" />
        </Tabs>
      </Box>
      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rows}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
          onRowClicked={rowClickedListener}
          rowClass="my-green-class"
          getRowClass={getRowClass}
          checkboxSelection={true}
          onRowDoubleClicked={handleRowDoubleClicked}
          pagination={true}
          paginationPageSize={10}
        ></AgGridReact>
      </div>
      {openDialog && selected && (
        <Dialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title={dialogDetails.title}
          content={dialogDetails.content}
          noText={dialogDetails.noText}
          yesText={dialogDetails.yesText}
          yesFun={dialogDetails.yesFun}
          noFun={dialogDetails.noFun}
        />
      )}
      {showNewClinicDialog && (
        <NewClinic
          open={showNewClinicDialog}
          handleClose={() => setShowNewClinicDialog(false)}
          data={data}
        />
      )}
    </>
  );
};

export default Clinics;
