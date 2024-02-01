"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import { useState } from "react";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

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

const Slides = images.map((image) => (
  <SwiperSlide key={image.id}>
    <Box
      width={"100%"}
      height={"400px"}
      sx={{ backgroundColor: `${image.color}`, borderRadius: 1 }}
    ></Box>
  </SwiperSlide>
));

interface ThumbnailsProps {
  selectedIndex: number | null;
  onChange: (index: number) => void;
}

function Thumbnails({ selectedIndex, onChange }: ThumbnailsProps) {
  return images.map((image, index) => (
    <Box
      component={"div"}
      key={image.id}
      width={"100%"}
      height={"100px"}
      sx={{
        backgroundColor: `${image.color}`,
        borderRadius: 1,
        border: selectedIndex != null && selectedIndex == index ? "1px solid white" : "none",
      }}
      onClick={() => onChange(index)}
    ></Box>
  ));
}

export default function ProductPhotoCarousel() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [swiperIndex, setSwiperIndex] = useState<number | null>(null);

  function handleChangeIndex(index: number) {
    swiper && swiper.slideTo(index);
    setSwiperIndex(index);
  }

  // * This functions it executes when swiper carousel mounts
  // * it receives a swiper object that controls all the carousel
  function handleSwiper(swiper: SwiperClass) {
    setSwiper(swiper);
  }

  return (
    <Box padding={1} flexGrow={1} maxWidth={{ sx: "100%", md: "40%" }} width={"100%"}>
      <Swiper onSwiper={handleSwiper} modules={[Navigation]} spaceBetween={50} slidesPerView={1}>
        {Slides}
      </Swiper>
      <Box display={"flex"} gap={2} mt={2}>
        <Thumbnails onChange={handleChangeIndex} selectedIndex={swiperIndex} />
      </Box>
    </Box>
  );
}
