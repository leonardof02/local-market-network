import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { Save } from "@mui/icons-material";

export default function ProfilePage() {
  return (
    <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} mt={5}>
      <Paper
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          maxWidth: "340px",
          width: "100%",
          marginBottom: "40px",
          marginX: "10px",
        }}
      >
        <Avatar sx={{ width: "60px", height: "60px" }} />
        <Typography variant="h5">Perfil de usuario</Typography>
        <TextField
          fullWidth
          label="Nombre y Apellidos"
          InputProps={{
            readOnly: true,
            value: "Leonardo Arencibia",
          }}
          variant="filled"
          type="text"
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          InputProps={{
            readOnly: true,
            value: "correo@example.comemierda",
          }}
          variant="filled"
          type="email"
        />
        <TextField
          type="tel"
          label="Contacto (opcional)"
          helperText="Inserte un numero de telefono por el cual se le pueda contactar"
        />
        <Button fullWidth variant="contained"> 
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Save />
            <Typography>Guardar</Typography>
          </Box>
        </Button>
      </Paper>
    </Box>
  );
}
