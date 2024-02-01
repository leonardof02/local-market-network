import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import Box from "@mui/material/Box/Box";

export default function page() {
  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      display={"flex"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={"-1"}
    >
      <SignInForm />
    </Box>
  );
}
