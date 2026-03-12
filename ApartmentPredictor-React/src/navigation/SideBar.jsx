import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import NavigationList from "./NavigationList";

function SideBar({ open, toggleDrawer }) {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <div style={{ padding: '16px' }}>
        <Typography variant="h6">
          Navigation
        </Typography>
        <Divider />

        <NavigationList toggleDrawer={toggleDrawer} />

        <Divider />
      </div>
    </Drawer>
  );
}

export default SideBar;
