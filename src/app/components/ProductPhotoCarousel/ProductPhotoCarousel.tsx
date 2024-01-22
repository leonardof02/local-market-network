"use client";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { Box } from "@mui/material";
import { useState } from "react";

export default function ProductPhotoCarousel() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const images = [
    {
      id: 1,
      color: "blue",
    },
    {
      id: 2,
      color: "green",
    },
    {
      id: 3,
      color: "red",
    },
    {
      id: 4,
      color: "violet",
    },
  ];

  return (
    <Box padding={1} flexGrow={1} maxWidth={{ sx: "100%", md: "40%" }} width={"100%"}>
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Box
              width={"100%"}
              height={"400px"}
              sx={{ backgroundColor: `${image.color}`, borderRadius: 1 }}
            ></Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box display={"flex"} gap={2} mt={2}>
        {images.map((image, index) => (
          <Box
            component={"div"}
            key={image.id}
            width={"100%"}
            height={"100px"}
            sx={{
              backgroundColor: `${image.color}`,
              borderRadius: 1,
              border: swiperIndex == index ? "1px solid white" : "none",
            }}
            onClick={() => {
              swiper?.slideTo(index);
              setSwiperIndex(index);
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}
