"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductCardList() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: [
          "1fr",
          "1fr 1fr",
          "1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr"
        ],
        gap: 2,
      }}
    >
      {Array.from({ length: 16 }).map((item, index) => (
        <ProductCard key={index} />
      ))}
    </Box>
  );
}
