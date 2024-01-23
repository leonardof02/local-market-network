import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDrawer({ isOpen, onClose }: Props) {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List sx={{padding: 3}}>
        {["Home", "Ver Productos", "Perfil", "Dashboard"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
