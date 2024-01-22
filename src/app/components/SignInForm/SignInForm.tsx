import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MaterialLink from "@mui/material/Link";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";

export default function SignUpForm() {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "340px",
        width: "100%",
        padding: "20px",
        marginBottom: "40px",
        marginX: "10px",
      }}
    >
      <Button variant="contained">
        klsdjflaksjfklasfj
      </Button>
      <Typography variant="h5">Log In</Typography>
      <TextField type="email" label="Correo Electrónico" />
      <TextField type="password" label="Contraseña" />
      <Link href={"#"}>
        <Typography paragraph>¿Ha olvidado su contraseña?</Typography>
      </Link>
      <Box>
        <Button fullWidth variant="contained">
            Autenticarse
        </Button>
        <Typography paragraph textAlign={"center"} mt={1}>
            ¿No tienes cuenta? <Link href={"#"}>Regístrate</Link>
        </Typography>
      </Box>
    </Paper>
  );
}
