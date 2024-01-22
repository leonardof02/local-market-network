import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { Home, Search, Contacts, Shop } from "@mui/icons-material";

export default function BottomNavigationBar() {
  return (
    <Paper sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, display: { md: "none" } }}>
      <BottomNavigation>
        <BottomNavigationAction label="Home" value="recents" icon={<Home />} showLabel />
        <BottomNavigationAction label="Buscar" value="favorites" icon={<Search />} />
        <BottomNavigationAction label="Tus productos" value="nearby" icon={<Shop />} />
        <BottomNavigationAction label="Perfil" value="folder" icon={<Contacts />} />
      </BottomNavigation>
    </Paper>
  );
}
