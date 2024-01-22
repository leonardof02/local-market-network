import React from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";

export default function ContactTable() {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ maxWidth: "340px", borderRadius: 2 }}>
      <Typography variant="h5" padding={2}>
        Contactos
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Número</TableCell>
            <TableCell>Nombre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>52 545436</TableCell>
            <TableCell>Alberto Bichoelmartillo</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>52 545436</TableCell>
            <TableCell>Rigoberto Ferretería</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
