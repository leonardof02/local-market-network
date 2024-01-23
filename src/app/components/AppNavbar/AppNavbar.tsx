"use client";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import AppDrawer from "../AppDrawer/AppDrawer";

export default function AppNavbar() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  function handleClick() {
    setDrawerOpen(true);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleClick} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ventas Gaming
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar >
      <AppDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
}
