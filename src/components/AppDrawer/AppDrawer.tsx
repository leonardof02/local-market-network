import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Home, Shop, Dashboard, Contacts } from "@mui/icons-material";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    text: "Home",
    icon: <Home />,
  },
  {
    text: "Ver Productos",
    icon: <Shop />,
  },
  {
    text: "Tus Productos en Venta",
    icon: <Dashboard />,
  },
  {
    text: "Profile",
    icon: <Contacts />,
  },
];

function ListItems() {
  return menuItems.map((item, index) => (
    <ListItem key={item.text}>
      <ListItemButton>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ));
}

export default function AppDrawer({ isOpen, onClose }: Props) {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List>
        <ListItems />
      </List>
    </Drawer>
  );
}
