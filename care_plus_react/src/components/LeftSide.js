import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import content from "./leftSideContent";
import c from "./LeftSide.module.css";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";

const LeftSide = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const navigate = useNavigate();

  const matches = useMediaQuery("(max-width:600px)");
  console.log(matches);

  const activeTab = tab === undefined ? "dashboard" : tab;

  const handleLogout = async () => {
    try {
      const res = await axios.get("/api/v1/admin/logout");
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = (slug, text) => {
    if (slug === "logout") {
      return (
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={handleLogout}
          variant="body"
          class={c.logout}
        >
          {text}
        </Typography>
      );
    } else {
      return "";
    }
  };

  const renderItem = (id, Icon, text, slug) => {
    const tabClass = `${activeTab === slug && c.activeTab} ${c.tab}`;
    return (
      <Stack
        className={tabClass}
        direction="row"
        alignItems="center"
        spacing={1}
        key={id}
        sx={{ margin: "0 !important", padding: "10px" }}
      >
        <Link className={c.icon} to={`?tab=${slug}`}>
          <Icon />
        </Link>

        {logout(slug, text)}
        {slug !== "logout" && (
          <Link className={c.link} to={`?tab=${slug}`}>
            {text}
          </Link>
        )}
      </Stack>
    );
  };
  return (
    <Grid container wrap="nowrap" direction="column">
      <Grid
        sx={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
      >
        <img
          src="/images/carePlusLogo.svg"
          alt="logo"
          style={{ width: "100px", height: "70px" }}
        />
      </Grid>
      <Grid item>
        <Stack
          style={{ padding: "10px" }}
          spacing={2}
          divider={
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginTop: "0px !important" }}
            />
          }
        >
          {content.map((item, i) =>
            renderItem(i, item.icon, item.text, item.slug)
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LeftSide;
