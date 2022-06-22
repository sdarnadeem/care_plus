import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import content from "../leftSideContent";
import c from "./Drawer.module.css";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Drawer = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const navigate = useNavigate();

  const matches = useMediaQuery("(max-width:600px)");
  console.log(matches);

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
    <Grid container>
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

export default Drawer;
