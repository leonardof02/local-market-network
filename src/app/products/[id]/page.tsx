import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactTable from "@/app/components/ContactsTable/ContactTable";
import ProductPhotoCarousel from "@/app/components/ProductPhotoCarousel/ProductPhotoCarousel";

export default function ProductDetailsPage() {
  return (
    <Paper
      sx={{
        margin: 2,
        padding: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <ProductPhotoCarousel />
      <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
        <Box>
          <Typography variant="h3" fontWeight={"800"}>
            PC Gamer super pro
          </Typography>
          <Typography variant="h3" color="greenyellow" fontFamily={"monospace"}>
            $23.00
          </Typography>
          <Typography paragraph marginTop={2} fontSize={18}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quae accusamus enim
            explicabo doloremque dolorum quia natus dolore reiciendis saepe fugiat, accusantium,
            quod nobis ratione iusto molestiae corporis sapiente sed? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quis voluptate nobis sequi similique iure. Laboriosam sit
            rem quia, ducimus esse, expedita minus perferendis dicta aut fugiat quaerat, amet
            laborum modi.
          </Typography>
        </Box>
        <ContactTable />
      </Box>
    </Paper>
  );
}
