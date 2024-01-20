
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

export default function SignUpForm() {
  return (
    <Paper variant="outlined" sx={{display: "flex", flexDirection: "column", gap: 3, maxWidth: "1000px", padding: "20px", marginBottom: "40px", marginX: "10px" }}>
      <Typography variant="h5">Registrarse en la aplicación</Typography>
      <TextField type="text" helperText="Inserte su nombre completo" label="Nombre y Apellidos" />
      <TextField type="email" label="Correo Electrónico" />
      <TextField
        type="tel"
        label="Contacto (opcional)"
        helperText="Inserte un numero de telefono por el cual se le pueda contactar"
      />
      <TextField type="file" helperText="Suba su foto de perfil" label="Foto de perfil (opcional)"/>
      <TextField type="password" label="Contraseña"/>
      <TextField type="password" label="Repita la contraseña"/>
      <Button fullWidth variant="contained">Registrarse</Button>
    </Paper>
  );
}
