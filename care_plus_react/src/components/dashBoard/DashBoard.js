import React from "react";

import Grid from "@mui/material/Grid";

import LeftSide from "../../components/LeftSide";
import MiddleSide from "../../components/MiddleSide";
import RightSide from "../../components/RightSide";

import Drawer from "../../components/drawer/Drawer";

import MenuIcon from "@mui/icons-material/Menu";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, SwipeableDrawer } from "@mui/material";

const Dashboard = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const matchesRs = useMediaQuery("(max-width:1200px)");
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    console.log(openDrawer);
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Drawer />
      </SwipeableDrawer>
      {matches && (
        <Grid
          container
          justifyContent="space-between"
          sx={{ width: "100%", padding: "10px" }}
        >
          <Grid item>
            <img
              src="/images/carePlusLogo.svg"
              alt="logo"
              style={{ width: "100px", height: "70px" }}
            />
          </Grid>
          <Grid item>
            <Button onClick={toggleDrawer}>
              <MenuIcon fontSize="large" sx={{ cursor: "pointer" }} />
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid container padding={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {!matches && (
          <Grid item lg={2} md={3} sm={2}>
            <LeftSide />
          </Grid>
        )}
        <Grid item lg={7} md={9} sm={10} xs={12}>
          <MiddleSide />
        </Grid>
        {!matchesRs && (
          <Grid item lg={3}>
            <RightSide />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Dashboard;
