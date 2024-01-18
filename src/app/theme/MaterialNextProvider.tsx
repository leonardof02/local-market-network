'use client'

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import React from "react";
import { darkTheme } from "./MainTheme";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export default function MaterialNextProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
