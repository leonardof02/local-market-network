import Image from "next/image";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { Delete, Edit } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

export default function ProductTableRow() {
  return (
    <TableRow sx={{ width: "full" }}>
      <TableCell align="right">
        <Checkbox />
      </TableCell>
      <TableCell align="center">
        <img
          src={"https://i.blogs.es/ed843e/superpc-ap/1366_2000.jpeg"}
          alt="PC Gamer"
          width={130}
          style={{ aspectRatio: "16/9", borderRadius: 10 }}
        />
      </TableCell>
      <TableCell align="center">
          Nombre del producto
      </TableCell>
      <TableCell align="center">
          $22.04
      </TableCell>
      <TableCell align="center">
        <Box display={"flex"} gap={4} width={"100%"} justifyContent={"center"}>
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}
