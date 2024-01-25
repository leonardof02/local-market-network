"use client"

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterForm {
  fullName: string;
  email: string;
  contact: string;
  profileImageUrl: string;
  password: string;
  passwordRepeat: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => console.log(data)

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: "1000px",
        padding: "20px",
        marginBottom: "40px",
        marginX: "10px",
      }}
    >
      <Typography variant="h5">Registrarse en la aplicación</Typography>
      <TextField
        type="text"
        helperText="Inserte su nombre completo"
        label="Nombre y Apellidos"
        {...register("fullName", { required: true })}
        error={ errors.fullName && true }
      />
      <TextField type="email" label="Correo Electrónico" {...register("email", { required: true })}
        error={ errors.email && true }/>
      <TextField
        type="tel"
        label="Contacto (opcional)"
        helperText="Inserte un numero de telefono por el cual se le pueda contactar"
        {...register("contact", { required: true })}
        error={errors.contact && true}
      />
      <TextField
        type="file"
        helperText="Suba su foto de perfil"
        label="Foto de perfil (opcional)"
      />
      <TextField
        type="password"
        label="Contraseña"
        {...register("password", { required: true })}
        error={errors.password && true}
      />
      <TextField
        type="password"
        label="Repita la contraseña"
        {...register("passwordRepeat", { required: true })}
        error={ errors.passwordRepeat && true }
      />
      <Button fullWidth variant="contained" type="submit" onClick={handleSubmit(onSubmit)} >
        Registrarse
      </Button>
    </Paper>
  );
}
