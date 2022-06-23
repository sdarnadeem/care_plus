import React, { useState, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Box,
  Tabs,
  Tab,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { options, optionsData } from "./analyticsContent";
// import Dialog from "../dialog/Dialog";
import ActiveStats from "../stats/ActiveStats";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [filter, setFilter] = React.useState("Today");

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const gridRef = useRef();
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
      title: `${selected.firstName} ${selected.lastName}`,
      content: `I'm  ${selected.firstName} ${selected.lastName}, I'm a heart sergon at BareHills lab. I've eight years of experience in the specified field.`,
      noText: "Delete",
      yesText: "Know More",
      yesFun: () => {
        let url;
        if (value === 0) {
          url = `admin/clinic/${selected.id}`;
        }
        if (value === 1) {
          url = `admin/doctor/${selected.id}`;
        }
        if (value === 2) {
          url = `admin/user/${selected.id}`;
        }
        if (value === 3) {
          url = `admin/appointment/${selected.id}`;
        }
        navigate(url);
        setOpenDialog(false);
      },
      noFun: () => {
        setOpenDialog(false);
      },
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container direction="column" width="100% !important" spacing={3}>
        <Grid item style={{ marginTop: "20px" }}>
          <Typography variant="h4">Welcome to CarePlus Dashboard</Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Typography variant="h6">Analytics</Typography>
        </Grid>
      </Grid>
      <Grid container columnSpacing="40">
        <Grid item>
          <ActiveStats
            count={24}
            text={`This ${filter}`}
            percentage="20"
            headline="Total Clinics"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="h6">Daily Sales Overview</Typography>
        </Grid>
        <Grid item sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Box
            sx={{ width: "100%", height: "50vh", bgcolor: "background.paper" }}
          >
            <Line
              options={options}
              data={optionsData}
              style={{ height: "30vh" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Active Clinic" />
          <Tab label="Active Doctor" />
          <Tab label="Active User" />
          <Tab label="This month Appointment" />
          <Button
            sx={{ marginLeft: "auto" }}
            variant="outlined"
            size="small"
            onClick={clearFilters}
          >
            Reset Filters
          </Button>
        </Tabs>
      </Box>

      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={data[value].rows}
          columnDefs={data[value].columns}
          defaultColDef={defaultColDef}
          animateRows={true}
          onRowClicked={rowClickedListener}
          rowClass="my-green-class"
          getRowClass={getRowClass}
          checkboxSelection={true}
          onRowDoubleClicked={handleRowDoubleClicked}
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
      )}*/}
    </>
  );
};

export default Analytics;
