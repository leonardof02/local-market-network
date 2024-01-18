import {
  Avatar,
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
    <Card sx={{maxWidth: "400px"}} elevation={1}>
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
          <Typography variant="h6">PC Gamer Super Pro</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteOutlined color={"error"}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
