import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Money from "@mui/icons-material/Money";
import Color from "../../styles/theme";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 270, marginTop: 4 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Đắc nhân tâm
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions mb={4} sx={{ justifyContent: "space-around" }}>
        <Typography>
          {" "}
          <Money /> 90.00
        </Typography>
        <Button
          variant="contained"
          //   color="Color.secondary"
          startIcon={<ShoppingCart />}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
