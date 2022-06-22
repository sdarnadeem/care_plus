import React from "react";

import Grid from "@mui/material/Grid";

import LeftSide from "../../components/LeftSide";
import MiddleSide from "../../components/MiddleSide";
import RightSide from "../../components/RightSide";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={2}>
          <LeftSide />
        </Grid>
        <Grid item xs={7}>
          <MiddleSide />
        </Grid>
        <Grid item xs={3}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
