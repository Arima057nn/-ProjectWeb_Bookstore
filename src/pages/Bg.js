// import React from "react";
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import Merienda from "@fontsource/merienda/";
import "@fontsource/merienda-one/";
import candles from "../assets/background6.jpeg";
import { width } from "@mui/system";
function Bg() {
  return (
    <Box
      sx={{
        background: `linear-gradient(70deg, #fff, transparent 70%), url(${candles}),no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 600,
        width: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          // alignItems: "center",
          minHeight: "600px",
          // lineHeight: "600px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "column",
            width: "480px",
            textAlign: "center",
            marginLeft: "-40px",
          }}
        >
          <Typography
            variant="h3"
            fontFamily={"Merienda One"}
            fontSize={"4.5rem"}
            fontWeight={"bold"}
            mb={2}
          >
            Book Store
          </Typography>
          <Typography variant="p">
            Chào mừng anh chi em đến trang web buôn sách lậu của nhà chúng
            em...........
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Bg;
