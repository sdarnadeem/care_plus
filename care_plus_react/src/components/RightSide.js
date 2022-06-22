import React from "react";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Textarea } from "@chakra-ui/react";

import c from "./RightSide.module.css";
import { Button } from "@mui/material";

const RightSide = () => {
  return (
    <Stack spacing={2}>
      <Paper margin="10px">
        <Grid
          direction="column"
          container
          alignItems="center"
          justifyContent="center"
          height="300px"
          spacing={4}
        >
          <Avatar
            alt="Cindy Baker"
            src="https://via.placeholder.com/350x150"
            sx={{ width: 56, height: 56 }}
            mb={"20px"}
          />
          <Typography variant="h5">Nasyx Nadeem</Typography>
        </Grid>
      </Paper>
      <Paper>
        <Grid
          direction="column"
          container
          alignItems="center"
          justifyContent="center"
          height="300px"
          // paddingLeft="30px"
          sx={{ width: "100%" }}
          spacing={4}
        >
          <Grid item>
            <Typography variant="h6">Send push notifications</Typography>
          </Grid>
          <Grid item>
            <Textarea
              placeholder="Send notification to all users"
              className={c.textfield}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" size="small">
              Send Notification
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default RightSide;
