import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import ProductTableRow from "../components/ProductTableRow/ProductTableRow";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";

export default function DashboardPage() {
  return (
    <Paper sx={{ margin: 3, paddingY: 3 }}>
      <Typography variant="h4" margin={2}>Tus productos publicados</Typography>
      <TableContainer sx={{ maxHeight: "70vh" }}>
        <Table align="center" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Nombre del producto</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          {Array.from({ length: 7 }).map((_, index) => (
            <ProductTableRow key={index} />
          ))}
        </Table>
      </TableContainer>
    </Paper>
  );
}
