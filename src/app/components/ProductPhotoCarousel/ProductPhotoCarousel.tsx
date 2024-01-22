import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function ProductPhotoCarousel() {
  return (
    <Carousel>
      <Box>
        <Image
          src="https://th.bing.com/th/id/OIP.HP55nAQfHY4mlb4v9MxJKAHaEK?rs=1&pid=ImgDetMain"
          alt="Imagen"
          width={800}
          height={600}
        />
        <Typography>sdfsdfsf</Typography>
      </Box>
      <Box>
        <Image
          src="https://th.bing.com/th/id/OIP.HP55nAQfHY4mlb4v9MxJKAHaEK?rs=1&pid=ImgDetMain"
          alt="Imagen"
          width={800}
          height={600}
        />
        <Typography>sdfsdfsf</Typography>
      </Box>
      <Box>
        <Image
          src="https://th.bing.com/th/id/OIP.HP55nAQfHY4mlb4v9MxJKAHaEK?rs=1&pid=ImgDetMain"
          alt="Imagen"
          width={800}
          height={600}
        />
        <Typography>sdfsdfsf</Typography>
      </Box>
    </Carousel>
  );
}
