import React from "react";
import { Paper, Grid, Typography, Stack } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";

const ActiveStats = ({ count, headline, text }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="start"
      sx={{ paddingLeft: "0" }}
      style={{ width: "100%" }}
    >
      <Paper sx={{ padding: "30px" }} elevation={1} flex={1}>
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            container
            justifyContent="space-between"
            sx={{ paddingBottom: "30px" }}
          >
            <Grid item>
              <Typography variant="h6">Statistics</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">This month</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-evenly"
            spacing={5}
            columnSpacing={20}
          >
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TimelineIcon fontSize="large" />
                <Stack direction="column">
                  <Typography variant="h6">25$</Typography>
                  <Typography variant="body1">daily</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TimelineIcon fontSize="large" />
                <Stack direction="column">
                  <Typography variant="h6">25$</Typography>
                  <Typography variant="body1">weekly</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={2}>
                <TimelineIcon fontSize="large" />
                <Stack direction="column">
                  <Typography variant="h6">25$</Typography>
                  <Typography variant="body1">yearly</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ActiveStats;
