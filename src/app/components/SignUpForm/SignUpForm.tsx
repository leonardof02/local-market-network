"use client";

import { supabase } from "@/services/supabase/supabase";
import { Regex } from "@/services/validation/Regex";
import { SxProps } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { UserService } from "@/services/supabase/UserService";

interface RegisterForm {
  fullName: string;
  email: string;
  contact: string;
  profileImageUrl: string;
  password: string;
  passwordRepeat: string;
}

const signUpFormStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  maxWidth: "1000px",
  padding: "20px",
  marginBottom: "40px",
  marginX: "10px",
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  async function onSubmit(data: RegisterForm) {
    setLoading(true);
    await UserService.signUpUser(data.email, data.password);
    setLoading(false);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    if (!event.target.files[0].type.startsWith("image/")) return
    setProfileImageUrl(URL.createObjectURL(event.target.files[0]));
  }

  function validatePasswordRepeat(value: string) {
    return value == watch("password");
  }

  return (
    <Paper variant="outlined" sx={signUpFormStyles}>
      <Typography variant="h5">Registrarse en la aplicación</Typography>
      <TextField
        type="text"
        helperText="Inserte su nombre completo"
        label="Nombre y Apellidos"
        {...register("fullName", { required: true, pattern: Regex.FULL_NAME })}
        error={errors.fullName && true}
      />
      <TextField
        type="email"
        label="Correo Electrónico"
        {...register("email", { required: true, pattern: Regex.EMAIL })}
        error={errors.email && true}
        helperText={errors.email && "Inserte un correo válido"}
      />
      <TextField
        type="tel"
        label="Contacto (opcional)"
        helperText={
          errors.contact
            ? "Inserte un numero de telefono válido"
            : "Inserte un numero de telefono por el cual se le pueda contactar"
        }
        {...register("contact", { required: true, pattern: Regex.CONTACT })}
        error={errors.contact && true}
      />
      <Box display={"flex"} gap={"20px"} alignItems={"center"}>
        <TextField
          type="file"
          helperText="Suba su foto de perfil"
          label="Foto de perfil (opcional)"
          onChange={handleFileChange}
          sx={{ flexGrow: 1 }}
        />
        {profileImageUrl && (
          <Avatar src={profileImageUrl} alt="Profile Image" sx={{ transform: "translateY(-10px)" }} />
        )}
      </Box>
      <TextField
        type="password"
        label="Contraseña"
        {...register("password", { required: true })}
        error={errors.password && true}
      />
      <TextField
        type="password"
        label={"Repita la contraseña"}
        {...register("passwordRepeat", { required: true, validate: validatePasswordRepeat })}
        error={errors.passwordRepeat && true}
        helperText={errors.passwordRepeat && "Las contraseñas deben coincidir"}
      />
      <Button fullWidth variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>
        {isLoading ? <CircularProgress /> : "Registrarte"}
      </Button>
    </Paper>
  );
}
