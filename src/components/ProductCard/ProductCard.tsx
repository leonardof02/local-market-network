import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import { FavoriteOutlined, Share } from "@mui/icons-material";
import React from "react";

export default function ProductCard() {
  return (
    <Card sx={{ width: "full" }} elevation={1}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar>L</Avatar>}
          title={"Alberto Sanchez"}
          subheader={"+53 654456454"}
        />
        <CardMedia
          component="img"
          height="300"
          src="https://th.bing.com/th/id/R.e56a6fb5b33099be04a98fdef3aa8131?rik=MdExmh1eNUkGXg&pid=ImgRaw&r=0"
          alt="PC Gamer"
        />
        <CardContent>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h6">PC Gamer Super Pro</Typography>
            <Typography variant="h5" color={"greenyellow"}>
              $23.33
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          width: "full",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined color={"error"} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
        <Button variant="contained">Contactar</Button>
      </CardActions>
    </Card>
  );
}
