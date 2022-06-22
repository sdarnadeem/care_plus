import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import content from "./leftSideContent";
import c from "./LeftSide.module.css";
import { Grid, Typography } from "@mui/material";

const LeftSide = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const navigate = useNavigate();

  const activeTab = tab === undefined ? "dashboard" : tab;

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const logout = (slug, text) => {
    if (slug === "logout") {
      return (
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={handleLogout}
          variant="body"
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
        <Icon />
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
    <Grid container>
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
          src="https://st3.depositphotos.com/16262510/33731/v/1600/depositphotos_337310436-stock-illustration-demo-vector-icon-isolated-on.jpg"
          alt="logo"
          style={{ width: "70px", height: "70px" }}
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
